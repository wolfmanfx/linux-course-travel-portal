# Linux Foundations — Speaker Script

The same script is embedded in the PowerPoint speaker notes. Timings total 180 minutes of theory/demos; lab facilitation notes cover the 180-minute participant block.

## Slide 1 — Linux Foundations

Timing: 2 minutes.

Say: “Today is not about memorising a wall of commands. It is about building a reliable operating model: know which machine you are on, predict what a command will change, read the resulting state, and use logs as evidence.” Explain that everyone will use the same Ubuntu VM even though the host laptops differ. The first half builds the mental models and demonstrates them; the second half turns those models into muscle memory.

Set expectations: the VM is disposable, but the safety habits are production habits. Invite questions, but park deep distro-specific debates so the class reaches the service-diagnosis lab.

Transition: “Let’s define what success looks like six hours from now.”

## Slide 2 — By the end, you can recover your bearings

Timing: 3 minutes.

Say: “These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.

Ask for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs? Use the answer only to adjust examples—not scope.

Transition: “First, one distinction prevents half the mistakes in a mixed-laptop room.”

## Slide 3 — Your laptop and your VM are two different systems

Timing: 5 minutes.

Say: “The host creates and reaches the VM. The guest is the Linux system we administer.” Point out that a familiar-looking prompt does not guarantee the same filesystem or command set. On macOS, many Unix commands exist on the host, which makes accidental host edits especially easy. On Windows, a Bash command may simply fail in PowerShell.

Give the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The lab guide explicitly labels host and guest commands.

Ask: “If I run apt install in PowerShell, which system changes?” Answer: none; apt belongs inside Ubuntu.

Transition: “Now we can place six hours of work on a simple map.”

## Slide 4 — Practice gets exactly half of the workshop

Timing: 2 minutes.

Explain the exact split: 180 minutes of concepts and instructor demonstrations, then 180 minutes of guided participant work. Demonstrations belong to the teaching half because learners are predicting and observing rather than driving. The six labs are cumulative and reuse one VM.

If the venue gives only six wall-clock hours including breaks, use the compressed option in the instructor runbook: 165 minutes on each side and remove optional discussion prompts equally. Do not cut lab verification steps.

Transition: “With the operating boundary and schedule clear, what exactly do we mean by Linux?”

## Slide 5 — Linux is the kernel; a usable system is a stack

Timing: 8 minutes.

Say: “Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from hardware upward. The VM supplies virtual hardware. The kernel schedules processes and mediates devices. User space contains the shell and systemd. Applications are the commands and services learners interact with.

Use uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share the Linux kernel yet differ in packages, defaults, and support.

Avoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.

Transition: “A distribution chooses and maintains the pieces above the kernel.”

## Slide 6 — A distribution is a curated operating agreement

Timing: 7 minutes.

Frame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.

Explain why the workshop standardises on Ubuntu 24.04 LTS: consistent long-term-supported image, APT, OpenSSH, and systemd, available through Multipass on both host platforms. Mention that the troubleshooting method transfers even when commands vary slightly.

Ask: “What should you record before following a web tutorial?” Expected: distribution/version and command context.

Transition: “Across distributions, the filesystem gives us a shared map.”

## Slide 7 — Most investigations begin at five filesystem anchors

Timing: 8 minutes.

Anchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.

Connect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.

Ask learners to predict where SSH server configuration and package logs belong.

Transition: “The map becomes useful when paths behave like coordinates.”

## Slide 8 — Paths are coordinates; your working directory is the origin

Timing: 6 minutes.

Use the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.

Call out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.

Model the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.

Transition: “The terminal is where we express that intent—and where small symbols compose powerful workflows.”

## Slide 9 — The shell turns text into a process request

Timing: 6 minutes.

Parse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.

Mention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.

Do not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.

Transition: “A compact navigation vocabulary covers most daily movement.”

## Slide 10 — Navigate by asking, moving, then confirming

Timing: 6 minutes.

Teach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.

Point out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.

