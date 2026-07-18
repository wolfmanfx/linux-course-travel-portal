# Linux Foundations — Speaker Script

The same script is embedded in the PowerPoint speaker notes. Timings total exactly 180 minutes across slides 1–90; slides 91–98 facilitate the 180-minute participant lab block, assessment, close, and references.

## Slide 1 — Linux Foundations

Timing: 2 minutes.

Say: “Today is not about memorising a wall of commands. It is about building a reliable operating model: know which Linux session you are in, predict what a command will change, read the resulting state, and use logs as evidence.”

Everyone uses the same isolated Ubuntu 24.04 environment through a browser, whether the physical laptop runs macOS or Windows. The first half builds the mental models and demonstrates them; the second half turns those models into muscle memory.

Set expectations: each container is disposable, but the safety habits are production habits. Invite questions, but park deep distribution debates so the class reaches the service-diagnosis lab.

Transition: “Next: OUTCOMES.”

## Slide 2 — OUTCOMES

Timing: 2 minutes.

Say: “These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.

Ask for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs? Use the answer only to adjust examples—not scope.

Transition: “Next: ENVIRONMENT.”

## Slide 3 — ENVIRONMENT

Timing: 2 minutes.

Say: “The browser is only the window. Each learner works in a real, isolated Ubuntu 24.04 system container behind it.” Point out that Safari, Edge, and Chrome all reach the same terminal; the host operating system no longer changes the lab commands.

Give the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The portal labels the current lab and lets the learner reset it to a known state.

Ask: “If I close the browser tab, does the Linux session disappear?” Answer: no; it remains on the peer controller until it is reset or destroyed.

Transition: “Next: COURSE MAP.”

## Slide 4 — COURSE MAP

Timing: 2 minutes.

Explain the exact split: 180 minutes of concepts and instructor demonstrations, then 180 minutes of guided participant work. Demonstrations belong to the teaching half because learners are predicting and observing rather than driving.

The eight labs are independent, resettable scenarios in isolated Incus containers. Learners enter through a browser terminal, make real system changes, and use “Check my work” to verify state.

If the venue gives only six wall-clock hours including breaks, use the compressed option in the instructor runbook: 165 minutes on each side and remove optional discussion prompts equally. Do not cut lab verification steps.

Transition: “Next: Linux is the kernel; a usable system is a stack.”

## Slide 5 — Linux is the kernel; a usable system is a stack

Timing: 2 minutes.

Say: “Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from the platform boundary upward. The controller VM supplies virtual hardware; each Incus system container shares the controller kernel while keeping its own user space, processes, filesystem, network, and systemd.

Use uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share a kernel yet differ in packages, defaults, and support.

Avoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.

Transition: “Next: The kernel turns hardware into abstractions.”

## Slide 6 — The kernel turns hardware into abstractions

Timing: 1.5 minutes.

Say: “The kernel turns hardware into abstractions.” Treat the kernel as the resource manager below every command. User programs request services through system calls instead of controlling hardware directly.

Processes means scheduled programs with isolated address spaces. Memory means virtual memory, pages, caches, and protection. Filesystems means one namespace across disks and virtual data. Network means sockets, routes, interfaces, and packet flow. Devices means drivers expose hardware through common interfaces.

Example: When cat reads a file, the shell starts cat, cat asks the kernel to open and read bytes, and the kernel coordinates permissions, storage, and memory.

Ask: “Which kernel responsibility is involved when a process is killed for using too much memory?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Next we separate the kernel from the programs that make the system usable.”

## Slide 7 — Kernel space and user space fail differently

Timing: 1.5 minutes.

Say: “Kernel space and user space fail differently.” A command returning ‘not found’ is normally a shell or package issue; a filesystem I/O error may point lower in the stack.

KERNEL SPACE, shared authority: Drivers and core resource control; A crash can affect the whole system; Observed with dmesg and kernel journal fields. USER SPACE, isolated processes: Shells, tools, daemons, applications; A crash usually affects one process; Observed with exit status and unit logs.

Example: If one web service stops but the host remains healthy, which side would you inspect first?

Ask: “The next abstraction is the process: a running instance, not a file on disk.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 8 — A process is a running program with context

Timing: 1.5 minutes.

Say: “A process is a running program with context.” The executable on disk is only the recipe. A process is that recipe running with identity, memory, environment, and open resources.

PID means a temporary process identifier. Parent means the process that created it. Identity means effective user and groups used for access checks. Environment means name/value data inherited at process start. Descriptors means open files, sockets, and streams.

Example: Use ps -ef for a broad view and ps -o pid,ppid,user,stat,cmd -p PID when you need focused evidence.

Ask: “Why can two processes run the same executable but access different files?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Distributions assemble the kernel and user space into something maintainable.”

## Slide 9 — DISTRIBUTIONS

Timing: 2 minutes.

Frame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.

Explain why the workshop standardises on Ubuntu 24.04 LTS: one long-term-supported image, APT, OpenSSH, and systemd, cloned into isolated Incus lab sessions. The browser makes that same Linux environment available from macOS and Windows.

Ask: “What should you record before following a web tutorial?” Expected: distribution, version, and command context.

Transition: “Next: Distribution families share ideas, not every command.”

## Slide 10 — Distribution families share ideas, not every command

Timing: 1.5 minutes.

Say: “Distribution families share ideas, not every command.” Package names, security defaults, and service names vary even when filesystem and permission concepts transfer.

Debian family: Ubuntu · Debian; APT + .deb; /etc/apt; Long support. Red Hat family: RHEL · Rocky · Alma; DNF + RPM; /etc/yum.repos.d; SELinux defaults. Other contexts: Fedora: newer stacks; Alpine: small images; Arch: rolling; Vendor clouds.

Example: A tutorial says yum install; your host has apt. What should you verify before translating it?

Ask: “Release strategy is the next distribution choice that changes operational risk.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 11 — Stable and rolling releases trade currency

Timing: 1.5 minutes.

Say: “Stable and rolling releases trade currency.” Ubuntu 24.04 LTS gives this class a consistent package set and support baseline; a development workstation may make a different tradeoff.

STABLE / LTS, predictability: Longer support window; Security fixes with fewer surprises; Older major versions are common. ROLLING, currency: Frequent package updates; Fast access to new features; More integration change over time.

Example: Which model would you favor for a long-lived production appliance, and why?

Ask: “Whatever the model, identify exactly what system you are operating.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 12 — Record six facts before following external instructions

Timing: 1.5 minutes.

