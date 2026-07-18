# Linux Foundations — Live Demo Commands

These commands mirror the deck speaker notes. Type them live rather than pasting
whole blocks. Use a dedicated instructor seat in the browser platform, plus a
second seat as a fallback. Reset only the named scenario before each demo.

## Demo 1 — The browser/session boundary and navigation (8 min)

In the portal, prepare **Lab 2 — Filesystem & Links**. Then focus the ttyd
terminal and run:

```bash
whoami
hostname
pwd
printf 'session kernel: '; uname -srm
ls /
cd /var/log
pwd
ls -lh | head
cd ~
mkdir -p demo/{in,out}
printf 'error: demo\ninfo: healthy\n' > demo/in/app.log
grep 'error' demo/in/app.log | tee demo/out/errors.txt
cat demo/out/errors.txt
```

Teaching beat: the browser displays the session, but the Linux container owns
the filesystem and processes. Every command either observes or transforms that
session's state.

## Demo 2 — Diagnose and repair permissions (10 min)

Prepare **Lab 5 — Permission Incident** before starting. The scenario already
contains Alice, Bob, Outsider, `webteam`, and `/srv/team-share`. Use the lab
objects or create the parallel `demoops` example below.

```bash
sudo groupadd -f demoops
id alice >/dev/null 2>&1 || sudo useradd -m alice
sudo usermod -aG demoops alice
sudo install -d -o root -g demoops -m 2770 /srv/demo-share
sudo -u alice -H bash -lc 'echo demo > /srv/demo-share/report.txt'
stat -c '%A %a %U:%G %n' /srv/demo-share /srv/demo-share/report.txt
sudo chmod 600 /srv/demo-share/report.txt
sudo -u nobody cat /srv/demo-share/report.txt
namei -l /srv/demo-share/report.txt
sudo chown alice:demoops /srv/demo-share/report.txt
sudo chmod 640 /srv/demo-share/report.txt
stat -c '%A %a %U:%G %n' /srv/demo-share/report.txt
```

Teaching beat: read owner, group, and mode before changing them; make the smallest change that satisfies the use case.

## Demo 3 — SSH key setup and server verification (10 min)

Prepare **Lab 6 — SSH Trust Setup**. Both the client and the training server are
inside the isolated learner container; the server listens on port 2222.

```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'linux-live-demo'
chmod 600 ~/.ssh/id_ed25519
ssh-keyscan -p 2222 localhost >> ~/.ssh/known_hosts
ssh-keygen -F '[localhost]:2222'
ssh-copy-id -o StrictHostKeyChecking=yes -i ~/.ssh/id_ed25519.pub -p 2222 operator@localhost
# temporary bootstrap password: training
ssh -o BatchMode=yes -o StrictHostKeyChecking=yes -i ~/.ssh/id_ed25519 -p 2222 operator@localhost 'id; hostname'
```

Teaching beat: compare the server fingerprint before accepting it; the private key never leaves the client.

## Demo 4 — Filter logs toward a question (7 min)

Keep Lab 6 loaded so the SSH service exists, then create a known event:

```bash
sudo systemctl restart ssh
systemctl status ssh --no-pager
sudo journalctl -u ssh -n 10 --no-pager
sudo journalctl -u ssh --since '-5 min' -p warning --no-pager
sudo journalctl -u ssh -f
```

Press `Ctrl+C` to stop follow mode.

Teaching beat: start with unit + time window, then add priority; do not scroll the entire journal hoping to notice the answer.

## Demo 5 — Repair a failed service from evidence (10 min)

```bash
sudo tee /etc/systemd/system/demo-web.service >/dev/null <<'UNIT'
[Unit]
Description=Broken demo web service
After=network.target

[Service]
User=missing-demo-user
WorkingDirectory=/srv/demo-web
ExecStart=/usr/bin/python3 -m http.server 8090

[Install]
WantedBy=multi-user.target
UNIT
sudo systemctl daemon-reload
sudo systemctl start demo-web
systemctl status demo-web --no-pager
sudo journalctl -u demo-web --since '-5 min' --no-pager
systemctl cat demo-web
sudo useradd --system --home /srv/demo-web --shell /usr/sbin/nologin missing-demo-user
sudo install -d -o missing-demo-user -g missing-demo-user -m 750 /srv/demo-web
echo 'healthy' | sudo tee /srv/demo-web/index.html >/dev/null
sudo chown missing-demo-user:missing-demo-user /srv/demo-web/index.html
sudo systemctl restart demo-web
systemctl is-active demo-web
curl -fsS http://localhost:8090
```

Teaching beat: status gives the symptom; journal gives evidence; `systemctl cat` connects evidence to configuration; `curl` proves the behavior.
