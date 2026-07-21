# Linux Foundations — Participant Lab Guide

Ten guided incidents · hands-on half of the course · Ubuntu 24.04 LTS in the browser

## Before you begin

Open the seat link supplied by the instructor. It works from Safari, Chrome,
Edge, or Firefox on macOS, Windows, and iOS. The terminal runs in an isolated
Linux system container; host commands are not required for the primary lab
path.

Each lab starts from a prepared state. Select the lab, choose **Prepare / reset
this lab**, complete the tasks, and choose **Check my work**. Preparing a lab
recreates only your assigned seat and permanently discards that seat's current
lab state.

Use the same operating loop throughout:

1. Locate the host, user, directory, and target.
2. Predict the state you expect.
3. Make one narrow change.
4. Observe output, exit status, and logs.
5. Verify under the identity and interface that matter.

When requesting help, show `whoami`, `hostname`, `pwd`, the exact failing
command, and the unchanged error output.

---

## Lab 1 — System Orientation (15 min)

### Ready before you begin

You have already seen the prompt, command arguments, quoting, `$HOME`, command
substitution with `$(...)`, output redirection with `>`, exit status, `test`,
and the difference between distribution user space and the running kernel.
`printf` is a guided formatting tool: its first argument is a format and the
remaining arguments fill each `%s` placeholder.

### Mission

You inherited an unfamiliar Linux seat. Produce two evidence files that prove
which user space and kernel you are operating and where common system data
belongs.

### 1. Establish context

```bash
whoami
hostname
pwd
printf 'HOME=%s\n' "$HOME"
```

### 2. Separate distribution from kernel

```bash
cat /etc/os-release
uname -r
uname -m
ps -p 1 -o pid,comm,args=
```

`/etc/os-release` describes the installed user space. `uname` asks the running
kernel. In a system container those facts come from different layers.

### 3. Build the profile

Create `~/system-profile.txt` with these keys and values observed on your seat:

```text
USER=learner
DISTRO=Ubuntu
INIT=systemd
KERNEL=<the output of uname -r>
ARCH=<the output of uname -m>
```

One safe construction pattern is:

```bash
. /etc/os-release
printf 'USER=%s\nDISTRO=%s\nINIT=%s\nKERNEL=%s\nARCH=%s\n' \
  "$(whoami)" "$NAME" "$(ps -p 1 -o comm=)" "$(uname -r)" "$(uname -m)" \
  > ~/system-profile.txt
```

### 4. Map filesystem purposes

Create `~/path-map.txt` containing:

```text
CONFIG=/etc
LOGS=/var/log
RUNTIME=/run
```

Verify the paths and both files:

```bash
test -d /etc && test -d /var/log && test -d /run
cat ~/system-profile.txt ~/path-map.txt
```

### Explain before checking

- Which command identifies Ubuntu?
- Which command identifies the kernel?
- Why can those two answers have different version numbers?

---

## Lab 2 — Filesystem & Links (25 min)

### Ready before you begin

You can distinguish absolute and relative paths, explain the working directory,
and predict copy, move, hard-link, and symbolic-link behavior. Guided inspection
tools used here are `file` for a content-oriented type guess, `realpath` for the
resolved absolute path, `stat`/`ls -li` for metadata and inode evidence, and
`find -printf` for an explicit inventory.

### Mission

Organize the prepared inbox under `~/projects/linux-course`, then demonstrate
the different semantics of a copy, a hard link, and a symbolic link.

### 1. Inspect before changing

```bash
whoami
pwd
ls -la ~/inbox
file ~/inbox/*
realpath ~/inbox/*
```

### 2. Build and populate the tree

Create `notes`, `archive`, and `links` in one project directory. Copy the
welcome note and move the draft.

```bash
p="$HOME/projects/linux-course"
mkdir -p "$p"/{notes,archive,links}
cp ~/inbox/welcome.txt "$p/notes/welcome.txt"
mv ~/inbox/draft.txt "$p/archive/draft.txt"
```

Verify that `welcome.txt` still exists in the inbox while `draft.txt` does not.

### 3. Create a hard link

```bash
ln "$p/notes/welcome.txt" "$p/notes/welcome-hard.txt"
ls -li "$p/notes"
```

The two names must display the same inode number. A second `cp` would produce
the same bytes but a different inode and will not pass the checker.

### 4. Create a relative symbolic link

From the `links` directory, the target is `../notes/welcome.txt`:

```bash
ln -s ../notes/welcome.txt "$p/links/latest-note"
readlink "$p/links/latest-note"
cat "$p/links/latest-note"
```

### 5. Verify the final state

```bash
find "$p" -maxdepth 2 -printf '%y %p -> %l\n' | sort
cat "$p/notes/welcome.txt" "$p/archive/draft.txt"
```