Say: “Record six facts before following external instructions.” A copied command is only safe when its assumptions match the target. Capture the environment first so differences become visible.

Distribution means cat /etc/os-release. Kernel means uname -r. Architecture means uname -m. Package tool means command -v apt dnf apk. Init system means ps -p 1 -o comm=. Privilege means id; sudo -l.

Example: A container may report Ubuntu user space while sharing a kernel supplied by its host; both facts can be true.

Ask: “Which command answers the distribution question, and which answers the kernel question?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “That distinction matters most when comparing virtual machines and containers.”

## Slide 13 — Virtual machines isolate kernels; containers share one

Timing: 1.5 minutes.

Say: “Virtual machines isolate kernels; containers share one.” Learners receive a realistic Ubuntu user space with users, packages, logs, SSH, and systemd, while the instructor can reset each seat quickly.

VIRTUAL MACHINE, hardware boundary: Guest owns a kernel; Stronger isolation boundary; Higher memory and boot cost. SYSTEM CONTAINER, OS boundary: Shares the host kernel; Own user space and systemd; Fast cloning and reset.

Example: Does closing the browser destroy the container? Why not?

Ask: “The transferable skill is recognizing which concepts stay stable across these boundaries.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 14 — Core operating questions transfer across distributions

Timing: 1.5 minutes.

Say: “Core operating questions transfer across distributions.” APT may become DNF and ssh.service may become sshd.service, but context, least privilege, logs, and verification still guide the work.

Locate: Where am I?; Which host?; Which user?; Which file or unit?. Change: Predict one state; Use narrow privilege; Make one edit; Capture exit status. Verify: Inspect resulting state; Read relevant logs; Test intended identity; Prove behavior.

Example: Which parts of today’s workflow would survive a move from Ubuntu to Rocky Linux?

Ask: “Now we apply that operating model to the filesystem namespace.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 15 — FILESYSTEM

Timing: 2 minutes.

Anchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.

Connect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.

Ask learners to predict where SSH server configuration and package logs belong.

Transition: “Next: Filesystem paths express intent, not physical disks.”

## Slide 16 — Filesystem paths express intent, not physical disks

Timing: 1.5 minutes.

Say: “Filesystem paths express intent, not physical disks.” Linux presents one directory tree even when data comes from several disks, network shares, or virtual kernel filesystems.

/ means the root of the visible namespace. Mount means attach another filesystem at a directory. Path means a route through directory entries. File means a name referring to an inode-like object. Metadata means owner, mode, timestamps, size, and type.

Example: The command findmnt shows where filesystems are attached; df reports filesystem space, while du estimates space used by paths.

Ask: “Why can /home live on a different disk without changing user paths?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “The Filesystem Hierarchy Standard gives common directories a shared purpose.”

## Slide 17 — The hierarchy separates configuration, data, and runtime state

Timing: 1.5 minutes.

Say: “The hierarchy separates configuration, data, and runtime state.” A service configuration normally belongs under /etc; its changing cache or queue normally belongs under /var.

Configuration: /etc host settings; /usr shipped defaults; Prefer drop-ins; Track intentional edits. Persistent data: /home user files; /var changing service data; /srv served content; /opt optional software. Runtime state: /run since boot; /tmp temporary files; /proc process views; /sys device and kernel views.

Example: Where would you look first for a host-specific SSH configuration?

Ask: “Two special trees expose live kernel state as files.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 18 — /proc and /sys expose live kernel state

Timing: 1.5 minutes.

Say: “/proc and /sys expose live kernel state.” cat /proc/uptime reads a kernel-provided value. It does not read bytes stored on the root disk.

/proc, process + kernel state: PID directories describe processes; cpuinfo and meminfo expose summaries; Values may change between reads. /sys, devices + kernel objects: Hardware and driver relationships; Many tunables are writable by root; Changes can affect the running system.

Example: Why is copying /proc as a backup meaningless?

Ask: “Back in ordinary directories, every path is interpreted from a starting point.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 19 — FILESYSTEM

Timing: 2 minutes.

Use the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.

Call out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.

Model the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.

Transition: “Next: Path syntax has a small, precise vocabulary.”

## Slide 20 — Path syntax has a small, precise vocabulary

Timing: 1.5 minutes.

Say: “Path syntax has a small, precise vocabulary.” A path is evaluated left to right. Confusion usually comes from an incorrect starting directory or from shell expansion that happened before the command ran.

/name means absolute: begin at root. name means relative: begin at the working directory. . means the current directory. .. means the parent directory. ~ means current user's home. name/ means directory path; trailing slash clarifies intent.

Example: From /var/log, ../tmp means /var/tmp, not /tmp. Use realpath -m to reason about a path without requiring it to exist.

Ask: “What does ./script.sh communicate that script.sh does not?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Names beginning with a dot add one visibility convention, not a security boundary.”

## Slide 21 — Hidden names are a convention, not protection

Timing: 1.5 minutes.

Say: “Hidden names are a convention, not protection.” The directory ~/.ssh is hidden from a plain ls, but another user’s ability to read it depends on traversal and file modes.

NORMAL LISTING, ls: Omits names beginning with dot; Keeps routine output quieter; Permissions are unchanged. ALL ENTRIES, ls -la: Shows dotfiles and metadata; Useful for .ssh and configuration; Still governed by directory access.

Example: Would renaming secrets.txt to .secrets.txt make it confidential?

Ask: “The next layer is understanding what kind of object a directory entry names.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 22 — The first character of ls -l identifies object type

Timing: 1.5 minutes.

Say: “The first character of ls -l identifies object type.” Linux treats many resources through file-like interfaces, but type changes the meaning of operations and permissions.

- means regular file. d means directory. l means symbolic link. c / b means character or block device. s means Unix-domain socket. p means named pipe.

Example: Use file PATH for a content-oriented guess and stat PATH for authoritative metadata about the named object.

Ask: “What does the leading d in drwxr-x--- tell you before the permission bits?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Links let several pathnames refer directly or indirectly to data.”

## Slide 23 — Hard links and symbolic links fail in different ways

Timing: 1.5 minutes.

Say: “Hard links and symbolic links fail in different ways.” ln report.txt report-copy-name creates a hard link; ln -s report.txt latest creates a symbolic path reference.

HARD LINK, another name: Points to the same inode; Usually cannot cross filesystems; Data remains until last link is removed. SYMBOLIC LINK, stored path: Can cross filesystems; Can point to a directory; Can become dangling.

Example: If the original pathname is renamed, which link type is more likely to break?

