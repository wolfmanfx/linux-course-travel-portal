# Linux Foundations — Instructor Runbook

## Teaching goal

By the end, first-time Linux operators should be able to enter an unfamiliar Ubuntu server, change files and permissions safely, connect with SSH keys, and diagnose a failed systemd service using evidence from logs.

## Audience assumptions

- Comfortable using a graphical desktop
- Little or no Linux administration experience
- Mixed macOS and Windows host machines
- No Bash scripting prerequisite

## Course balance

The course is deliberately split into two equal halves:

- **50% guided teaching:** concept models, progressive explanations, worked
  examples, and distinct instructor demonstrations.
- **50% hands-on practice:** ten interleaved learner incidents, verification,
  peer explanation, and debriefs.

There is no separate lecture block followed by a lab block. Every module builds
knowledge in small steps and then moves directly into its related incident.

## Adapting the room schedule

Preserve the 50/50 balance. If less time is available, shorten background
examples, prediction discussions, and optional lab stretches evenly. Keep:

- the prerequisite model before every lab;
- all ten assessed incidents;
- verification and recovery steps;
- the debrief that connects evidence to the model.

Individual lab estimates remain in the lab guide as facilitation aids, but do
not present aggregate minute totals as the course identity.

## Room and learner setup

Send the prerequisites at least two business days before the workshop.

The primary learner environment is the password-protected browser portal backed
by one resettable Incus system container per seat. Ask learners to verify before
class that the supplied URL opens in their current browser and that they can
type into the ttyd terminal. This path is host-independent on Windows and
macOS.

Keep Multipass only as the local fallback. Ask learners who will use that
fallback to verify:

```text
multipass version
ssh -V
```

Ask fallback users to launch the image once before class if network bandwidth is uncertain:

```text
multipass launch 24.04 --name linux-course --cpus 2 --memory 2G --disk 10G
multipass stop linux-course
```

Bring:

- your own pre-created VM
- the Ubuntu 24.04 image already cached on the presenter laptop
- a PDF export of the deck if PowerPoint rendering changes
- the participant workbook available locally and through the class channel
- a timer visible only to you

## Presenter setup on macOS

- PowerPoint in Presenter View with speaker notes
- macOS Terminal or iTerm with font size at least 22 pt
- Disable notification banners and shell history containing secrets
- Pre-create a disposable demo key with a course-specific filename
- Keep one clean VM snapshot equivalent by using a second Multipass instance named `linux-course-backup`

## Facilitation pattern

For every module, use the same rhythm:

1. State the operating question and scope.
2. Build the minimum concept model.
3. Read a worked example as evidence flow.
4. Run a distinct demonstration after asking for a prediction.
5. Use the readiness slide before releasing learners into the lab.
6. Debrief declaration, runtime state, events, and behavior without replaying
   the keystrokes.

This prevents “copy the magic command” behavior and models operational discipline.
If a readiness item is unclear, revisit the model or worked example; do not
teach the missing prerequisite reactively inside the assessed lab.

## Live demo timings

| Demo | Target | Abort point |
|---|---:|---|
| 1. Controller VM versus system container | 5 min | Show the prepared `os-release`, kernel, PID 1, and mount record |
| 2. Resolve the wrong path under `/var/tmp/demo-tree` | 5 min | Show prepared `pwd`, `namei`, and `realpath` evidence |
| 3. Reduce a synthetic authentication log | 5 min | Show the saved pipeline and expected aggregate |
| 4. Trace the installed state and ownership of `jq` | 4 min | Show the prepared APT and `dpkg -S` transcript |
| 5. Repair `/srv/demo-share` for `demoops` | 6 min | Show final `namei`, `stat`, and two-user access tests |
| 6. Verify a separate SSH endpoint on port 2207 | 6 min | Use the preinstalled key/profile and verified fingerprint |
| 7. Explain `course-demo-noisy.service` exit code 17 | 5 min | Show bounded journal evidence containing `STALE_CACHE` |
| 8. Diagnose the missing environment file for `demo-api.service` | 6 min | Show the effective unit, earliest error, and port 8181 client test |
| 9. Trace `demo-echo.service` to port 9191 | 5 min | Show saved unit/PID/socket/client evidence |
| 10. Override `demo-banner.service` with a drop-in | 5 min | Show the effective drop-in and behavioral result |

The demo commands are in `resources/LIVE_DEMOS.md`.

## Fast-speaker controls

- Put a deliberate two-second pause after every command output.
- Ask one prediction question before each live demo.
- Do not narrate while typing; type, then explain.
- Use slide titles as complete takeaways, not topics to race past.
- At each purple “checkpoint” slide, ask learners to explain the system state to a partner.

## Lab support strategy

Use a three-color status signal:

- Green: checkpoint complete
- Amber: working or uncertain
- Red: blocked

Do not take over a learner keyboard immediately. Ask for these five items:

```bash
pwd
whoami
hostname
<the exact failing command repeated once>
printf 'status=%s\n' "$?"
```

For service issues, add:

```bash
systemctl status UNIT --no-pager
sudo journalctl -u UNIT -n 30 --no-pager
```

## Common failures and recoveries

### Multipass will not launch on Windows

Check edition and driver:

```text
multipass get local.driver
```

Windows Pro/Enterprise: confirm Hyper-V is enabled. Windows Home: install VirtualBox, then set the Multipass driver to VirtualBox before creating the instance.

### Learner is running Linux commands on the host

Ask them to locate the prompt and run `uname -s`. Re-enter with:

```text
multipass shell linux-course
```

### SSH connection refused

Inside the VM:

```bash
sudo systemctl status ssh --no-pager
sudo ss -ltnp | grep ':22'
hostname -I
```

Confirm the learner is using the current VM IP.

### SSH permission denied

Inside the VM:

```bash
sudo namei -l /home/trainee/.ssh/authorized_keys
sudo sshd -T | grep -E 'pubkeyauthentication|authorizedkeysfile'
sudo journalctl -u ssh -n 30 --no-pager
```

Expected: `.ssh` is mode 700, `authorized_keys` is 600, and both belong to `trainee`.

### Service lab does not fail

The learner probably created `courseapp` earlier. Substitute a unique missing user in the unit, such as `courseapp2`, and repeat `daemon-reload` and `restart`.

## End-of-course assessment

Ask pairs to answer without slides:

1. Where would you look for host configuration, changing application data, and user-owned files?
2. What three identities affect access to a file?
3. Which half of an SSH key pair belongs on the server?
4. What commands distinguish a stopped service from a misconfigured one?
5. How do you verify the fix affected behavior, not only process state?

## After class

Recommend the Linux Upskill Challenge for continued practice. Remind learners that the course VM is disposable and that production systems require change control, backups, and organization-specific security policies.