### Stretch

Rename `welcome.txt` and test both links. Explain why the hard link still works
and the symbolic link becomes dangling.

---

## Lab 3 — Editor & Text Evidence (20 min)

### Ready before you begin

You can explain stdin, stdout, stderr, `>`, and a pipe. You have seen the
pipeline stages used here: `grep` selects records, `awk` extracts or reshapes
fields, `sort` places equal values together, and `uniq -c` counts adjacent equal
lines. Nano is guided: `Ctrl+O` saves and `Ctrl+X` exits.

### Mission

Prepare `app.conf` for production and reduce two logs into small evidence files
that another operator can review.

### 1. Make a safe terminal edit

```bash
cat -n ~/app.conf
nano ~/app.conf
```

Change the file to these exact settings:

```text
mode=production
workers=4
log_level=warning
```

In Nano, `Ctrl+O` writes, Enter confirms the filename, and `Ctrl+X` exits.
Verify the result and check for duplicate lines:

```bash
cat -n ~/app.conf
sort ~/app.conf | uniq -d
```

### 2. Build the status pipeline in stages

```bash
head ~/access.log
awk '{print $4}' ~/access.log
awk '{print $4}' ~/access.log | sort
awk '{print $4}' ~/access.log | sort | uniq -c
```

Normalize the final output to `STATUS COUNT` and save it:

```bash
awk '{print $4}' ~/access.log \
  | sort \
  | uniq -c \
  | awk '{print $2, $1}' \
  > ~/status-counts.txt
cat ~/status-counts.txt
```

### 3. Extract structured errors

```bash
grep '^level=ERROR ' ~/application.log > ~/errors.txt
cat ~/errors.txt
wc -l ~/errors.txt
```

The count must be two. If a command fails, capture its diagnostic with
`2>~/command-error.txt` instead of suppressing it.

### Explain before checking

Describe what each pipeline stage receives and emits. In particular, explain
why `sort` must precede `uniq -c`.

---

## Lab 4 — Package Lifecycle (20 min)

### Ready before you begin

You can separate repository metadata, the local package index, registered
installed state, executable discovery, file ownership, and program behavior.
`apt-cache policy` inspects candidates, `dpkg-query -W` inspects package state,
`command -v` asks the shell which executable it would run, and `dpkg-query -S`
asks which package owns a path.

### Mission

Install `tree` from the configured Ubuntu repositories and connect four pieces
of evidence: package state, executable discovery, file ownership, and behavior.

### 1. Inspect the candidate

```bash
command -v tree || echo 'tree is missing'
sudo apt update
apt-cache policy tree
```

`apt update` refreshes repository metadata; it installs no application by
itself.

### 2. Install and inspect

```bash
sudo apt install tree
dpkg-query -W -f='${Status}\n' tree
command -v tree
dpkg -S /usr/bin/tree
```

### 3. Create package evidence

Create `~/package-report.txt` containing exactly:

```text
PACKAGE=tree
STATUS=install ok installed
BINARY=/usr/bin/tree
OWNER=tree
```

Then prove behavior:

```bash
tree -d ~/package-lab > ~/tree-report.txt
cat ~/package-report.txt ~/tree-report.txt
```

### Stretch

Use `dpkg -L tree`, `apt show tree`, and `/var/log/apt/history.log` to answer:
which files came from the package, which version was selected, and when the
transaction occurred?

---

## Lab 5 — Permission Incident (30 min)

### Ready before you begin

You can select the owner, matching-group, or other permission class without
combining them, and explain directory read, write, and search permission.
`namei -l` exposes every component of a path; `sudo -u USER COMMAND` tests as
the identity that matters; `sh -c '...'` groups a compound operation under that
identity. `tee` writes stdin to a privileged target while leaving output visible.

### Mission

Alice and Bob must collaborate in `/srv/team-share`; outsider must remain
blocked. Existing content needs a safe group mode, and new files must inherit
`webteam`.

### 1. Inspect identity and every path component

```bash
getent group webteam
id alice
id bob
id outsider
namei -l /srv/team-share/checklist.txt
stat -c '%U %G %A %a %n' /srv/team-share /srv/team-share/checklist.txt
```

### 2. Repair the shared state

```bash
sudo chown -R root:webteam /srv/team-share
sudo chmod 2770 /srv/team-share
sudo chmod 0660 /srv/team-share/checklist.txt
```

Interpret `2770`: setgid plus `rwxrwx---`. The setgid bit makes new children
inherit the directory group.

### 3. Prove inheritance and collaboration

```bash
sudo -u alice sh -c 'echo alice-was-here > /srv/team-share/alice.txt'
sudo -u bob sh -c 'echo bob-reviewed >> /srv/team-share/checklist.txt'
stat -c '%U %G %A %a %n' /srv/team-share/*
cat /srv/team-share/checklist.txt
```