Ask: “Before commands see paths, the shell may expand wildcard patterns.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 24 — Globs expand before the command starts

Timing: 1.5 minutes.

Say: “Globs expand before the command starts.” The shell expands globs into a list of matching pathnames. The receiving program normally never sees the wildcard.

* means zero or more characters except leading dot. ? means exactly one character. [ab] means one character from a set. [0-9] means one character in a range. Quoted glob means literal pattern; no pathname expansion.

Example: printf '%s\n' *.log safely shows the expanded arguments. Check that list before using the same pattern with rm or chmod.

Ask: “Why might rm *.log affect more files tomorrow than it does today?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Safe file work adds explicit inspection and verification around expansion.”

## Slide 25 — Inspect targets before changing files

Timing: 1.5 minutes.

Say: “Inspect targets before changing files.” For a risky batch, first replace rm with printf '%s\n' or use find with -print. Only then run the change.

Step 1, Locate: pwd and realpath. Step 2, Enumerate: printf or find the exact targets. Step 3, Predict: state the expected names and count. Step 4, Change: cp, mv, or rm with narrow scope. Step 5, Verify: list, compare, or test the result.

Example: What evidence would you capture before removing every .tmp file under one directory?

Ask: “A short failure demo shows why current-directory assumptions are dangerous.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 26 — Live demo: expose a wrong-directory assumption

Timing: 4 minutes.

Say: “Live demo: expose a wrong-directory assumption.” Narrate the expected working directory before every command, then let the first cat fail without adding sudo or changing modes.

Run the commands one at a time. Before each command, predict the state or evidence it should produce; after it runs, point to the output that confirms or challenges the prediction.

Example: Ask the room for the smallest explanation of the failure before revealing pwd.

Ask: “With paths grounded, we can examine how the terminal and shell transform text into work.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 27 — TERMINAL

Timing: 2 minutes.

Parse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.

Mention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.

Do not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.

Transition: “Next: Terminal, shell, and command are separate layers.”

## Slide 28 — Terminal, shell, and command are separate layers

Timing: 1.5 minutes.

Say: “Terminal, shell, and command are separate layers.” The browser terminal and macOS Terminal can both run a Bash session; the window differs while the shell language remains familiar.

TERMINAL, input + display: Keyboard and screen interface; Local app or browser ttyd; Transports control characters. SHELL, parser + launcher: Expands variables and globs; Connects pipelines and redirections; Starts programs and reports status.

Example: Which layer expands *.log: terminal, shell, or grep?

Ask: “Quoting controls exactly which transformations the shell performs.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 29 — Quoting decides what the shell expands

Timing: 1.5 minutes.

Say: “Quoting decides what the shell expands.” Most shell bugs are argument bugs. Quote data so spaces and wildcard characters remain part of one intended argument.

Unquoted means split words, expand variables, expand globs. 'single quotes' means preserve every character literally. "double quotes" means expand variables but preserve one argument. backslash means escape the next character. $() means replace with captured command output.

Example: mkdir -p "$HOME/course notes" creates one directory. Without quotes, the shell passes two path arguments.

Ask: “How many arguments does printf '%s\n' "$HOME" pass after expansion?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Variable and command expansion happen before the program receives its argument list.”

## Slide 30 — Shell expansion explains surprising commands

Timing: 1.5 minutes.

Say: “Shell expansion explains surprising commands.” You do not need every Bash parsing rule, but you should know that the displayed line is not necessarily the final argument list.

Parse means recognize quotes, operators, and command boundaries. Parameters means replace $name and ${name}. Commands means replace $(...) with output. Split means unquoted results may become several words. Glob means patterns may become many pathnames. Execute means run the final program and arguments.

Example: Use printf '<%s>\n' -- $value and then "$value" to demonstrate how quoting changes argument boundaries.

Ask: “Why is rm -rf $target dangerous when target is empty or contains spaces?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “After execution, the shell records one small but valuable result: exit status.”

## Slide 31 — Exit status reports success or failure

Timing: 1.5 minutes.

Say: “Exit status reports success or failure.” Exit status is machine-readable evidence, but its exact meaning belongs to the command. For grep, one can mean no match rather than a broken program.

0 means the command reports success. 1–125 means program-defined condition or failure. 126 means found but not executable. 127 means command not found. 128 + signal means terminated by a signal.

Example: Run a command, then immediately print printf 'status=%s\n' "$?" before another command overwrites the value.

Ask: “Can a command print an error and still return zero? What would you trust?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Shell operators can use that status to control the next action.”

## Slide 32 — Control operators and pipes solve different jobs

Timing: 1.5 minutes.

Say: “Control operators and pipes solve different jobs.” sudo apt update && sudo apt install tree stops before installation if the index refresh fails.

&& AND ||, control flow: Run next only on success; Or run fallback on failure; Status determines the branch. | PIPE, data flow: Connect stdout to stdin; Commands run as a pipeline; Last status is reported by default.

Example: Why is command1 | command2 not a replacement for command1 && command2?

Ask: “Streams give every process three conventional communication channels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 33 — TERMINAL

Timing: 2 minutes.

Teach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.

Point out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.

Transition: “Next: Use local help before trusting a random command.”

## Slide 34 — Use local help before trusting a random command

Timing: 1.5 minutes.

Say: “Use local help before trusting a random command.” Use man 5 ssh_config for the file format and man 1 ssh for the client command; the section number disambiguates names.

Quick syntax: command --help; Short option summary; Examples may be included; Best for recall. Full manual: man command; /pattern to search; n for next result; q to leave. Shell built-ins: help cd; type command; command -V name; distinguish aliases.

Example: How can type reveal that cd is not an external executable?

Ask: “Package tools add a maintained software source above individual commands.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 35 — APT separates repositories, indexes, and installed files

Timing: 1.5 minutes.

Say: “APT separates repositories, indexes, and installed files.” An old local index can report a package missing even when the repository has added it.

Repository: Signed metadata; Package archives; Release channels; Repository trust keys. Local index: Refreshed by apt update; Available versions; Candidate selection; Dependency metadata. Installed state: Tracked by dpkg; Files on disk; Package status; APT history log.

Example: Which operation requires network metadata but does not itself install software?

Ask: “A safe package workflow inspects candidate and resulting state.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 36 — Use APT with an inspect-change-verify rhythm

Timing: 1.5 minutes.

Say: “Use APT with an inspect-change-verify rhythm.” Package installation is a privileged system change. Read the proposed transaction before confirming it.

Refresh means sudo apt update. Search means apt search tree. Inspect means apt show tree. Install means sudo apt install tree. Verify means dpkg -s tree; command -v tree. Audit means less /var/log/apt/history.log.

