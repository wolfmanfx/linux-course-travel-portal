# Linux Foundations — Distinct Live Demonstrations

These demonstrations precede the corresponding learner labs, but they do not
reuse the lab's paths, users, ports, services, values, or failure causes. Use a
dedicated instructor seat. Run each setup block before presenting and the
cleanup block after the debrief.

Every demonstration uses the same visible teaching contract:

1. **Question** — state the system claim being investigated.
2. **Prediction** — ask which evidence learners expect before typing.
3. **Observe** — run one command at a time and read its output, not its syntax.
4. **Interpret** — connect each result to the concept model on the preceding
   slides; explain unfamiliar helper commands before using them.
5. **Verify** — close the claim through a different interface.
6. **Bridge** — name the reasoning pattern that transfers to the learner lab,
   while withholding the lab's solution sequence.

Use a dedicated instructor seat. If setup evidence differs from this guide,
stop and reset that seat instead of improvising against a learner incident.
Demo and lab names, paths, ports, units, and failure causes remain distinct.

## Demo 1 — Locate the boundary (Module 1, 4 min)

Question: which facts belong to the host, controller VM, and learner container?

On the controller VM:

```bash
uname -srmo
incus info demo-seat | sed -n '1,22p'
incus exec demo-seat -- cat /etc/os-release
incus exec demo-seat -- uname -srmo
incus exec demo-seat -- ps -p 1 -o pid,comm,args=
```

On the presenter’s macOS or Windows host, show only host identity and
virtualization status. Do not run learner Bash commands in the host shell.

Teaching result: the container has its own Ubuntu user space and process view,
but a system container shares the controller's Linux kernel. Lab 1 profiles a
different assigned learner seat.

## Demo 2 — Diagnose a wrong directory (Module 2, 5 min)

Setup:

```bash
rm -rf /var/tmp/demo-tree
mkdir -p /var/tmp/demo-tree/incoming /var/tmp/demo-tree/archive
printf 'review me\n' >/var/tmp/demo-tree/incoming/report.txt
cd /var/tmp/demo-tree/archive
```

Demonstration:

```bash
pwd
ls -la
cat report.txt
printf 'status=%s\n' "$?"
realpath ../incoming/report.txt
namei -l ../incoming/report.txt
cp ../incoming/report.txt ./report.reviewed
stat -c '%F %a %U:%G %n' ../incoming/report.txt ./report.reviewed
```

Cleanup:

```bash
cd ~
rm -rf /var/tmp/demo-tree
```

Teaching result: the error is a coordinate problem, not missing data. Lab 2
uses an inbox, three project directories, and both hard and symbolic links.

## Demo 3 — Turn records into evidence (Module 3, 6 min)

Setup:

```bash
cat >/var/tmp/demo-auth.log <<'EOF'
2026-07-19T09:00:01Z user=ada result=success source=10.0.0.8
2026-07-19T09:00:07Z user=lin result=failure source=10.0.0.9
2026-07-19T09:00:12Z user=ada result=failure source=10.0.0.8
2026-07-19T09:00:19Z user=lin result=failure source=10.0.0.9
EOF
```

Demonstration:

```bash
head /var/tmp/demo-auth.log
grep ' result=failure ' /var/tmp/demo-auth.log
grep ' result=failure ' /var/tmp/demo-auth.log | awk '{print $4}'
grep ' result=failure ' /var/tmp/demo-auth.log \
  | awk -F'source=' '{print $2}' | sort | uniq -c | sort -nr
grep ' result=failure ' /var/tmp/demo-auth.log >~/demo-auth-failures.txt
wc -l ~/demo-auth-failures.txt
```

Cleanup:

```bash
rm -f /var/tmp/demo-auth.log ~/demo-auth-failures.txt
```

Teaching result: inspect the record grammar before choosing fields. Lab 3 uses
a configuration file plus application and HTTP access logs with different
formats.

## Demo 4 — Connect repository state to executable behavior (Module 4, 5 min)

Question: what would prove that `jq` is available through the supported package
system rather than only that a similarly named command happens to run?

```bash
apt-cache policy jq
dpkg-query -W -f='${Status}\n${Version}\n' jq 2>/dev/null || true
command -v jq || true
sudo apt-get update
sudo apt-get install -y jq
dpkg-query -W -f='${Status}\n${Version}\n' jq
command -v jq
dpkg-query -S "$(command -v jq)"
printf '{"state":"ready","count":2}\n' | jq -r '.state'
```

Teaching result: candidate, registered state, file ownership, and behavior are
different claims. Lab 4 installs and audits `tree`, not `jq`.

## Demo 5 — Repair authorization from identities outward (Module 5, 8 min)

Setup:

