window.COURSE_CONTENT = {
  "generatedAt": "2026-07-17T18:27:19.470Z",
  "slides": [
    {
      "number": 1,
      "image": "assets/slides/slide-1.png",
      "title": "Linux Foundations",
      "notes": "Timing: 2 minutes.\n\nSay: “Today is not about memorising a wall of commands. It is about building a reliable operating model: know which Linux session you are in, predict what a command will change, read the resulting state, and use logs as evidence.”\n\nEveryone uses the same isolated Ubuntu 24.04 environment through a browser, whether the physical laptop runs macOS or Windows. The first half builds the mental models and demonstrates them; the second half turns those models into muscle memory.\n\nSet expectations: each container is disposable, but the safety habits are production habits. Invite questions, but park deep distribution debates so the class reaches the service-diagnosis lab.\n\nTransition: “Let’s define what success looks like six hours from now.”"
    },
    {
      "number": 2,
      "image": "assets/slides/slide-2.png",
      "title": "OUTCOMES",
      "notes": "Timing: 3 minutes.\n\nSay: “These are operational outcomes, not trivia outcomes.” Expand each verb. Navigate means you can always answer where you are and what a path refers to. Control access means you can explain why access succeeds or fails before reaching for chmod 777. Diagnose means you can move from a service symptom to unit-specific evidence and prove the fix at the behavior level.\n\nAsk for a quick show of hands: who has used a terminal, who has used SSH, who has read systemd logs? Use the answer only to adjust examples—not scope.\n\nTransition: “First, one distinction prevents half the mistakes in a mixed-laptop room.”"
    },
    {
      "number": 3,
      "image": "assets/slides/slide-3.png",
      "title": "ENVIRONMENT",
      "notes": "Timing: 5 minutes.\n\nSay: “The browser is only the window. Each learner works in a real, isolated Ubuntu 24.04 system container behind it.” Point out that Safari, Edge, and Chrome all reach the same terminal; the host operating system no longer changes the lab commands.\n\nGive the class a rule: before sudo, rm, chmod, or systemctl, read the prompt and run pwd or hostname if uncertain. The portal labels the current lab and lets the learner reset it to a known state.\n\nAsk: “If I close the browser tab, does the Linux session disappear?” Answer: no; it remains on the peer controller until it is reset or destroyed.\n\nTransition: “Now we can place six hours of work on a simple map.”"
    },
    {
      "number": 4,
      "image": "assets/slides/slide-4.png",
      "title": "COURSE MAP",
      "notes": "Timing: 2 minutes.\n\nExplain the exact split: 180 minutes of concepts and instructor demonstrations, then 180 minutes of guided participant work. Demonstrations belong to the teaching half because learners are predicting and observing rather than driving.\n\nThe six labs are independent, resettable scenarios in isolated Incus containers. Learners enter through a browser terminal, make real system changes, and use “Check my work” to verify state.\n\nIf the venue gives only six wall-clock hours including breaks, use the compressed option in the instructor runbook: 165 minutes on each side and remove optional discussion prompts equally. Do not cut lab verification steps.\n\nTransition: “With the operating boundary and schedule clear, what exactly do we mean by Linux?”"
    },
    {
      "number": 5,
      "image": "assets/slides/slide-5.png",
      "title": "Linux is the kernel; a usable system is a stack",
      "notes": "Timing: 8 minutes.\n\nSay: “Linux strictly names the kernel. The system you operate combines that kernel with user-space tools, libraries, an init system, packaging, and applications.” Walk from the platform boundary upward. The controller VM supplies virtual hardware; each Incus system container shares the controller kernel while keeping its own user space, processes, filesystem, network, and systemd.\n\nUse uname -r as the kernel question and /etc/os-release as the distribution question. This distinction explains why two distributions can share a kernel yet differ in packages, defaults, and support.\n\nAvoid a history lecture. The useful model is: when troubleshooting, locate the failing layer.\n\nTransition: “A distribution chooses and maintains the pieces above the kernel.”"
    },
    {
      "number": 6,
      "image": "assets/slides/slide-6.png",
      "title": "DISTRIBUTIONS",
      "notes": "Timing: 7 minutes.\n\nFrame distributions as maintained choices, not competing religions. They bundle a kernel, user space, repositories, defaults, updates, and a support promise. Command families transfer, but package names, paths, service names, and security defaults can differ. For example, Debian-family systems use APT, while RHEL-family systems use DNF.\n\nExplain why the workshop standardises on Ubuntu 24.04 LTS: one long-term-supported image, APT, OpenSSH, and systemd, cloned into isolated Incus lab sessions. The browser makes that same Linux environment available from macOS and Windows.\n\nAsk: “What should you record before following a web tutorial?” Expected: distribution, version, and command context.\n\nTransition: “Across distributions, the filesystem gives us a shared map.”"
    },
    {
      "number": 7,
      "image": "assets/slides/slide-7.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 8 minutes.\n\nAnchor the filesystem in operational questions. Slash is the single root, not a drive letter. /etc answers “where is host configuration?” /home answers “where are human-owned files?” /var answers “where does changing runtime data live?” /usr contains installed programs and shared read-only data. Mention /tmp for temporary data and /srv for service data as secondary anchors.\n\nConnect to the Filesystem Hierarchy Standard, but note that modern distributions may merge /bin into /usr/bin through symbolic links. Teach intent rather than assuming every directory is a separate disk.\n\nAsk learners to predict where SSH server configuration and package logs belong.\n\nTransition: “The map becomes useful when paths behave like coordinates.”"
    },
    {
      "number": 8,
      "image": "assets/slides/slide-8.png",
      "title": "FILESYSTEM",
      "notes": "Timing: 6 minutes.\n\nUse the coordinate analogy. An absolute path starts at slash and is stable across working directories. A relative path starts at pwd. Dot means here; dot-dot means parent; tilde is the current user’s home expansion performed by the shell.\n\nCall out spaces and quoting briefly: quote a path when it contains spaces. Avoid teaching backslash escaping in detail; the labs use simple Linux paths.\n\nModel the safety loop aloud: pwd, ls -ld target, perform one change, then ls or stat to verify. This is especially important before recursive operations.\n\nTransition: “The terminal is where we express that intent—and where small symbols compose powerful workflows.”"
    },
    {
      "number": 9,
      "image": "assets/slides/slide-9.png",
      "title": "TERMINAL",
      "notes": "Timing: 6 minutes.\n\nParse the example left to right. The prompt is context, not part of the command. The shell tokenises the command, expands paths or variables, locates grep through PATH, starts a process, and returns an exit status. Options modify behavior; arguments identify data.\n\nMention help discovery: command --help for a summary, man command for the manual, and q to leave the manual pager. Explain that non-zero does not always mean catastrophe—grep returns 1 when no line matches.\n\nDo not dive into shell implementation. The practical point is that punctuation and whitespace carry meaning.\n\nTransition: “A compact navigation vocabulary covers most daily movement.”"
    },
    {
      "number": 10,
      "image": "assets/slides/slide-10.png",
      "title": "TERMINAL",
      "notes": "Timing: 6 minutes.\n\nTeach commands as questions. pwd asks location. ls asks directory contents. cd changes only shell working directory. mkdir -p creates a path safely when parents are missing. cat is for short files; less is for exploration; head and tail sample edges. find locates filesystem entries; grep selects matching text.\n\nPoint out flags used in labs: ls -l for details, -a for hidden names, -h for human-readable sizes; rm -i and cp -i for interactive confirmation. State clearly that Linux deletion has no guaranteed recycle bin.\n\nTransition: “Let’s see the browser/session boundary, paths, and a pipe in one live sequence.”"
    },
    {
      "number": 11,
      "image": "assets/slides/slide-11.png",
      "title": "Live demo: narrate state, not keystrokes",
      "notes": "Timing: 8 minutes.\n\nLive demo. Open the instructor demo seat in the browser and prepare Lab 1. Before each command, ask or state the expected session and state change. Start with whoami, hostname, and pwd; move to /var/log, then return home and create the demo tree.\n\nFor the pipeline, explain that grep writes matching lines to standard output, the pipe carries that stream, and tee both displays and saves it. Verify with cat.\n\nIf typing takes too long, use the prepared printf command. Do not paste the whole block—the point is reading state changes.\n\nTransition: “That pipe is one of three stream operators worth memorising.”"
    },
    {
      "number": 12,
      "image": "assets/slides/slide-12.png",
      "title": "TERMINAL",
      "notes": "Timing: 5 minutes.\n\nDescribe standard input, standard output, and standard error in plain language: data in, normal data out, diagnostic data out. A pipe connects normal output to the next program. Greater-than truncates or creates a file before the command executes; double greater-than appends. That is why a typo with > can destroy content even if the program later fails.\n\nUse tee when learners need both screen visibility and a saved copy. Mention 2> only as an advanced pointer.\n\nConnect this to journalctl: filter at the source first, then use grep only when helpful.\n\nTransition: “Files also carry identity and access rules, so we need to understand users before chmod.”"
    },
    {
      "number": 13,
      "image": "assets/slides/slide-13.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 8 minutes.\n\nExplain that Linux internally uses numeric UIDs and GIDs; names are mappings for humans. A process has an effective user and groups. A file has one owner and one group. The kernel evaluates access with these identities and the permission bits.\n\nShow the difference between /etc/passwd and /etc/shadow conceptually: passwd account metadata is readable; password hashes are protected. Do not display hashes. Use id as the fastest identity summary and getent because it also works when identities come from a directory service.\n\nMention that group membership changes usually require a new login session.\n\nTransition: “Administrative work temporarily changes authority; sudo makes that change explicit.”"
    },
    {
      "number": 14,
      "image": "assets/slides/slide-14.png",
      "title": "USERS & GROUPS",
      "notes": "Timing: 5 minutes.\n\nSay: “sudo is not a magic fix for permission errors. It is an audited request to run a command with another identity, usually root.” Keep the learner in a normal shell, use sudo only when the target requires it, and read the command again before Enter.\n\nContrast sudo command with sudo -i. Root shells are sometimes appropriate for controlled maintenance but make accidental changes easier and attribution weaker. Recommend sudoedit for protected configuration because it edits a temporary copy as the user and installs it safely.\n\nTransition: “Now we can decode the rule that combines identity with read, write, and execute.”"
    },
    {
      "number": 15,
      "image": "assets/slides/slide-15.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 8 minutes.\n\nDecode the first character as object type, then owner, group, and others. The kernel chooses one matching class—it does not add owner and group permissions together. If the process user owns the file, only the owner triplet applies. Otherwise a matching group triplet applies; otherwise others.\n\nDistinguish file and directory meaning. Execute on a file permits execution; execute on a directory permits traversal. Write on a directory controls creating and removing names, which surprises beginners. Access to a file also requires traversal through every parent directory.\n\nUse namei -l as a powerful path-permission diagnostic.\n\nTransition: “Numeric modes are just compact arithmetic for those same three triplets.”"
    },
    {
      "number": 16,
      "image": "assets/slides/slide-16.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 7 minutes.\n\nBuild 640 aloud: owner 4+2, group 4, others 0. Then connect numeric and symbolic forms. Numeric mode is concise when setting the whole policy. Symbolic mode can be clearer for a targeted change, such as chmod g+w.\n\nWarn against chmod 777: it grants every user read, write, and execute and usually hides an ownership or group-design problem. Teach the use case first, then the mode.\n\nMention umask only as the default mask for new files; it is not required for today’s lab. Use stat to verify both human and numeric representations.\n\nTransition: “Mode answers what; ownership answers who.”"
    },
    {
      "number": 17,
      "image": "assets/slides/slide-17.png",
      "title": "PERMISSIONS",
      "notes": "Timing: 7 minutes.\n\nPresent the real use case: Alice and Bob need a shared directory, everyone else needs no access. The solution is a team group, group-owned directory, 2770 mode, and setgid inheritance. This is better than 777 because it expresses who should collaborate.\n\nExplain chown owner:group and chgrp. The leading 2 in 2770 activates setgid on the directory; new content inherits courseops as its group. Default file modes may still restrict group write, so production shares often add a suitable umask or default ACL—mention, do not teach today.\n\nTransition: “Configuration is text, so we also need one terminal editor we can reliably exit.”"
    },
    {
      "number": 18,
      "image": "assets/slides/slide-18.png",
      "title": "TERMINAL EDITOR",
      "notes": "Timing: 5 minutes.\n\nDemonstrate Nano’s bottom-line hints: caret means Ctrl. The minimum path is open, edit, Ctrl+O, Enter, Ctrl+X, then cat or grep the result. Explain that saving a file proves only that bytes changed, not that syntax or behavior is correct. Protected configuration should be edited with sudoedit when possible.\n\nMention Vim as an important operational editor, but avoid a mode tutorial in a six-hour beginner workshop. Learners can choose Vim later; today everyone needs one editor with a dependable exit path.\n\nTransition: “Let’s combine identity, ownership, mode, and path traversal in a repair.”"
    },
    {
      "number": 19,
      "image": "assets/slides/slide-19.png",
      "title": "Live demo: repair access with the smallest change",
      "notes": "Timing: 10 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 2. Set up the team group and directory, create a file as Alice, then show stat. Break access deliberately. Before fixing, ask the room which identity class applies and what permission is missing. Use id, stat, and namei -l to gather evidence.\n\nMake the narrow repair: correct group ownership and mode 640. Retest using the same command and identity that failed. Point out that sudo cat succeeding would not prove the intended user can read.\n\nIf time slips, skip the initial directory construction and begin from the broken file.\n\nTransition: “Local identity is one half of remote access; SSH adds server identity and cryptographic proof.”"
    },
    {
      "number": 20,
      "image": "assets/slides/slide-20.png",
      "title": "SSH authenticates both ends of the conversation",
      "notes": "Timing: 8 minutes.\n\nSeparate the two authentications. The client validates the server host key to prevent a man-in-the-middle. The server validates the user through a password, public key signature, certificate, or other method. Encryption alone is not enough if the client accepts the wrong server identity.\n\nExplain the first-connection fingerprint prompt. The correct workflow is to obtain the expected fingerprint through a trusted channel and compare it before accepting. known_hosts remembers the association; a changed key is a security event or a legitimate rebuild that still needs verification.\n\nTransition: “User key authentication works because the secret half never travels.”"
    },
    {
      "number": 21,
      "image": "assets/slides/slide-21.png",
      "title": "The private key proves; the public key permits",
      "notes": "Timing: 7 minutes.\n\nUse a signing analogy, not encryption of the session. The private key signs a challenge; the server checks the signature with the stored public key. The private key does not travel. The .pub file is intentionally shareable.\n\nUse Ed25519 for the workshop because current OpenSSH supports it and the command is compact. The -a value increases password-based key derivation work when encrypting the private key file. A passphrase protects a stolen key file; an agent can cache access during a session.\n\nMention that enterprise policy may require hardware-backed keys or certificates.\n\nTransition: “A client profile makes the safe choice repeatable.”"
    },
    {
      "number": 22,
      "image": "assets/slides/slide-22.png",
      "title": "Put safe SSH defaults in a named client profile",
      "notes": "Timing: 5 minutes.\n\nWalk line by line. Host is the alias. HostName and Port identify the server. User and IdentityFile remove ambiguity. IdentitiesOnly prevents an agent from offering many unrelated keys and hitting server limits. ServerAliveInterval helps detect dead sessions.\n\nIn Lab 4 the training server is localhost on port 2222 because both SSH endpoints live inside the isolated learner container. For production, the same profile points to a remote DNS name or address.\n\nExplain StrictHostKeyChecking carefully: accept-new is convenient in a disposable lab but still rejects changed keys. Managed environments should pre-provision known_hosts or use yes with a trusted onboarding process.\n\nTransition: “Now we’ll build the key path end to end and verify both identities.”"
    },
    {
      "number": 23,
      "image": "assets/slides/slide-23.png",
      "title": "Live demo: verify before you trust",
      "notes": "Timing: 10 minutes.\n\nLive demo. Prepare Lab 4 in the instructor demo seat. Generate a dedicated Ed25519 client key inside the learner session, record the training server host key for port 2222, and show the bracketed known_hosts entry.\n\nUse ssh-copy-id with the temporary bootstrap password training. Emphasise that only the public key is installed. Then connect with BatchMode enabled; success proves no password prompt was required. Run id and hostname to verify the remote identity.\n\nNever display a real personal key or reuse a production credential.\n\nTransition: “Remote access gives us a shell; logs tell us what happened before we arrived.”"
    },
    {
      "number": 24,
      "image": "assets/slides/slide-24.png",
      "title": "Linux logs live in files and in the systemd journal",
      "notes": "Timing: 6 minutes.\n\nExplain coexistence. Traditional and application logs often live under /var/log. systemd-journald collects structured entries from services, the kernel, and system components. Depending on configuration, journal data may persist under /var/log/journal or live in /run/log/journal until reboot.\n\nShow that package actions have useful logs, such as /var/log/apt/history.log and /var/log/dpkg.log. Mention rotation: today’s file may become .1 or compressed.\n\nThe investigative rule is to frame a question first: which unit, which boot, which time window, which severity?\n\nTransition: “journalctl turns those questions into filters.”"
    },
    {
      "number": 25,
      "image": "assets/slides/slide-25.png",
      "title": "Filter the journal toward one answer",
      "notes": "Timing: 7 minutes.\n\nBuild the command incrementally. -u chooses a systemd unit, --since narrows time, -p chooses priority and above, -n limits count, --no-pager makes captured output stable, and -f follows new messages. Mention -b for the current boot and -b -1 for the previous boot.\n\nWarn that filtering too aggressively can hide context. Start narrow enough to be usable, then widen time or severity if needed. Read timestamps, unit names, exit status, and the earliest causal message—not only the final cascade.\n\nPoint out access: normal users may see only their own journal; sudo may be required for system units.\n\nTransition: “We’ll now restart SSH and watch the relevant evidence appear.”"
    },
    {
      "number": 26,
      "image": "assets/slides/slide-26.png",
      "title": "Live demo: ask the journal a smaller question",
      "notes": "Timing: 7 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 4. Restart SSH to create a known event. Run status first and distinguish the current summary from historical journal entries. Query the last ten entries. Add a five-minute window and warning priority; explain that an empty result can be good news, not a broken command. Enter follow mode, create a connection event from another terminal if convenient, then stop with Ctrl+C.\n\nRead one entry aloud: timestamp, host, process/unit, message. Model evidence extraction rather than scrolling.\n\nTransition: “Logs describe services managed by systemd, so next we need the unit lifecycle.”"
    },
    {
      "number": 27,
      "image": "assets/slides/slide-27.png",
      "title": "SYSTEMD",
      "notes": "Timing: 7 minutes.\n\nDefine a unit as a resource systemd knows how to manage. Services are one unit type; sockets, timers, mounts, and targets are others. Unit files declare the command, identity, working directory, dependencies, and restart behavior. The manager attempts to reach state and records events in the journal.\n\nMake enabled versus active explicit. A service can be active now but not enabled for boot, enabled but currently failed, both, or neither. systemctl status shows current state and recent logs, not a complete diagnosis.\n\nTransition: “A small verb set handles most daily service work.”"
    },
    {
      "number": 28,
      "image": "assets/slides/slide-28.png",
      "title": "SYSTEMD",
      "notes": "Timing: 6 minutes.\n\nGroup verbs by job. Observe before change. start and stop affect runtime; restart combines both and may hide transient evidence. reload asks a capable service to reread configuration without a full restart. enable and disable affect boot relationships, not necessarily immediate state unless --now is added. systemctl cat shows the effective unit and drop-ins. daemon-reload makes the manager reread unit definitions; it does not restart services.\n\nTeach the operational sequence: capture status and logs, inspect configuration, make one change, daemon-reload if the unit changed, restart, then verify state and behavior.\n\nTransition: “The final demo turns that sequence into a real repair.”"
    },
    {
      "number": 29,
      "image": "assets/slides/slide-29.png",
      "title": "Live demo: status is the symptom; logs reveal the cause",
      "notes": "Timing: 10 minutes.\n\nLive demo. Use resources/LIVE_DEMOS.md, Demo 5. Install the unit with a missing User and WorkingDirectory. Start it and resist fixing immediately. Run status, then journalctl for the unit and time window. Identify the credential/user error and connect it to systemctl cat output.\n\nCreate the system user and service directory with explicit owner and mode. Add an index file, restart, and verify systemctl is-active. Finally use curl. Emphasise that active only proves the process is running; curl proves the intended behavior.\n\nIf the service unexpectedly starts, use a new nonexistent username. If the demo stalls, switch to the backup VM or show the prepared commands and outcomes.\n\nTransition: “You now have one repeatable loop for unfamiliar Linux systems.”"
    },
    {
      "number": 30,
      "image": "assets/slides/slide-30.png",
      "title": "THEORY CHECKPOINT",
      "notes": "Timing: 5 minutes.\n\nThis is the theory-half synthesis. Give pairs 60 seconds to apply the five steps to the failed-service demo. Ask one pair to report. Listen for browser versus Linux session, identity, working directory, predicted state, one cause, and behavior verification.\n\nReinforce that commands are replaceable; the loop is transferable. A different distribution may use a different package manager, but the operator still locates context, predicts, acts narrowly, observes, and verifies.\n\nAnnounce the lab transition. Learners will now own the keyboard for exactly three hours.\n\nTransition: “Keep this loop visible; every lab checkpoint uses it.”"
    },
    {
      "number": 31,
      "image": "assets/slides/slide-31.png",
      "title": "HANDS-ON BLOCK",
      "notes": "Timing: 3 minutes of lab-block orientation; this time is included in Lab 1.\n\nGive each learner or pair the assigned seat link. The page contains the task brief, a real ttyd terminal, Reset, and Check my work. The seat token prevents accidental cross-seat access.\n\nPairing is optional but recommended: one driver types, one navigator reads the next step and predicts outcomes; swap after each lab.\n\nState the support rule: when blocked, show pwd, whoami, recent history, and the exact repeated failing command. Reset only when the task calls for a fresh baseline.\n\nStart the 25-minute Lab 1 timer now."
    },
    {
      "number": 32,
      "image": "assets/slides/slide-32.png",
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 50 minutes total.\n\nLab 1 is filesystem fieldwork. Learners orient with pwd and whoami, inspect the prepared inbox, then create, copy, and move files into the required tree. The checker verifies paths and file content.\n\nLab 2 installs tree with APT and turns an access log into status-code counts. Ask learners to explain each pipeline stage before they run it. The final evidence must show exactly three 404 responses.\n\nAt minute 20 and minute 45, give a five-minute warning. Fast finishers should produce the same counts with a different pipeline and compare readability."
    },
    {
      "number": 33,
      "image": "assets/slides/slide-33.png",
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 65 minutes total.\n\nLab 3 is a permission incident. The target is deliberate: Alice and Bob can write, outsider cannot, and new files inherit webteam. Require both the positive and negative test; a single successful write does not prove least privilege.\n\nLab 4 builds SSH trust entirely inside the learner container. Learners generate an Ed25519 key, record the host key, authorize only the public key, and connect through a named client profile. The first password is training; the verified outcome is key-only login.\n\nAt minute 55, give ten minutes remaining. Use namei -l or ssh -vv only after the basic ownership, mode, and identity checks."
    },
    {
      "number": 34,
      "image": "assets/slides/slide-34.png",
      "title": "HANDS-ON",
      "notes": "Lab facilitation: 65 minutes total.\n\nLab 5 begins with service status, then narrows the journal by unit and current boot. The learner records the first causal event and the non-zero exit code in lab-answer.txt. Do not reward random repair attempts; this lab is about evidence.\n\nLab 6 is the capstone. Learners inspect course-web, read the journal and unit definition, repair the missing document root, then enable and start the service. The final verification is threefold: is-active, is-enabled, and an HTTP response on port 8088.\n\nAt minute 55, give ten minutes remaining. Fast finishers should reset Lab 6 and explain the diagnosis before typing the repair."
    },
    {
      "number": 35,
      "image": "assets/slides/slide-35.png",
      "title": "TROUBLESHOOTING",
      "notes": "Timing: keep visible during support or use for a 3-minute regroup.\n\nIf several learners hit different failures, pause and apply the ladder to one example. Context first prevents solving the wrong machine, user, or directory. Inspect the target and effective configuration. Reproduce once to capture the symptom. Gather logs and status. Only then change one cause and repeat the same verification.\n\nThe phrase “before widening privilege” matters: sudo can bypass the intended identity and produce a false success. Likewise chmod 777 can erase the evidence of a group-design problem.\n\nTransition: return learners to their current lab with one requested evidence item."
    },
    {
      "number": 36,
      "image": "assets/slides/slide-36.png",
      "title": "ASSESSMENT",
      "notes": "Timing: 8 minutes at the end of labs.\n\nUse this as a peer assessment. Give pairs four minutes: Partner A explains the SSH chain, Partner B explains the service diagnosis, then each asks one question from the slide. Invite two concise reports.\n\nCorrect misconceptions directly: successful sudo access does not prove normal-user access; accepting an SSH fingerprint without comparison is trust-on-first-use, not verification; active service state does not prove application behavior; changing several things at once prevents causal confidence.\n\nTransition: “You do not need every command in memory—you need a map and a repeatable loop.”"
    },
    {
      "number": 37,
      "image": "assets/slides/slide-37.png",
      "title": "Keep your seat link; keep practising the loop",
      "notes": "Timing: 4 minutes.\n\nClose by resolving the opening promise. Learners can now orient themselves, control access, establish remote trust, and diagnose a service with evidence. Encourage immediate repetition while the command path is fresh.\n\nThe browser seat may be retired after the course, so keep the public course repository and solution-video links. Reset and solve Lab 6 again while the controller is still available. The Linux Upskill Challenge provides a free, open sequence for continued server practice.\n\nFinal sentence: “The command you forget can be looked up; the habit of verifying state is what makes you safe.”"
    },
    {
      "number": 38,
      "image": "assets/slides/slide-38.png",
      "title": "REFERENCES",
      "notes": "Use the repository SOURCES.md for full links, licenses, and retrieval dates. The delivery platform is built from Ubuntu Server, Incus system containers, ttyd browser terminals, Nginx, and a small Flask control API.\n\nThe slide system uses an original CodeRabbit-inspired palette and an original generated title illustration; it does not copy the CodeRabbit logo or product interface.\n\nThe platform source, operational runbooks, six lab setup/check scripts, Playwright solution recordings, and narration scripts live under browser-lab-platform/."
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
      "masterReady": true,
      "master": "media/lab01-filesystem-fieldwork.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab01-filesystem-fieldwork.en.mp3",
          "captions": "media/lab01-filesystem-fieldwork.en.vtt",
          "captionsSrt": "media/lab01-filesystem-fieldwork.en.srt",
          "video": "media/lab01-filesystem-fieldwork.en.mp4",
          "transcript": "This solution starts with pwd and whoami to confirm the working directory and active user. Those checks prevent changes at the wrong path or under the wrong identity.\n\nThe inbox contains a welcome file and a draft. mkdir -p with brace expansion creates both required directories in one predictable command.\n\ncp keeps the welcome file at its source path, while mv moves the draft into the archive directory. The complete destination paths make the intended final state explicit.\n\nFinally, find proves that both files exist at the expected paths, and cat verifies their contents. The platform checker evaluates that observable filesystem state."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab01-filesystem-fieldwork.de.mp3",
          "captions": "media/lab01-filesystem-fieldwork.de.vtt",
          "captionsSrt": "media/lab01-filesystem-fieldwork.de.srt",
          "video": "media/lab01-filesystem-fieldwork.de.mp4",
          "transcript": "Wir starten mit pwd und whoami und checken damit Working Directory und aktiven User. So vermeiden wir Änderungen am falschen Path oder unter der falschen Identity.\n\nIm inbox Directory liegen ein Welcome File und ein Draft. mkdir -p mit Brace Expansion erstellt beide benötigten Directories in einem reproduzierbaren Command.\n\ncp lässt das Welcome File am Source Path stehen, während mv den Draft ins archive Directory verschiebt. Die vollständigen Destination Paths machen den gewünschten End State eindeutig.\n\nZum Schluss zeigt find beide Files an den erwarteten Paths, und cat prüft ihren Content. Der Platform Checker bewertet genau diesen sichtbaren File-System State."
        }
      }
    },
    {
      "id": "lab02",
      "number": 2,
      "title": "Packages and pipelines",
      "shortTitle": "APT, grep, sort, and uniq",
      "description": "Install software and turn an access log into useful evidence.",
      "ready": true,
      "masterReady": true,
      "master": "media/lab02-packages-and-pipelines.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab02-packages-and-pipelines.en.mp3",
          "captions": "media/lab02-packages-and-pipelines.en.vtt",
          "captionsSrt": "media/lab02-packages-and-pipelines.en.srt",
          "video": "media/lab02-packages-and-pipelines.en.mp4",
          "transcript": "First, command -v shows that tree is missing. apt update refreshes repository metadata, and apt install adds the package through the supported package manager instead of copying an unmanaged binary.\n\ndpkg-query verifies the package status. We then create the exact one-line package report required by the lab, including its final newline.\n\nThe pipeline uses awk to read field four from each access log row, sort groups equal status codes, uniq counts them, and the second awk puts status and count in the required order.\n\nThe final cat command displays both files. The status report must contain 404 followed by 3 before the automated checker can pass."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab02-packages-and-pipelines.de.mp3",
          "captions": "media/lab02-packages-and-pipelines.de.vtt",
          "captionsSrt": "media/lab02-packages-and-pipelines.de.srt",
          "video": "media/lab02-packages-and-pipelines.de.mp4",
          "transcript": "Zuerst zeigt command -v, dass tree fehlt. apt update refreshed die Repository Metadata; apt install installiert das Package über den vorgesehenen Package Manager statt als unmanaged Binary.\n\ndpkg-query checkt den Package Status. Danach erstellen wir den exakt geforderten One-Line Package Report inklusive finalem Newline.\n\nDie Pipeline liest mit awk Field vier aus jeder Access-Log-Zeile, sort gruppiert gleiche Status Codes, uniq zählt sie, und das zweite awk bringt Status Code und Count in die geforderte Reihenfolge.\n\nDer letzte cat Command zeigt beide Files. Der Status Report muss 404 gefolgt von 3 enthalten, bevor der automatische Checker erfolgreich ist."
        }
      }
    },
    {
      "id": "lab03",
      "number": 3,
      "title": "Permission incident",
      "shortTitle": "Ownership, modes, and setgid",
      "description": "Repair a shared directory without widening access beyond the team.",
      "ready": true,
      "masterReady": true,
      "master": "media/lab03-permission-incident.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab03-permission-incident.en.mp3",
          "captions": "media/lab03-permission-incident.en.vtt",
          "captionsSrt": "media/lab03-permission-incident.en.srt",
          "video": "media/lab03-permission-incident.en.mp4",
          "transcript": "We begin with users, group membership, and current state. Alice and Bob belong to webteam, while outsider is deliberately excluded. stat shows the owner, group, and numeric permissions that need repair.\n\nchown assigns the share and existing content to the webteam group. chmod 2770 grants full owner and group permissions, removes access for others, and sets the set-GID bit on the directory.\n\nA real write as Alice proves the positive case. A separate test as outsider proves the negative case, which is essential when we claim least privilege.\n\nThe final stat output shows the repaired directory and the inherited group on Alice's new file. The checker validates membership, permissions, ownership, and both access outcomes."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab03-permission-incident.de.mp3",
          "captions": "media/lab03-permission-incident.de.vtt",
          "captionsSrt": "media/lab03-permission-incident.de.srt",
          "video": "media/lab03-permission-incident.de.mp4",
          "transcript": "Wir starten mit Usern, Group Membership und Current State. Alice und Bob sind in webteam, outsider bleibt bewusst draußen. stat zeigt Owner, Group und numerische Permissions, die wir reparieren müssen.\n\nchown setzt webteam als Group Owner für Share und vorhandenen Content. chmod 2770 gibt Owner und Group volle Permissions, blockiert Others und setzt das set-GID Bit auf dem Directory.\n\nEin echter Write als Alice ist der Positive Case. Ein separater Test als outsider ist der Negative Case; beide zusammen belegen Least Privilege.\n\nDer finale stat Output zeigt das reparierte Directory und die geerbte Group auf Alices neuem File. Der Checker validiert Membership, Permissions, Ownership und beide Access Results."
        }
      }
    },
    {
      "id": "lab04",
      "number": 4,
      "title": "SSH trust setup",
      "shortTitle": "Keys, fingerprints, and client profiles",
      "description": "Build a verified key-only SSH connection from first principles.",
      "ready": true,
      "masterReady": true,
      "master": "media/lab04-ssh-trust-setup.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab04-ssh-trust-setup.en.mp3",
          "captions": "media/lab04-ssh-trust-setup.en.vtt",
          "captionsSrt": "media/lab04-ssh-trust-setup.en.srt",
          "video": "media/lab04-ssh-trust-setup.en.mp4",
          "transcript": "The .ssh directory is private. ssh-keygen creates a dedicated Ed25519 key with an empty training passphrase, and chmod 600 protects the private key.\n\nssh-keyscan records the server host key for port 2222. ssh-keygen -F then proves that known_hosts contains the correct bracketed host and port.\n\nssh-copy-id installs only the public key. The temporary password bootstraps this one operation; it is not the final authentication mechanism.\n\nThe client profile pins Host, Port, User, IdentityFile, and IdentitiesOnly. BatchMode and StrictHostKeyChecking prove that the alias works without a password prompt or an unverified host."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab04-ssh-trust-setup.de.mp3",
          "captions": "media/lab04-ssh-trust-setup.de.vtt",
          "captionsSrt": "media/lab04-ssh-trust-setup.de.srt",
          "video": "media/lab04-ssh-trust-setup.de.mp4",
          "transcript": "Das .ssh Directory bleibt private. ssh-keygen erstellt einen dedizierten Ed25519 Key ohne Training Passphrase, danach schützt chmod 600 den Private Key.\n\nssh-keyscan speichert den Server Host Key für Port 2222. ssh-keygen -F beweist anschließend, dass known_hosts den korrekten Host mit Port in eckigen Klammern enthält.\n\nssh-copy-id installiert nur den Public Key. Das temporäre Password bootstrapped genau diesen Setup Step; es ist nicht der finale Authentication Mechanism.\n\nDas Client Profile setzt Host, Port, User, IdentityFile und IdentitiesOnly. BatchMode und StrictHostKeyChecking beweisen, dass der Alias ohne Password Prompt und ohne ungeprüften Host funktioniert."
        }
      }
    },
    {
      "id": "lab05",
      "number": 5,
      "title": "Journal investigation",
      "shortTitle": "Filter logs to find the causal event",
      "description": "Use systemd journal evidence to explain a service failure.",
      "ready": true,
      "masterReady": true,
      "master": "media/lab05-journal-investigation.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab05-journal-investigation.en.mp3",
          "captions": "media/lab05-journal-investigation.en.vtt",
          "captionsSrt": "media/lab05-journal-investigation.en.srt",
          "video": "media/lab05-journal-investigation.en.mp4",
          "transcript": "systemctl status is the first orientation point. It shows the unit state, recent context, and process result, but event history still requires the journal logs.\n\njournalctl scopes the evidence to one unit and the current boot. Reading upward from the final failure reveals the causal incident identifier instead of only the last generic message.\n\nA second journalctl query changes the output format, and grep filters only after the journal is scoped. This confirms DISK_THRESHOLD and exit code 42.\n\nWe write those exact assignments into lab-answer.txt and use cat to display the file before the platform checker verifies the submitted evidence."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab05-journal-investigation.de.mp3",
          "captions": "media/lab05-journal-investigation.de.vtt",
          "captionsSrt": "media/lab05-journal-investigation.de.srt",
          "video": "media/lab05-journal-investigation.de.mp4",
          "transcript": "systemctl status ist der erste Check. Der Output zeigt Unit Status, aktuellen Context und Process Result; für die Event History brauchen wir zusätzlich die Journal Logs.\n\njournalctl scoped die Evidence auf eine Unit und den aktuellen Boot. Vom finalen Failure lesen wir nach oben und finden so die kausale Incident ID statt nur der letzten generischen Message.\n\nEine zweite journalctl Query ändert das Output Format, und grep filtert erst nach dem Scoping. Damit bestätigen wir DISK_THRESHOLD und Exit Code 42.\n\nWir schreiben die exakten Assignments in lab-answer.txt und zeigen das File mit cat, bevor der Platform Checker die Evidence validiert."
        }
      }
    },
    {
      "id": "lab06",
      "number": 6,
      "title": "Broken service capstone",
      "shortTitle": "Diagnose, repair, and verify",
      "description": "Repair a web service and prove both system state and application behavior.",
      "ready": true,
      "masterReady": true,
      "master": "media/lab06-broken-service-capstone.mp4",
      "languages": {
        "en": {
          "label": "English",
          "ready": true,
          "audio": "media/lab06-broken-service-capstone.en.mp3",
          "captions": "media/lab06-broken-service-capstone.en.vtt",
          "captionsSrt": "media/lab06-broken-service-capstone.en.srt",
          "video": "media/lab06-broken-service-capstone.en.mp4",
          "transcript": "The capstone starts with evidence. systemctl status shows the failed unit, journalctl exposes a change-directory error, and systemctl cat names the required working directory and service account.\n\nThe smallest durable repair creates the missing web root with courseapp ownership. We add the exact health sentence and ensure that the service account owns the content it serves.\n\nsystemctl enable --now starts the service immediately and enables it for the next boot. This changes both current and future state in one explicit operation.\n\nWe verify active and enabled state, the listening socket, and finally the HTTP response. curl returning the health sentence is stronger evidence than a green systemd status alone."
        },
        "de": {
          "label": "Deutsch",
          "ready": true,
          "audio": "media/lab06-broken-service-capstone.de.mp3",
          "captions": "media/lab06-broken-service-capstone.de.vtt",
          "captionsSrt": "media/lab06-broken-service-capstone.de.srt",
          "video": "media/lab06-broken-service-capstone.de.mp4",
          "transcript": "Das Capstone startet mit Evidence. systemctl status zeigt die failed Unit, journalctl meldet einen Change-Directory Error, und systemctl cat nennt Working Directory und Service Account.\n\nDer kleinste dauerhafte Fix erstellt den fehlenden Web Root mit courseapp als Owner. Wir schreiben exakt den geforderten Health Text und geben dem Service Account Ownership über den Content.\n\nsystemctl enable --now startet den Service sofort und setzt ihn für den nächsten Boot auf enabled. Damit ändern wir Current State und Future State in einem expliziten Command.\n\nWir prüfen active und enabled State, den listening Socket und zuletzt die HTTP Response. Dass curl den Health Text liefert, ist stärkere Evidence als ein grüner systemd Status allein."
        }
      }
    }
  ]
};