Example: Use apt-get in noninteractive automation only after understanding prompts and failure behavior; apt is convenient for humans.

Ask: “What two checks prove that a package is registered and its command is discoverable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Configuration edits need the same discipline as package changes.”

## Slide 37 — Live demo: narrate state, not keystrokes

Timing: 4 minutes.

Live demo. Open the instructor demo seat in the browser and prepare Lab 1. Before each command, ask or state the expected session and state change. Start with whoami, hostname, and pwd; move to /var/log, then return home and create the demo tree.

For the pipeline, explain that grep writes matching lines to standard output, the pipe carries that stream, and tee both displays and saves it. Verify with cat.

If typing takes too long, use the prepared printf command. Do not paste the whole block—the point is reading state changes.

Transition: “Next: TERMINAL.”

## Slide 38 — TERMINAL

Timing: 2 minutes.

Describe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.

Use tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.

Connect this to journalctl: filter at the source first, then use grep only when helpful.

Transition: “Next: Processes start with three standard streams.”

## Slide 39 — Processes start with three standard streams

Timing: 1.5 minutes.

Say: “Processes start with three standard streams.” Separating normal results from diagnostics lets tools compose without hiding errors.

stdin means file descriptor 0: keyboard or pipe input. stdout means file descriptor 1: normal output. stderr means file descriptor 2: diagnostics. > means replace a file with stdout. 2> means replace a file with stderr.

Example: command >result.txt 2>error.txt produces two evidence files. command >all.txt 2>&1 combines them in order.

Ask: “If a pipeline looks empty but errors remain on screen, which stream explains it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Good pipelines narrow a question one stage at a time.”

## Slide 40 — Build pipelines as readable evidence stages

Timing: 1.5 minutes.

Say: “Build pipelines as readable evidence stages.” For status counts: awk '{print $9}' access.log | sort | uniq -c | sort -nr. Inspect the selected field before counting it.

Step 1, Question: state the answer you need. Step 2, Source: choose the smallest relevant input. Step 3, Filter: remove unrelated records. Step 4, Transform: extract, sort, or count. Step 5, Verify: inspect samples and totals.

Example: Which stage would you test first if the final count is zero?

Ask: “Avoid one common mistake: discarding diagnostics to make output look clean.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 41 — Silence does not prove success

Timing: 1.5 minutes.

Say: “Silence does not prove success.” A discovery command may intentionally ignore permission errors, but a package installation should not hide them.

HIDDEN ERROR, 2>/dev/null: Removes diagnostic evidence; Can turn a real failure into silence; Acceptable only when failure is expected. CAPTURED ERROR, 2>error.log: Preserves evidence; Can be reviewed or attached; Keeps stdout usable as data.

Example: When would redirecting stderr to /dev/null be defensible?

Ask: “The fastest safe operators know how to ask the local system for help.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 42 — USERS & GROUPS

Timing: 2 minutes.

Explain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.

Show the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.

Mention that group membership changes usually require a new login session.

Transition: “Next: Names are convenient; numeric IDs drive authorization.”

## Slide 43 — Names are convenient; numeric IDs drive authorization

Timing: 2 minutes.

Say: “Names are convenient; numeric IDs drive authorization.” Files store numeric ownership. Name services translate those numbers for display.

Username means human-readable account label. UID means numeric user identity used by the kernel. Group name means human-readable collaboration label. GID means numeric group identity stored on files. Effective IDs means identity currently used for access checks.

Example: A restored disk can show unexpected names if the destination maps the same numeric UID to a different account.

Ask: “Why does ls -ln help diagnose identity mapping problems?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Local account files show where common name mappings originate.”

## Slide 44 — Account databases separate public identity from secrets

Timing: 2 minutes.

Say: “Account databases separate public identity from secrets.” getent passwd alice and getent group webteam are better operational checks than parsing files directly.

/etc/passwd: name and UID; primary GID; home directory; login shell. /etc/group: group name and GID; supplementary members; not every primary member; readable account data. /etc/shadow: password hashes; aging fields; root-readable only; never copy casually.

Example: Why might grep alice /etc/passwd miss an account that id alice can resolve?

Ask: “Group membership becomes part of a process when the session starts.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 45 — Existing shells keep old group credentials

Timing: 2 minutes.

Say: “Existing shells keep old group credentials.” Adding a learner to webteam does not automatically update a terminal opened before the change.

ACCOUNT DATABASE, updated now: usermod changes membership; getent shows the new record; Future sessions inherit it. CURRENT SHELL, old credentials: Keeps groups from login time; id may not show the change; Re-login or newgrp refreshes context.

Example: What is the least surprising way to pick up new groups in production?

Ask: “Privilege escalation is another identity transition and should be narrow.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 46 — USERS & GROUPS

Timing: 2 minutes.

Say: “sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.

Contrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.

Transition: “Next: sudo policy answers who may run what as whom.”

## Slide 47 — sudo policy answers who may run what as whom

Timing: 2 minutes.

Say: “sudo policy answers who may run what as whom.” sudo is a policy engine, not simply a synonym for administrator mode.

Caller means the authenticated invoking user. Target means root by default or selected with -u. Command means the permitted executable and arguments. Policy means rules from sudoers and included files. Audit means logs record the privileged request.

Example: sudo -u www-data test -r /srv/site/index.html checks behavior as the service identity without opening a root shell.

Ask: “Why is sudo cat file a poor test of whether an application user can read it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Permissions combine identity with ownership and mode bits.”

## Slide 48 — PERMISSIONS

Timing: 2 minutes.

Decode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.

Distinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.

Use namei -l as a powerful path-permission diagnostic.

Transition: “Next: Access checks select one permission class.”

## Slide 49 — Access checks select one permission class

Timing: 2 minutes.

Say: “Access checks select one permission class.” Linux does not combine the most generous bits. It selects a class based on identity, then evaluates that class.

Owner match means use only the owner triplet. Else group match means use only the group triplet. Else means use the other triplet. No fallback means failed owner bits do not try group bits. Privilege means root and capabilities can alter normal rules.

Example: If Alice owns a file with mode 040 but belongs to the file’s group, the empty owner read bit still denies her normal read access.

Ask: “Which triplet applies first when UID matches the owner?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Directory permissions use the same letters but different operations.”

## Slide 50 — Directory r, w, and x control different abilities

Timing: 2 minutes.

Say: “Directory r, w, and x control different abilities.” Deleting a file depends mainly on the parent directory permissions, not on the file’s own write bit.

