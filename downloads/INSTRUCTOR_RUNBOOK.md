# Linux Foundations — Instructor Runbook

## Teaching goal

By the end, first-time Linux operators should be able to enter an unfamiliar Ubuntu server, change files and permissions safely, connect with SSH keys, and diagnose a failed systemd service using evidence from logs.

## Audience assumptions

- Comfortable using a graphical desktop
- Little or no Linux administration experience
- Mixed macOS and Windows host machines
- No Bash scripting prerequisite

## Six-hour content plan

The timing below contains exactly 180 minutes of theory/demos and 180 minutes of participant labs. Add breaks outside these blocks if the venue permits.

### Theory + instructor demos — 180 minutes

| Segment | Min | Running total |
|---|---:|---:|
| Welcome, outcomes, environment model | 10 | 10 |
| Linux, distributions, and architecture | 20 | 30 |
| Filesystem, terminal, navigation, pipes | 35 | 65 |
| Users, sudo, permissions, Nano | 35 | 100 |
| SSH model, keys, client configuration | 30 | 130 |
| Logs and `journalctl` filtering | 25 | 155 |
| systemd and service troubleshooting | 25 | 180 |

### Participant labs — 180 minutes

| Lab | Min | Running total |
|---|---:|---:|
| 1. System orientation | 15 | 15 |
| 2. Filesystem and links | 25 | 40 |
| 3. Editor and text evidence | 20 | 60 |
| 4. Package lifecycle | 20 | 80 |
| 5. Permission incident | 30 | 110 |
| 6. SSH trust setup | 25 | 135 |
| 7. Journal investigation | 20 | 155 |
| 8. Broken-service capstone | 25 | 180 |

Optional extension bank—do not include inside the 180-minute block unless
another activity is removed:

| Lab | Min | Use |
|---|---:|---|
| 9. Process and port investigation | 15 | Fast cohort, fourth hour, or post-course practice |
| 10. systemd drop-in and effective configuration | 15 | Fast cohort, fourth hour, or post-course practice |

## Optional wall-clock schedule

If breaks and lunch are outside the six instructional hours:

| Time | Activity |
|---|---|
| 09:00–10:30 | Theory and demos, part 1 |
| 10:30–10:45 | Break |
| 10:45–12:15 | Theory and demos, part 2 |
| 12:15–13:00 | Lunch |
| 13:00–14:30 | Labs 1–4 plus Lab 5 start |
| 14:30–14:45 | Break |
| 14:45–16:15 | Finish Lab 5, then Labs 6–8 |

If the venue grants only six wall-clock hours, use 15-minute breaks and reduce each half to 165 teaching minutes; keep the participant/theory ratio at 50/50 by removing optional discussion prompts, not lab checkpoints.

## Room and learner setup

Send the prerequisites at least two business days before the workshop.

Ask learners to verify:

```text
multipass version
ssh -V
```

Also ask them to launch the image once before class if network bandwidth is uncertain:

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

For every command family, use the same rhythm:

1. State the job to be done.
2. Predict what the command should change.
3. Run it.
4. Read the output aloud.
5. Verify the resulting state with a different command.

This prevents “copy the magic command” behavior and models operational discipline.

## Live demo timings

| Demo | Target | Abort point |
|---|---:|---|
| VM boundary and navigation | 8 min | Use prepared terminal transcript |
| Permission repair | 10 min | Show final `stat` output |
| SSH key and host verification | 10 min | Use preinstalled key/profile |
| `journalctl` filtering | 7 min | Show captured unit log |
| Broken service diagnosis | 10 min | Switch to backup VM |

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

Do not take over a learner keyboard immediately. Ask for these four items:

```bash
pwd
whoami
history | tail -n 10
<the exact failing command repeated once>
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
