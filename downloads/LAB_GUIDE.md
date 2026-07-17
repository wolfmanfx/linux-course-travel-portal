# Linux Foundations — Participant Lab Guide

Six guided labs · 180 minutes total · Ubuntu 24.04 LTS in Multipass

## Before you begin

You need:

- macOS 10.15+ (Intel or Apple silicon), or Windows 10/11
- administrator rights to install Multipass
- at least 10 GB free disk space and 2 GB free RAM
- internet access for the VM image and Ubuntu packages
- a terminal on the host: Terminal/iTerm on macOS, PowerShell on Windows

Install Multipass from the official Canonical installer. On Windows Pro/Enterprise, Multipass can use Hyper-V. Windows Home learners should install VirtualBox and configure Multipass to use it before class.

### Two prompts, two worlds

Commands beginning with `multipass` or `ssh` run on your **host** (macOS or Windows). Commands beginning with `sudo`, `ls`, `cd`, or `systemctl` run **inside Linux** after `multipass shell linux-course`.

---

## Lab 1 — Launch and inspect your Linux VM (25 min)

### Goal

Create a disposable Ubuntu VM, enter its shell, and record enough system information to identify where you are.

### 1. Verify the host tool

Run in macOS Terminal or Windows PowerShell:

```text
multipass version
```

If Windows reports that no driver is available and you use VirtualBox:

```text
multipass set local.driver=virtualbox
```

### 2. Launch the VM

The command is identical on both host platforms:

```text
multipass launch 24.04 --name linux-course --cpus 2 --memory 2G --disk 10G
multipass list
multipass info linux-course
```

### 3. Enter Linux

```text
multipass shell linux-course
```

Your prompt should now contain the VM name. Confirm your identity and operating system:

```bash
whoami
hostname
cat /etc/os-release
uname -r
pwd
```

### Checkpoint

You can explain these three facts:

1. The host is macOS or Windows.
2. The guest is Ubuntu Linux.
3. The Linux kernel version comes from `uname -r`; distribution details come from `/etc/os-release`.

### Recovery

If the VM exists but is stopped:

```text
multipass start linux-course
multipass shell linux-course
```

If launch fails, capture `multipass version`, `multipass get local.driver`, and the exact error before changing anything.

---

## Lab 2 — Navigate and manipulate files safely (35 min)

### Goal

Build a small workspace using relative and absolute paths, then copy, move, and remove files without losing track of location.

Run everything in this lab inside Linux.

### 1. Explore the filesystem

```bash
pwd
ls -la
ls /
cd /var/log
pwd
ls -lh | head
cd ~
```

Identify `/etc`, `/home`, `/var`, `/tmp`, and `/usr` in the output of `ls /`.

### 2. Create a workspace

```bash
mkdir -p ~/linux-course/{notes,archive,data}
cd ~/linux-course
touch notes/day1.txt
printf 'Linux keeps configuration under /etc\n' > notes/day1.txt
printf 'The journal is queried with journalctl\n' >> notes/day1.txt
cat notes/day1.txt
```

### 3. Copy and move with verification

```bash
cp notes/day1.txt archive/day1.backup
cp -i notes/day1.txt archive/day1.backup
mv archive/day1.backup archive/day1.txt
find . -maxdepth 2 -type f -print
```

The `-i` option asks before overwriting. For important work, verify the destination before deleting the source.

### 4. Remove the safe way

```bash
touch data/disposable.txt
ls -l data/disposable.txt
rm -i data/disposable.txt
rmdir data
```

Avoid `rm -rf` until you can state exactly what every path expands to.

### Challenge

From `~/linux-course`, create `notes/commands.txt` containing only the lines from `notes/day1.txt` that include the letter `j`:

```bash
grep 'j' notes/day1.txt > notes/commands.txt
cat notes/commands.txt
```

### Checkpoint

```bash
find ~/linux-course -maxdepth 2 -type f -printf '%P\n' | sort
```