Read · r: list entry names; does not reveal metadata alone; ls may show names only; needs x for useful lookup. Write · w: create entries; remove entries; rename entries; usually requires x too. Execute · x: traverse the directory; look up named entries; reach deeper paths; not ‘run the directory’.

Example: Why can a user delete a read-only file from a writable directory?

Ask: “A path succeeds only if every parent directory can be traversed.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 51 — Parent directories participate in every path lookup

Timing: 2 minutes.

Say: “Parent directories participate in every path lookup.” Correct file mode is insufficient when one parent directory blocks traversal.

/ means traverse root. /srv means traverse service data. /srv/team means traverse team directory. file means apply file read or write bits. namei -l means display every component and its mode.

Example: namei -l /srv/team/report.txt often explains ‘permission denied’ faster than repeated chmod on the file.

Ask: “Which directory would you inspect if the file looks readable but open still fails?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Symbolic notation makes targeted mode changes clearer than broad numbers.”

## Slide 52 — PERMISSIONS

Timing: 2 minutes.

Build 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.

Warn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.

Mention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.

Transition: “Next: Symbolic chmod states exactly who and what changes.”

## Slide 53 — Symbolic chmod states exactly who and what changes

Timing: 2 minutes.

Say: “Symbolic chmod states exactly who and what changes.” Symbolic changes are excellent for narrow repairs because they preserve unrelated classes unless you use equals.

u means owner class. g means group class. o means other class. + / - means add or remove selected bits. = means set the selected class exactly. chmod g+r means add group read without changing other bits.

Example: chmod u=rw,g=r,o= report.txt expresses mode 640 as intent rather than arithmetic.

Ask: “Which command removes only write permission from others?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “New files begin from requested modes reduced by the process umask.”

## Slide 54 — umask removes permissions; it never grants

Timing: 2 minutes.

Say: “umask removes permissions; it never grants.” Use umask to inspect the current shell and umask 027 for a session where new files should not be available to others.

REQUESTED MODE, program default: Files commonly request 666; Directories commonly request 777; Execute is not added to ordinary files. UMASK, bits to clear: 022 yields files 644; 022 yields directories 755; Process-local and inherited.

Example: Why does umask 022 not make a new text file executable?

Ask: “Shared directories add setgid so group ownership remains predictable.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 55 — PERMISSIONS

Timing: 2 minutes.

Present the real use case: Alice and Bob need a shared directory, everyone else needs no access. The solution is a team group, group-owned directory, 2770 mode, and setgid inheritance. This is better than 777 because it expresses who should collaborate.

Explain chown owner:group and chgrp. The leading 2 in 2770 activates setgid on the directory; new content inherits courseops as its group. Default file modes may still restrict group write, so production shares often add a suitable umask or default ACL—mention, do not teach today.

Transition: “Next: setgid keeps shared directories in one group.”

## Slide 56 — setgid keeps shared directories in one group

Timing: 2 minutes.

Say: “setgid keeps shared directories in one group.” setgid solves group drift; it does not decide the exact read and write bits of new files.

Directory owner means usually an administrator or service account. Directory group means the collaborating team. Mode 2xxx means setgid bit on the directory. New entries means inherit the directory group. Verification means stat and create a file as a real member.

Example: A team directory often combines group ownership, mode 2770, and a cooperative umask such as 0002 or default ACLs.

Ask: “What does the leading 2 mean in 2770?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Public scratch directories need a different special bit: sticky.”

## Slide 57 — Sticky protects names in shared directories

Timing: 2 minutes.

Say: “Sticky protects names in shared directories.” stat -c '%A %a %n' /tmp commonly reports a mode equivalent to 1777.

WITHOUT STICKY, shared write: Any writer may remove entries; File ownership does not protect names; Easy for users to disrupt each other. WITH STICKY, mode 1xxx: Only owner, directory owner, or root removes; Typical example is /tmp; Shown as t in the other execute position.

Example: Would sticky prevent another user from reading a world-readable file?

Ask: “When triplets are too coarse, ACLs can add named exceptions.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 58 — ACLs extend permissions without replacing the base model

Timing: 2 minutes.

Say: “ACLs extend permissions without replacing the base model.” setfacl -m u:bob:r report.txt can grant Bob read access, but getfacl is required to see the whole policy.

MODE BITS, three classes: Owner, group, other; Visible in ls -l; Portable baseline. POSIX ACL, named entries: Additional users or groups; Mask limits effective named rights; Inspect with getfacl.

Example: Why can an ACL entry show rw while effective access is only r?

Ask: “Troubleshooting should test the full identity and path before changing anything.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 59 — TERMINAL EDITOR

Timing: 2 minutes.

Demonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.

Mention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.

Transition: “Next: Safe edits use backup, diff, and validation.”

## Slide 60 — Safe edits use backup, diff, and validation

Timing: 2 minutes.

Say: “Safe edits use backup, diff, and validation.” For SSH server configuration, run sshd -t before restarting the service. For sudo policy, use visudo rather than a generic editor.

Step 1, Inspect: read the current file and ownership. Step 2, Protect: copy or use version control where appropriate. Step 3, Edit: nano or sudoedit the exact path. Step 4, Validate: use the program’s syntax checker. Step 5, Apply: reload or restart, then verify behavior.

Example: Which step prevents a typo from turning into an outage?

Ask: “Next we connect processes and files to the identities Linux authorizes.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 61 — Live demo: repair access with the smallest change

Timing: 4 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 2. Set up the team group and directory, create a file as Alice, then show stat. Break access deliberately. Before fixing, ask the room which identity class applies and what permission is missing. Use id, stat, and namei -l to gather evidence.

Make the narrow repair: correct group ownership and mode 640. Retest using the same command and identity that failed. Point out that sudo cat succeeding would not prove the intended user can read.

If time slips, skip the initial directory construction and begin from the broken file.

Transition: “Next: Diagnose permission failures from identity to behavior.”

## Slide 62 — Diagnose permission failures from identity to behavior

Timing: 2 minutes.

Say: “Diagnose permission failures from identity to behavior.” Use sudo -u alice -- test -r PATH and sudo -u outsider -- test -r PATH to prove both the allowed and denied cases.

Step 1, Identity: id and groups for the failing process. Step 2, Path: namei -l every component. Step 3, Object: stat owner, group, mode, ACL. Step 4, Policy: sudo, service user, mount, or security layer. Step 5, Retest: repeat as the intended non-root identity.

Example: What would chmod 777 hide rather than explain?