Transition: “Let’s see the host/guest boundary, paths, and a pipe in one live sequence.”

## Slide 11 — Live demo: narrate state, not keystrokes

Timing: 8 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 1. Before each command, ask or state the expected system and state change. Start at the host prompt, show multipass list, then enter the guest. Run whoami, hostname, and pwd. Move to /var/log, then return home and create the demo tree.

For the pipeline, explain that grep writes matching lines to standard output, the pipe carries that stream, and tee both displays and saves it. Verify with cat.

If typing takes too long, skip creating the sample log and use printf from the demo guide. Do not paste the whole block—the point is reading state changes.

Transition: “That pipe is one of three stream operators worth memorising.”

## Slide 12 — Pipes connect small tools into an investigation

Timing: 5 minutes.

Describe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.

Use tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.

Connect this to journalctl: filter at the source first, then use grep only when helpful.

Transition: “Files also carry identity and access rules, so we need to understand users before chmod.”

## Slide 13 — Linux authorizes identities, not job titles

Timing: 8 minutes.

Explain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.

Show the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.

Mention that group membership changes usually require a new login session.

Transition: “Administrative work temporarily changes authority; sudo makes that change explicit.”

## Slide 14 — Use sudo for one deliberate action

Timing: 5 minutes.

Say: “sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.

Contrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.

Transition: “Now we can decode the rule that combines identity with read, write, and execute.”

## Slide 15 — Permissions are three triplets evaluated in order

Timing: 8 minutes.

Decode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.

Distinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.

Use namei -l as a powerful path-permission diagnostic.

Transition: “Numeric modes are just compact arithmetic for those same three triplets.”

## Slide 16 — 4 + 2 + 1 makes numeric modes readable

Timing: 7 minutes.

Build 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.

Warn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.

Mention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.

Transition: “Mode answers what; ownership answers who.”

## Slide 17 — Shared work needs the right group, not world access

Timing: 7 minutes.

Present the real use case: Alice and Bob need a shared directory, everyone else needs no access. The solution is a team group, group-owned directory, 2770 mode, and setgid inheritance. This is better than 777 because it expresses who should collaborate.

Explain chown owner:group and chgrp. The leading 2 in 2770 activates setgid on the directory; new content inherits courseops as its group. Default file modes may still restrict group write, so production shares often add a suitable umask or default ACL—mention, do not teach today.

Transition: “Configuration is text, so we also need one terminal editor we can reliably exit.”

## Slide 18 — Nano is enough to make a safe first edit

Timing: 5 minutes.

Demonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.

Mention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.

Transition: “Let’s combine identity, ownership, mode, and path traversal in a repair.”

## Slide 19 — Live demo: repair access with the smallest change

Timing: 10 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 2. Set up the team group and directory, create a file as Alice, then show stat. Break access deliberately. Before fixing, ask the room which identity class applies and what permission is missing. Use id, stat, and namei -l to gather evidence.

Make the narrow repair: correct group ownership and mode 640. Retest using the same command and identity that failed. Point out that sudo cat succeeding would not prove the intended user can read.

If time slips, skip the initial directory construction and begin from the broken file.

Transition: “Local identity is one half of remote access; SSH adds server identity and cryptographic proof.”

## Slide 20 — SSH authenticates both ends of the conversation

Timing: 8 minutes.

Separate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.

Explain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.

Transition: “User key authentication works because the secret half never travels.”

## Slide 21 — The private key proves; the public key permits

Timing: 7 minutes.

Use a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.

Use Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.

Mention that enterprise policy may require hardware-backed keys or certificates.

Transition: “A client profile makes the safe choice repeatable.”

## Slide 22 — Put safe SSH defaults in a named client profile

Timing: 5 minutes.

Walk line by line. Host is the alias. HostName is the current VM IP. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.

Explain StrictHostKeyChecking carefully: accept-new is convenient in this isolated lab because it adds new hosts but rejects changed keys. In managed environments, pre-provision known_hosts or use yes and a trusted onboarding process. Never recommend no/off as a shortcut.