```bash
sudo groupadd -f demoops
id demo-alex >/dev/null 2>&1 || sudo useradd -m demo-alex
id demo-riley >/dev/null 2>&1 || sudo useradd -m demo-riley
sudo usermod -aG demoops demo-alex
sudo usermod -aG demoops demo-riley
sudo install -d -o root -g root -m 0750 /srv/demo-share
printf 'draft\n' | sudo tee /srv/demo-share/brief.txt >/dev/null
sudo chown root:root /srv/demo-share/brief.txt
sudo chmod 0600 /srv/demo-share/brief.txt
```

Demonstration:

```bash
id demo-alex
id demo-riley
namei -l /srv/demo-share/brief.txt
sudo -u demo-alex test -w /srv/demo-share || echo DEMO_ALEX_BLOCKED
sudo chown root:demoops /srv/demo-share /srv/demo-share/brief.txt
sudo chmod 2770 /srv/demo-share
sudo chmod 0660 /srv/demo-share/brief.txt
sudo -u demo-alex sh -c 'echo reviewed >> /srv/demo-share/brief.txt'
sudo -u demo-riley sh -c 'echo riley > /srv/demo-share/riley.txt'
stat -c '%A %a %U:%G %n' /srv/demo-share /srv/demo-share/*
```

Teaching result: directory traversal, group credentials, file mode, and setgid
inheritance are tested separately. Lab 5 uses `webteam`, Alice, Bob, outsider,
and a different share.

## Demo 6 — Verify both halves of SSH trust (Module 6, 8 min)

Setup a separate endpoint on port 2207:

```bash
id demo-operator >/dev/null 2>&1 || sudo useradd -m -s /bin/bash demo-operator
sudo install -d -m 0755 /run/demo-sshd
sudo ssh-keygen -q -t ed25519 -N '' -f /run/demo-sshd/ssh_host_ed25519_key
sudo tee /run/demo-sshd/sshd_config >/dev/null <<'EOF'
Port 2207
ListenAddress 127.0.0.1
HostKey /run/demo-sshd/ssh_host_ed25519_key
PidFile /run/demo-sshd/sshd.pid
AuthorizedKeysFile .ssh/authorized_keys
PasswordAuthentication no
PubkeyAuthentication yes
UsePAM no
EOF
sudo /usr/sbin/sshd -f /run/demo-sshd/sshd_config
rm -rf ~/.ssh/demo-client
mkdir -m 700 -p ~/.ssh/demo-client
ssh-keygen -q -t ed25519 -N '' -f ~/.ssh/demo-client/id_ed25519 -C demo-client
sudo install -d -o demo-operator -g demo-operator -m 0700 /home/demo-operator/.ssh
sudo install -o demo-operator -g demo-operator -m 0600 \
  ~/.ssh/demo-client/id_ed25519.pub /home/demo-operator/.ssh/authorized_keys
```

Demonstration:

```bash
ssh-keyscan -t ed25519 -p 2207 localhost >~/.ssh/demo-client/host.scan 2>/dev/null
ssh-keygen -lf /run/demo-sshd/ssh_host_ed25519_key.pub -E sha256
ssh-keygen -lf ~/.ssh/demo-client/host.scan -E sha256
install -m 600 ~/.ssh/demo-client/host.scan ~/.ssh/demo-client/known_hosts
ssh -o BatchMode=yes -o StrictHostKeyChecking=yes \
  -o UserKnownHostsFile=~/.ssh/demo-client/known_hosts \
  -i ~/.ssh/demo-client/id_ed25519 -p 2207 demo-operator@localhost \
  'id; hostname'
```

Cleanup:

```bash
sudo kill "$(cat /run/demo-sshd/sshd.pid)"
```

Teaching result: compare a host-key fingerprint through an independent source,
then prove user authentication in BatchMode. Lab 6 uses another user, port,
host key, client profile, and bootstrap process.

## Demo 7 — Separate cause from consequence in the journal (Module 7, 6 min)

Setup:

```bash
sudo tee /usr/local/bin/course-demo-noisy >/dev/null <<'EOF'
#!/usr/bin/env bash
echo 'level=INFO event=START message="demo begins"'
echo 'level=ERROR incident=STALE_CACHE exit_code=17 message="cache generation mismatch"'
exit 17
EOF
sudo chmod 0755 /usr/local/bin/course-demo-noisy
sudo tee /etc/systemd/system/course-demo-noisy.service >/dev/null <<'EOF'
[Unit]
Description=Distinct journal demonstration
[Service]
Type=oneshot
ExecStart=/usr/local/bin/course-demo-noisy
EOF
sudo systemctl daemon-reload
sudo systemctl start course-demo-noisy.service || true
```