### 4. Test both sides of the policy

```bash
sudo -u alice test -w /srv/team-share && echo ALICE_OK
sudo -u bob test -w /srv/team-share && echo BOB_OK
sudo -u outsider test -w /srv/team-share || echo OUTSIDER_BLOCKED
```

A successful write proves the positive case. The outsider test proves least
privilege. Testing as the sudo-capable `learner` user proves neither.

### Recovery question

If Bob is in `webteam` but cannot access the file, check directory traversal,
the file group, and the file group mode separately before changing anything.

---

## Lab 6 — SSH Trust Setup (25 min)

### Ready before you begin

You can separate encrypted transport, server host identity, and user identity.
`ssh-keyscan` only collects the key presented by an endpoint; it does not
authenticate that key. `ssh-keygen -lf` displays a fingerprint, `ssh -G` shows
effective client configuration, and `BatchMode=yes` makes authentication fail
instead of falling back to an interactive password prompt.

### Mission

Configure strict, key-only access to `operator@localhost:2222` through the alias
`training-server`. Establish server identity before the final connection.

### 1. Protect and create client identity

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
test ! -e ~/.ssh/id_ed25519
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C 'linux-course'
chmod 600 ~/.ssh/id_ed25519
```

Use an empty passphrase only for this disposable training key.

### 2. Verify and record server identity

```bash
ssh-keyscan -t ed25519 -p 2222 localhost > ~/course-host-key.scan
expected="$(cat /etc/linux-course/ssh-host-ed25519.fingerprint)"
observed="$(ssh-keygen -lf ~/course-host-key.scan -E sha256 | awk '{print $2}')"
printf 'expected=%s\nobserved=%s\n' "$expected" "$observed"
test "$observed" = "$expected"
install -m 600 ~/course-host-key.scan ~/.ssh/known_hosts
ssh-keygen -F '[localhost]:2222'
```

The course image supplies the expected fingerprint through a separate trusted
channel. `ssh-keyscan` only collects a presented key; the equality test is what
authenticates it for this lab. The brackets identify a non-default port in
`known_hosts`.

### 3. Bootstrap authorization

```bash
ssh-copy-id -o StrictHostKeyChecking=yes \
  -i ~/.ssh/id_ed25519.pub \
  -p 2222 operator@localhost
```

The temporary bootstrap password is `training`. Only the public key is copied.

### 4. Create the strict client profile

Create `~/.ssh/config`:

```sshconfig
Host training-server
    HostName localhost
    Port 2222
    User operator
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
    StrictHostKeyChecking yes
```

```bash
chmod 600 ~/.ssh/config
ssh -o BatchMode=yes training-server 'id && hostname'
```

`BatchMode=yes` makes the test fail instead of falling back to a password
prompt.

### Recovery

Use `ssh -G training-server` to inspect computed client settings and
`ssh -vv training-server` to see host-key and authentication decisions.

---

## Lab 7 — Journal Investigation (20 min)

### Ready before you begin

You can distinguish summarized unit state from the event sequence that caused
it. `systemctl show -p ...` selects machine-readable properties. In
`journalctl`, `-u` selects a unit, `-b` selects a boot, and `--since` bounds the
time window. Scope first; filter text only after preserving chronology.

### Mission

Explain why `course-log-generator.service` failed. Preserve the scoped journal
evidence and submit exact unit state, result, incident, and exit code facts.

### 1. Compare human and machine-readable state

```bash
systemctl status course-log-generator.service --no-pager
systemctl show course-log-generator.service \
  -p ActiveState -p Result -p ExecMainStatus
```

### 2. Scope and preserve the journal

```bash
journalctl -u course-log-generator.service -b --no-pager
journalctl -u course-log-generator.service -b --no-pager \
  > ~/journal-evidence.txt
```

### 3. Reduce noise after scoping

```bash
journalctl -u course-log-generator.service \
  --since '-10 minutes' -o short-iso --no-pager
