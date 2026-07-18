window.COURSE_CONTENT = {
  "generatedAt": "2026-07-18T07:35:21.143Z",
  "narration": {
    "language": "en",
    "manifest": "media/slide-narration-manifest.json",
    "asrAudit": "media/slide-narration-asr-audit.json",
    "fullDeckAudio": "media/linux-foundations-full-deck.en.mp3",
    "timing": {
      "declaredTheoryTargetMinutes": 180,
      "plannedTheoryDemoMinutes": 194,
      "explicitSlide1To30ScheduleMinutes": 194,
      "explicitScheduleOverDeclaredMinutes": 14,
      "plannedLabMinutes": 180,
      "measuredSpokenAudioSeconds": 1566.06,
      "withinSlidePauseSeconds": 24.75,
      "measuredSlideAudioSeconds": 1590.81,
      "interSlideGapSecondsEach": 2,
      "interSlideGapCount": 37,
      "totalInterSlideGapSeconds": 74,
      "fullDeckDurationSeconds": 1664.81,
      "declaredTheoryTargetMinusSpokenSeconds": 9233.94,
      "explicitScheduleMinusSpokenSeconds": 10073.94,
      "explanation": "Spoken narration reads the canonical presenter notes without padding. Live command execution, demonstrations, questions, discussion, and learner activities occupy the remaining scheduled time. The explicit slide 1-30 timings are preserved even though they exceed the declared theory target."
    },
    "complete": false,
    "availableSlides": 38
  },
  "slides": [
    {
      "number": 1,
      "image": "assets/slides/slide-1.png",
      "title": "Linux Foundations",
      "notes": "Timing: 2 minutes.\n\nSay: “Today is not about memorising a wall of commands. It is about building a reliable operating model: know which Linux session you are in, predict what a command will change, read the resulting state, and use logs as evidence.”\n\nEveryone uses the same isolated Ubuntu 24.04 environment through a browser, whether the physical laptop runs macOS or Windows. The first half builds the mental models and demonstrates them; the second half turns those models into muscle memory.\n\nSet expectations: each container is disposable, but the safety habits are production habits. Invite questions, but park deep distribution debates so the class reaches the service-diagnosis lab.\n\nTransition: “Next: OUTCOMES.”",
      "narration": {
        "number": 1,
        "title": "Linux Foundations",
        "sourceTranscript": "“Today is not about memorising a wall of commands. It is about building a reliable operating model: know which machine you are on, predict what a command will change, read the resulting state, and use logs as evidence.” Explain that everyone will use the same Ubuntu VM even though the host laptops differ. The first half builds the mental models and demonstrates them; the second half turns those models into muscle memory.\n\nSet expectations: the VM is disposable, but the safety habits are production habits. Invite questions, but park deep distro-specific debates so the class reaches the service-diagnosis lab.\n\nLet’s define what success looks like six hours from now.",
        "plannedTiming": "2 minutes.",
        "explicitTheoryDemoMinutes": 2,
        "plannedLabMinutes": null,
        "wordCount": 109,
        "chunkCount": 4,
        "measuredSpeechSeconds": 49.18,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 49.93,
        "audioUrl": "media/slides/slide-01.mp3"
      }
    },
    {
      "number": 2,
      "image": "assets/slides/slide-2.png",
      "title": "OUTCOMES",
      "notes": "Timing: 2 minutes.\n\nSay: “These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.\n\nAsk for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs? Use the answer only to adjust examples—not scope.\n\nTransition: “Next: ENVIRONMENT.”",
      "narration": {
        "number": 2,
        "title": "By the end, you can recover your bearings",
        "sourceTranscript": "“These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.\n\nAsk for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs?\n\nFirst, one distinction prevents half the mistakes in a mixed-laptop room.",
        "plannedTiming": "3 minutes.",
        "explicitTheoryDemoMinutes": 3,
        "plannedLabMinutes": null,
        "wordCount": 93,
        "chunkCount": 4,
        "measuredSpeechSeconds": 48.3,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 49.05,
        "audioUrl": "media/slides/slide-02.mp3"
      }
    },
    {
      "number": 3,
      "image": "assets/slides/slide-3.png",
      "title": "ENVIRONMENT",
      "notes": "Timing: 2 minutes.\n\nSay: “The browser is only the window. Each learner works in a real, isolated Ubuntu 24.04 system container behind it.” Point out that Safari, Edge, and Chrome all reach the same terminal; the host operating system no longer changes the lab commands.\n\nGive the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The portal labels the current lab and lets the learner reset it to a known state.\n\nAsk: “If I close the browser tab, does the Linux session disappear?” Answer: no; it remains on the peer controller until it is reset or destroyed.\n\nTransition: “Next: COURSE MAP.”",
      "narration": {
        "number": 3,
        "title": "Your laptop and your VM are two different systems",
        "sourceTranscript": "“The host creates and reaches the VM. The guest is the Linux system we administer.” Point out that a familiar-looking prompt does not guarantee the same filesystem or command set. On macOS, many Unix commands exist on the host, which makes accidental host edits especially easy. On Windows, a Bash command may simply fail in PowerShell.\n\nGive the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The lab guide explicitly labels host and guest commands.\n\nAsk: “If I run apt install in PowerShell, which system changes?” Answer: none; apt belongs inside Ubuntu.\n\nNow we can place six hours of work on a simple map.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 115,
        "chunkCount": 5,
        "measuredSpeechSeconds": 47.7,
        "withinSlideGapSeconds": 1,
        "measuredDurationSeconds": 48.7,
        "audioUrl": "media/slides/slide-03.mp3"
      }
    },
    {
      "number": 4,
      "image": "assets/slides/slide-4.png",
      "title": "COURSE MAP",
      "notes": "Timing: 2 minutes.\n\nExplain the exact split: 180 minutes of concepts and instructor demonstrations, then 180 minutes of guided participant work. Demonstrations belong to the teaching half because learners are predicting and observing rather than driving.\n\nThe six labs are independent, resettable scenarios in isolated Incus containers. Learners enter through a browser terminal, make real system changes, and use “Check my work” to verify state.\n\nIf the venue gives only six wall-clock hours including breaks, use the compressed option in the instructor runbook: 165 minutes on each side and remove optional discussion prompts equally. Do not cut lab verification steps.\n\nTransition: “Next: Linux is the kernel; a usable system is a stack.”",
      "narration": {
        "number": 4,
        "title": "Practice gets exactly half of the workshop",
        "sourceTranscript": "Explain the exact split: 180 minutes of concepts and instructor demonstrations, then 180 minutes of guided participant work. Demonstrations belong to the teaching half because learners are predicting and observing rather than driving. The six labs are cumulative and reuse one VM.\n\nIf the venue gives only six wall-clock hours including breaks, use the compressed option in the instructor runbook: 165 minutes on each side and remove optional discussion prompts equally. Do not cut lab verification steps.\n\nWith the operating boundary and schedule clear, what exactly do we mean by Linux?",
        "plannedTiming": "2 minutes.",
        "explicitTheoryDemoMinutes": 2,
        "plannedLabMinutes": null,
        "wordCount": 91,
        "chunkCount": 3,
        "measuredSpeechSeconds": 33.28,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 33.78,
        "audioUrl": "media/slides/slide-04.mp3"
      }
    },
    {
      "number": 5,
      "image": "assets/slides/slide-5.png",
      "title": "Linux is the kernel; a usable system is a stack",
      "notes": "Timing: 2 minutes.\n\nSay: “Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from the platform boundary upward. The controller VM supplies virtual hardware; each Incus system container shares the controller kernel while keeping its own user space, processes, filesystem, network, and systemd.\n\nUse uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share a kernel yet differ in packages, defaults, and support.\n\nAvoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.\n\nTransition: “Next: The kernel turns hardware into abstractions.”",
      "narration": {
        "number": 5,
        "title": "Linux is the kernel; a usable system is a stack",
        "sourceTranscript": "“Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from hardware upward. The VM supplies virtual hardware. The kernel schedules processes and mediates devices. User space contains the shell and systemd. Applications are the commands and services learners interact with.\n\nUse uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share the Linux kernel yet differ in packages, defaults, and support.\n\nAvoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.\n\nA distribution chooses and maintains the pieces above the kernel.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 109,
        "chunkCount": 4,
        "measuredSpeechSeconds": 47.28,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 48.03,
        "audioUrl": "media/slides/slide-05.mp3"
      }
    },
    {
      "number": 6,
      "image": "assets/slides/slide-6.png",
      "title": "LINUX / KERNEL",
      "notes": "Timing: 1.5 minutes.\n\nSay: “The kernel turns hardware into abstractions.” Treat the kernel as the resource manager below every command. User programs request services through system calls instead of controlling hardware directly.\n\nProcesses means scheduled programs with isolated address spaces. Memory means virtual memory, pages, caches, and protection. Filesystems means one namespace across disks and virtual data. Network means sockets, routes, interfaces, and packet flow. Devices means drivers expose hardware through common interfaces.\n\nExample: When cat reads a file, the shell starts cat, cat asks the kernel to open and read bytes, and the kernel coordinates permissions, storage, and memory.\n\nAsk: “Which kernel responsibility is involved when a process is killed for using too much memory?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Next we separate the kernel from the programs that make the system usable.”",
      "narration": {
        "number": 6,
        "title": "A distribution is a curated operating agreement",
        "sourceTranscript": "Frame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.\n\nExplain why the workshop standardises on Ubuntu 24.04 LTS: consistent long-term-supported image, APT, OpenSSH, and systemd, available through Multipass on both host platforms. Mention that the troubleshooting method transfers even when commands vary slightly.\n\nAsk: “What should you record before following a web tutorial?” Expected: distribution/version and command context.\n\nAcross distributions, the filesystem gives us a shared map.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 104,
        "chunkCount": 4,
        "measuredSpeechSeconds": 52.3,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 53.05,
        "audioUrl": "media/slides/slide-06.mp3"
      }
    },
    {
      "number": 7,
      "image": "assets/slides/slide-7.png",
      "title": "LINUX / USER SPACE",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Kernel space and user space fail differently.” A command returning ‘not found’ is normally a shell or package issue; a filesystem I/O error may point lower in the stack.\n\nKERNEL SPACE, shared authority: Drivers and core resource control; A crash can affect the whole system; Observed with dmesg and kernel journal fields. USER SPACE, isolated processes: Shells, tools, daemons, applications; A crash usually affects one process; Observed with exit status and unit logs.\n\nExample: If one web service stops but the host remains healthy, which side would you inspect first?\n\nAsk: “The next abstraction is the process: a running instance, not a file on disk.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 7,
        "title": "Most investigations begin at five filesystem anchors",
        "sourceTranscript": "Anchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.\n\nConnect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.\n\nAsk learners to predict where SSH server configuration and package logs belong.\n\nThe map becomes useful when paths behave like coordinates.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 107,
        "chunkCount": 5,
        "measuredSpeechSeconds": 44.6,
        "withinSlideGapSeconds": 1,
        "measuredDurationSeconds": 45.6,
        "audioUrl": "media/slides/slide-07.mp3"
      }
    },
    {
      "number": 8,
      "image": "assets/slides/slide-8.png",
      "title": "LINUX / PROCESSES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “A process is a running program with context.” The executable on disk is only the recipe. A process is that recipe running with identity, memory, environment, and open resources.\n\nPID means a temporary process identifier. Parent means the process that created it. Identity means effective user and groups used for access checks. Environment means name/value data inherited at process start. Descriptors means open files, sockets, and streams.\n\nExample: Use ps -ef for a broad view and ps -o pid,ppid,user,stat,cmd -p PID when you need focused evidence.\n\nAsk: “Why can two processes run the same executable but access different files?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Distributions assemble the kernel and user space into something maintainable.”",
      "narration": {
        "number": 8,
        "title": "Paths are coordinates; your working directory is the origin",
        "sourceTranscript": "Use the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.\n\nCall out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.\n\nModel the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.\n\nThe terminal is where we express that intent—and where small symbols compose powerful workflows.",
        "plannedTiming": "6 minutes.",
        "explicitTheoryDemoMinutes": 6,
        "plannedLabMinutes": null,
        "wordCount": 103,
        "chunkCount": 4,
        "measuredSpeechSeconds": 38.98,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 39.73,
        "audioUrl": "media/slides/slide-08.mp3"
      }
    },
    {
      "number": 9,
      "image": "assets/slides/slide-9.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 2 minutes.\n\nFrame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.\n\nExplain why the workshop standardises on Ubuntu 24.04 LTS: one long-term-supported image, APT, OpenSSH, and systemd, cloned into isolated Incus lab sessions. The browser makes that same Linux environment available from macOS and Windows.\n\nAsk: “What should you record before following a web tutorial?” Expected: distribution, version, and command context.\n\nTransition: “Next: Distribution families share ideas, not every command.”",
      "narration": {
        "number": 9,
        "title": "The shell turns text into a process request",
        "sourceTranscript": "Parse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.\n\nMention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.\n\nDo not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.\n\nA compact navigation vocabulary covers most daily movement.",
        "plannedTiming": "6 minutes.",
        "explicitTheoryDemoMinutes": 6,
        "plannedLabMinutes": null,
        "wordCount": 100,
        "chunkCount": 4,
        "measuredSpeechSeconds": 42.52,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 43.27,
        "audioUrl": "media/slides/slide-09.mp3"
      }
    },
    {
      "number": 10,
      "image": "assets/slides/slide-10.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Distribution families share ideas, not every command.” Package names, security defaults, and service names vary even when filesystem and permission concepts transfer.\n\nDebian family: Ubuntu · Debian; APT + .deb; /etc/apt; Long support. Red Hat family: RHEL · Rocky · Alma; DNF + RPM; /etc/yum.repos.d; SELinux defaults. Other contexts: Fedora: newer stacks; Alpine: small images; Arch: rolling; Vendor clouds.\n\nExample: A tutorial says yum install; your host has apt. What should you verify before translating it?\n\nAsk: “Release strategy is the next distribution choice that changes operational risk.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 10,
        "title": "Navigate by asking, moving, then confirming",
        "sourceTranscript": "Teach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.\n\nPoint out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.\n\nLet’s see the host/guest boundary, paths, and a pipe in one live sequence.",
        "plannedTiming": "6 minutes.",
        "explicitTheoryDemoMinutes": 6,
        "plannedLabMinutes": null,
        "wordCount": 98,
        "chunkCount": 3,
        "measuredSpeechSeconds": 34.14,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 34.64,
        "audioUrl": "media/slides/slide-10.mp3"
      }
    },
    {
      "number": 11,
      "image": "assets/slides/slide-11.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Stable and rolling releases trade currency.” Ubuntu 24.04 LTS gives this class a consistent package set and support baseline; a development workstation may make a different tradeoff.\n\nSTABLE / LTS, predictability: Longer support window; Security fixes with fewer surprises; Older major versions are common. ROLLING, currency: Frequent package updates; Fast access to new features; More integration change over time.\n\nExample: Which model would you favor for a long-lived production appliance, and why?\n\nAsk: “Whatever the model, identify exactly what system you are operating.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 11,
        "title": "Live demo: narrate state, not keystrokes",
        "sourceTranscript": "Use resources/LIVE_DEMOS.md, Demo 1. Before each command, ask or state the expected system and state change. Start at the host prompt, show multipass list, then enter the guest. Run whoami, hostname, and pwd. Move to /var/log, then return home and create the demo tree.\n\nFor the pipeline, explain that grep writes matching lines to standard output, the pipe carries that stream, and tee both displays and saves it. Verify with cat.\n\nIf typing takes too long, skip creating the sample log and use printf from the demo guide. Do not paste the whole block—the point is reading state changes.\n\nThat pipe is one of three stream operators worth memorising.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 109,
        "chunkCount": 4,
        "measuredSpeechSeconds": 50.56,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 51.31,
        "audioUrl": "media/slides/slide-11.mp3"
      }
    },
    {
      "number": 12,
      "image": "assets/slides/slide-12.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Record six facts before following external instructions.” A copied command is only safe when its assumptions match the target. Capture the environment first so differences become visible.\n\nDistribution means cat /etc/os-release. Kernel means uname -r. Architecture means uname -m. Package tool means command -v apt dnf apk. Init system means ps -p 1 -o comm=. Privilege means id; sudo -l.\n\nExample: A container may report Ubuntu user space while sharing a kernel supplied by its host; both facts can be true.\n\nAsk: “Which command answers the distribution question, and which answers the kernel question?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “That distinction matters most when comparing virtual machines and containers.”",
      "narration": {
        "number": 12,
        "title": "Pipes connect small tools into an investigation",
        "sourceTranscript": "Describe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.\n\nUse tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.\n\nConnect this to journalctl: filter at the source first, then use grep only when helpful.\n\nFiles also carry identity and access rules, so we need to understand users before chmod.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 106,
        "chunkCount": 5,
        "measuredSpeechSeconds": 40.84,
        "withinSlideGapSeconds": 1,
        "measuredDurationSeconds": 41.84,
        "audioUrl": "media/slides/slide-12.mp3"
      }
    },
    {
      "number": 13,
      "image": "assets/slides/slide-13.png",
      "title": "ENVIRONMENT",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Virtual machines isolate kernels; containers share one.” Learners receive a realistic Ubuntu user space with users, packages, logs, SSH, and systemd, while the instructor can reset each seat quickly.\n\nVIRTUAL MACHINE, hardware boundary: Guest owns a kernel; Stronger isolation boundary; Higher memory and boot cost. SYSTEM CONTAINER, OS boundary: Shares the host kernel; Own user space and systemd; Fast cloning and reset.\n\nExample: Does closing the browser destroy the container? Why not?\n\nAsk: “The transferable skill is recognizing which concepts stay stable across these boundaries.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 13,
        "title": "Linux authorizes identities, not job titles",
        "sourceTranscript": "Explain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.\n\nShow the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.\n\nMention that group membership changes usually require a new login session.\n\nAdministrative work temporarily changes authority; sudo makes that change explicit.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 103,
        "chunkCount": 4,
        "measuredSpeechSeconds": 38.3,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 39.05,
        "audioUrl": "media/slides/slide-13.mp3"
      }
    },
    {
      "number": 14,
      "image": "assets/slides/slide-14.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Core operating questions transfer across distributions.” APT may become DNF and ssh.service may become sshd.service, but context, least privilege, logs, and verification still guide the work.\n\nLocate: Where am I?; Which host?; Which user?; Which file or unit?. Change: Predict one state; Use narrow privilege; Make one edit; Capture exit status. Verify: Inspect resulting state; Read relevant logs; Test intended identity; Prove behavior.\n\nExample: Which parts of today’s workflow would survive a move from Ubuntu to Rocky Linux?\n\nAsk: “Now we apply that operating model to the filesystem namespace.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 14,
        "title": "Use sudo for one deliberate action",
        "sourceTranscript": "“sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.\n\nContrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.\n\nNow we can decode the rule that combines identity with read, write, and execute.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 99,
        "chunkCount": 3,
        "measuredSpeechSeconds": 36.82,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 37.32,
        "audioUrl": "media/slides/slide-14.mp3"
      }
    },
    {
      "number": 15,
      "image": "assets/slides/slide-15.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 2 minutes.\n\nAnchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.\n\nConnect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.\n\nAsk learners to predict where SSH server configuration and package logs belong.\n\nTransition: “Next: Filesystem paths express intent, not physical disks.”",
      "narration": {
        "number": 15,
        "title": "Permissions are three triplets evaluated in order",
        "sourceTranscript": "Decode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.\n\nDistinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.\n\nUse namei -l as a powerful path-permission diagnostic.\n\nNumeric modes are just compact arithmetic for those same three triplets.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 105,
        "chunkCount": 4,
        "measuredSpeechSeconds": 36.92,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 37.67,
        "audioUrl": "media/slides/slide-15.mp3"
      }
    },
    {
      "number": 16,
      "image": "assets/slides/slide-16.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Filesystem paths express intent, not physical disks.” Linux presents one directory tree even when data comes from several disks, network shares, or virtual kernel filesystems.\n\n/ means the root of the visible namespace. Mount means attach another filesystem at a directory. Path means a route through directory entries. File means a name referring to an inode-like object. Metadata means owner, mode, timestamps, size, and type.\n\nExample: The command findmnt shows where filesystems are attached; df reports filesystem space, while du estimates space used by paths.\n\nAsk: “Why can /home live on a different disk without changing user paths?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “The Filesystem Hierarchy Standard gives common directories a shared purpose.”",
      "narration": {
        "number": 16,
        "title": "4 + 2 + 1 makes numeric modes readable",
        "sourceTranscript": "Build 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.\n\nWarn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.\n\nMention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.\n\nMode answers what; ownership answers who.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 97,
        "chunkCount": 4,
        "measuredSpeechSeconds": 35.76,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 36.51,
        "audioUrl": "media/slides/slide-16.mp3"
      }
    },
    {
      "number": 17,
      "image": "assets/slides/slide-17.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “The hierarchy separates configuration, data, and runtime state.” A service configuration normally belongs under /etc; its changing cache or queue normally belongs under /var.\n\nConfiguration: /etc host settings; /usr shipped defaults; Prefer drop-ins; Track intentional edits. Persistent data: /home user files; /var changing service data; /srv served content; /opt optional software. Runtime state: /run since boot; /tmp temporary files; /proc process views; /sys device and kernel views.\n\nExample: Where would you look first for a host-specific SSH configuration?\n\nAsk: “Two special trees expose live kernel state as files.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 17,
        "title": "Shared work needs the right group, not world access",
        "sourceTranscript": "Present the real use case: Alice and Bob need a shared directory, everyone else needs no access. The solution is a team group, group-owned directory, 2770 mode, and setgid inheritance. This is better than 777 because it expresses who should collaborate.\n\nExplain chown owner:group and chgrp. The leading 2 in 2770 activates setgid on the directory; new content inherits courseops as its group. Default file modes may still restrict group write, so production shares often add a suitable umask or default ACL—mention, do not teach today.\n\nConfiguration is text, so we also need one terminal editor we can reliably exit.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 100,
        "chunkCount": 3,
        "measuredSpeechSeconds": 33.14,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 33.64,
        "audioUrl": "media/slides/slide-17.mp3"
      }
    },
    {
      "number": 18,
      "image": "assets/slides/slide-18.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “/proc and /sys expose live kernel state.” cat /proc/uptime reads a kernel-provided value. It does not read bytes stored on the root disk.\n\n/proc, process + kernel state: PID directories describe processes; cpuinfo and meminfo expose summaries; Values may change between reads. /sys, devices + kernel objects: Hardware and driver relationships; Many tunables are writable by root; Changes can affect the running system.\n\nExample: Why is copying /proc as a backup meaningless?\n\nAsk: “Back in ordinary directories, every path is interpreted from a starting point.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 18,
        "title": "Nano is enough to make a safe first edit",
        "sourceTranscript": "Demonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.\n\nMention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.\n\nLet’s combine identity, ownership, mode, and path traversal in a repair.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 91,
        "chunkCount": 3,
        "measuredSpeechSeconds": 37.66,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 38.16,
        "audioUrl": "media/slides/slide-18.mp3"
      }
    },
    {
      "number": 19,
      "image": "assets/slides/slide-19.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 2 minutes.\n\nUse the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.\n\nCall out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.\n\nModel the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.\n\nTransition: “Next: Path syntax has a small, precise vocabulary.”",
      "narration": {
        "number": 19,
        "title": "Live demo: repair access with the smallest change",
        "sourceTranscript": "Use resources/LIVE_DEMOS.md, Demo 2. Set up the team group and directory, create a file as Alice, then show stat. Break access deliberately. Before fixing, ask the room which identity class applies and what permission is missing. Use id, stat, and namei -l to gather evidence.\n\nMake the narrow repair: correct group ownership and mode 640. Retest using the same command and identity that failed. Point out that sudo cat succeeding would not prove the intended user can read.\n\nIf time slips, skip the initial directory construction and begin from the broken file.\n\nLocal identity is one half of remote access; SSH adds server identity and cryptographic proof.",
        "plannedTiming": "10 minutes.",
        "explicitTheoryDemoMinutes": 10,
        "plannedLabMinutes": null,
        "wordCount": 107,
        "chunkCount": 4,
        "measuredSpeechSeconds": 41.3,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 42.05,
        "audioUrl": "media/slides/slide-19.mp3"
      }
    },
    {
      "number": 20,
      "image": "assets/slides/slide-20.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Path syntax has a small, precise vocabulary.” A path is evaluated left to right. Confusion usually comes from an incorrect starting directory or from shell expansion that happened before the command ran.\n\n/name means absolute: begin at root. name means relative: begin at the working directory. . means the current directory. .. means the parent directory. ~ means current user's home. name/ means directory path; trailing slash clarifies intent.\n\nExample: From /var/log, ../tmp means /var/tmp, not /tmp. Use realpath -m to reason about a path without requiring it to exist.\n\nAsk: “What does ./script.sh communicate that script.sh does not?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Names beginning with a dot add one visibility convention, not a security boundary.”",
      "narration": {
        "number": 20,
        "title": "SSH authenticates both ends of the conversation",
        "sourceTranscript": "Separate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.\n\nExplain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.\n\nUser key authentication works because the secret half never travels.",
        "plannedTiming": "8 minutes.",
        "explicitTheoryDemoMinutes": 8,
        "plannedLabMinutes": null,
        "wordCount": 95,
        "chunkCount": 2,
        "measuredSpeechSeconds": 31.64,
        "withinSlideGapSeconds": 0.25,
        "measuredDurationSeconds": 31.89,
        "audioUrl": "media/slides/slide-20.mp3"
      }
    },
    {
      "number": 21,
      "image": "assets/slides/slide-21.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Hidden names are a convention, not protection.” The directory ~/.ssh is hidden from a plain ls, but another user’s ability to read it depends on traversal and file modes.\n\nNORMAL LISTING, ls: Omits names beginning with dot; Keeps routine output quieter; Permissions are unchanged. ALL ENTRIES, ls -la: Shows dotfiles and metadata; Useful for .ssh and configuration; Still governed by directory access.\n\nExample: Would renaming secrets.txt to .secrets.txt make it confidential?\n\nAsk: “The next layer is understanding what kind of object a directory entry names.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 21,
        "title": "The private key proves; the public key permits",
        "sourceTranscript": "Use a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.\n\nUse Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.\n\nMention that enterprise policy may require hardware-backed keys or certificates.\n\nA client profile makes the safe choice repeatable.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 99,
        "chunkCount": 4,
        "measuredSpeechSeconds": 36.7,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 37.45,
        "audioUrl": "media/slides/slide-21.mp3"
      }
    },
    {
      "number": 22,
      "image": "assets/slides/slide-22.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “The first character of ls -l identifies object type.” Linux treats many resources through file-like interfaces, but type changes the meaning of operations and permissions.\n\n- means regular file. d means directory. l means symbolic link. c / b means character or block device. s means Unix-domain socket. p means named pipe.\n\nExample: Use file PATH for a content-oriented guess and stat PATH for authoritative metadata about the named object.\n\nAsk: “What does the leading d in drwxr-x--- tell you before the permission bits?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Links let several pathnames refer directly or indirectly to data.”",
      "narration": {
        "number": 22,
        "title": "Put safe SSH defaults in a named client profile",
        "sourceTranscript": "Walk line by line. Host is the alias. HostName is the current VM IP. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.\n\nExplain StrictHostKeyChecking carefully: accept-new is convenient in this isolated lab because it adds new hosts but rejects changed keys. In managed environments, pre-provision known_hosts or use yes and a trusted onboarding process. Never recommend no/off as a shortcut.\n\nPoint out the same config path concept works with Windows OpenSSH; PowerShell expands $HOME when creating files, while OpenSSH reads ~/.ssh/config.\n\nNow we’ll build the key path end to end and verify both identities.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 109,
        "chunkCount": 4,
        "measuredSpeechSeconds": 50.7,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 51.45,
        "audioUrl": "media/slides/slide-22.mp3"
      }
    },
    {
      "number": 23,
      "image": "assets/slides/slide-23.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Hard links and symbolic links fail in different ways.” ln report.txt report-copy-name creates a hard link; ln -s report.txt latest creates a symbolic path reference.\n\nHARD LINK, another name: Points to the same inode; Usually cannot cross filesystems; Data remains until last link is removed. SYMBOLIC LINK, stored path: Can cross filesystems; Can point to a directory; Can become dangling.\n\nExample: If the original pathname is renamed, which link type is more likely to break?\n\nAsk: “Before commands see paths, the shell may expand wildcard patterns.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 23,
        "title": "Live demo: verify before you trust",
        "sourceTranscript": "Use resources/LIVE_DEMOS.md, Demo 3. First show the server host fingerprint inside the VM and record it. Generate a course-specific Ed25519 client key on the Mac. Transfer only the .pub file with multipass transfer so the same pattern works for Windows learners. Install the public key with 700 on .ssh and 600 on authorized_keys.\n\nConnect from the host, compare the prompted fingerprint with the recorded value, then accept. Run whoami, hostname, and echo $SSH_CONNECTION.\n\nUse a passphrase you can type quickly or pre-create the key if the room cannot see secret input. Never display a real personal key.\n\nRemote access gives us a shell; logs tell us what happened before we arrived.",
        "plannedTiming": "10 minutes.",
        "explicitTheoryDemoMinutes": 10,
        "plannedLabMinutes": null,
        "wordCount": 111,
        "chunkCount": 4,
        "measuredSpeechSeconds": 51.46,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 52.21,
        "audioUrl": "media/slides/slide-23.mp3"
      }
    },
    {
      "number": 24,
      "image": "assets/slides/slide-24.png",
      "title": "SHELL / PATHS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Globs expand before the command starts.” The shell expands globs into a list of matching pathnames. The receiving program normally never sees the wildcard.\n\n* means zero or more characters except leading dot. ? means exactly one character. [ab] means one character from a set. [0-9] means one character in a range. Quoted glob means literal pattern; no pathname expansion.\n\nExample: printf '%s\\n' *.log safely shows the expanded arguments. Check that list before using the same pattern with rm or chmod.\n\nAsk: “Why might rm *.log affect more files tomorrow than it does today?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Safe file work adds explicit inspection and verification around expansion.”",
      "narration": {
        "number": 24,
        "title": "Linux logs live in files and in the systemd journal",
        "sourceTranscript": "Explain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.\n\nShow that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.\n\nThe investigative rule is to frame a question first: which unit, which boot, which time window, which severity?\n\njournalctl turns those questions into filters.",
        "plannedTiming": "6 minutes.",
        "explicitTheoryDemoMinutes": 6,
        "plannedLabMinutes": null,
        "wordCount": 81,
        "chunkCount": 4,
        "measuredSpeechSeconds": 43.82,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 44.57,
        "audioUrl": "media/slides/slide-24.mp3"
      }
    },
    {
      "number": 25,
      "image": "assets/slides/slide-25.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Inspect targets before changing files.” For a risky batch, first replace rm with printf '%s\\n' or use find with -print. Only then run the change.\n\nStep 1, Locate: pwd and realpath. Step 2, Enumerate: printf or find the exact targets. Step 3, Predict: state the expected names and count. Step 4, Change: cp, mv, or rm with narrow scope. Step 5, Verify: list, compare, or test the result.\n\nExample: What evidence would you capture before removing every .tmp file under one directory?\n\nAsk: “A short failure demo shows why current-directory assumptions are dangerous.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 25,
        "title": "Filter the journal toward one answer",
        "sourceTranscript": "Build the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot.\n\nWarn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.\n\nPoint out access: normal users may see only their own journal; sudo may be required for system units.\n\nWe’ll now restart SSH and watch the relevant evidence appear.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 107,
        "chunkCount": 4,
        "measuredSpeechSeconds": 44.24,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 44.99,
        "audioUrl": "media/slides/slide-25.mp3"
      }
    },
    {
      "number": 26,
      "image": "assets/slides/slide-26.png",
      "title": "DEMO / FILESYSTEM",
      "notes": "Timing: 4 minutes.\n\nSay: “Live demo: expose a wrong-directory assumption.” Narrate the expected working directory before every command, then let the first cat fail without adding sudo or changing modes.\n\nRun the commands one at a time. Before each command, predict the state or evidence it should produce; after it runs, point to the output that confirms or challenges the prediction.\n\nExample: Ask the room for the smallest explanation of the failure before revealing pwd.\n\nAsk: “With paths grounded, we can examine how the terminal and shell transform text into work.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 26,
        "title": "Live demo: ask the journal a smaller question",
        "sourceTranscript": "Use resources/LIVE_DEMOS.md, Demo 4. Restart SSH to create a known event. Run status first and distinguish the current summary from historical journal entries. Query the last ten entries. Add a five-minute window and warning priority; explain that an empty result can be good news, not a broken command. Enter follow mode, create a connection event from another terminal if convenient, then stop with Ctrl+C.\n\nRead one entry aloud: timestamp, host, process/unit, message. Model evidence extraction rather than scrolling.\n\nLogs describe services managed by systemd, so next we need the unit lifecycle.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 91,
        "chunkCount": 4,
        "measuredSpeechSeconds": 38.62,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 39.37,
        "audioUrl": "media/slides/slide-26.mp3"
      }
    },
    {
      "number": 27,
      "image": "assets/slides/slide-27.png",
      "title": "TERMINAL",
      "notes": "Timing: 2 minutes.\n\nParse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.\n\nMention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.\n\nDo not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.\n\nTransition: “Next: Terminal, shell, and command are separate layers.”",
      "narration": {
        "number": 27,
        "title": "systemd manages declared units toward a state",
        "sourceTranscript": "Define a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.\n\nMake enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.\n\nA small verb set handles most daily service work.",
        "plannedTiming": "7 minutes.",
        "explicitTheoryDemoMinutes": 7,
        "plannedLabMinutes": null,
        "wordCount": 91,
        "chunkCount": 3,
        "measuredSpeechSeconds": 28.76,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 29.26,
        "audioUrl": "media/slides/slide-27.mp3"
      }
    },
    {
      "number": 28,
      "image": "assets/slides/slide-28.png",
      "title": "TERMINAL",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Terminal, shell, and command are separate layers.” The browser terminal and macOS Terminal can both run a Bash session; the window differs while the shell language remains familiar.\n\nTERMINAL, input + display: Keyboard and screen interface; Local app or browser ttyd; Transports control characters. SHELL, parser + launcher: Expands variables and globs; Connects pipelines and redirections; Starts programs and reports status.\n\nExample: Which layer expands *.log: terminal, shell, or grep?\n\nAsk: “Quoting controls exactly which transformations the shell performs.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 28,
        "title": "Use systemctl verbs deliberately",
        "sourceTranscript": "Group verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.\n\nTeach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.\n\nThe final demo turns that sequence into a real repair.",
        "plannedTiming": "6 minutes.",
        "explicitTheoryDemoMinutes": 6,
        "plannedLabMinutes": null,
        "wordCount": 100,
        "chunkCount": 3,
        "measuredSpeechSeconds": 45.34,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 45.84,
        "audioUrl": "media/slides/slide-28.mp3"
      }
    },
    {
      "number": 29,
      "image": "assets/slides/slide-29.png",
      "title": "Quoting decides what the shell expands",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Quoting decides what the shell expands.” Most shell bugs are argument bugs. Quote data so spaces and wildcard characters remain part of one intended argument.\n\nUnquoted means split words, expand variables, expand globs. 'single quotes' means preserve every character literally. \"double quotes\" means expand variables but preserve one argument. backslash means escape the next character. $() means replace with captured command output.\n\nExample: mkdir -p \"$HOME/course notes\" creates one directory. Without quotes, the shell passes two path arguments.\n\nAsk: “How many arguments does printf '%s\\n' \"$HOME\" pass after expansion?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Variable and command expansion happen before the program receives its argument list.”",
      "narration": {
        "number": 29,
        "title": "Live demo: status is the symptom; logs reveal the cause",
        "sourceTranscript": "Use resources/LIVE_DEMOS.md, Demo 5. Install the unit with a missing User and WorkingDirectory. Start it and resist fixing immediately. Run status, then journalctl for the unit and time window. Identify the credential/user error and connect it to systemctl cat output.\n\nCreate the system user and service directory with explicit owner and mode. Add an index file, restart, and verify systemctl is-active. Finally use curl. Emphasise that active only proves the process is running; curl proves the intended behavior.\n\nIf the service unexpectedly starts, use a new nonexistent username. If the demo stalls, switch to the backup VM or show the prepared commands and outcomes.\n\nYou now have one repeatable loop for unfamiliar Linux systems.",
        "plannedTiming": "10 minutes.",
        "explicitTheoryDemoMinutes": 10,
        "plannedLabMinutes": null,
        "wordCount": 114,
        "chunkCount": 4,
        "measuredSpeechSeconds": 40.06,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 40.81,
        "audioUrl": "media/slides/slide-29.mp3"
      }
    },
    {
      "number": 30,
      "image": "assets/slides/slide-30.png",
      "title": "Shell expansion explains surprising commands",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Shell expansion explains surprising commands.” You do not need every Bash parsing rule, but you should know that the displayed line is not necessarily the final argument list.\n\nParse means recognize quotes, operators, and command boundaries. Parameters means replace $name and ${name}. Commands means replace $(...) with output. Split means unquoted results may become several words. Glob means patterns may become many pathnames. Execute means run the final program and arguments.\n\nExample: Use printf '<%s>\\n' -- $value and then \"$value\" to demonstrate how quoting changes argument boundaries.\n\nAsk: “Why is rm -rf $target dangerous when target is empty or contains spaces?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “After execution, the shell records one small but valuable result: exit status.”",
      "narration": {
        "number": 30,
        "title": "A safe operator closes every change with evidence",
        "sourceTranscript": "This is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for host/guest, identity, working directory, predicted state, one cause, and behavior verification.\n\nReinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.\n\nAnnounce the lab transition. Learners will now own the keyboard for exactly three hours.\n\nKeep this loop visible; every lab checkpoint uses it.",
        "plannedTiming": "5 minutes.",
        "explicitTheoryDemoMinutes": 5,
        "plannedLabMinutes": null,
        "wordCount": 89,
        "chunkCount": 4,
        "measuredSpeechSeconds": 31.96,
        "withinSlideGapSeconds": 0.75,
        "measuredDurationSeconds": 32.71,
        "audioUrl": "media/slides/slide-30.mp3"
      }
    },
    {
      "number": 31,
      "image": "assets/slides/slide-31.png",
      "title": "Exit status reports success or failure",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Exit status reports success or failure.” Exit status is machine-readable evidence, but its exact meaning belongs to the command. For grep, one can mean no match rather than a broken program.\n\n0 means the command reports success. 1–125 means program-defined condition or failure. 126 means found but not executable. 127 means command not found. 128 + signal means terminated by a signal.\n\nExample: Run a command, then immediately print printf 'status=%s\\n' \"$?\" before another command overwrites the value.\n\nAsk: “Can a command print an error and still return zero? What would you trust?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Shell operators can use that status to control the next action.”",
      "narration": {
        "number": 31,
        "title": "Three hours. One VM. Six checkpoints.",
        "sourceTranscript": "Direct learners to the participant lab guide. Explain the status signal: green complete, amber working, red blocked. Pairing is optional but recommended: one driver types, one navigator reads the next step and predicts outcomes; swap after each lab.\n\nState the support rule: when blocked, show pwd, whoami, recent history, and the exact repeated failing command. Do not silently start over.\n\nStart the 25-minute Lab 1 timer now.",
        "plannedTiming": "3 minutes of lab block orientation; this time is included in Lab 1.",
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": null,
        "wordCount": 67,
        "chunkCount": 3,
        "measuredSpeechSeconds": 32.88,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 33.38,
        "audioUrl": "media/slides/slide-31.mp3"
      }
    },
    {
      "number": 32,
      "image": "assets/slides/slide-32.png",
      "title": "Control operators and pipes solve different jobs",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Control operators and pipes solve different jobs.” sudo apt update && sudo apt install tree stops before installation if the index refresh fails.\n\n&& AND ||, control flow: Run next only on success; Or run fallback on failure; Status determines the branch. | PIPE, data flow: Connect stdout to stdin; Commands run as a pipeline; Last status is reported by default.\n\nExample: Why is command1 | command2 not a replacement for command1 && command2?\n\nAsk: “Streams give every process three conventional communication channels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 32,
        "title": "Labs 1–2 establish the system and the map",
        "sourceTranscript": "For Lab 1, watch for driver/virtualization failures and learners running guest commands on the host. Ask them to read their prompt. At minute 18, announce seven minutes remaining. Checkpoint requires whoami, hostname, os-release, kernel, and pwd.\n\nFor Lab 2, prevent blind rm usage. Ask learners to predict the find output before running it. At minute 50 overall, give the ten-minute warning. Fast finishers should explain absolute versus relative paths to a partner, then complete the grep challenge.\n\nDo not solve by taking the keyboard. Request pwd, whoami, and the exact command.",
        "plannedTiming": null,
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": 60,
        "wordCount": 91,
        "chunkCount": 3,
        "measuredSpeechSeconds": 54.38,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 54.88,
        "audioUrl": "media/slides/slide-32.mp3"
      }
    },
    {
      "number": 33,
      "image": "assets/slides/slide-33.png",
      "title": "TERMINAL",
      "notes": "Timing: 2 minutes.\n\nTeach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.\n\nPoint out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.\n\nTransition: “Next: Use local help before trusting a random command.”",
      "narration": {
        "number": 33,
        "title": "Labs 3–4 turn text and permissions into policy",
        "sourceTranscript": "For Lab 3, explain that package download speed varies. Pair a slow learner with a peer for the Nano steps while APT finishes. Verify package state with version commands and the APT history log.\n\nFor Lab 4, insist on the use case: Alice owns, courseops reads, others have no access. Ask which class applies before each chmod. If group membership seems stale, use sudo -u as written in the guide or start a new login. The final checkpoint is both positive and negative: Bob succeeds and others remain blocked.\n\nFast finishers should use namei -l to explain every directory traversal permission.",
        "plannedTiming": null,
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": 60,
        "wordCount": 101,
        "chunkCount": 3,
        "measuredSpeechSeconds": 38.28,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 38.78,
        "audioUrl": "media/slides/slide-33.mp3"
      }
    },
    {
      "number": 34,
      "image": "assets/slides/slide-34.png",
      "title": "Use local help before trusting a random command",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Use local help before trusting a random command.” Use man 5 ssh_config for the file format and man 1 ssh for the client command; the section number disambiguates names.\n\nQuick syntax: command --help; Short option summary; Examples may be included; Best for recall. Full manual: man command; /pattern to search; n for next result; q to leave. Shell built-ins: help cd; type command; command -V name; distinguish aliases.\n\nExample: How can type reveal that cd is not an external executable?\n\nAsk: “Package tools add a maintained software source above individual commands.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 34,
        "title": "Labs 5–6 connect trust to troubleshooting",
        "sourceTranscript": "For Lab 5, learners alternate between host and guest. Make them announce the prompt before commands. The most common errors are copying the private key, wrong VM IP, and incorrect .ssh ownership or modes. Use namei -l and ssh -vv only after checking basics. Ensure fingerprints are compared.\n\nFor Lab 6, stop learners from creating courseapp before reading logs. They must record state, first useful error, and related configuration line. The final verification is threefold: is-active, is-enabled, and curl.\n\nAt minute 50, give ten minutes remaining. Fast finishers explain why daemon-reload is needed and why curl adds evidence beyond active state.",
        "plannedTiming": null,
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": 60,
        "wordCount": 101,
        "chunkCount": 3,
        "measuredSpeechSeconds": 47.52,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 48.02,
        "audioUrl": "media/slides/slide-34.mp3"
      }
    },
    {
      "number": 35,
      "image": "assets/slides/slide-35.png",
      "title": "PACKAGES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “APT separates repositories, indexes, and installed files.” An old local index can report a package missing even when the repository has added it.\n\nRepository: Signed metadata; Package archives; Release channels; Repository trust keys. Local index: Refreshed by apt update; Available versions; Candidate selection; Dependency metadata. Installed state: Tracked by dpkg; Files on disk; Package status; APT history log.\n\nExample: Which operation requires network metadata but does not itself install software?\n\nAsk: “A safe package workflow inspects candidate and resulting state.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 35,
        "title": "When blocked, widen evidence before widening privilege",
        "sourceTranscript": "If several learners hit different failures, pause and apply the ladder to one example. Context first prevents solving the wrong machine, user, or directory. Inspect the target and effective configuration. Reproduce once to capture the symptom. Gather logs and status. Only then change one cause and repeat the same verification.\n\nThe phrase “before widening privilege” matters: sudo can bypass the intended identity and produce a false success. Likewise chmod 777 can erase the evidence of a group-design problem.",
        "plannedTiming": "keep visible during support or use for a 3-minute regroup.",
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": null,
        "wordCount": 78,
        "chunkCount": 2,
        "measuredSpeechSeconds": 37.9,
        "withinSlideGapSeconds": 0.25,
        "measuredDurationSeconds": 38.15,
        "audioUrl": "media/slides/slide-35.mp3"
      }
    },
    {
      "number": 36,
      "image": "assets/slides/slide-36.png",
      "title": "PACKAGES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Use APT with an inspect-change-verify rhythm.” Package installation is a privileged system change. Read the proposed transaction before confirming it.\n\nRefresh means sudo apt update. Search means apt search tree. Inspect means apt show tree. Install means sudo apt install tree. Verify means dpkg -s tree; command -v tree. Audit means less /var/log/apt/history.log.\n\nExample: Use apt-get in noninteractive automation only after understanding prompts and failure behavior; apt is convenient for humans.\n\nAsk: “What two checks prove that a package is registered and its command is discoverable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Configuration edits need the same discipline as package changes.”",
      "narration": {
        "number": 36,
        "title": "The final challenge is to explain, not merely succeed",
        "sourceTranscript": "Use this as a peer assessment. Give pairs four minutes: Partner A explains the SSH chain, Partner B explains the service diagnosis, then each asks one question from the slide. Invite two concise reports.\n\nCorrect misconceptions directly: successful sudo access does not prove normal-user access; accepting an SSH fingerprint without comparison is trust-on-first-use, not verification; active service state does not prove application behavior; changing several things at once prevents causal confidence.\n\nYou do not need every command in memory—you need a map and a repeatable loop.",
        "plannedTiming": "8 minutes at the end of labs.",
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": null,
        "wordCount": 86,
        "chunkCount": 3,
        "measuredSpeechSeconds": 38.92,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 39.42,
        "audioUrl": "media/slides/slide-36.mp3"
      }
    },
    {
      "number": 37,
      "image": "assets/slides/slide-37.png",
      "title": "Live demo: narrate state, not keystrokes",
      "notes": "Timing: 4 minutes.\n\nLive demo. Open the instructor demo seat in the browser and prepare Lab 1. Before each command, ask or state the expected session and state change. Start with whoami, hostname, and pwd; move to /var/log, then return home and create the demo tree.\n\nFor the pipeline, explain that grep writes matching lines to standard output, the pipe carries that stream, and tee both displays and saves it. Verify with cat.\n\nIf typing takes too long, use the prepared printf command. Do not paste the whole block—the point is reading state changes.\n\nTransition: “Next: TERMINAL.”",
      "narration": {
        "number": 37,
        "title": "Keep the VM; keep practising the loop",
        "sourceTranscript": "Close by resolving the opening promise. Learners can now orient themselves, control access, establish remote trust, and diagnose a service with evidence. Encourage immediate repetition while the path is fresh. The Linux Upskill Challenge provides a free, open sequence for continued server practice.\n\nTell learners to keep the VM unless disk space is constrained. If they delete it, remind them that multipass delete plus purge is permanent. Production work requires organization policies, backups, change control, and approved key handling.\n\n“The command you forget can be looked up; the habit of verifying state is what makes you safe.”",
        "plannedTiming": "4 minutes.",
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": null,
        "wordCount": 97,
        "chunkCount": 3,
        "measuredSpeechSeconds": 46.48,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 46.98,
        "audioUrl": "media/slides/slide-37.mp3"
      }
    },
    {
      "number": 38,
      "image": "assets/slides/slide-38.png",
      "title": "TERMINAL",
      "notes": "Timing: 2 minutes.\n\nDescribe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.\n\nUse tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.\n\nConnect this to journalctl: filter at the source first, then use grep only when helpful.\n\nTransition: “Next: Processes start with three standard streams.”",
      "narration": {
        "number": 38,
        "title": "Sources and open-course attribution",
        "sourceTranscript": "Acknowledge the Linux Upskill Challenge as the main open-course inspiration and its CC BY 4.0 terms. State that the workshop text and scenarios were newly written and commands were validated against primary documentation. Point learners to resources/SOURCES.md for direct URLs and license notes.\n\nThe visual design uses a CodeRabbit-inspired color mood, not the company logo or copied product UI. The title illustration was generated specifically for this course.\n\nEnd with questions or keep the prior slide visible for a stronger final message.",
        "plannedTiming": "2 minutes or leave available after the close.",
        "explicitTheoryDemoMinutes": null,
        "plannedLabMinutes": null,
        "wordCount": 82,
        "chunkCount": 3,
        "measuredSpeechSeconds": 36.82,
        "withinSlideGapSeconds": 0.5,
        "measuredDurationSeconds": 37.32,
        "audioUrl": "media/slides/slide-38.mp3"
      }
    },
    {
      "number": 39,
      "image": "assets/slides/slide-39.png",
      "title": "SHELL / STREAMS",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Processes start with three standard streams.” Separating normal results from diagnostics lets tools compose without hiding errors.\n\nstdin means file descriptor 0: keyboard or pipe input. stdout means file descriptor 1: normal output. stderr means file descriptor 2: diagnostics. > means replace a file with stdout. 2> means replace a file with stderr.\n\nExample: command >result.txt 2>error.txt produces two evidence files. command >all.txt 2>&1 combines them in order.\n\nAsk: “If a pipeline looks empty but errors remain on screen, which stream explains it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Good pipelines narrow a question one stage at a time.”",
      "narration": {
        "number": 39,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 40,
      "image": "assets/slides/slide-40.png",
      "title": "SHELL / PIPELINES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Build pipelines as readable evidence stages.” For status counts: awk '{print $9}' access.log | sort | uniq -c | sort -nr. Inspect the selected field before counting it.\n\nStep 1, Question: state the answer you need. Step 2, Source: choose the smallest relevant input. Step 3, Filter: remove unrelated records. Step 4, Transform: extract, sort, or count. Step 5, Verify: inspect samples and totals.\n\nExample: Which stage would you test first if the final count is zero?\n\nAsk: “Avoid one common mistake: discarding diagnostics to make output look clean.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 40,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 41,
      "image": "assets/slides/slide-41.png",
      "title": "SHELL / PIPELINES",
      "notes": "Timing: 1.5 minutes.\n\nSay: “Silence does not prove success.” A discovery command may intentionally ignore permission errors, but a package installation should not hide them.\n\nHIDDEN ERROR, 2>/dev/null: Removes diagnostic evidence; Can turn a real failure into silence; Acceptable only when failure is expected. CAPTURED ERROR, 2>error.log: Preserves evidence; Can be reviewed or attached; Keeps stdout usable as data.\n\nExample: When would redirecting stderr to /dev/null be defensible?\n\nAsk: “The fastest safe operators know how to ask the local system for help.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 41,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "1.5 minutes",
        "pending": true
      }
    },
    {
      "number": 42,
      "image": "assets/slides/slide-42.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 2 minutes.\n\nExplain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.\n\nShow the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.\n\nMention that group membership changes usually require a new login session.\n\nTransition: “Next: Names are convenient; numeric IDs drive authorization.”",
      "narration": {
        "number": 42,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 43,
      "image": "assets/slides/slide-43.png",
      "title": "IDENTITY",
      "notes": "Timing: 2 minutes.\n\nSay: “Names are convenient; numeric IDs drive authorization.” Files store numeric ownership. Name services translate those numbers for display.\n\nUsername means human-readable account label. UID means numeric user identity used by the kernel. Group name means human-readable collaboration label. GID means numeric group identity stored on files. Effective IDs means identity currently used for access checks.\n\nExample: A restored disk can show unexpected names if the destination maps the same numeric UID to a different account.\n\nAsk: “Why does ls -ln help diagnose identity mapping problems?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Local account files show where common name mappings originate.”",
      "narration": {
        "number": 43,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 44,
      "image": "assets/slides/slide-44.png",
      "title": "IDENTITY",
      "notes": "Timing: 2 minutes.\n\nSay: “Account databases separate public identity from secrets.” getent passwd alice and getent group webteam are better operational checks than parsing files directly.\n\n/etc/passwd: name and UID; primary GID; home directory; login shell. /etc/group: group name and GID; supplementary members; not every primary member; readable account data. /etc/shadow: password hashes; aging fields; root-readable only; never copy casually.\n\nExample: Why might grep alice /etc/passwd miss an account that id alice can resolve?\n\nAsk: “Group membership becomes part of a process when the session starts.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 44,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 45,
      "image": "assets/slides/slide-45.png",
      "title": "IDENTITY",
      "notes": "Timing: 2 minutes.\n\nSay: “Existing shells keep old group credentials.” Adding a learner to webteam does not automatically update a terminal opened before the change.\n\nACCOUNT DATABASE, updated now: usermod changes membership; getent shows the new record; Future sessions inherit it. CURRENT SHELL, old credentials: Keeps groups from login time; id may not show the change; Re-login or newgrp refreshes context.\n\nExample: What is the least surprising way to pick up new groups in production?\n\nAsk: “Privilege escalation is another identity transition and should be narrow.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 45,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 46,
      "image": "assets/slides/slide-46.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 2 minutes.\n\nSay: “sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.\n\nContrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.\n\nTransition: “Next: sudo policy answers who may run what as whom.”",
      "narration": {
        "number": 46,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 47,
      "image": "assets/slides/slide-47.png",
      "title": "sudo policy answers who may run what as whom",
      "notes": "Timing: 2 minutes.\n\nSay: “sudo policy answers who may run what as whom.” sudo is a policy engine, not simply a synonym for administrator mode.\n\nCaller means the authenticated invoking user. Target means root by default or selected with -u. Command means the permitted executable and arguments. Policy means rules from sudoers and included files. Audit means logs record the privileged request.\n\nExample: sudo -u www-data test -r /srv/site/index.html checks behavior as the service identity without opening a root shell.\n\nAsk: “Why is sudo cat file a poor test of whether an application user can read it?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Permissions combine identity with ownership and mode bits.”",
      "narration": {
        "number": 47,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 48,
      "image": "assets/slides/slide-48.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nDecode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.\n\nDistinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.\n\nUse namei -l as a powerful path-permission diagnostic.\n\nTransition: “Next: Access checks select one permission class.”",
      "narration": {
        "number": 48,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 49,
      "image": "assets/slides/slide-49.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Access checks select one permission class.” Linux does not combine the most generous bits. It selects a class based on identity, then evaluates that class.\n\nOwner match means use only the owner triplet. Else group match means use only the group triplet. Else means use the other triplet. No fallback means failed owner bits do not try group bits. Privilege means root and capabilities can alter normal rules.\n\nExample: If Alice owns a file with mode 040 but belongs to the file’s group, the empty owner read bit still denies her normal read access.\n\nAsk: “Which triplet applies first when UID matches the owner?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Directory permissions use the same letters but different operations.”",
      "narration": {
        "number": 49,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 50,
      "image": "assets/slides/slide-50.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Directory r, w, and x control different abilities.” Deleting a file depends mainly on the parent directory permissions, not on the file’s own write bit.\n\nRead · r: list entry names; does not reveal metadata alone; ls may show names only; needs x for useful lookup. Write · w: create entries; remove entries; rename entries; usually requires x too. Execute · x: traverse the directory; look up named entries; reach deeper paths; not ‘run the directory’.\n\nExample: Why can a user delete a read-only file from a writable directory?\n\nAsk: “A path succeeds only if every parent directory can be traversed.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 50,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 51,
      "image": "assets/slides/slide-51.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Parent directories participate in every path lookup.” Correct file mode is insufficient when one parent directory blocks traversal.\n\n/ means traverse root. /srv means traverse service data. /srv/team means traverse team directory. file means apply file read or write bits. namei -l means display every component and its mode.\n\nExample: namei -l /srv/team/report.txt often explains ‘permission denied’ faster than repeated chmod on the file.\n\nAsk: “Which directory would you inspect if the file looks readable but open still fails?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Symbolic notation makes targeted mode changes clearer than broad numbers.”",
      "narration": {
        "number": 51,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 52,
      "image": "assets/slides/slide-52.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nBuild 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.\n\nWarn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.\n\nMention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.\n\nTransition: “Next: Symbolic chmod states exactly who and what changes.”",
      "narration": {
        "number": 52,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 53,
      "image": "assets/slides/slide-53.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Symbolic chmod states exactly who and what changes.” Symbolic changes are excellent for narrow repairs because they preserve unrelated classes unless you use equals.\n\nu means owner class. g means group class. o means other class. + / - means add or remove selected bits. = means set the selected class exactly. chmod g+r means add group read without changing other bits.\n\nExample: chmod u=rw,g=r,o= report.txt expresses mode 640 as intent rather than arithmetic.\n\nAsk: “Which command removes only write permission from others?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “New files begin from requested modes reduced by the process umask.”",
      "narration": {
        "number": 53,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 54,
      "image": "assets/slides/slide-54.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “umask removes permissions; it never grants.” Use umask to inspect the current shell and umask 027 for a session where new files should not be available to others.\n\nREQUESTED MODE, program default: Files commonly request 666; Directories commonly request 777; Execute is not added to ordinary files. UMASK, bits to clear: 022 yields files 644; 022 yields directories 755; Process-local and inherited.\n\nExample: Why does umask 022 not make a new text file executable?\n\nAsk: “Shared directories add setgid so group ownership remains predictable.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 54,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 55,
      "image": "assets/slides/slide-55.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nPresent the real use case: Alice and Bob need a shared directory, everyone else needs no access. The solution is a team group, group-owned directory, 2770 mode, and setgid inheritance. This is better than 777 because it expresses who should collaborate.\n\nExplain chown owner:group and chgrp. The leading 2 in 2770 activates setgid on the directory; new content inherits courseops as its group. Default file modes may still restrict group write, so production shares often add a suitable umask or default ACL—mention, do not teach today.\n\nTransition: “Next: setgid keeps shared directories in one group.”",
      "narration": {
        "number": 55,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 56,
      "image": "assets/slides/slide-56.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “setgid keeps shared directories in one group.” setgid solves group drift; it does not decide the exact read and write bits of new files.\n\nDirectory owner means usually an administrator or service account. Directory group means the collaborating team. Mode 2xxx means setgid bit on the directory. New entries means inherit the directory group. Verification means stat and create a file as a real member.\n\nExample: A team directory often combines group ownership, mode 2770, and a cooperative umask such as 0002 or default ACLs.\n\nAsk: “What does the leading 2 mean in 2770?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Public scratch directories need a different special bit: sticky.”",
      "narration": {
        "number": 56,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 57,
      "image": "assets/slides/slide-57.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Sticky protects names in shared directories.” stat -c '%A %a %n' /tmp commonly reports a mode equivalent to 1777.\n\nWITHOUT STICKY, shared write: Any writer may remove entries; File ownership does not protect names; Easy for users to disrupt each other. WITH STICKY, mode 1xxx: Only owner, directory owner, or root removes; Typical example is /tmp; Shown as t in the other execute position.\n\nExample: Would sticky prevent another user from reading a world-readable file?\n\nAsk: “When triplets are too coarse, ACLs can add named exceptions.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 57,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 58,
      "image": "assets/slides/slide-58.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “ACLs extend permissions without replacing the base model.” setfacl -m u:bob:r report.txt can grant Bob read access, but getfacl is required to see the whole policy.\n\nMODE BITS, three classes: Owner, group, other; Visible in ls -l; Portable baseline. POSIX ACL, named entries: Additional users or groups; Mask limits effective named rights; Inspect with getfacl.\n\nExample: Why can an ACL entry show rw while effective access is only r?\n\nAsk: “Troubleshooting should test the full identity and path before changing anything.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 58,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 59,
      "image": "assets/slides/slide-59.png",
      "title": "TERMINAL EDITOR",
      "notes": "Timing: 2 minutes.\n\nDemonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.\n\nMention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.\n\nTransition: “Next: Safe edits use backup, diff, and validation.”",
      "narration": {
        "number": 59,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 60,
      "image": "assets/slides/slide-60.png",
      "title": "TERMINAL EDITOR",
      "notes": "Timing: 2 minutes.\n\nSay: “Safe edits use backup, diff, and validation.” For SSH server configuration, run sshd -t before restarting the service. For sudo policy, use visudo rather than a generic editor.\n\nStep 1, Inspect: read the current file and ownership. Step 2, Protect: copy or use version control where appropriate. Step 3, Edit: nano or sudoedit the exact path. Step 4, Validate: use the program’s syntax checker. Step 5, Apply: reload or restart, then verify behavior.\n\nExample: Which step prevents a typo from turning into an outage?\n\nAsk: “Next we connect processes and files to the identities Linux authorizes.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 60,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 61,
      "image": "assets/slides/slide-61.png",
      "title": "Live demo: repair access with the smallest change",
      "notes": "Timing: 4 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 2. Set up the team group and directory, create a file as Alice, then show stat. Break access deliberately. Before fixing, ask the room which identity class applies and what permission is missing. Use id, stat, and namei -l to gather evidence.\n\nMake the narrow repair: correct group ownership and mode 640. Retest using the same command and identity that failed. Point out that sudo cat succeeding would not prove the intended user can read.\n\nIf time slips, skip the initial directory construction and begin from the broken file.\n\nTransition: “Next: Diagnose permission failures from identity to behavior.”",
      "narration": {
        "number": 61,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 62,
      "image": "assets/slides/slide-62.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 2 minutes.\n\nSay: “Diagnose permission failures from identity to behavior.” Use sudo -u alice -- test -r PATH and sudo -u outsider -- test -r PATH to prove both the allowed and denied cases.\n\nStep 1, Identity: id and groups for the failing process. Step 2, Path: namei -l every component. Step 3, Object: stat owner, group, mode, ACL. Step 4, Policy: sudo, service user, mount, or security layer. Step 5, Retest: repeat as the intended non-root identity.\n\nExample: What would chmod 777 hide rather than explain?\n\nAsk: “Remote access adds two more identities: the server host and the remote user.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 62,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 63,
      "image": "assets/slides/slide-63.png",
      "title": "SSH authenticates both ends of the conversation",
      "notes": "Timing: 2 minutes.\n\nSeparate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.\n\nExplain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.\n\nTransition: “Next: SSH separates transport, host, and user trust.”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “SSH separates transport, host, and user trust.” Encryption prevents eavesdropping only when you also authenticate the endpoint you intended to reach.\n\nTransport means encrypts and protects session integrity. Host key means proves which server endpoint answered. User proof means proves which account may log in. Account policy means server maps proof to account policy. Session means starts command, shell, forwarding, or subsystem.\n\nExample: A valid user key presented to an attacker still exposes interaction if the client accepted the attacker’s host key.\n\nAsk: “Which trust question is answered by known_hosts?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Host keys and user keys look similar but live on opposite sides for different reasons.”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “Host keys identify servers; user keys identify people.” The client compares the server host key before offering user authentication; these are sequential trust decisions.\n\nHOST KEY, server identity: Private half stays on server; Client stores public fingerprint; Change requires investigation. USER KEY, user identity: Private half stays with user; Server stores public key; Can be revoked per account.\n\nExample: Where should the user private key exist after setup?\n\nAsk: “Fingerprint verification makes the first server trust decision explicit.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “Verify host keys through an independent channel.” Use ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub on the server console and compare it with the client prompt over a trusted channel.\n\nStep 1, Obtain: get the expected fingerprint from an administrator. Step 2, Connect: observe the presented fingerprint. Step 3, Compare: match algorithm and complete fingerprint. Step 4, Accept: store the verified key in known_hosts. Step 5, Recheck: treat later changes as an event.\n\nExample: What legitimate events can change a host key, and why must they still be verified?\n\nAsk: “The user private key deserves local protection even though it never travels.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
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
      "notes": "Timing: 2 minutes.\n\nUse a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.\n\nUse Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.\n\nMention that enterprise policy may require hardware-backed keys or certificates.\n\nTransition: “Next: A passphrase and agent reduce private-key exposure.”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “A passphrase and agent reduce private-key exposure.” A key without a passphrase can be appropriate for tightly controlled automation, but it needs stronger surrounding controls and narrow authorization.\n\nPhrase means a passphrase encrypts the private key file at rest. KDF rounds means increase cost of password guessing. Agent means holds an unlocked key for a limited session. Permissions means prevent other local users from reading the file. Rotation means replace compromised or obsolete credentials.\n\nExample: For interactive use, create an Ed25519 key with a passphrase and let ssh-agent avoid repeated prompts during one trusted login session.\n\nAsk: “What threat does a passphrase mitigate after a laptop is stolen?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “The public key belongs in authorized_keys with strict path ownership.”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “OpenSSH checks every component of the authorization path.” StrictModes protects users from another local account replacing their authorized keys.\n\nHome directory means owned by the account; not broadly writable. ~/.ssh means normally mode 700. authorized_keys means normally mode 600. Public key line means complete algorithm and key data. Account means login shell and policy must allow access. Server log means explains rejected ownership or mode.\n\nExample: Use namei -l ~/.ssh/authorized_keys to inspect the entire path and journalctl -u ssh for the server’s reason.\n\nAsk: “Why can a perfectly valid key fail when the home directory is group-writable?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Client configuration then makes the verified choices repeatable.”",
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
      "notes": "Timing: 2 minutes.\n\nWalk line by line. Host is the alias. HostName and Port identify the server. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.\n\nIn Lab 4 the training server is localhost on port 2222 because both SSH endpoints live inside the isolated learner container. For production, the same profile points to a remote DNS name or address.\n\nExplain StrictHostKeyChecking carefully: accept-new is convenient in a disposable lab but still rejects changed keys. Managed environments should pre-provision known_hosts or use yes with a trusted onboarding process.\n\nTransition: “Next: SSH uses the first value obtained.”",
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
      "notes": "Timing: 2 minutes.\n\nSay: “SSH uses the first value obtained.” SSH uses the first value found for most parameters, so ordering matters when several Host blocks match.\n\nCommand line means explicit options for this invocation. User config means ~/.ssh/config patterns in order. System config means /etc/ssh/ssh_config defaults. Host patterns means specific entries should appear before broad ones. Effective view means ssh -G alias prints resolved settings.\n\nExample: Place Host production-web before Host * and verify the result with ssh -G production-web | less.\n\nAsk: “Which command shows the effective HostName, User, and IdentityFile without connecting?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “When connection fails, troubleshoot in layers rather than adding random flags.”",
      "narration": {
        "number": 71,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 72,
      "image": "assets/slides/slide-72.png",
      "title": "Live demo: verify before you trust",
      "notes": "Timing: 4 minutes.\n\nLive demo. Prepare Lab 4 in the instructor demo seat. Generate a dedicated Ed25519 client key inside the learner session, record the training server host key for port 2222, and show the bracketed known_hosts entry.\n\nUse ssh-copy-id with the temporary bootstrap password training. Emphasise that only the public key is installed. Then connect with BatchMode enabled; success proves no password prompt was required. Run id and hostname to verify the remote identity.\n\nNever display a real personal key or reuse a production credential.\n\nTransition: “Next: Test SSH failures one layer at a time.”",
      "narration": {
        "number": 72,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 73,
      "image": "assets/slides/slide-73.png",
      "title": "Test SSH failures one layer at a time",
      "notes": "Timing: 2 minutes.\n\nSay: “Test SSH failures one layer at a time.” Run ssh -vv alias, then read from connection establishment through host-key check to the first authentication rejection.\n\nStep 1, Network: resolve name and reach the port. Step 2, Host trust: inspect known_hosts and fingerprint. Step 3, Client choice: ssh -G shows user, key, and port. Step 4, User auth: ssh -vv reveals offered and accepted methods. Step 5, Server policy: read ssh service logs and account state.\n\nExample: What does ‘Permission denied (publickey)’ prove, and what does it not prove?\n\nAsk: “Once connected, logs provide the historical evidence needed for broader diagnosis.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 73,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 74,
      "image": "assets/slides/slide-74.png",
      "title": "Linux logs live in files and in the systemd journal",
      "notes": "Timing: 2 minutes.\n\nExplain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.\n\nShow that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.\n\nThe investigative rule is to frame a question first: which unit, which boot, which time window, which severity?\n\nTransition: “Next: A useful log record answers five questions.”",
      "narration": {
        "number": 74,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 75,
      "image": "assets/slides/slide-75.png",
      "title": "A useful log record answers five questions",
      "notes": "Timing: 2 minutes.\n\nSay: “A useful log record answers five questions.” Logs are evidence emitted by software, not guaranteed truth. Interpret them with system state and behavior.\n\nWhen means timestamp with timezone or boot context. Where means host, container, or node. Who means unit, process, PID, or identity. What means event and severity. Why next means correlation field, exit code, or causal detail.\n\nExample: Read one line aloud by naming timestamp, host, source, and message before deciding what it means.\n\nAsk: “Which missing field would make two similar hosts difficult to distinguish?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “The journal adds structured fields and boot-aware queries to plain text.”",
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
      "title": "Filter the journal toward one answer",
      "notes": "Timing: 2 minutes.\n\nBuild the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot.\n\nWarn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.\n\nPoint out access: normal users may see only their own journal; sudo may be required for system units.\n\nTransition: “Next: journalctl can narrow by unit, boot, time, and priority.”",
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
      "title": "journalctl can narrow by unit, boot, time, and priority",
      "notes": "Timing: 2 minutes.\n\nSay: “journalctl can narrow by unit, boot, time, and priority.” Start with the service and incident window, then widen only if the answer is absent.\n\nUnit means -u ssh.service. Current boot means -b. Previous boot means -b -1. Time means --since '-10 minutes'. Priority means -p warning. Stable output means -n 50 --no-pager -o short-iso.\n\nExample: journalctl -u course-web -b --since '-10 min' --no-pager creates a bounded incident view.\n\nAsk: “Why might -p err hide the line that explains a later failure?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “A disciplined filter workflow avoids both noise and missing context.”",
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
      "title": "Filter narrowly, then widen one dimension at a time",
      "notes": "Timing: 2 minutes.\n\nSay: “Filter narrowly, then widen one dimension at a time.” If the unit log shows only a dependency failure, widen to the named dependency rather than dumping the complete journal.\n\nBound: Choose one unit; Select one boot; Set the time window; Name the incident. Read: Follow timestamps; Find the first cause; Capture exit reason; Note dependencies. Widen: Extend time; Add priorities; Inspect related units; Inspect the process.\n\nExample: Which dimension would you widen first when the earliest line says ‘dependency failed’?\n\nAsk: “Following live events is useful, but it answers a different question from history.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
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
      "title": "Live demo: ask the journal a smaller question",
      "notes": "Timing: 4 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 4. Restart SSH to create a known event. Run status first and distinguish the current summary from historical journal entries. Query the last ten entries. Add a five-minute window and warning priority; explain that an empty result can be good news, not a broken command. Enter follow mode, create a connection event from another terminal if convenient, then stop with Ctrl+C.\n\nRead one entry aloud: timestamp, host, process/unit, message. Model evidence extraction rather than scrolling.\n\nTransition: “Next: History and live follow serve different jobs.”",
      "narration": {
        "number": 79,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 80,
      "image": "assets/slides/slide-80.png",
      "title": "History and live follow serve different jobs",
      "notes": "Timing: 2 minutes.\n\nSay: “History and live follow serve different jobs.” Use one terminal for journalctl -f and another to reproduce the action, then return to a bounded query for the final record.\n\nBOUNDED QUERY, incident review: Repeatable output; Easy to save and compare; Best for finding first cause. FOLLOW · -f, live observation: Shows new entries; Useful while reproducing; Stop with Ctrl+C.\n\nExample: Why can follow mode make you miss the event that happened before you started watching?\n\nAsk: “systemd connects service state, unit configuration, and journal evidence.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 80,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 81,
      "image": "assets/slides/slide-81.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nDefine a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.\n\nMake enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.\n\nTransition: “Next: Unit files come from layered locations.”",
      "narration": {
        "number": 81,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 82,
      "image": "assets/slides/slide-82.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Unit files come from layered locations.” Prefer small drop-ins over editing vendor files that package upgrades may replace.\n\nVendor units means /usr/lib/systemd/system. Admin units means /etc/systemd/system and overrides. Runtime units means /run/systemd/system. Drop-ins means name.service.d/*.conf overrides selected settings. Effective view means systemctl cat name.service.\n\nExample: systemctl edit name.service creates an administrator override while systemctl cat shows the combined effective unit.\n\nAsk: “Which location should contain a durable local override?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “The manager turns that declaration into a runtime state machine.”",
      "narration": {
        "number": 82,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 83,
      "image": "assets/slides/slide-83.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Service transitions leave journal evidence.” A unit can be loaded correctly yet fail during credential setup before its command ever starts.\n\nDeclared: ExecStart command; Service user; Dependencies; Restart policy. Transition: Conditions; Ordering; Credentials; Exit status. Observed: Active state; Substate; Main PID; Journal events.\n\nExample: What evidence distinguishes ‘unit not found’ from ‘process exited’?\n\nAsk: “Dependencies and ordering explain why one failure can appear in several units.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 83,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 84,
      "image": "assets/slides/slide-84.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Requirement and ordering are separate relationships.” Requirement and order are separate questions. After=network.target does not guarantee an application-ready network connection.\n\nRequires= means start together; failure relationship. Wants= means weaker activation relationship. After= means ordering only; does not pull a unit in. Before= means inverse ordering relationship. PartOf= means propagate selected lifecycle actions.\n\nExample: Use systemctl list-dependencies unit and systemctl show unit -p Wants -p Requires -p After to inspect relationships.\n\nAsk: “Why is After= not sufficient to start a missing dependency?” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “Daily operations also require precise distinctions among start, enable, reload, and restart.”",
      "narration": {
        "number": 84,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 85,
      "image": "assets/slides/slide-85.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nGroup verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.\n\nTeach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.\n\nTransition: “Next: Enabled, active, reloaded, and restarted are independent facts.”",
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
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Enabled, active, reloaded, and restarted are independent facts.” After editing a unit file: daemon-reload, restart the unit, then verify state and behavior. After editing app config, use reload only if the app supports it.\n\nBOOT + RUNTIME, enable / start: enable changes boot links; start changes current state; --now requests both operations. CONFIG APPLY, reload / restart: reload asks process to reread; restart replaces runtime process; daemon-reload rereads unit files.\n\nExample: Does systemctl enable guarantee the service is healthy now?\n\nAsk: “The final troubleshooting sequence combines every evidence habit from the course.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 86,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 87,
      "image": "assets/slides/slide-87.png",
      "title": "Live demo: status is the symptom; logs reveal the cause",
      "notes": "Timing: 4 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 5. Install the unit with a missing User and WorkingDirectory. Start it and resist fixing immediately. Run status, then journalctl for the unit and time window. Identify the credential/user error and connect it to systemctl cat output.\n\nCreate the system user and service directory with explicit owner and mode. Add an index file, restart, and verify systemctl is-active. Finally use curl. Emphasise that active only proves the process is running; curl proves the intended behavior.\n\nIf the service unexpectedly starts, use a new nonexistent username. If the demo stalls, switch to the backup VM or show the prepared commands and outcomes.\n\nTransition: “Next: Diagnose services from symptom to verified behavior.”",
      "narration": {
        "number": 87,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 88,
      "image": "assets/slides/slide-88.png",
      "title": "SYSTEMD",
      "notes": "Timing: 2 minutes.\n\nSay: “Diagnose services from symptom to verified behavior.” For a web service, combine is-active, is-enabled, socket inspection if needed, and curl against the actual URL.\n\nStep 1, State: systemctl status and is-active. Step 2, Events: journalctl by unit, boot, and time. Step 3, Definition: systemctl cat and show. Step 4, Repair: change one evidenced cause. Step 5, Behavior: test the endpoint as a real client.\n\nExample: What independent check proves more than systemctl status alone?\n\nAsk: “The capstone demo applies this sequence without guessing.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “undefined”",
      "narration": {
        "number": 88,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 89,
      "image": "assets/slides/slide-89.png",
      "title": "DEMO / SYSTEMD",
      "notes": "Timing: 4 minutes.\n\nSay: “Live demo: separate the first cause from later noise.” Close with state, configuration, logs, and client behavior.\n\nStatus means systemctl status course-web --no-pager. Events means journalctl -u course-web -b --since '-10 min'. Definition means systemctl cat course-web. Repair means change only the evidenced cause. Restart means systemctl restart course-web. Verify means is-active plus curl http://127.0.0.1:8088/.\n\nExample: Pause after each command and ask which question it answers. Do not create the missing path until the journal and effective unit have identified it.\n\nAsk: “Ask learners to name the first useful error and the final behavioral proof.” Take one concise answer, correct the mental model if needed, and connect the answer to the locate → predict → act → observe → verify loop.\n\nTransition: “The theory checkpoint now compresses the full course into one reusable operating loop.”",
      "narration": {
        "number": 89,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 90,
      "image": "assets/slides/slide-90.png",
      "title": "THEORY CHECKPOINT",
      "notes": "Timing: 2 minutes.\n\nThis is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for browser versus Linux session, identity, working directory, predicted state, one cause, and behavior verification.\n\nReinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.\n\nAnnounce the lab transition. Learners will now own the keyboard for exactly three hours.\n\nTransition: “Next: HANDS-ON BLOCK.”",
      "narration": {
        "number": 90,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "2 minutes",
        "pending": true
      }
    },
    {
      "number": 91,
      "image": "assets/slides/slide-91.png",
      "title": "HANDS-ON BLOCK",
      "notes": "Timing: 3 minutes of lab-block orientation; this time is included in Lab 1.\n\nGive each learner or pair the assigned seat link. The page contains the task brief, a real ttyd terminal, Reset, and Check my work. The seat token prevents accidental cross-seat access.\n\nPairing is optional but recommended: one driver types, one navigator reads the next step and predicts outcomes; swap after each lab.\n\nState the support rule: when blocked, show pwd, whoami, recent history, and the exact repeated failing command. Reset only when the task calls for a fresh baseline.\n\nStart the 25-minute Lab 1 timer now.",
      "narration": {
        "number": 91,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "3 minutes",
        "pending": true
      }
    },
    {
      "number": 92,
      "image": "assets/slides/slide-92.png",
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 50 minutes total.\n\nLab 1 is filesystem fieldwork. Learners orient with pwd and whoami, inspect the prepared inbox, then create, copy, and move files into the required tree. The checker verifies paths and file content.\n\nLab 2 installs tree with APT and turns an access log into status-code counts. Ask learners to explain each pipeline stage before they run it. The final evidence must show exactly three 404 responses.\n\nAt minute 20 and minute 45, give a five-minute warning. Fast finishers should produce the same counts with a different pipeline and compare readability.",
      "narration": {
        "number": 92,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 93,
      "image": "assets/slides/slide-93.png",
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 65 minutes total.\n\nLab 3 is a permission incident. The target is deliberate: Alice and Bob can write, outsider cannot, and new files inherit webteam. Require both the positive and negative test; a single successful write does not prove least privilege.\n\nLab 4 builds SSH trust entirely inside the learner container. Learners generate an Ed25519 key, record the host key, authorize only the public key, and connect through a named client profile. The first password is training; the verified outcome is key-only login.\n\nAt minute 55, give ten minutes remaining. Use namei -l or ssh -vv only after the basic ownership, mode, and identity checks.",
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
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 65 minutes total.\n\nLab 5 begins with service status, then narrows the journal by unit and current boot. The learner records the first causal event and the non-zero exit code in lab-answer.txt. Do not reward random repair attempts; this lab is about evidence.\n\nLab 6 is the capstone. Learners inspect course-web, read the journal and unit definition, repair the missing document root, then enable and start the service. The final verification is threefold: is-active, is-enabled, and an HTTP response on port 8088.\n\nAt minute 55, give ten minutes remaining. Fast finishers should reset Lab 6 and explain the diagnosis before typing the repair.",
      "narration": {
        "number": 94,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 95,
      "image": "assets/slides/slide-95.png",
      "title": "TROUBLESHOOTING",
      "notes": "Timing: keep visible during support or use for a 3-minute regroup.\n\nIf several learners hit different failures, pause and apply the ladder to one example. Context first prevents solving the wrong machine, user, or directory. Inspect the target and effective configuration. Reproduce once to capture the symptom. Gather logs and status. Only then change one cause and repeat the same verification.\n\nThe phrase “before widening privilege” matters: sudo can bypass the intended identity and produce a false success. Likewise chmod 777 can erase the evidence of a group-design problem.\n\nTransition: return learners to their current lab with one requested evidence item.",
      "narration": {
        "number": 95,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    },
    {
      "number": 96,
      "image": "assets/slides/slide-96.png",
      "title": "ASSESSMENT",
      "notes": "Timing: 8 minutes at the end of labs.\n\nUse this as a peer assessment. Give pairs four minutes: Partner A explains the SSH chain, Partner B explains the service diagnosis, then each asks one question from the slide. Invite two concise reports.\n\nCorrect misconceptions directly: successful sudo access does not prove normal-user access; accepting an SSH fingerprint without comparison is trust-on-first-use, not verification; active service state does not prove application behavior; changing several things at once prevents causal confidence.\n\nTransition: “You do not need every command in memory—you need a map and a repeatable loop.”",
      "narration": {
        "number": 96,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "8 minutes",
        "pending": true
      }
    },
    {
      "number": 97,
      "image": "assets/slides/slide-97.png",
      "title": "Keep your seat link; keep practising the loop",
      "notes": "Timing: 4 minutes.\n\nClose by resolving the opening promise. Learners can now orient themselves, control access, establish remote trust, and diagnose a service with evidence. Encourage immediate repetition while the command path is fresh.\n\nThe browser seat may be retired after the course, so keep the public course repository and solution-video links. Reset and solve Lab 6 again while the controller is still available. The Linux Upskill Challenge provides a free, open sequence for continued server practice.\n\nFinal sentence: “The command you forget can be looked up; the habit of verifying state is what makes you safe.”",
      "narration": {
        "number": 97,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "4 minutes",
        "pending": true
      }
    },
    {
      "number": 98,
      "image": "assets/slides/slide-98.png",
      "title": "REFERENCES",
      "notes": "Use the repository SOURCES.md for full links, licenses, and retrieval dates. The delivery platform is built from Ubuntu Server, Incus system containers, ttyd browser terminals, Nginx, and a small Flask control API.\n\nThe slide system uses an original CodeRabbit-inspired palette and an original generated title illustration; it does not copy the CodeRabbit logo or product interface.\n\nThe platform source, operational runbooks, six lab setup/check scripts, Playwright solution recordings, and narration scripts live under browser-lab-platform/.",
      "narration": {
        "number": 98,
        "audioUrl": "",
        "measuredDurationSeconds": 0,
        "plannedTiming": "",
        "pending": true
      }
    }
  ],
  "videos": [
    {
      "id": "lab01",
      "number": 1,
      "title": "Filesystem fieldwork",
      "shortTitle": "Paths, files, and safe navigation",
      "description": "Create the required project tree and verify every filesystem change.",
      "ready": true,
      "language": "en",
      "master": "media/lab01-filesystem-fieldwork.mp4",
      "audio": "media/lab01-filesystem-fieldwork.en.mp3",
      "captions": "media/lab01-filesystem-fieldwork.en.vtt",
      "captionsSrt": "media/lab01-filesystem-fieldwork.en.srt",
      "video": "media/lab01-filesystem-fieldwork.en.mp4",
      "transcript": "This solution starts with pwd and whoami to confirm the working directory and active user. Those checks prevent changes at the wrong path or under the wrong identity.\n\nThe inbox contains a welcome file and a draft. mkdir -p with brace expansion creates both required directories in one predictable command.\n\ncp keeps the welcome file at its source path, while mv moves the draft into the archive directory. The complete destination paths make the intended final state explicit.\n\nFinally, find proves that both files exist at the expected paths, and cat verifies their contents. The platform checker evaluates that observable filesystem state."
    },
    {
      "id": "lab02",
      "number": 2,
      "title": "Packages and pipelines",
      "shortTitle": "APT, grep, sort, and uniq",
      "description": "Install software and turn an access log into useful evidence.",
      "ready": true,
      "language": "en",
      "master": "media/lab02-packages-and-pipelines.mp4",
      "audio": "media/lab02-packages-and-pipelines.en.mp3",
      "captions": "media/lab02-packages-and-pipelines.en.vtt",
      "captionsSrt": "media/lab02-packages-and-pipelines.en.srt",
      "video": "media/lab02-packages-and-pipelines.en.mp4",
      "transcript": "First, command -v shows that tree is missing. apt update refreshes repository metadata, and apt install adds the package through the supported package manager instead of copying an unmanaged binary.\n\ndpkg-query verifies the package status. We then create the exact one-line package report required by the lab, including its final newline.\n\nThe pipeline uses awk to read field four from each access log row, sort groups equal status codes, uniq counts them, and the second awk puts status and count in the required order.\n\nThe final cat command displays both files. The status report must contain 404 followed by 3 before the automated checker can pass."
    },
    {
      "id": "lab03",
      "number": 3,
      "title": "Permission incident",
      "shortTitle": "Ownership, modes, and setgid",
      "description": "Repair a shared directory without widening access beyond the team.",
      "ready": true,
      "language": "en",
      "master": "media/lab03-permission-incident.mp4",
      "audio": "media/lab03-permission-incident.en.mp3",
      "captions": "media/lab03-permission-incident.en.vtt",
      "captionsSrt": "media/lab03-permission-incident.en.srt",
      "video": "media/lab03-permission-incident.en.mp4",
      "transcript": "We begin with users, group membership, and current state. Alice and Bob belong to webteam, while outsider is deliberately excluded. stat shows the owner, group, and numeric permissions that need repair.\n\nchown assigns the share and existing content to the webteam group. chmod 2770 grants full owner and group permissions, removes access for others, and sets the set-GID bit on the directory.\n\nA real write as Alice proves the positive case. A separate test as outsider proves the negative case, which is essential when we claim least privilege.\n\nThe final stat output shows the repaired directory and the inherited group on Alice's new file. The checker validates membership, permissions, ownership, and both access outcomes."
    },
    {
      "id": "lab04",
      "number": 4,
      "title": "SSH trust setup",
      "shortTitle": "Keys, fingerprints, and client profiles",
      "description": "Build a verified key-only SSH connection from first principles.",
      "ready": true,
      "language": "en",
      "master": "media/lab04-ssh-trust-setup.mp4",
      "audio": "media/lab04-ssh-trust-setup.en.mp3",
      "captions": "media/lab04-ssh-trust-setup.en.vtt",
      "captionsSrt": "media/lab04-ssh-trust-setup.en.srt",
      "video": "media/lab04-ssh-trust-setup.en.mp4",
      "transcript": "The .ssh directory is private. ssh-keygen creates a dedicated Ed25519 key with an empty training passphrase, and chmod 600 protects the private key.\n\nssh-keyscan records the server host key for port 2222. ssh-keygen -F then proves that known_hosts contains the correct bracketed host and port.\n\nssh-copy-id installs only the public key. The temporary password bootstraps this one operation; it is not the final authentication mechanism.\n\nThe client profile pins Host, Port, User, IdentityFile, and IdentitiesOnly. BatchMode and StrictHostKeyChecking prove that the alias works without a password prompt or an unverified host."
    },
    {
      "id": "lab05",
      "number": 5,
      "title": "Journal investigation",
      "shortTitle": "Filter logs to find the causal event",
      "description": "Use systemd journal evidence to explain a service failure.",
      "ready": true,
      "language": "en",
      "master": "media/lab05-journal-investigation.mp4",
      "audio": "media/lab05-journal-investigation.en.mp3",
      "captions": "media/lab05-journal-investigation.en.vtt",
      "captionsSrt": "media/lab05-journal-investigation.en.srt",
      "video": "media/lab05-journal-investigation.en.mp4",
      "transcript": "systemctl status is the first orientation point. It shows the unit state, recent context, and process result, but event history still requires the journal logs.\n\njournalctl scopes the evidence to one unit and the current boot. Reading upward from the final failure reveals the causal incident identifier instead of only the last generic message.\n\nA second journalctl query changes the output format, and grep filters only after the journal is scoped. This confirms DISK_THRESHOLD and exit code 42.\n\nWe write those exact assignments into lab-answer.txt and use cat to display the file before the platform checker verifies the submitted evidence."
    },
    {
      "id": "lab06",
      "number": 6,
      "title": "Broken service capstone",
      "shortTitle": "Diagnose, repair, and verify",
      "description": "Repair a web service and prove both system state and application behavior.",
      "ready": true,
      "language": "en",
      "master": "media/lab06-broken-service-capstone.mp4",
      "audio": "media/lab06-broken-service-capstone.en.mp3",
      "captions": "media/lab06-broken-service-capstone.en.vtt",
      "captionsSrt": "media/lab06-broken-service-capstone.en.srt",
      "video": "media/lab06-broken-service-capstone.en.mp4",
      "transcript": "The capstone starts with evidence. systemctl status shows the failed unit, journalctl exposes a change-directory error, and systemctl cat names the required working directory and service account.\n\nThe smallest durable repair creates the missing web root with courseapp ownership. We add the exact health sentence and ensure that the service account owns the content it serves.\n\nsystemctl enable --now starts the service immediately and enables it for the next boot. This changes both current and future state in one explicit operation.\n\nWe verify active and enabled state, the listening socket, and finally the HTTP response. curl returning the health sentence is stronger evidence than a green systemd status alone."
    }
  ]
};
