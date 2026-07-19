window.COURSE_CONTENT = {
  "generatedAt": "2026-07-19T07:37:00.977Z",
  "narration": {
    "language": "en",
    "complete": false,
    "availableSlides": 0,
    "manifest": "media/slide-narration-manifest.json",
    "asrAudit": "media/slide-narration-asr-audit.json",
    "fullDeckAudio": "",
    "timing": {
      "declaredTheoryTargetMinutes": 180,
      "plannedTheoryDemoMinutes": 180,
      "explicitSlide1To90ScheduleMinutes": 180,
      "explicitScheduleOverDeclaredMinutes": 0,
      "plannedLabMinutes": 210,
      "measuredSpokenAudioSeconds": 0,
      "withinSlidePauseSeconds": 54.75,
      "measuredSlideAudioSeconds": 4689.37,
      "interSlideGapSecondsEach": 2,
      "interSlideGapCount": 97,
      "totalInterSlideGapSeconds": 194,
      "fullDeckDurationSeconds": 0,
      "declaredTheoryTargetMinusSpokenSeconds": 6165.38,
      "explicitScheduleMinusSpokenSeconds": 10800,
      "explanation": "The 100-slide route declares exactly 180 minutes of theory and distinct instructor demonstrations. Spoken narration is being regenerated from the matching final script.",
      "explicitSlideScheduleMinutes": 180
    }
  },
  "slides": [
    {
      "number": 1,
      "image": "assets/slides/slide-1.png",
      "title": "Linux Foundations",
      "notes": "Timing: 1 minute.\n\nOpen with the operating thesis: Linux administration is a sequence of observable state transitions. The complete route contains 180 minutes of theory and distinct demonstrations plus 210 minutes of required practice. State that the full route is 390 instructional minutes before breaks; do not call it a 50/50 six-hour course.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 1,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 2,
      "image": "assets/slides/slide-2.png",
      "title": "OUTCOMES",
      "notes": "Timing: 2 minutes.\n\nSay: “These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.\n\nAsk for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs? Use the answer only to adjust examples—not scope.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 2,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 3,
      "image": "assets/slides/slide-3.png",
      "title": "ENVIRONMENT",
      "notes": "Timing: 2 minutes.\n\nSay: “The browser is only the window. Each learner works in a real, isolated Ubuntu 24.04 system container behind it.” Point out that Safari, Edge, and Chrome all reach the same terminal; the host operating system no longer changes the lab commands.\n\nGive the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The portal labels the current lab and lets the learner reset it to a known state.\n\nAsk: “If I close the browser tab, does the Linux session disappear?” Answer: no; it remains on the peer controller until it is reset or destroyed.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 3,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 4,
      "image": "assets/slides/slide-4.png",
      "title": "COURSE MAP",
      "notes": "Timing: 2 minutes.\n\nWalk left to right. Every module introduces one operating question, demonstrates it on instructor-only objects, and then assigns a different incident. The practical share is deliberately larger. For a strict six-hour booking, Lab 1 begins before the room session and the final synthesis moves after it; all ten assessed labs remain.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 4,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 5,
      "image": "assets/slides/slide-5.png",
      "title": "Linux is the kernel; a usable system is a stack",
      "notes": "Timing: 1 minute.\n\nSay: “Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from the platform boundary upward. The controller VM supplies virtual hardware; each Incus system container shares the controller kernel while keeping its own user space, processes, filesystem, network, and systemd.\n\nUse uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share a kernel yet differ in packages, defaults, and support.\n\nAvoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 5,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 6,
      "image": "assets/slides/slide-6.png",
      "title": "LINUX / KERNEL",
      "notes": "Timing: 1 minute.\n\nSay: “The kernel turns hardware into abstractions.” Treat the kernel as the resource manager below every command. User programs request services through system calls instead of controlling hardware directly.\n\nProcesses means scheduled programs with isolated address spaces. Memory means virtual memory, pages, caches, and protection. Filesystems means one namespace across disks and virtual data. Network means sockets, routes, interfaces, and packet flow. Devices means drivers expose hardware through common interfaces.\n\nExample: When cat reads a file, the shell starts cat, cat asks the kernel to open and read bytes, and the kernel coordinates permissions, storage, and memory.\n\nAsk: “Which kernel responsibility is involved when a process is killed for using too much memory?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 6,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 7,
      "image": "assets/slides/slide-7.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1 minute.\n\nFrame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.\n\nExplain why the workshop standardises on Ubuntu 24.04 LTS: one long-term-supported image, APT, OpenSSH, and systemd, cloned into isolated Incus lab sessions. The browser makes that same Linux environment available from macOS and Windows.\n\nAsk: “What should you record before following a web tutorial?” Expected: distribution, version, and command context.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 7,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 8,
      "image": "assets/slides/slide-8.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1 minute.\n\nSay: “Distribution families share ideas, not every command.” Package names, security defaults, and service names vary even when filesystem and permission concepts transfer.\n\nDebian family: Ubuntu · Debian; APT + .deb; /etc/apt; Long support. Red Hat family: RHEL · Rocky · Alma; DNF + RPM; /etc/yum.repos.d; SELinux defaults. Other contexts: Fedora: newer stacks; Alpine: small images; Arch: rolling; Vendor clouds.\n\nExample: A tutorial says yum install; your host has apt. What should you verify before translating it?\n\nAsk: “Release strategy is the next distribution choice that changes operational risk.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 8,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 9,
      "image": "assets/slides/slide-9.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1 minute.\n\nSay: “Stable and rolling releases trade currency.” Ubuntu 24.04 LTS gives this class a consistent package set and support baseline; a development workstation may make a different tradeoff.\n\nSTABLE / LTS, predictability: Longer support window; Security fixes with fewer surprises; Older major versions are common. ROLLING, currency: Frequent package updates; Fast access to new features; More integration change over time.\n\nExample: Which model would you favor for a long-lived production appliance, and why?\n\nAsk: “Whatever the model, identify exactly what system you are operating.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 9,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 10,
      "image": "assets/slides/slide-10.png",
      "title": "ENVIRONMENT",
      "notes": "Timing: 1 minute.\n\nSay: “Virtual machines isolate kernels; containers share one.” Learners receive a realistic Ubuntu user space with users, packages, logs, SSH, and systemd, while the instructor can reset each seat quickly.\n\nVIRTUAL MACHINE, hardware boundary: Guest owns a kernel; Different isolation boundary; Higher memory and boot cost. Isolation strength depends on configuration and threat model. SYSTEM CONTAINER, OS boundary: Shares the host kernel; Own user space and systemd; Fast cloning and reset.\n\nExample: Does closing the browser destroy the container? Why not?\n\nAsk: “The transferable skill is recognizing which concepts stay stable across these boundaries.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 10,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 11,
      "image": "assets/slides/slide-11.png",
      "title": "DEMO 1 / BOUNDARY",
      "notes": "Timing: 2 minutes.\n\nOn the controller, compare the controller kernel with the learner container's os-release, kernel, and PID 1. Ask which facts belong to the user space and which to the shared kernel. Do not profile the learner seat used in Lab 1.\n\nSource claims: C01, C19 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 11,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 12,
      "image": "assets/slides/slide-12.png",
      "title": "HANDS-ON / LAB 1",
      "notes": "Lab facilitation: 15 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which fact describes user space, and which describes the kernel?\n\nSource claims: C01, C02, C19 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 12,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 13,
      "image": "assets/slides/slide-13.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Core operating questions transfer across distributions.” APT may become DNF and ssh.service may become sshd.service, but context, least privilege, logs, and verification still guide the work.\n\nLocate: Where am I?; Which host?; Which user?; Which file or unit?. Change: Predict one state; Use narrow privilege; Make one edit; Capture exit status. Verify: Inspect resulting state; Read relevant logs; Test intended identity; Prove behavior.\n\nExample: Which parts of today’s workflow would survive a move from Ubuntu to Rocky Linux?\n\nAsk: “Now we apply that operating model to the filesystem namespace.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 13,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 14,
      "image": "assets/slides/slide-14.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nAnchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.\n\nConnect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.\n\nAsk learners to predict where SSH server configuration and package logs belong.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 14,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 15,
      "image": "assets/slides/slide-15.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Filesystem paths express intent, not physical disks.” Linux presents one directory tree even when data comes from several disks, network shares, or virtual kernel filesystems.\n\n/ means the root of the visible namespace. Mount means attach another filesystem at a directory. Path means a route through directory entries. File means a name referring to an inode-like object. Metadata means owner, mode, timestamps, size, and type.\n\nExample: The command findmnt shows where filesystems are attached; df reports filesystem space, while du estimates space used by paths.\n\nAsk: “Why can /home live on a different disk without changing user paths?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 15,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 16,
      "image": "assets/slides/slide-16.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “The hierarchy separates configuration, data, and runtime state.” A service configuration normally belongs under /etc; its changing cache or queue normally belongs under /var.\n\nConfiguration: /etc host settings; /usr shipped defaults; Prefer drop-ins; Track intentional edits. Persistent data: /home user files; /var changing service data; /srv served content; /opt optional software. Runtime state: /run since boot; /tmp temporary files; /proc process views; /sys device and kernel views.\n\nExample: Where would you look first for a host-specific SSH configuration?\n\nAsk: “Two special trees expose live kernel state as files.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 16,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 17,
      "image": "assets/slides/slide-17.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “/proc and /sys expose live kernel state.” cat /proc/uptime reads a kernel-provided value. It does not read bytes stored on the root disk.\n\n/proc, process + kernel state: PID directories describe processes; cpuinfo and meminfo expose summaries; Values may change between reads. /sys, devices + kernel objects: Hardware and driver relationships; Many tunables are writable by root; Changes can affect the running system.\n\nExample: Why is copying /proc as a backup meaningless?\n\nAsk: “Back in ordinary directories, every path is interpreted from a starting point.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 17,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 18,
      "image": "assets/slides/slide-18.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nUse the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.\n\nCall out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.\n\nModel the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 18,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 19,
      "image": "assets/slides/slide-19.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Path syntax has a small, precise vocabulary.” A path is evaluated left to right. Confusion usually comes from an incorrect starting directory or from shell expansion that happened before the command ran.\n\n/name means absolute: begin at root. name means relative: begin at the working directory. . means the current directory. .. means the parent directory. ~ is shell syntax expanded to the current user's home. name/ means directory path; trailing slash clarifies intent.\n\nExample: From /var/log, ../tmp means /var/tmp, not /tmp. Use realpath -m to reason about a path without requiring it to exist.\n\nAsk: “What does ./script.sh communicate that script.sh does not?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 19,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 20,
      "image": "assets/slides/slide-20.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Hidden names are a convention, not protection.” The directory ~/.ssh is hidden from a plain ls, but another user’s ability to read it depends on traversal and file modes.\n\nNORMAL LISTING, ls: Omits names beginning with dot; Keeps routine output quieter; Permissions are unchanged. ALL ENTRIES, ls -la: Shows dotfiles and metadata; Useful for .ssh and configuration; Still governed by directory access.\n\nExample: Would renaming secrets.txt to .secrets.txt make it confidential?\n\nAsk: “The next layer is understanding what kind of object a directory entry names.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 20,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 21,
      "image": "assets/slides/slide-21.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “The first character of ls -l identifies object type.” Linux treats many resources through file-like interfaces, but type changes the meaning of operations and permissions.\n\n- means regular file. d means directory. l means symbolic link. c / b means character or block device. s means Unix-domain socket. p means named pipe.\n\nExample: Use file PATH for a content-oriented guess and stat PATH for authoritative metadata about the named object.\n\nAsk: “What does the leading d in drwxr-x--- tell you before the permission bits?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 21,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 22,
      "image": "assets/slides/slide-22.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Hard links and symbolic links fail in different ways.” ln report.txt report-copy-name creates a hard link; ln -s report.txt latest creates a symbolic path reference.\n\nHARD LINK, another name: Points to the same inode; Usually cannot cross filesystems; Data remains until last link is removed. SYMBOLIC LINK, stored path: Can cross filesystems; Can point to a directory; Can become dangling.\n\nExample: If the original pathname is renamed, which link type is more likely to break?\n\nAsk: “Before commands see paths, the shell may expand wildcard patterns.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 22,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 23,
      "image": "assets/slides/slide-23.png",
      "title": "SHELL / PATHS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Globs expand before the command starts.” The shell expands globs into a list of matching pathnames. The receiving program normally never sees the wildcard.\n\n* means zero or more characters except leading dot. ? means exactly one character. [ab] means one character from a set. [0-9] means one character in a range. Quoted glob means literal pattern; no pathname expansion.\n\nExample: printf '%s\\n' *.log safely shows the expanded arguments. Check that list before using the same pattern with rm or chmod.\n\nAsk: “Why might rm *.log affect more files tomorrow than it does today?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 23,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 24,
      "image": "assets/slides/slide-24.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Inspect targets before changing files.” For a risky batch, first replace rm with printf '%s\\n' or use find with -print. Only then run the change.\n\nStep 1, Locate: pwd and realpath. Step 2, Enumerate: printf or find the exact targets. Step 3, Predict: state the expected names and count. Step 4, Change: cp, mv, or rm with narrow scope. Step 5, Verify: list, compare, or test the result.\n\nExample: What evidence would you capture before removing every .tmp file under one directory?\n\nAsk: “A short failure demo shows why current-directory assumptions are dangerous.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 24,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 25,
      "image": "assets/slides/slide-25.png",
      "title": "DEMO 2 / FILESYSTEM",
      "notes": "Timing: 2 minutes.\n\nBegin in /var/tmp/demo-tree/archive and ask learners to predict why report.txt fails. Read the nonzero status, resolve the correct relative path, inspect every component with namei, then verify the copied result with stat. The learner lab uses different paths and link semantics.\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 25,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 26,
      "image": "assets/slides/slide-26.png",
      "title": "HANDS-ON / LAB 2",
      "notes": "Lab facilitation: 25 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which names refer to one object, and which name stores a path?\n\nSource claims: C02, C03 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 26,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 27,
      "image": "assets/slides/slide-27.png",
      "title": "TERMINAL",
      "notes": "Timing: 1.5 minutes.\n\nParse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.\n\nMention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.\n\nDo not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 27,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 28,
      "image": "assets/slides/slide-28.png",
      "title": "TERMINAL",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Terminal, shell, and command are separate layers.” The browser terminal and macOS Terminal can both run a Bash session; the window differs while the shell language remains familiar.\n\nTERMINAL, input + display: Keyboard and screen interface; Local app or browser ttyd; Transports control characters. SHELL, parser + launcher: Expands variables and globs; Connects pipelines and redirections; Starts programs and reports status.\n\nExample: Which layer expands *.log: terminal, shell, or grep?\n\nAsk: “Quoting controls exactly which transformations the shell performs.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 28,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 29,
      "image": "assets/slides/slide-29.png",
      "title": "Quoting decides what the shell expands",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Quoting decides what the shell expands.” Most shell bugs are argument bugs. Quote data so spaces and wildcard characters remain part of one intended argument.\n\nUnquoted means split words, expand variables, expand globs. 'single quotes' means preserve every character literally. \"double quotes\" means expand variables but preserve one argument. backslash means escape the next character. $() means replace with captured command output.\n\nExample: mkdir -p \"$HOME/course notes\" creates one directory. Without quotes, the shell passes two path arguments.\n\nAsk: “How many arguments does printf '%s\\n' \"$HOME\" pass after expansion?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 29,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 30,
      "image": "assets/slides/slide-30.png",
      "title": "Shell expansion explains surprising commands",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Shell expansion explains surprising commands.” You do not need every Bash parsing rule, but you should know that the displayed line is not necessarily the final argument list.\n\nParse means recognize quotes, operators, and command boundaries. Parameters means replace $name and ${name}. Commands means replace $(...) with output. Split means unquoted results may become several words. Glob means patterns may become many pathnames. Execute means run the final program and arguments.\n\nExample: Use printf '<%s>\\n' -- $value and then \"$value\" to demonstrate how quoting changes argument boundaries.\n\nAsk: “Why is rm -rf $target dangerous when target is empty or contains spaces?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 30,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 31,
      "image": "assets/slides/slide-31.png",
      "title": "Exit status reports success or failure",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Exit status reports success or failure.” Exit status is machine-readable evidence, but its exact meaning belongs to the command. For grep, one can mean no match rather than a broken program.\n\n0 means the command reports success. 1–125 means program-defined condition or failure. 126 means found but not executable. 127 means command not found. 128 + signal means terminated by a signal.\n\nExample: Run a command, then immediately print printf 'status=%s\\n' \"$?\" before another command overwrites the value.\n\nAsk: “Can a command print an error and still return zero? What would you trust?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 31,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 32,
      "image": "assets/slides/slide-32.png",
      "title": "Control operators and pipes solve different jobs",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Control operators and pipes solve different jobs.” sudo apt update && sudo apt install tree stops before installation if the index refresh fails.\n\n&& AND ||, control flow: Run next only on success; Or run fallback on failure; Status determines the branch. | PIPE, data flow: Connect stdout to stdin; Commands run as a pipeline; Last status is reported by default.\n\nExample: Why is command1 | command2 not a replacement for command1 && command2?\n\nAsk: “Streams give every process three conventional communication channels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 32,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 33,
      "image": "assets/slides/slide-33.png",
      "title": "TERMINAL",
      "notes": "Timing: 1.5 minutes.\n\nTeach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.\n\nPoint out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 33,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 34,
      "image": "assets/slides/slide-34.png",
      "title": "Use local help before trusting a random command",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Use local help before trusting a random command.” Use man 5 ssh_config for the file format and man 1 ssh for the client command; the section number disambiguates names.\n\nQuick syntax: command --help; Short option summary; Examples may be included; Best for recall. Full manual: man command; /pattern to search; n for next result; q to leave. Shell built-ins: help cd; type command; command -V name; distinguish aliases.\n\nExample: How can type reveal that cd is not an external executable?\n\nAsk: “Package tools add a maintained software source above individual commands.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 34,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 35,
      "image": "assets/slides/slide-35.png",
      "title": "TERMINAL",
      "notes": "Timing: 1.5 minutes.\n\nDescribe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.\n\nUse tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.\n\nConnect this to journalctl: filter at the source first, then use grep only when helpful.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 35,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 36,
      "image": "assets/slides/slide-36.png",
      "title": "SHELL / STREAMS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Processes start with three standard streams.” Separating normal results from diagnostics lets tools compose without hiding errors.\n\nstdin means file descriptor 0: keyboard or pipe input. stdout means file descriptor 1: normal output. stderr means file descriptor 2: diagnostics. > means replace a file with stdout. 2> means replace a file with stderr.\n\nExample: command >result.txt 2>error.txt produces two evidence files. command >all.txt 2>&1 combines them in order.\n\nAsk: “If a pipeline looks empty but errors remain on screen, which stream explains it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 36,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 37,
      "image": "assets/slides/slide-37.png",
      "title": "SHELL / PIPELINES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Build pipelines as readable evidence stages.” For status counts: awk '{print $9}' access.log | sort | uniq -c | sort -nr. Inspect the selected field before counting it.\n\nStep 1, Question: state the answer you need. Step 2, Source: choose the smallest relevant input. Step 3, Filter: remove unrelated records. Step 4, Transform: extract, sort, or count. Step 5, Verify: inspect samples and totals.\n\nExample: Which stage would you test first if the final count is zero?\n\nAsk: “Avoid one common mistake: discarding diagnostics to make output look clean.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 37,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 38,
      "image": "assets/slides/slide-38.png",
      "title": "DEMO 3 / TEXT EVIDENCE",
      "notes": "Timing: 1.5 minutes.\n\nShow the four synthetic authentication records. Ask the question before building the pipeline. Inspect the grammar, select failures, extract the source field, then save and count evidence. Point out that Lab 3 has different record formats, so the reasoning must transfer.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 38,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 39,
      "image": "assets/slides/slide-39.png",
      "title": "TERMINAL EDITOR",
      "notes": "Timing: 1 minute.\n\nDemonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.\n\nMention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 39,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 40,
      "image": "assets/slides/slide-40.png",
      "title": "TERMINAL EDITOR",
      "notes": "Timing: 1 minute.\n\nSay: “Safe edits use backup, diff, and validation.” For SSH server configuration, run sshd -t before restarting the service. For sudo policy, use visudo rather than a generic editor.\n\nStep 1, Inspect: read the current file and ownership. Step 2, Protect: copy or use version control where appropriate. Step 3, Edit: nano or sudoedit the exact path. Step 4, Validate: use the program’s syntax checker. Step 5, Apply: reload or restart, then verify behavior.\n\nExample: Which step prevents a typo from turning into an outage?\n\nAsk: “Next we connect processes and files to the identities Linux authorizes.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 40,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 41,
      "image": "assets/slides/slide-41.png",
      "title": "HANDS-ON / LAB 3",
      "notes": "Lab facilitation: 20 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: where did record structure determine the pipeline?\n\nSource claims: C04, C05 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 41,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 42,
      "image": "assets/slides/slide-42.png",
      "title": "PACKAGES",
      "notes": "Timing: 4 minutes.\n\nSay: “APT separates repositories, indexes, and installed files.” An old local index can report a package missing even when the repository has added it.\n\nRepository: Signed metadata; Package archives; Release channels; Repository trust keys. Local index: Refreshed by apt update; Available versions; Candidate selection; Dependency metadata. Installed state: Tracked by dpkg; Files on disk; Package status; APT history log.\n\nExample: Which operation requires network metadata but does not itself install software?\n\nAsk: “A safe package workflow inspects candidate and resulting state.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C06 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 42,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 43,
      "image": "assets/slides/slide-43.png",
      "title": "PACKAGES",
      "notes": "Timing: 5 minutes.\n\nSay: “Use APT with an inspect-change-verify rhythm.” Package installation is a privileged system change. Read the proposed transaction before confirming it.\n\nRefresh means sudo apt update. Search means apt search tree. Inspect means apt show tree. Install means sudo apt install tree. Verify means dpkg -s tree; command -v tree. Audit means less /var/log/apt/history.log.\n\nExample: Use apt-get in noninteractive automation only after understanding prompts and failure behavior; apt is convenient for humans.\n\nAsk: “What two checks prove that a package is registered and its command is discoverable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C06 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 43,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "5 minutes",
        "pending": true
      }
    },
    {
      "number": 44,
      "image": "assets/slides/slide-44.png",
      "title": "DEMO 4 / PACKAGES",
      "notes": "Timing: 6 minutes.\n\nUse jq, not the lab's tree package. Distinguish repository candidate, installed database state, executable resolution, owning package, and actual behavior. Pause after every command and ask which claim the output can and cannot support.\n\nSource claims: C06 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 44,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "6 minutes",
        "pending": true
      }
    },
    {
      "number": 45,
      "image": "assets/slides/slide-45.png",
      "title": "HANDS-ON / LAB 4",
      "notes": "Lab facilitation: 20 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which command proves repository state, installed state, and behavior?\n\nSource claims: C06 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 45,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 46,
      "image": "assets/slides/slide-46.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 1.5 minutes.\n\nExplain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.\n\nShow the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.\n\nMention that group membership changes usually require a new login session.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 46,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 47,
      "image": "assets/slides/slide-47.png",
      "title": "IDENTITY",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Names are convenient; numeric IDs drive authorization.” Files store numeric ownership. Name services translate those numbers for display.\n\nUsername means human-readable account label. UID means numeric user identity used by the kernel. Group name means human-readable collaboration label. GID means numeric group identity stored on files. Effective IDs means identity currently used for access checks.\n\nExample: A restored disk can show unexpected names if the destination maps the same numeric UID to a different account.\n\nAsk: “Why does ls -ln help diagnose identity mapping problems?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 47,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 48,
      "image": "assets/slides/slide-48.png",
      "title": "IDENTITY",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Account databases separate public identity from secrets.” getent passwd alice and getent group webteam are better operational checks than parsing files directly.\n\n/etc/passwd: name and UID; primary GID; home directory; login shell. /etc/group: group name and GID; supplementary members; not every primary member; readable account data. /etc/shadow: password hashes; aging fields; root-readable only; never copy casually.\n\nExample: Why might grep alice /etc/passwd miss an account that id alice can resolve?\n\nAsk: “Group membership becomes part of a process when the session starts.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 48,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 49,
      "image": "assets/slides/slide-49.png",
      "title": "IDENTITY",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Existing shells keep old group credentials.” Adding a learner to webteam does not automatically update a terminal opened before the change.\n\nACCOUNT DATABASE, updated now: usermod changes membership; getent shows the new record; Future sessions inherit it. CURRENT SHELL, old credentials: Keeps groups from login time; id may not show the change; Re-login or newgrp refreshes context.\n\nExample: What is the least surprising way to pick up new groups in production?\n\nAsk: “Privilege escalation is another identity transition and should be narrow.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 49,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 50,
      "image": "assets/slides/slide-50.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.\n\nContrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 50,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 51,
      "image": "assets/slides/slide-51.png",
      "title": "sudo policy answers who may run what as whom",
      "notes": "Timing: 1.5 minutes.\n\nSay: “sudo policy answers who may run what as whom.” sudo is a policy engine, not simply a synonym for administrator mode.\n\nCaller means the authenticated invoking user. Target means root by default or selected with -u. Command means the permitted executable and arguments. Policy means rules from sudoers and included files. Audit means logs record the privileged request.\n\nExample: sudo -u www-data test -r /srv/site/index.html checks behavior as the service identity without opening a root shell.\n\nAsk: “Why is sudo cat file a poor test of whether an application user can read it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 51,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 52,
      "image": "assets/slides/slide-52.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nDecode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.\n\nDistinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.\n\nUse namei -l as a powerful path-permission diagnostic.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 52,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 53,
      "image": "assets/slides/slide-53.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Directory r, w, and x control different abilities.” Deleting a file depends mainly on the parent directory permissions, not on the file’s own write bit.\n\nRead · r: list entry names; does not reveal metadata alone; ls may show names only; needs x for useful lookup. Write · w: create entries; remove entries; rename entries; usually requires x too. Execute · x: traverse the directory; look up named entries; reach deeper paths; not ‘run the directory’.\n\nExample: Why can a user delete a read-only file from a writable directory?\n\nAsk: “A path succeeds only if every parent directory can be traversed.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 53,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 54,
      "image": "assets/slides/slide-54.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Parent directories participate in every path lookup.” Correct file mode is insufficient when one parent directory blocks traversal.\n\n/ means traverse root. /srv means traverse service data. /srv/team means traverse team directory. file means apply file read or write bits. namei -l means display every component and its mode.\n\nExample: namei -l /srv/team/report.txt often explains ‘permission denied’ faster than repeated chmod on the file.\n\nAsk: “Which directory would you inspect if the file looks readable but open still fails?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 54,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 55,
      "image": "assets/slides/slide-55.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nBuild 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.\n\nWarn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.\n\nMention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 55,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 56,
      "image": "assets/slides/slide-56.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Symbolic chmod states exactly who and what changes.” Symbolic changes are excellent for narrow repairs because they preserve unrelated classes unless you use equals.\n\nu means owner class. g means group class. o means other class. + / - means add or remove selected bits. = means set the selected class exactly. chmod g+r means add group read without changing other bits.\n\nExample: chmod u=rw,g=r,o= report.txt expresses mode 640 as intent rather than arithmetic.\n\nAsk: “Which command removes only write permission from others?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 56,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 57,
      "image": "assets/slides/slide-57.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “umask removes permissions; it never grants.” Use umask to inspect the current shell and umask 027 for a session where new files should not be available to others.\n\nREQUESTED MODE, program default: Files commonly request 666; Directories commonly request 777; Execute is not added to ordinary files. UMASK, bits to clear: 022 yields files 644; 022 yields directories 755; Process-local and inherited.\n\nExample: Why does umask 022 not make a new text file executable?\n\nAsk: “Shared directories add setgid so group ownership remains predictable.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 57,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 58,
      "image": "assets/slides/slide-58.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “setgid keeps shared directories in one group.” setgid solves group drift; it does not decide the exact read and write bits of new files.\n\nDirectory owner means usually an administrator or service account. Directory group means the collaborating team. Mode 2xxx means setgid bit on the directory. New entries means inherit the directory group. Verification means stat and create a file as a real member.\n\nExample: A team directory often combines group ownership, mode 2770, and a cooperative umask such as 0002 or default ACLs.\n\nAsk: “What does the leading 2 mean in 2770?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 58,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 59,
      "image": "assets/slides/slide-59.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Sticky protects names in shared directories.” stat -c '%A %a %n' /tmp commonly reports a mode equivalent to 1777.\n\nWITHOUT STICKY, shared write: Any writer may remove entries; File ownership does not protect names; Easy for users to disrupt each other. WITH STICKY, mode 1xxx: Only owner, directory owner, or root removes; Typical example is /tmp; Shown as t in the other execute position.\n\nExample: Would sticky prevent another user from reading a world-readable file?\n\nAsk: “When triplets are too coarse, ACLs can add named exceptions.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 59,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 60,
      "image": "assets/slides/slide-60.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “ACLs extend permissions without replacing the base model.” setfacl -m u:bob:r report.txt can grant Bob read access, but getfacl is required to see the whole policy.\n\nMODE BITS, three classes: Owner, group, other; Visible in ls -l; Portable baseline. POSIX ACL, named entries: Additional users or groups; Mask limits effective named rights; Inspect with getfacl.\n\nExample: Why can an ACL entry show rw while effective access is only r?\n\nAsk: “Troubleshooting should test the full identity and path before changing anything.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 60,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 61,
      "image": "assets/slides/slide-61.png",
      "title": "DEMO 5 / AUTHORIZATION",
      "notes": "Timing: 2.5 minutes.\n\nUse demo-alex, demo-riley, demoops, and /srv/demo-share. Inspect identities and every path component before changing owner, group, or modes. Test a real operation after the repair. Lab 5 uses different users, group, share, and acceptance conditions.\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 61,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2.5 minutes",
        "pending": true
      }
    },
    {
      "number": 62,
      "image": "assets/slides/slide-62.png",
      "title": "HANDS-ON / LAB 5",
      "notes": "Lab facilitation: 30 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which directory permission made creation possible, and why setgid?\n\nSource claims: C07, C08 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 62,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 63,
      "image": "assets/slides/slide-63.png",
      "title": "SSH authenticates both ends of the conversation",
      "notes": "Timing: 2 minutes.\n\nSeparate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.\n\nExplain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 63,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 64,
      "image": "assets/slides/slide-64.png",
      "title": "SSH separates transport, host, and user trust",
      "notes": "Timing: 2 minutes.\n\nSay: “SSH separates transport, host, and user trust.” Encryption prevents eavesdropping only when you also authenticate the endpoint you intended to reach.\n\nTransport means encrypts and protects session integrity. Host key means proves which server endpoint answered. User proof means proves which account may log in. Account policy means server maps proof to account policy. Session means starts command, shell, forwarding, or subsystem.\n\nExample: A valid user key presented to an attacker still exposes interaction if the client accepted the attacker’s host key.\n\nAsk: “Which trust question is answered by known_hosts?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 64,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 65,
      "image": "assets/slides/slide-65.png",
      "title": "Host keys identify servers; user keys identify people",
      "notes": "Timing: 2 minutes.\n\nSay: “Host keys identify servers; user keys identify people.” The client compares the server host key before offering user authentication; these are sequential trust decisions.\n\nHOST KEY, server identity: Private half stays on server; Client stores public fingerprint; Change requires investigation. USER KEY, user identity: Private half stays with user; Server stores public key; Can be revoked per account.\n\nExample: Where should the user private key exist after setup?\n\nAsk: “Fingerprint verification makes the first server trust decision explicit.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 65,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 66,
      "image": "assets/slides/slide-66.png",
      "title": "Verify host keys through an independent channel",
      "notes": "Timing: 2 minutes.\n\nSay: “Verify host keys through an independent channel.” Use ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub on the server console and compare it with the client prompt over a trusted channel.\n\nStep 1, Obtain: get the expected fingerprint from an administrator. Step 2, Connect: observe the presented fingerprint. Step 3, Compare: match algorithm and complete fingerprint. Step 4, Accept: store the verified key in known_hosts. Step 5, Recheck: treat later changes as an event.\n\nExample: What legitimate events can change a host key, and why must they still be verified?\n\nAsk: “The user private key deserves local protection even though it never travels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 66,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 67,
      "image": "assets/slides/slide-67.png",
      "title": "The private key proves; the public key permits",
      "notes": "Timing: 2 minutes.\n\nUse a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.\n\nUse Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.\n\nMention that enterprise policy may require hardware-backed keys or certificates.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 67,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 68,
      "image": "assets/slides/slide-68.png",
      "title": "A passphrase and agent reduce private-key exposure",
      "notes": "Timing: 2 minutes.\n\nSay: “A passphrase and agent reduce private-key exposure.” A key without a passphrase can be appropriate for tightly controlled automation, but it needs stronger surrounding controls and narrow authorization.\n\nPhrase means a passphrase encrypts the private key file at rest. KDF rounds means increase cost of password guessing. Agent means holds an unlocked key for a limited session. Permissions means prevent other local users from reading the file. Rotation means replace compromised or obsolete credentials.\n\nExample: For interactive use, create an Ed25519 key with a passphrase and let ssh-agent avoid repeated prompts during one trusted login session.\n\nAsk: “What threat does a passphrase mitigate after a laptop is stolen?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 68,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 69,
      "image": "assets/slides/slide-69.png",
      "title": "OpenSSH checks every component of the authorization path",
      "notes": "Timing: 2 minutes.\n\nSay: “OpenSSH checks every component of the authorization path.” StrictModes protects users from another local account replacing their authorized keys.\n\nHome directory means owned by the account; not broadly writable. ~/.ssh means normally mode 700. authorized_keys means normally mode 600. Public key line means complete algorithm and key data. Account means login shell and policy must allow access. Server log means explains rejected ownership or mode.\n\nExample: Use namei -l ~/.ssh/authorized_keys to inspect the entire path and journalctl -u ssh for the server’s reason.\n\nAsk: “Why can a perfectly valid key fail when the home directory is group-writable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 69,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 70,
      "image": "assets/slides/slide-70.png",
      "title": "Put safe SSH defaults in a named client profile",
      "notes": "Timing: 2 minutes.\n\nWalk line by line. Host is the alias. HostName and Port identify the server. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.\n\nIn Lab 6 the training server is localhost on port 2222 because both SSH endpoints live inside the isolated learner container. For production, the same profile points to a remote DNS name or address.\n\nExplain StrictHostKeyChecking carefully: accept-new is convenient in a disposable lab but still rejects changed keys. Managed environments should pre-provision known_hosts or use yes with a trusted onboarding process.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 70,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 71,
      "image": "assets/slides/slide-71.png",
      "title": "SSH uses the first value obtained",
      "notes": "Timing: 1 minute.\n\nSay: “SSH uses the first value obtained.” SSH uses the first value found for most parameters, so ordering matters when several Host blocks match.\n\nCommand line means explicit options for this invocation. User config means ~/.ssh/config patterns in order. System config means /etc/ssh/ssh_config defaults. Host patterns means specific entries should appear before broad ones. Effective view means ssh -G alias prints resolved settings.\n\nExample: Place Host production-web before Host * and verify the result with ssh -G production-web | less.\n\nAsk: “Which command shows the effective HostName, User, and IdentityFile without connecting?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 71,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 72,
      "image": "assets/slides/slide-72.png",
      "title": "DEMO 6 / SSH TRUST",
      "notes": "Timing: 2 minutes.\n\nThe demo endpoint listens on 2207 with a separate host key and demo-operator account. Compare the scanned host key with the independently read public host-key fingerprint, then perform a BatchMode login. Emphasize that collection is not authentication.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 72,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 73,
      "image": "assets/slides/slide-73.png",
      "title": "Test SSH failures one layer at a time",
      "notes": "Timing: 1 minute.\n\nSay: “Test SSH failures one layer at a time.” Run ssh -vv alias, then read from connection establishment through host-key check to the first authentication rejection.\n\nStep 1, Network: resolve name and reach the port. Step 2, Host trust: inspect known_hosts and fingerprint. Step 3, Client choice: ssh -G shows user, key, and port. Step 4, User auth: ssh -vv reveals offered and accepted methods. Step 5, Server policy: read ssh service logs and account state.\n\nExample: What does ‘Permission denied (publickey)’ prove, and what does it not prove?\n\nAsk: “Once connected, logs provide the historical evidence needed for broader diagnosis.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 73,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1 minute",
        "pending": true
      }
    },
    {
      "number": 74,
      "image": "assets/slides/slide-74.png",
      "title": "HANDS-ON / LAB 6",
      "notes": "Lab facilitation: 25 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which key authenticates the server, and which key authenticates you?\n\nSource claims: C09, C10 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 74,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 75,
      "image": "assets/slides/slide-75.png",
      "title": "Linux logs live in files and in the systemd journal",
      "notes": "Timing: 2 minutes.\n\nExplain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.\n\nShow that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.\n\nThe investigative rule is to frame a question first: which unit, which boot, which time window, which severity?\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 75,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 76,
      "image": "assets/slides/slide-76.png",
      "title": "A useful log record answers five questions",
      "notes": "Timing: 2 minutes.\n\nSay: “A useful log record answers five questions.” Logs are evidence emitted by software, not guaranteed truth. Interpret them with system state and behavior.\n\nWhen means timestamp with timezone or boot context. Where means host, container, or node. Who means unit, process, PID, or identity. What means event and severity. Why next means correlation field, exit code, or causal detail.\n\nExample: Read one line aloud by naming timestamp, host, source, and message before deciding what it means.\n\nAsk: “Which missing field would make two similar hosts difficult to distinguish?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 76,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 77,
      "image": "assets/slides/slide-77.png",
      "title": "Filter the journal toward one answer",
      "notes": "Timing: 2 minutes.\n\nBuild the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot when retained; volatile journal storage does not preserve prior boots.\n\nWarn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.\n\nPoint out access: normal users may see only their own journal; sudo may be required for system units.\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 77,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 78,
      "image": "assets/slides/slide-78.png",
      "title": "journalctl can narrow by unit, boot, time, and priority",
      "notes": "Timing: 2 minutes.\n\nSay: “journalctl can narrow by unit, boot, time, and priority.” Start with the service and incident window, then widen only if the answer is absent.\n\nUnit means -u ssh.service. Current boot means -b. Previous boot means -b -1. Time means --since '-10 minutes'. Priority means -p warning. Stable output means -n 50 --no-pager -o short-iso.\n\nExample: journalctl -u course-web -b --since '-10 min' --no-pager creates a bounded incident view.\n\nAsk: “Why might -p err hide the line that explains a later failure?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 78,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 79,
      "image": "assets/slides/slide-79.png",
      "title": "Filter narrowly, then widen one dimension at a time",
      "notes": "Timing: 2 minutes.\n\nSay: “Filter narrowly, then widen one dimension at a time.” If the unit log shows only a dependency failure, widen to the named dependency rather than dumping the complete journal.\n\nBound: Choose one unit; Select one boot; Set the time window; Name the incident. Read: Follow timestamps; Find the first cause; Capture exit reason; Note dependencies. Widen: Extend time; Add priorities; Inspect related units; Inspect the process.\n\nExample: Which dimension would you widen first when the earliest line says ‘dependency failed’?\n\nAsk: “Following live events is useful, but it answers a different question from history.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 79,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 80,
      "image": "assets/slides/slide-80.png",
      "title": "DEMO 7 / JOURNAL",
      "notes": "Timing: 5 minutes.\n\ncourse-demo-noisy.service emits a STALE_CACHE event and exits 17. Ask learners to identify the first causal application record before reading the later failed result. Lab 7 uses a disk-threshold event and exit code 42.\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 80,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "5 minutes",
        "pending": true
      }
    },
    {
      "number": 81,
      "image": "assets/slides/slide-81.png",
      "title": "HANDS-ON / LAB 7",
      "notes": "Lab facilitation: 20 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: which line is the application cause, and which line is systemd's result?\n\nSource claims: C11, C12 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 81,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 82,
      "image": "assets/slides/slide-82.png",
      "title": "SYSTEMD",
      "notes": "Timing: 3 minutes.\n\nDefine a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.\n\nMake enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 82,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 83,
      "image": "assets/slides/slide-83.png",
      "title": "SYSTEMD",
      "notes": "Timing: 3 minutes.\n\nSay: “Service transitions leave journal evidence.” A unit can be loaded correctly yet fail during credential setup before its command ever starts.\n\nDeclared: ExecStart command; Service user; Dependencies; Restart policy. Transition: Conditions; Ordering; Credentials; Exit status. Observed: Active state; Substate; Main PID; Journal events.\n\nExample: What evidence distinguishes ‘unit not found’ from ‘process exited’?\n\nAsk: “Dependencies and ordering explain why one failure can appear in several units.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 83,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 84,
      "image": "assets/slides/slide-84.png",
      "title": "SYSTEMD",
      "notes": "Timing: 3 minutes.\n\nSay: “Requirement and ordering are separate relationships.” Requirement and order are separate questions. After=network.target does not guarantee an application-ready network connection.\n\nRequires= means start together; failure relationship. Wants= means weaker activation relationship. After= means ordering only; does not pull a unit in. Before= means inverse ordering relationship. PartOf= means propagate selected lifecycle actions.\n\nExample: Use systemctl list-dependencies unit and systemctl show unit -p Wants -p Requires -p After to inspect relationships.\n\nAsk: “Why is After= not sufficient to start a missing dependency?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 84,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 85,
      "image": "assets/slides/slide-85.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nGroup verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.\n\nTeach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 85,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 86,
      "image": "assets/slides/slide-86.png",
      "title": "DEMO 8 / SYSTEMD",
      "notes": "Timing: 4 minutes.\n\ndemo-api.service fails because its required EnvironmentFile is missing. Read status, journal, and effective unit before creating only /etc/demo-api.env. Restart, then verify active state, socket 8181, and an HTTP response.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 86,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 87,
      "image": "assets/slides/slide-87.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Diagnose services from symptom to verified behavior.” For a web service, combine is-active, is-enabled, socket inspection if needed, and curl against the actual URL.\n\nStep 1, State: systemctl status and is-active. Step 2, Events: journalctl by unit, boot, and time. Step 3, Definition: systemctl cat and show. Step 4, Repair: change one evidenced cause. Step 5, Behavior: test the endpoint as a real client.\n\nExample: What independent check proves more than systemctl status alone?\n\nAsk: “The capstone demo applies this sequence without guessing.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 87,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 88,
      "image": "assets/slides/slide-88.png",
      "title": "DEMO 8 / EVIDENCE CHAIN",
      "notes": "Timing: 3 minutes.\n\nUse this slide to debrief the preceding terminal work. Declaration, events, runtime state, transport, and client behavior are separate evidence sources. State explicitly that an active process alone does not prove useful service behavior.\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 88,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 89,
      "image": "assets/slides/slide-89.png",
      "title": "HANDS-ON / LAB 8",
      "notes": "Lab facilitation: 25 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: why was creating the directory safer than editing the unit?\n\nSource claims: C12, C13 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 89,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 90,
      "image": "assets/slides/slide-90.png",
      "title": "LINUX / PROCESSES",
      "notes": "Timing: 4 minutes.\n\nSay: “A process is a running program with context.” The executable on disk is only the recipe. A process is that recipe running with identity, memory, environment, and open resources.\n\nPID means a temporary process identifier. Parent means the process that created it. Identity means effective user and groups used for access checks. Environment means name/value data inherited at process start. Descriptors means open files, sockets, and streams.\n\nExample: Use ps -ef for a broad view and ps -o pid,ppid,user,stat,cmd -p PID when you need focused evidence.\n\nAsk: “Why can two processes run the same executable but access different files?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C12, C14, C15, C16 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 90,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 91,
      "image": "assets/slides/slide-91.png",
      "title": "PROCESSES / SOCKETS",
      "notes": "Timing: 4 minutes.\n\nReintroduce the process model at service depth. systemd owns a unit and reports MainPID; ps reports hierarchy and credentials; procfs exposes supporting process data; ss reports sockets; curl acts as a client. No one command proves all layers.\n\nSource claims: C12, C14, C15, C16 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 91,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 92,
      "image": "assets/slides/slide-92.png",
      "title": "DEMO 9 / PROCESS + PORT",
      "notes": "Timing: 7 minutes.\n\nTrace demo-echo.service on port 9191. Capture MainPID, inspect the exact PID, render the NUL-separated command line only for display, identify the listener, and test HTTP. Stop through systemd and prove the socket is gone. Lab 9 uses another unit, user, and port.\n\nSource claims: C12, C14, C15, C16 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 92,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "7 minutes",
        "pending": true
      }
    },
    {
      "number": 93,
      "image": "assets/slides/slide-93.png",
      "title": "HANDS-ON / LAB 9",
      "notes": "Lab facilitation: 15 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: what does each of systemctl, ps, ss, and curl prove?\n\nSource claims: C12, C14, C15, C16 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 93,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 94,
      "image": "assets/slides/slide-94.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Unit files come from layered locations.” Prefer small drop-ins over editing vendor files that package upgrades may replace.\n\nVendor units load from a distribution-specific search path; /usr/lib/systemd/system is common but not universal. Use systemctl cat and systemctl show -p FragmentPath to inspect the effective source. Admin units means /etc/systemd/system and overrides. Runtime units means /run/systemd/system. Drop-ins means name.service.d/*.conf overrides selected settings. Effective view means systemctl cat name.service.\n\nExample: systemctl edit name.service creates an administrator override while systemctl cat shows the combined effective unit.\n\nAsk: “Which location should contain a durable local override?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 94,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 95,
      "image": "assets/slides/slide-95.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Enabled, active, reloaded, and restarted are independent facts.” After editing a unit file: daemon-reload, restart the unit, then verify state and behavior. After editing app config, use reload only if the app supports it.\n\nBOOT + RUNTIME, enable / start: enable changes boot links; start changes current state; --now requests both operations. CONFIG APPLY, reload / restart: reload asks process to reread; restart replaces runtime process; daemon-reload rereads unit files.\n\nExample: Does systemctl enable guarantee the service is healthy now?\n\nAsk: “The final troubleshooting sequence combines every evidence habit from the course.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 95,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 96,
      "image": "assets/slides/slide-96.png",
      "title": "DEMO 10 / DROP-IN",
      "notes": "Timing: 4 minutes.\n\nUse demo-banner.service and DEMO_LOG_LEVEL. Inspect FragmentPath, DropInPaths, and Environment before the change. Add one administrator drop-in, run daemon-reload, restart, and compare systemctl cat with /run/demo-banner.txt. Lab 10 changes COURSE_MODE on another unit.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 96,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 97,
      "image": "assets/slides/slide-97.png",
      "title": "HANDS-ON / LAB 10",
      "notes": "Lab facilitation: 15 minutes.\n\nLaunch the incident without revealing the solution sequence. Read the mission and acceptance evidence, then ask learners to state their first inspection command before opening the terminal. The checker validates observable state; the debrief must explain why that state follows from the commands.\n\nDebrief: why are daemon-reload, restart, and behavior checks separate steps?\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md. Full task and hints: labs/LAB_GUIDE.md.",
      "narration": {
        "number": 97,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 98,
      "image": "assets/slides/slide-98.png",
      "title": "THEORY CHECKPOINT",
      "notes": "Timing: 3 minutes.\n\nThis is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for browser versus Linux session, identity, working directory, predicted state, one cause, and behavior verification.\n\nReinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.\n\nAnnounce the lab transition. Learners will now own the keyboard for exactly three hours.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 98,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 99,
      "image": "assets/slides/slide-99.png",
      "title": "TROUBLESHOOT + ASSESS",
      "notes": "Timing: 2 minutes.\n\nWhen a learner asks for help, walk down the five questions without taking the keyboard. Context prevents solving the wrong host, user, or directory. Target inspection shows current state. Reproducing the symptom preserves the exact failure. Logs and exit status identify the cause. One narrow change followed by the same test gives causal confidence.\n\nFor peer assessment, Partner A explains either the permission or SSH evidence chain. Partner B explains either the journal or systemd chain. A complete explanation names the initial state, the observation that mattered, the smallest change, and the final independent verification.\n\nCorrect common false positives: sudo success does not prove normal-user access; an accepted but unverified host key is not verified trust; active service state does not prove HTTP behavior; and a green checker does not explain why the solution works.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 99,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 100,
      "image": "assets/slides/slide-100.png",
      "title": "REFERENCES",
      "notes": "Timing: 2 minutes.\n\nClose the evidence loop by naming the authority hierarchy. Primary manuals support normative claims; Ubuntu documentation defines the classroom distribution workflow; open courses supplied exercise inspiration. Direct learners to the claim ledger for claim-by-claim scope and the source file for licenses.\n\nSource claims: C13, C17, C18 — resources/CLAIM_LEDGER.md.",
      "narration": {
        "number": 100,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    }
  ],
  "videos": [
    {
      "id": "lab01",
      "number": 1,
      "title": "System orientation",
      "shortTitle": "Identity, user space, kernel, and paths",
      "description": "Build an evidence profile for the current Linux environment.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab02",
      "number": 2,
      "title": "Filesystem and links",
      "shortTitle": "Copy, move, hard link, and symbolic link",
      "description": "Create the project tree and prove how both link types behave.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab03",
      "number": 3,
      "title": "Editor and text evidence",
      "shortTitle": "Nano, structured filters, and pipelines",
      "description": "Edit a configuration and reduce logs into reviewable evidence.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab04",
      "number": 4,
      "title": "Package lifecycle",
      "shortTitle": "Candidate, install state, ownership, and behavior",
      "description": "Install tree and connect package metadata to executable behavior.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab05",
      "number": 5,
      "title": "Permission incident",
      "shortTitle": "Ownership, modes, setgid, and real identities",
      "description": "Repair collaboration while proving least privilege.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab06",
      "number": 6,
      "title": "SSH trust setup",
      "shortTitle": "Keys, fingerprints, and strict client profiles",
      "description": "Build a verified key-only SSH connection from first principles.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab07",
      "number": 7,
      "title": "Journal investigation",
      "shortTitle": "Scoped logs and machine-readable unit state",
      "description": "Preserve evidence and identify the first causal event.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab08",
      "number": 8,
      "title": "Broken service capstone",
      "shortTitle": "Diagnose, repair, and independently verify",
      "description": "Repair a web service and prove state, socket, and HTTP behavior.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab09",
      "number": 9,
      "title": "Process and port investigation",
      "shortTitle": "Unit, PID, identity, socket, and HTTP behavior",
      "description": "Trace one service through manager, process, socket, and client evidence.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    },
    {
      "id": "lab10",
      "number": 10,
      "title": "systemd drop-in",
      "shortTitle": "Fragment, override, manager state, and behavior",
      "description": "Apply a durable administrator override and prove the effective result.",
      "ready": false,
      "language": "en",
      "master": "",
      "audio": "",
      "captions": "",
      "captionsSrt": "",
      "video": "",
      "transcript": ""
    }
  ]
};