Expected files:

```text
archive/day1.txt
notes/commands.txt
notes/day1.txt
```

---

## Lab 3 — Install software and edit text (25 min)

### Goal

Use APT intentionally, inspect what was installed, and make a small edit with Nano.

### 1. Refresh package metadata

```bash
sudo apt update
apt-cache policy tree
```

`apt update` refreshes the package index; it does not upgrade installed packages.

### 2. Install tools

```bash
sudo apt install -y tree jq
tree --version
jq --version
dpkg -L tree | head
```

### 3. Edit a file with Nano

```bash
nano ~/linux-course/notes/day1.txt
```

Add this line:

```text
systemctl controls systemd units.
```

Save with `Ctrl+O`, press Enter, and exit with `Ctrl+X`. Then verify:

```bash
tail -n 3 ~/linux-course/notes/day1.txt
```

### 4. Find the package transaction log

```bash
sudo tail -n 20 /var/log/apt/history.log
```

### Checkpoint

You can distinguish `apt update`, `apt install`, and `apt remove`, and you can save and exit Nano without closing the terminal.

---

## Lab 4 — Build a shared directory with correct permissions (35 min)

### Goal

Create a realistic team share where members can collaborate and new files inherit the team group.

### 1. Create users and a group

```bash
sudo groupadd courseops
sudo useradd -m -s /bin/bash alice
sudo useradd -m -s /bin/bash bob
sudo usermod -aG courseops alice
sudo usermod -aG courseops bob
getent group courseops
```

### 2. Create the team directory

```bash
sudo install -d -o root -g courseops -m 2770 /srv/course-share
stat -c '%A  %a  %U:%G  %n' /srv/course-share
```

`2770` means setgid + full owner/group access + no access for others. Setgid on a directory makes new files inherit the directory group.

### 3. Test as two users

```bash
sudo -u alice -H bash -lc 'echo "created by alice" > /srv/course-share/status.txt'
sudo -u bob -H bash -lc 'cat /srv/course-share/status.txt'
ls -l /srv/course-share/status.txt
```

### 4. Apply a least-privilege file mode

```bash
sudo chown alice:courseops /srv/course-share/status.txt
sudo chmod 640 /srv/course-share/status.txt
stat -c '%A  %a  %U:%G  %n' /srv/course-share/status.txt
```

Interpret `640`: owner reads/writes, group reads, others have no access.

### Challenge: repair a broken access case

Break the group access, observe the failure, and repair it:

```bash
sudo chown alice:alice /srv/course-share/status.txt
sudo chmod 600 /srv/course-share/status.txt
sudo -u bob -H cat /srv/course-share/status.txt
```

Use `ls -l`, `id bob`, `chown`, and `chmod` to make the final read succeed while keeping “others” at zero permissions.

One valid repair:

```bash
sudo chown alice:courseops /srv/course-share/status.txt
sudo chmod 640 /srv/course-share/status.txt
```

### Checkpoint

```bash
namei -l /srv/course-share/status.txt
```

You can explain why access depends on every directory in the path, not only the final file.

---

## Lab 5 — Connect over SSH with your own key (30 min)

### Goal

Create an Ed25519 client key on the host, install only the public key in Linux, verify the server identity, and connect through a named client profile.

### 1. Prepare the account inside Linux

From the Multipass shell:

```bash
sudo useradd -m -s /bin/bash trainee
sudo systemctl enable --now ssh
sudo ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
exit
```

Record the server fingerprint. You are now back at the host prompt.

### 2. Generate a key on the host

Works in macOS Terminal and modern Windows PowerShell:

```text
ssh-keygen -t ed25519 -a 64 -f "$HOME/.ssh/linux_course_ed25519" -C "linux-course"
```

Choose a passphrase. The private key has no `.pub` suffix and must stay on the host.

### 3. Transfer only the public key