Point out the same config path concept works with Windows OpenSSH; PowerShell expands $HOME when creating files, while OpenSSH reads ~/.ssh/config.

Transition: “Now we’ll build the key path end to end and verify both identities.”

## Slide 23 — Live demo: verify before you trust

Timing: 10 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 3. First show the server host fingerprint inside the VM and record it. Generate a course-specific Ed25519 client key on the Mac. Transfer only the .pub file with multipass transfer so the same pattern works for Windows learners. Install the public key with 700 on .ssh and 600 on authorized_keys.

Connect from the host, compare the prompted fingerprint with the recorded value, then accept. Run whoami, hostname, and echo $SSH_CONNECTION.

Use a passphrase you can type quickly or pre-create the key if the room cannot see secret input. Never display a real personal key.

Transition: “Remote access gives us a shell; logs tell us what happened before we arrived.”

## Slide 24 — Linux logs live in files and in the systemd journal

Timing: 6 minutes.

Explain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.

Show that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.

The investigative rule is to frame a question first: which unit, which boot, which time window, which severity?

Transition: “journalctl turns those questions into filters.”

## Slide 25 — Filter the journal toward one answer

Timing: 7 minutes.

Build the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot.

Warn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.

Point out access: normal users may see only their own journal; sudo may be required for system units.

Transition: “We’ll now restart SSH and watch the relevant evidence appear.”

## Slide 26 — Live demo: ask the journal a smaller question

Timing: 7 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 4. Restart SSH to create a known event. Run status first and distinguish the current summary from historical journal entries. Query the last ten entries. Add a five-minute window and warning priority; explain that an empty result can be good news, not a broken command. Enter follow mode, create a connection event from another terminal if convenient, then stop with Ctrl+C.

Read one entry aloud: timestamp, host, process/unit, message. Model evidence extraction rather than scrolling.

Transition: “Logs describe services managed by systemd, so next we need the unit lifecycle.”

## Slide 27 — systemd manages declared units toward a state

Timing: 7 minutes.

Define a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.

Make enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.

Transition: “A small verb set handles most daily service work.”

## Slide 28 — Use systemctl verbs deliberately

Timing: 6 minutes.

Group verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.

Teach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.

Transition: “The final demo turns that sequence into a real repair.”

## Slide 29 — Live demo: status is the symptom; logs reveal the cause

Timing: 10 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 5. Install the unit with a missing User and WorkingDirectory. Start it and resist fixing immediately. Run status, then journalctl for the unit and time window. Identify the credential/user error and connect it to systemctl cat output.

Create the system user and service directory with explicit owner and mode. Add an index file, restart, and verify systemctl is-active. Finally use curl. Emphasise that active only proves the process is running; curl proves the intended behavior.

If the service unexpectedly starts, use a new nonexistent username. If the demo stalls, switch to the backup VM or show the prepared commands and outcomes.

Transition: “You now have one repeatable loop for unfamiliar Linux systems.”

## Slide 30 — A safe operator closes every change with evidence

Timing: 5 minutes.

This is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for host/guest, identity, working directory, predicted state, one cause, and behavior verification.

Reinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.

Announce the lab transition. Learners will now own the keyboard for exactly three hours.

Transition: “Keep this loop visible; every lab checkpoint uses it.”

## Slide 31 — Three hours. One VM. Six checkpoints.

Timing: 3 minutes of lab block orientation; this time is included in Lab 1.

Direct learners to the participant lab guide. Explain the status signal: green complete, amber working, red blocked. Pairing is optional but recommended: one driver types, one navigator reads the next step and predicts outcomes; swap after each lab.

State the support rule: when blocked, show pwd, whoami, recent history, and the exact repeated failing command. Do not silently start over.

Start the 25-minute Lab 1 timer now.

Transition: leave the next slide visible during Labs 1 and 2.

## Slide 32 — Labs 1–2 establish the system and the map

Lab facilitation: 60 minutes total.