Ask: “Remote access adds two more identities: the server host and the remote user.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 63 — SSH authenticates both ends of the conversation

Timing: 2 minutes.

Separate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.

Explain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.

Transition: “Next: SSH separates transport, host, and user trust.”

## Slide 64 — SSH separates transport, host, and user trust

Timing: 2 minutes.

Say: “SSH separates transport, host, and user trust.” Encryption prevents eavesdropping only when you also authenticate the endpoint you intended to reach.

Transport means encrypts and protects session integrity. Host key means proves which server endpoint answered. User proof means proves which account may log in. Account policy means server maps proof to account policy. Session means starts command, shell, forwarding, or subsystem.

Example: A valid user key presented to an attacker still exposes interaction if the client accepted the attacker’s host key.

Ask: “Which trust question is answered by known_hosts?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Host keys and user keys look similar but live on opposite sides for different reasons.”

## Slide 65 — Host keys identify servers; user keys identify people

Timing: 2 minutes.

Say: “Host keys identify servers; user keys identify people.” The client compares the server host key before offering user authentication; these are sequential trust decisions.

HOST KEY, server identity: Private half stays on server; Client stores public fingerprint; Change requires investigation. USER KEY, user identity: Private half stays with user; Server stores public key; Can be revoked per account.

Example: Where should the user private key exist after setup?

Ask: “Fingerprint verification makes the first server trust decision explicit.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 66 — Verify host keys through an independent channel

Timing: 2 minutes.

Say: “Verify host keys through an independent channel.” Use ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub on the server console and compare it with the client prompt over a trusted channel.

Step 1, Obtain: get the expected fingerprint from an administrator. Step 2, Connect: observe the presented fingerprint. Step 3, Compare: match algorithm and complete fingerprint. Step 4, Accept: store the verified key in known_hosts. Step 5, Recheck: treat later changes as an event.

Example: What legitimate events can change a host key, and why must they still be verified?

Ask: “The user private key deserves local protection even though it never travels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 67 — The private key proves; the public key permits

Timing: 2 minutes.

Use a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.

Use Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.

Mention that enterprise policy may require hardware-backed keys or certificates.

Transition: “Next: A passphrase and agent reduce private-key exposure.”

## Slide 68 — A passphrase and agent reduce private-key exposure

Timing: 2 minutes.

Say: “A passphrase and agent reduce private-key exposure.” A key without a passphrase can be appropriate for tightly controlled automation, but it needs stronger surrounding controls and narrow authorization.

Phrase means a passphrase encrypts the private key file at rest. KDF rounds means increase cost of password guessing. Agent means holds an unlocked key for a limited session. Permissions means prevent other local users from reading the file. Rotation means replace compromised or obsolete credentials.

Example: For interactive use, create an Ed25519 key with a passphrase and let ssh-agent avoid repeated prompts during one trusted login session.

Ask: “What threat does a passphrase mitigate after a laptop is stolen?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “The public key belongs in authorized_keys with strict path ownership.”

## Slide 69 — OpenSSH checks every component of the authorization path

Timing: 2 minutes.

Say: “OpenSSH checks every component of the authorization path.” StrictModes protects users from another local account replacing their authorized keys.

Home directory means owned by the account; not broadly writable. ~/.ssh means normally mode 700. authorized_keys means normally mode 600. Public key line means complete algorithm and key data. Account means login shell and policy must allow access. Server log means explains rejected ownership or mode.

Example: Use namei -l ~/.ssh/authorized_keys to inspect the entire path and journalctl -u ssh for the server’s reason.

Ask: “Why can a perfectly valid key fail when the home directory is group-writable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Client configuration then makes the verified choices repeatable.”

## Slide 70 — Put safe SSH defaults in a named client profile

Timing: 2 minutes.

Walk line by line. Host is the alias. HostName and Port identify the server. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.

In Lab 6 the training server is localhost on port 2222 because both SSH endpoints live inside the isolated learner container. For production, the same profile points to a remote DNS name or address.

Explain StrictHostKeyChecking carefully: accept-new is convenient in a disposable lab but still rejects changed keys. Managed environments should pre-provision known_hosts or use yes with a trusted onboarding process.

Transition: “Next: SSH uses the first value obtained.”

## Slide 71 — SSH uses the first value obtained

Timing: 2 minutes.

Say: “SSH uses the first value obtained.” SSH uses the first value found for most parameters, so ordering matters when several Host blocks match.

Command line means explicit options for this invocation. User config means ~/.ssh/config patterns in order. System config means /etc/ssh/ssh_config defaults. Host patterns means specific entries should appear before broad ones. Effective view means ssh -G alias prints resolved settings.

Example: Place Host production-web before Host * and verify the result with ssh -G production-web | less.

Ask: “Which command shows the effective HostName, User, and IdentityFile without connecting?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “When connection fails, troubleshoot in layers rather than adding random flags.”

## Slide 72 — Live demo: verify before you trust

Timing: 4 minutes.

Live demo. Prepare Lab 6 in the instructor demo seat. Generate a dedicated Ed25519 client key inside the learner session, record the training server host key for port 2222, and show the bracketed known_hosts entry.

Use ssh-copy-id with the temporary bootstrap password training. Emphasise that only the public key is installed. Then connect with BatchMode enabled; success proves no password prompt was required. Run id and hostname to verify the remote identity.

Never display a real personal key or reuse a production credential.

Transition: “Next: Test SSH failures one layer at a time.”

## Slide 73 — Test SSH failures one layer at a time

Timing: 2 minutes.

Say: “Test SSH failures one layer at a time.” Run ssh -vv alias, then read from connection establishment through host-key check to the first authentication rejection.

Step 1, Network: resolve name and reach the port. Step 2, Host trust: inspect known_hosts and fingerprint. Step 3, Client choice: ssh -G shows user, key, and port. Step 4, User auth: ssh -vv reveals offered and accepted methods. Step 5, Server policy: read ssh service logs and account state.

Example: What does ‘Permission denied (publickey)’ prove, and what does it not prove?

Ask: “Once connected, logs provide the historical evidence needed for broader diagnosis.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 74 — Linux logs live in files and in the systemd journal

Timing: 2 minutes.

Explain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.

Show that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.

The investigative rule is to frame a question first: which unit, which boot, which time window, which severity?

Transition: “Next: A useful log record answers five questions.”

## Slide 75 — A useful log record answers five questions

Timing: 2 minutes.

Say: “A useful log record answers five questions.” Logs are evidence emitted by software, not guaranteed truth. Interpret them with system state and behavior.