```text
multipass transfer "$HOME/.ssh/linux_course_ed25519.pub" linux-course:/tmp/trainee.pub
multipass shell linux-course
```

Inside Linux:

```bash
sudo install -d -m 700 -o trainee -g trainee /home/trainee/.ssh
sudo install -m 600 -o trainee -g trainee /tmp/trainee.pub /home/trainee/.ssh/authorized_keys
sudo rm /tmp/trainee.pub
hostname -I
exit
```

Record the first VM IP address.

### 4. Connect and verify identity

Replace `VM_IP`:

```text
ssh -i "$HOME/.ssh/linux_course_ed25519" trainee@VM_IP
```

At the first connection, compare the displayed fingerprint with the fingerprint recorded inside the VM. Accept only if they match.

### 5. Create a client profile

Edit `$HOME/.ssh/config` on the host with this block:

```sshconfig
Host linux-course
    HostName VM_IP
    User trainee
    IdentityFile ~/.ssh/linux_course_ed25519
    IdentitiesOnly yes
    StrictHostKeyChecking accept-new
    ServerAliveInterval 60
```

After the host key is recorded and verified, you may change `accept-new` to `yes` for stricter behavior.

Test:

```text
ssh linux-course
```

### Windows note

Windows OpenSSH uses the same client configuration syntax. If `ssh` is missing, install the Windows “OpenSSH Client” optional feature before class.

### Checkpoint

Inside the SSH session:

```bash
whoami
hostname
echo "$SSH_CONNECTION"
```

The user is `trainee`, the host is the VM, and `$SSH_CONNECTION` shows the client/server addresses and ports.

---

## Lab 6 — Repair a failed systemd service from its logs (30 min)

### Goal

Install a deliberately broken service, diagnose it with a repeatable command sequence, repair the cause, and verify the endpoint.

Run this lab inside Linux as your original `ubuntu` user (`multipass shell linux-course`).

### 1. Install the broken unit

```bash
sudo tee /etc/systemd/system/course-web.service >/dev/null <<'UNIT'
[Unit]
Description=Linux Course Demo Web Service
After=network.target

[Service]
Type=simple
User=courseapp
WorkingDirectory=/srv/course-web
ExecStart=/usr/bin/python3 -m http.server 8080
Restart=on-failure

[Install]
WantedBy=multi-user.target
UNIT

sudo systemctl daemon-reload
sudo systemctl start course-web
```

The start should fail because the declared user and working directory do not exist.

### 2. Diagnose before changing anything

```bash
systemctl status course-web --no-pager
sudo journalctl -u course-web --since '-10 min' --no-pager
systemctl cat course-web
```

Write down:

- the unit state
- the first useful error message
- the configuration line most likely connected to it

### 3. Repair the prerequisites

```bash
sudo useradd --system --home /srv/course-web --shell /usr/sbin/nologin courseapp
sudo install -d -o courseapp -g courseapp -m 750 /srv/course-web
echo '<h1>Linux course service is healthy</h1>' | sudo tee /srv/course-web/index.html >/dev/null
sudo chown courseapp:courseapp /srv/course-web/index.html
```

### 4. Restart and verify

```bash
sudo systemctl restart course-web
systemctl is-active course-web
systemctl status course-web --no-pager
curl -fsS http://localhost:8080
sudo journalctl -u course-web -n 20 --no-pager
```

Enable the service for future boots:

```bash
sudo systemctl enable course-web
systemctl is-enabled course-web
```

### Checkpoint

You used this troubleshooting loop:

1. Observe state.
2. Read unit-specific logs.
3. Inspect effective configuration.
4. Change one cause.
5. Restart and verify both state and behavior.

### Optional cleanup

```bash
sudo systemctl disable --now course-web
sudo rm /etc/systemd/system/course-web.service
sudo systemctl daemon-reload
```

To remove the entire disposable VM from the host after the course:

```text
multipass delete linux-course
multipass purge
```

This permanently deletes the VM. Keep it if you want to continue practicing.