For Lab 1, watch for driver/virtualization failures and learners running guest commands on the host. Ask them to read their prompt. At minute 18, announce seven minutes remaining. Checkpoint requires whoami, hostname, os-release, kernel, and pwd.

For Lab 2, prevent blind rm usage. Ask learners to predict the find output before running it. At minute 50 overall, give the ten-minute warning. Fast finishers should explain absolute versus relative paths to a partner, then complete the grep challenge.

Do not solve by taking the keyboard. Request pwd, whoami, and the exact command.

## Slide 33 — Labs 3–4 turn text and permissions into policy

Lab facilitation: 60 minutes total.

For Lab 3, explain that package download speed varies. Pair a slow learner with a peer for the Nano steps while APT finishes. Verify package state with version commands and the APT history log.

For Lab 4, insist on the use case: Alice owns, courseops reads, others have no access. Ask which class applies before each chmod. If group membership seems stale, use sudo -u as written in the guide or start a new login. The final checkpoint is both positive and negative: Bob succeeds and others remain blocked.

Fast finishers should use namei -l to explain every directory traversal permission.

## Slide 34 — Labs 5–6 connect trust to troubleshooting

Lab facilitation: 60 minutes total.

For Lab 5, learners alternate between host and guest. Make them announce the prompt before commands. The most common errors are copying the private key, wrong VM IP, and incorrect .ssh ownership or modes. Use namei -l and ssh -vv only after checking basics. Ensure fingerprints are compared.

For Lab 6, stop learners from creating courseapp before reading logs. They must record state, first useful error, and related configuration line. The final verification is threefold: is-active, is-enabled, and curl.

At minute 50, give ten minutes remaining. Fast finishers explain why daemon-reload is needed and why curl adds evidence beyond active state.

## Slide 35 — When blocked, widen evidence before widening privilege

Timing: keep visible during support or use for a 3-minute regroup.

If several learners hit different failures, pause and apply the ladder to one example. Context first prevents solving the wrong machine, user, or directory. Inspect the target and effective configuration. Reproduce once to capture the symptom. Gather logs and status. Only then change one cause and repeat the same verification.

The phrase “before widening privilege” matters: sudo can bypass the intended identity and produce a false success. Likewise chmod 777 can erase the evidence of a group-design problem.

Transition: return learners to their current lab with one requested evidence item.

## Slide 36 — The final challenge is to explain, not merely succeed

Timing: 8 minutes at the end of labs.

Use this as a peer assessment. Give pairs four minutes: Partner A explains the SSH chain, Partner B explains the service diagnosis, then each asks one question from the slide. Invite two concise reports.

Correct misconceptions directly: successful sudo access does not prove normal-user access; accepting an SSH fingerprint without comparison is trust-on-first-use, not verification; active service state does not prove application behavior; changing several things at once prevents causal confidence.

Transition: “You do not need every command in memory—you need a map and a repeatable loop.”

## Slide 37 — Keep the VM; keep practising the loop

Timing: 4 minutes.

Close by resolving the opening promise. Learners can now orient themselves, control access, establish remote trust, and diagnose a service with evidence. Encourage immediate repetition while the path is fresh. The Linux Upskill Challenge provides a free, open sequence for continued server practice.

Tell learners to keep the VM unless disk space is constrained. If they delete it, remind them that multipass delete plus purge is permanent. Production work requires organization policies, backups, change control, and approved key handling.

Final sentence: “The command you forget can be looked up; the habit of verifying state is what makes you safe.”

## Slide 38 — Sources and open-course attribution

Timing: 2 minutes or leave available after the close.

Acknowledge the Linux Upskill Challenge as the main open-course inspiration and its CC BY 4.0 terms. State that the workshop text and scenarios were newly written and commands were validated against primary documentation. Point learners to resources/SOURCES.md for direct URLs and license notes.

The visual design uses a CodeRabbit-inspired color mood, not the company logo or copied product UI. The title illustration was generated specifically for this course.

End with questions or keep the prior slide visible for a stronger final message.