When means timestamp with timezone or boot context. Where means host, container, or node. Who means unit, process, PID, or identity. What means event and severity. Why next means correlation field, exit code, or causal detail.

Example: Read one line aloud by naming timestamp, host, source, and message before deciding what it means.

Ask: “Which missing field would make two similar hosts difficult to distinguish?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “The journal adds structured fields and boot-aware queries to plain text.”

## Slide 76 — Filter the journal toward one answer

Timing: 2 minutes.

Build the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot.

Warn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.

Point out access: normal users may see only their own journal; sudo may be required for system units.

Transition: “Next: journalctl can narrow by unit, boot, time, and priority.”

## Slide 77 — journalctl can narrow by unit, boot, time, and priority

Timing: 2 minutes.

Say: “journalctl can narrow by unit, boot, time, and priority.” Start with the service and incident window, then widen only if the answer is absent.

Unit means -u ssh.service. Current boot means -b. Previous boot means -b -1. Time means --since '-10 minutes'. Priority means -p warning. Stable output means -n 50 --no-pager -o short-iso.

Example: journalctl -u course-web -b --since '-10 min' --no-pager creates a bounded incident view.

Ask: “Why might -p err hide the line that explains a later failure?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “A disciplined filter workflow avoids both noise and missing context.”

## Slide 78 — Filter narrowly, then widen one dimension at a time

Timing: 2 minutes.

Say: “Filter narrowly, then widen one dimension at a time.” If the unit log shows only a dependency failure, widen to the named dependency rather than dumping the complete journal.

Bound: Choose one unit; Select one boot; Set the time window; Name the incident. Read: Follow timestamps; Find the first cause; Capture exit reason; Note dependencies. Widen: Extend time; Add priorities; Inspect related units; Inspect the process.

Example: Which dimension would you widen first when the earliest line says ‘dependency failed’?

Ask: “Following live events is useful, but it answers a different question from history.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 79 — Live demo: ask the journal a smaller question

Timing: 4 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 4. Restart SSH to create a known event. Run status first and distinguish the current summary from historical journal entries. Query the last ten entries. Add a five-minute window and warning priority; explain that an empty result can be good news, not a broken command. Enter follow mode, create a connection event from another terminal if convenient, then stop with Ctrl+C.

Read one entry aloud: timestamp, host, process/unit, message. Model evidence extraction rather than scrolling.

Transition: “Next: History and live follow serve different jobs.”

## Slide 80 — History and live follow serve different jobs

Timing: 2 minutes.

Say: “History and live follow serve different jobs.” Use one terminal for journalctl -f and another to reproduce the action, then return to a bounded query for the final record.

BOUNDED QUERY, incident review: Repeatable output; Easy to save and compare; Best for finding first cause. FOLLOW · -f, live observation: Shows new entries; Useful while reproducing; Stop with Ctrl+C.

Example: Why can follow mode make you miss the event that happened before you started watching?

Ask: “systemd connects service state, unit configuration, and journal evidence.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 81 — SYSTEMD

Timing: 2 minutes.

Define a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.

Make enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.

Transition: “Next: Unit files come from layered locations.”

## Slide 82 — Unit files come from layered locations

Timing: 2 minutes.

Say: “Unit files come from layered locations.” Prefer small drop-ins over editing vendor files that package upgrades may replace.