grep -E 'INCIDENT|exited' ~/journal-evidence.txt
```

### 4. Submit the explanation

Create `~/lab-answer.txt`:

```text
UNIT=course-log-generator.service
ACTIVE_STATE=failed
RESULT=exit-code
INCIDENT=DISK_THRESHOLD
EXIT_CODE=42
```

The incident line is the application cause. The failed state and exit result
are systemd's observations of the consequence.

---

## Lab 8 — Broken Service Capstone (25 min)

### Ready before you begin

You can distinguish unit declaration, runtime state, enablement, and behavior.
You also know that `Requires=`/`Wants=` express activation relationships while
`After=`/`Before=` express ordering only. `systemctl cat` shows the effective
unit, `daemon-reload` rereads changed unit definitions, and `restart` creates a
new execution. This incident changes no unit definition, so no daemon reload is
needed.

### Mission

`course-web.service` cannot enter its configured working directory. Diagnose
before changing, repair only the missing prerequisites, and verify systemd state
and HTTP behavior independently.

### 1. Capture evidence

```bash
systemctl status course-web.service --no-pager
systemctl cat course-web.service
journalctl -u course-web.service -b --no-pager
```

Connect `status=200/CHDIR` to the unit's `WorkingDirectory` value. Do not edit
the unit when its declared intent is already correct.

### 2. Repair the prerequisites

```bash
sudo install -d -o courseapp -g courseapp -m 0755 /srv/course-web
printf 'Linux course service is healthy.\n' \
  | sudo tee /srv/course-web/index.html >/dev/null
sudo chown courseapp:courseapp /srv/course-web/index.html
```

### 3. Start now and at boot

```bash
sudo systemctl enable --now course-web.service
```

No `daemon-reload` is needed because the unit file did not change.

### 4. Verify four independent layers

```bash
systemctl is-active course-web.service
systemctl is-enabled course-web.service
ss -ltnp | grep 8088
curl -fsS http://127.0.0.1:8088/
```

### Peer explanation

Explain:

1. the initial state and exact symptom
2. the journal evidence that identified the cause
3. why the repair was narrower than editing the unit
4. what proves current state, future state, network state, and application behavior

A green checker confirms observable state. Your explanation demonstrates that
you can reproduce the reasoning.

---

## Lab 9 — Process & Port Investigation (15 min)

### Ready before you begin

You can explain a process as a running program with a temporary PID and runtime
context. `MainPID` connects a managed unit to one process, `ps` and `/proc/PID`
provide process evidence, `ss -ltnp` shows TCP listeners, and `curl --fail`
tests client-visible behavior. Stop the process through systemd, its manager.

### Mission

Identify exactly what owns `localhost:9099`, connect the unit to its PID, user,
socket, and HTTP behavior, preserve the evidence, then stop it through systemd
and prove the port closed.

```bash
systemctl status course-probe.service --no-pager
systemctl show course-probe.service -p MainPID -p User -p ExecStart
ss -ltnp 'sport = :9099'

pid="$(systemctl show course-probe.service -p MainPID --value)"
ps -o pid,ppid,user,stat,cmd -p "$pid"
sudo tr '\0' ' ' < "/proc/$pid/cmdline"; echo
curl -fsS http://127.0.0.1:9099/
```

Create `~/process-report.txt` using the observed PID:

```text
UNIT=course-probe.service
PID=<observed MainPID>
USER=courseprobe
PORT=9099
HTTP=course probe ready
```

Stop and verify through two independent views:

```bash
sudo systemctl stop course-probe.service
systemctl is-active course-probe.service
ss -ltnH 'sport = :9099'
```

An empty socket query and an inactive unit together show that both manager and
network state changed. Stop a managed process through systemd rather than
killing a PID behind the manager's back.

---

## Lab 10 — systemd Drop-in & Effective Configuration (15 min)

### Ready before you begin

You can explain fragment and drop-in precedence and the difference between
reloading manager definitions and restarting a running process. `FragmentPath`,
`DropInPaths`, and `Environment` expose effective provenance and configuration.
The generated file is the independent behavior check; the rollback is removal
of the course drop-in followed by daemon reload and restart.

### Mission

Change `course-mode.service` from development to production using a durable
administrator drop-in. Do not edit the original unit.

```bash
systemctl cat course-mode.service
systemctl show course-mode.service \
  -p FragmentPath -p DropInPaths -p Environment
cat /run/course-mode.txt
```

Create the override:

```bash
sudo install -d -m 0755 /etc/systemd/system/course-mode.service.d
printf '[Service]\nEnvironment=COURSE_MODE=production\n' \
  | sudo tee /etc/systemd/system/course-mode.service.d/override.conf >/dev/null
```

Load, apply, and verify:

```bash
sudo systemctl daemon-reload
sudo systemctl restart course-mode.service
systemctl cat course-mode.service
systemctl show course-mode.service -p Environment -p DropInPaths
cat /run/course-mode.txt
```

`daemon-reload` makes the manager reread unit definitions. Restart executes the
service with the new environment. `systemctl cat` and `DropInPaths` prove the
effective declaration; `/run/course-mode.txt` independently proves behavior.

---

## Offline fallback

If the browser platform is unavailable, the instructor can provide the
repository's macOS or Windows host launcher. The learner commands inside Ubuntu
are the same; only seat preparation and reset move to the host scripts under
`browser-lab-platform/host/`.