Demonstration:

```bash
systemctl show course-demo-noisy.service \
  -p ActiveState -p Result -p ExecMainStatus
journalctl -u course-demo-noisy.service -b -o short-iso --no-pager
journalctl -u course-demo-noisy.service -b --no-pager \
  | grep -E 'incident=|code=exited'
```

Teaching result: the application record carrying `STALE_CACHE` and 17 is the
cause; systemd's failed state is the consequence. Lab 7 uses a disk threshold
and exit code 42.

## Demo 8 — Repair a failed unit without editing the unit (Module 8, 8 min)

Setup:

```bash
sudo rm -f /etc/demo-api.env
sudo tee /etc/systemd/system/demo-api.service >/dev/null <<'EOF'
[Unit]
Description=Distinct missing-environment demonstration
[Service]
Type=simple
EnvironmentFile=/etc/demo-api.env
ExecStart=/usr/bin/python3 -m http.server ${DEMO_PORT} --bind 127.0.0.1
EOF
sudo systemctl daemon-reload
sudo systemctl start demo-api.service || true
```

Demonstration:

```bash
systemctl status demo-api.service --no-pager
journalctl -u demo-api.service -b --no-pager
systemctl cat demo-api.service
printf 'DEMO_PORT=8181\n' | sudo tee /etc/demo-api.env >/dev/null
sudo systemctl restart demo-api.service
systemctl is-active demo-api.service
ss -ltn 'sport = :8181'
curl -I http://127.0.0.1:8181/
```

Teaching result: restore the declared prerequisite, then verify state, socket,
and protocol behavior. Lab 8 has a missing working directory on port 8088.

## Demo 9 — Trace unit to process to socket (Module 9, 7 min)

Setup:

```bash
sudo install -d -m 0755 /srv/demo-echo
printf 'demo echo ready\n' | sudo tee /srv/demo-echo/index.html >/dev/null
sudo tee /etc/systemd/system/demo-echo.service >/dev/null <<'EOF'
[Unit]
Description=Distinct process and socket demonstration
[Service]
Type=simple
WorkingDirectory=/srv/demo-echo
ExecStart=/usr/bin/python3 -m http.server 9191 --bind 127.0.0.1
EOF
sudo systemctl daemon-reload
sudo systemctl restart demo-echo.service
```

Demonstration:

```bash
systemctl show demo-echo.service -p MainPID -p ExecStart
pid="$(systemctl show demo-echo.service -p MainPID --value)"
ps -o pid,ppid,user,stat,cmd -p "$pid"
sudo tr '\0' ' ' <"/proc/$pid/cmdline"; echo
sudo ss -ltnp 'sport = :9191'
curl -fsS http://127.0.0.1:9191/
sudo systemctl stop demo-echo.service
systemctl is-active demo-echo.service
ss -ltnH 'sport = :9191'
```

Teaching result: manager, process table, procfs, socket table, and client
behavior answer different questions. Lab 9 investigates another service and
port.

## Demo 10 — Inspect effective configuration after a drop-in (Module 10, 7 min)

Setup:

```bash
sudo tee /usr/local/bin/demo-banner-write >/dev/null <<'EOF'
#!/usr/bin/env bash
printf '%s\n' "${DEMO_LOG_LEVEL:-unset}" >/run/demo-banner.txt
EOF
sudo chmod 0755 /usr/local/bin/demo-banner-write
sudo tee /etc/systemd/system/demo-banner.service >/dev/null <<'EOF'
[Unit]
Description=Distinct drop-in demonstration
[Service]
Type=oneshot
RemainAfterExit=yes
Environment=DEMO_LOG_LEVEL=info
ExecStart=/usr/local/bin/demo-banner-write
EOF
sudo rm -rf /etc/systemd/system/demo-banner.service.d
sudo systemctl daemon-reload
sudo systemctl restart demo-banner.service
```

Demonstration:

```bash
systemctl show demo-banner.service -p FragmentPath -p DropInPaths -p Environment
cat /run/demo-banner.txt
sudo install -d -m 0755 /etc/systemd/system/demo-banner.service.d
printf '[Service]\nEnvironment=DEMO_LOG_LEVEL=debug\n' \
  | sudo tee /etc/systemd/system/demo-banner.service.d/override.conf >/dev/null
sudo systemctl daemon-reload
sudo systemctl restart demo-banner.service
systemctl cat demo-banner.service
systemctl show demo-banner.service -p DropInPaths -p Environment
cat /run/demo-banner.txt
```

Teaching result: fragment, drop-in path, normalized environment property, and
generated behavior form a chain of evidence. Lab 10 uses a different unit and
changes `COURSE_MODE` to production.