Vendor units means /usr/lib/systemd/system. Admin units means /etc/systemd/system and overrides. Runtime units means /run/systemd/system. Drop-ins means name.service.d/*.conf overrides selected settings. Effective view means systemctl cat name.service.

Example: systemctl edit name.service creates an administrator override while systemctl cat shows the combined effective unit.

Ask: “Which location should contain a durable local override?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “The manager turns that declaration into a runtime state machine.”

## Slide 83 — Service transitions leave journal evidence

Timing: 2 minutes.

Say: “Service transitions leave journal evidence.” A unit can be loaded correctly yet fail during credential setup before its command ever starts.

Declared: ExecStart command; Service user; Dependencies; Restart policy. Transition: Conditions; Ordering; Credentials; Exit status. Observed: Active state; Substate; Main PID; Journal events.

Example: What evidence distinguishes ‘unit not found’ from ‘process exited’?

Ask: “Dependencies and ordering explain why one failure can appear in several units.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 84 — Requirement and ordering are separate relationships

Timing: 2 minutes.

Say: “Requirement and ordering are separate relationships.” Requirement and order are separate questions. After=network.target does not guarantee an application-ready network connection.

Requires= means start together; failure relationship. Wants= means weaker activation relationship. After= means ordering only; does not pull a unit in. Before= means inverse ordering relationship. PartOf= means propagate selected lifecycle actions.

Example: Use systemctl list-dependencies unit and systemctl show unit -p Wants -p Requires -p After to inspect relationships.

Ask: “Why is After= not sufficient to start a missing dependency?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “Daily operations also require precise distinctions among start, enable, reload, and restart.”

## Slide 85 — SYSTEMD

Timing: 2 minutes.

Group verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.

Teach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.

Transition: “Next: Enabled, active, reloaded, and restarted are independent facts.”

## Slide 86 — Enabled, active, reloaded, and restarted are independent facts

Timing: 2 minutes.

Say: “Enabled, active, reloaded, and restarted are independent facts.” After editing a unit file: daemon-reload, restart the unit, then verify state and behavior. After editing app config, use reload only if the app supports it.

BOOT + RUNTIME, enable / start: enable changes boot links; start changes current state; --now requests both operations. CONFIG APPLY, reload / restart: reload asks process to reread; restart replaces runtime process; daemon-reload rereads unit files.

Example: Does systemctl enable guarantee the service is healthy now?

Ask: “The final troubleshooting sequence combines every evidence habit from the course.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 87 — Live demo: status is the symptom; logs reveal the cause

Timing: 4 minutes.

Live demo. Use resources/LIVE_DEMOS.md, Demo 5. Install the unit with a missing User and WorkingDirectory. Start it and resist fixing immediately. Run status, then journalctl for the unit and time window. Identify the credential/user error and connect it to systemctl cat output.

Create the system user and service directory with explicit owner and mode. Add an index file, restart, and verify systemctl is-active. Finally use curl. Emphasise that active only proves the process is running; curl proves the intended behavior.

If the service unexpectedly starts, use a new nonexistent username. If the demo stalls, switch to the backup VM or show the prepared commands and outcomes.

Transition: “Next: Diagnose services from symptom to verified behavior.”

## Slide 88 — Diagnose services from symptom to verified behavior

Timing: 2 minutes.

Say: “Diagnose services from symptom to verified behavior.” For a web service, combine is-active, is-enabled, socket inspection if needed, and curl against the actual URL.

Step 1, State: systemctl status and is-active. Step 2, Events: journalctl by unit, boot, and time. Step 3, Definition: systemctl cat and show. Step 4, Repair: change one evidenced cause. Step 5, Behavior: test the endpoint as a real client.

Example: What independent check proves more than systemctl status alone?

Ask: “The capstone demo applies this sequence without guessing.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “undefined”

## Slide 89 — Live demo: separate the first cause from later noise

Timing: 4 minutes.

Say: “Live demo: separate the first cause from later noise.” Close with state, configuration, logs, and client behavior.

Status means systemctl status course-web --no-pager. Events means journalctl -u course-web -b --since '-10 min'. Definition means systemctl cat course-web. Repair means change only the evidenced cause. Restart means systemctl restart course-web. Verify means is-active plus curl http://127.0.0.1:8088/.

Example: Pause after each command and ask which question it answers. Do not create the missing path until the journal and effective unit have identified it.

Ask: “Ask learners to name the first useful error and the final behavioral proof.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.

Transition: “The theory checkpoint now compresses the full course into one reusable operating loop.”

## Slide 90 — THEORY CHECKPOINT

Timing: 2 minutes.

This is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for browser versus Linux session, identity, working directory, predicted state, one cause, and behavior verification.

Reinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.

Announce the lab transition. Learners will now own the keyboard for exactly three hours.

Transition: “Next: HANDS-ON BLOCK.”

## Slide 91 — HANDS-ON BLOCK

Timing: 3 minutes, included in Lab 1.

Give each learner or pair the assigned seat link. The practical block now contains eight incidents totaling exactly 180 minutes. The page contains a task brief, a real ttyd terminal, Prepare / reset, and Check my work.

Pairing is optional: the driver predicts and types; the navigator checks the expected state and reads the checker output. Swap after each lab.

State the support rule: when blocked, show whoami, hostname, pwd, the exact repeated command, and one relevant piece of evidence. Start the 15-minute Lab 1 timer now.

## Slide 92 — HANDS-ON

Lab facilitation: 40 minutes total.

Lab 1, System Orientation, takes 15 minutes. Learners record identity, Ubuntu user space, kernel release, architecture, PID 1, and three filesystem landmarks. Insist that every line in the profile comes from the current seat.

Lab 2, Filesystem & Links, takes 25 minutes. Learners copy and move prepared files, then create both a hard link and a relative symbolic link. The checker compares inode identity and the symbolic link's stored target, so a second copy will not pass as a hard link.

Give a five-minute warning at minute 10 and minute 35. Fast finishers should rename welcome.txt and predict which link survives before testing.

## Slide 93 — HANDS-ON

Lab facilitation: 40 minutes total.

Lab 3, Editor & Text Evidence, takes 20 minutes. Learners use nano for three exact configuration changes, count status codes with a staged pipeline, and extract exactly two structured ERROR records. Ask them to inspect each pipeline stage before redirecting.

Lab 4, Package Lifecycle, takes 20 minutes. Learners distinguish apt update from apt install, inspect the candidate, map /usr/bin/tree back to its owning package, and save both package state and command output.

The checkpoint is agreement across independent evidence sources: file content, pipeline result, dpkg state, executable discovery, file ownership, and behavior.

## Slide 94 — HANDS-ON

Lab facilitation: 55 minutes total.

Lab 5, Permission Incident, takes 30 minutes. Learners inspect users, groups, parent directories, and numeric modes; repair the existing file and shared directory; prove setgid inheritance; and perform real positive and negative tests as Alice, Bob, and outsider. Do not accept chmod 777 or tests run only as learner.

Lab 6, SSH Trust Setup, takes 25 minutes. Learners protect key material, record the host key for the non-default port, authorize only the public key, pin a strict client profile, and prove BatchMode key-only login. The temporary password is training and is used only for bootstrap.

## Slide 95 — HANDS-ON

Lab facilitation: 45 minutes total.

Lab 7, Journal Investigation, takes 20 minutes. Learners compare the human status view with machine-readable systemctl show properties, scope the journal by unit and boot, preserve evidence, and submit five exact facts. The incident line is the cause; the failed unit state is a consequence.

Lab 8, Broken Service Capstone, takes 25 minutes. Learners capture status, journal, and unit configuration before changing anything; connect status=200/CHDIR to WorkingDirectory; create only the missing web root and health page; then verify active state, boot enablement, listening socket, and HTTP response.

The eight lab durations total 180 minutes: 15 + 25 + 20 + 20 + 30 + 25 + 20 + 25.

## Slide 96 — TROUBLESHOOT + ASSESS

Timing: use during support and reserve the final five minutes of Lab 8 for peer explanation.

When a learner asks for help, walk down the five questions without taking the keyboard. Context prevents solving the wrong host, user, or directory. Target inspection shows current state. Reproducing the symptom preserves the exact failure. Logs and exit status identify the cause. One narrow change followed by the same test gives causal confidence.

For peer assessment, Partner A explains either the permission or SSH evidence chain. Partner B explains either the journal or systemd chain. A complete explanation names the initial state, the observation that mattered, the smallest change, and the final independent verification.

Correct common false positives: sudo success does not prove normal-user access; an accepted but unverified host key is not verified trust; active service state does not prove HTTP behavior; and a green checker does not explain why the solution works.

## Slide 97 — Keep your seat link; keep practising the loop

Timing: 4 minutes.

Close by resolving the opening promise. Learners can now orient themselves, control access, establish remote trust, and diagnose a service with evidence. Encourage immediate repetition while the command path is fresh.

The browser seat may be retired after the course, so keep the public course repository and solution-video links. Reset and solve Lab 8 again while the controller is still available. The Linux Upskill Challenge provides a free, open sequence for continued server practice.

Final sentence: “The command you forget can be looked up; the habit of verifying state is what makes you safe.”

## Slide 98 — REFERENCES

Use the repository SOURCES.md for full links, licenses, and retrieval dates. The delivery platform is built from Ubuntu Server, Incus system containers, ttyd browser terminals, Nginx, and a small Flask control API.

The slide system uses an original CodeRabbit-inspired palette and an original generated title illustration; it does not copy the CodeRabbit logo or product interface.

The platform source, operational runbooks, eight lab setup/check scripts, Playwright solution recordings, and narration scripts live under browser-lab-platform/.
