# Speaker Script — Linux Foundations

This script is embedded in the final PowerPoint speaker notes and matches all 111 slides. The course is balanced 50% guided teaching and 50% hands-on practice; per-slide and per-lab estimates are facilitation aids, not the public course split.

## Slide 1 — Linux Foundations

⏱ 1 MIN  ·  TITLE
★ Factual open, no pitch: 10 modules, 10 labs, half the time at your keyboard. One habit all day: predict → one change → verify from a second angle. The terminal on the right shows our real lab seat.
──────────────────────────────────────────────
Welcome — quick and factual. Ten modules, each with a short bit of theory, a live demo, and a lab you do yourself on your own Ubuntu 24.04 seat. Half the time is yours at the keyboard. One working habit I'll hold us to all day: predict what a command should do, make one small change, then verify it from a second angle. Here is the agenda.
──────────────────────────────────────────────
→ NEXT: the agenda

## Slide 2 — Course agenda

⏱ 3 MIN  ·  AGENDA
★ Walk it briskly, morning then afternoon; each row says what you'll do. Lab minutes are protected. Close by STATING the three working rules: predict first; never silence an error you don't understand; reset only your own lab.
? ASK: any scheduling constraints I should know about now?
──────────────────────────────────────────────
Walk the agenda left column then right, and keep it brisk — this is orientation, not a lecture. Morning half: what system am I on and how does the terminal work; where files live, paths and links; turning logs into answers with pipelines; installing software and proving where it came from; and the largest block, users, groups, and permissions — thirty lab minutes because it is where people struggle. Afternoon half: SSH done properly, host and user keys; reading the journal to find causes, not symptoms; systemd services, including writing your own; processes and sockets down to what a client actually sees; and finally changing services safely with drop-in overrides. Every module ends at your keyboard — the lab minutes on the right are real, and they are protected. Close with the three working rules, stated verbally: predict before you type; never make an error disappear without understanding it — not with sudo, not by discarding the message; and reset only your own lab. When stuck, bring five facts: who you are, which machine, which directory, the exact command, its unchanged output. Any scheduling questions, now is the moment.
──────────────────────────────────────────────
→ NEXT: Module 1: system boundaries & the terminal

## Slide 3 — System boundaries and terminal survival

⏱ 1 MIN  ·  MODULE 1
★ Two questions for every machine: what am I running, and what happens when you press Enter?
? ASK: uname -r inside our container — container's kernel or the host's? (hold it)
──────────────────────────────────────────────
This first module answers two questions you'll ask on every machine you ever touch: what am I actually running, and what happens when I press Enter? Before we change anything, we learn to read where we are. Give me one prediction right now: when you type 'uname -r' inside one of our lab containers, do you see the container's own kernel, or the host's? Hold that thought. By the end of the module you'll prove the answer instead of guessing. Scope today is general Linux plus Bash on the Ubuntu 24.04 lab.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 4 — What am I actually running?

⏱ 3 MIN  ·  MODULE 1 · MODEL
★ Layers only — no shell mechanics yet. Linux = the kernel; a distribution packages user space around it; a VM boots its own kernel, a container shares the host's. os-release and uname -r answer different layers.
? ASK: resolve the uname prediction: the container shows the host kernel — on our seats: 6.17.0-1026-nvidia
──────────────────────────────────────────────
Before operating anything, establish what it is. 'Linux' strictly names the kernel; everything you will actually type — ls, bash, apt — is user space, which a distribution such as Ubuntu selects and configures. Two virtualisation forms matter here: a virtual machine boots its own kernel on virtual hardware, while a container, like our Incus lab seats, has a private user space but shares the host's kernel. The practical consequence: 'which Ubuntu' and 'which kernel' are different questions with different answers — /etc/os-release for the first, uname -r for the second. And the payoff on the opening prediction: on our seats uname -r reports 6.17.0-1026-nvidia, an NVIDIA-flavoured kernel that no plain Ubuntu container would ship. That is the controller's kernel showing through, because the container never had one of its own. We verify exactly this in the demo; the next slide shows these layers as a picture.
──────────────────────────────────────────────
→ NEXT: picture of the layers

## Slide 5 — The system in layers

⏱ 2 MIN  ·  MODULE 1 · PICTURE THE MODEL
★ Requests go down as system calls; bytes and an exit status come back up. That up-arrow is what we verify all day.
──────────────────────────────────────────────
The same model as the last slide, now as a picture — read it top to bottom. Your programs live in user space: bash, python3, sshd. They never touch hardware. When they need something they cross the dashed line with a system call — open, read, write, execve. Below the line the kernel is the referee: it schedules the CPU, maps and protects memory, resolves files through the VFS, and moves packets through the network stack. Underneath sits the real hardware. The one idea to carry all course: every command sends a request down and gets evidence back up — that up-arrow, bytes and an exit status, is exactly what we keep verifying.
──────────────────────────────────────────────
→ NEXT: build-up: the kernel as referee

## Slide 6 — The kernel arbitrates shared resources

⏱ 2 MIN  ·  MODULE 1 · BUILD THE MODEL
★ Kernel = referee for shared hardware: CPU, memory, filesystem, network. Programs ask; they never touch.
? ASK: when cat reads a file, which of the four does the work?
──────────────────────────────────────────────
Let's build up why those layers matter. The kernel's whole job is to be the referee for shared hardware. Four things it arbitrates: it schedules CPU time so runnable processes take turns; it maps virtual memory and stops one process reading another's; it resolves filesystem and device operations; and it moves your network data through sockets. The idea to hold onto: your program never touches hardware directly, it asks. So when something fails, ask which of these the kernel was doing on your behalf. Predict with me: when 'cat' reads a file, which of the four is doing the real work?
──────────────────────────────────────────────
→ NEXT: follow one request across the boundary

## Slide 7 — A system call crosses the user–kernel boundary

⏱ 2 MIN  ·  MODULE 1 · BUILD THE MODEL
★ Four stops: shell → program → kernel check → bytes back. A failure lives at a specific stop.
? ASK: filename typo — does that fail in user space or the kernel?
──────────────────────────────────────────────
Now watch a request cross the boundary, because failures live at specific points on this path. You type 'cat report.txt'. The shell, in user space, starts the cat program. Cat can't read the disk itself, so it makes a system call: kernel, please open and read this path. The kernel checks your credentials and resolves the path to a real filesystem object. If that's allowed, the bytes come back to cat, which writes them to standard output. Four stops, and a command can break at any one of them: the shell, the program, or the kernel-facing operation. Quick prediction: a typo in the filename, does that fail in user space or in the kernel?
──────────────────────────────────────────────
→ NEXT: distro vs VM vs container naming

## Slide 8 — Distribution, VM, and container describe different layers

⏱ 2 MIN  ·  MODULE 1 · BUILD THE MODEL
★ Before following any tutorial, record both facts: /etc/os-release (distribution) and uname -r (kernel).
──────────────────────────────────────────────
Last piece, and it's the one that trips people following instructions off the internet. A distribution curates user space: packages, defaults, support. A VM has virtual hardware and its own guest kernel. A system container has isolated user space but shares the host kernel. So before you follow a tutorial that confidently says 'your kernel is X,' record both facts yourself: what does /etc/os-release say about the distro, and what does uname say about the kernel? They can disagree, and that's not a bug, it's the layers talking.
──────────────────────────────────────────────
→ NEXT: worked example: read a line as data flow

## Slide 9 — How the shell reads a line

⏱ 3 MIN  ·  MODULE 1 · MODEL
★ The shell in one line: prompt = context only; first word = the program; the rest = arguments. Bash substitutes $VAR / $(cmd), applies quotes, then records an exit status (0 = success).
? ASK: before you press Enter — what will the shell do to this line first?
──────────────────────────────────────────────
Now the second half of the module: what happens between pressing Enter and a program running. Read a command line as three parts. The prompt is not part of the command; it only reports who and where you are. The first word selects what runs — a program or a shell built-in. Everything after it is arguments handed to that program. Then two mechanisms you will use in a moment: substitution, where Bash replaces $USER or $(uname -r) with their values before the program ever starts; and quoting, where double quotes keep a substituted value together as a single argument. Finally, when the program finishes, the shell records an exit status — zero for success, non-zero for failure — which is evidence you can test. Each of these terms appears in the worked example on the next slide, so questions on vocabulary are welcome now.
──────────────────────────────────────────────
→ NEXT: the worked example that uses each of these terms

## Slide 10 — Read a command from left to right

⏱ 3 MIN  ·  MODULE 1 · WORKED EXAMPLE
★ Read left→right as data flow. Quotes keep one argument; $() runs first; '>' replaces the file.
──────────────────────────────────────────────
Let's read a real line as data flowing, not keystrokes to copy. printf, a format string with two placeholders, then two arguments, then redirect into ~/profile.txt. Start from the left. printf receives the format plus two expanded arguments. The double quotes matter: they keep each value as a single argument even if it contained spaces. $USER expands to your name; $(uname -r) runs uname and substitutes its output. Then '>' sends standard output into the file, replacing whatever was there, not appending. Pause on that: '>' is destructive. After each piece, ask 'what evidence did that produce?' If anyone can't explain an operator, say so now, that's exactly what the next slide is for.
──────────────────────────────────────────────
→ NEXT: guided command reference

## Slide 11 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 1 · GUIDED COMMANDS
★ Each command answers exactly one question — don't memorize, know which tool asks what. Show 'man test'.
──────────────────────────────────────────────
Quick reference, and the point of this slide is that each of these is a tool that answers one question, not a list to memorize. $HOME: where's my home directory? $(...): capture a command's output. '> file': replace a file with output. printf: produce predictable, formatted text. 'test -d PATH': is this a directory, yes or no? The lab guide repeats all of it with the expected output, so don't write it down, just remember which tool asks which question. Let me show help for one so you can self-serve: 'man test'.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 12 — Demo: one kernel, two user spaces

⏱ 4 MIN  ·  MODULE 1 · LIVE DEMO
★ os-release → uname -r → ps -p 1, on controller AND container. Kernels identical (6.17.0-1026-nvidia); PID 1 differs. One command at a time.
? ASK: which of the three answers will differ between the seats?
──────────────────────────────────────────────
Instructor seat, one command at a time, and a prediction before each. First /etc/os-release on the controller and in the container — the distribution claims may well match. Then uname -r on both: the room has predicted; both return 6.17.0-1026-nvidia, because the container has no kernel of its own. Then ps -p 1 on each — different PID-1 processes, so the user spaces are separate. Close by stating the pattern that transfers to the lab: three questions, three different layers, verified rather than assumed. Setup and cleanup are in resources/LIVE_DEMOS.md; if the seat looks wrong, reset it rather than improvise.
──────────────────────────────────────────────
→ NEXT: Lab 1

## Slide 13 — System boundaries and terminal survival

⏱ 15 MIN  ·  HANDS-ON · LAB 1
★ 15 min: system-profile.txt + path-map.txt. Check readiness before opening the terminal; reset only your own lab.
? ASK: what is your very first inspection step?
──────────────────────────────────────────────
Fifteen minutes. Your mission: create system-profile.txt and path-map.txt that prove this seat's user space, kernel, architecture, init system, and filesystem anchors. Before you open the terminal, check three things, because these are the readiness bar for this lab: can you explain kernel versus user space, can you point to the prompt, command, arguments, quoting and expansion in a line, and can you use redirection and then immediately inspect the file you wrote? If any of those is unclear, raise it now rather than during the lab. Prepare or reset only this lab. When you're stuck, send me identity, host, directory, the exact command, and the unchanged output. Full task, hints, recovery, and the checker are in labs/LAB_GUIDE.md. Start by telling me your very first inspection step.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 14 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 1 · DEBRIEF
★ Different layers give different answers — that's the design, not a bug. Drill the 3 debrief questions.
? ASK: which independent evidence closed your claim — not the command that felt right?
──────────────────────────────────────────────
Let's connect it back without re-running anything. Someone tell me the causal chain: why can this seat report Ubuntu 24.04 and a kernel version that doesn't obviously 'look' like Ubuntu's? Right, different layers, the distribution versus the kernel. Now someone else: which independent piece of evidence actually closed your claim, not the command that felt right, but the second view that confirmed it? Use these three questions every single time: what did you expect, what did you observe, and what independent evidence settled it. That last question is the whole course in one line. Next module: now that we know which system we're on, where do things actually live? Paths.
──────────────────────────────────────────────
→ NEXT: Module 2: where things live

## Slide 15 — Filesystem navigation, objects, and links

⏱ 1 MIN  ·  MODULE 2
★ How does a pathname become an object? Position problems masquerade as missing-data problems.
? ASK: cat report.txt in the wrong dir — the file's fault or yours?
──────────────────────────────────────────────
Module two. We know which system we're on; now, where does anything actually live? The operating question: how does Linux turn a pathname like /etc/os-release into an actual object on disk? Predict: if I'm sitting in /home/you and I type 'cat report.txt' but the file is in /tmp, whose fault is the error, the file's or mine? We'll see it's almost always a position problem, not a missing-data problem. Scope: general Linux, the Filesystem Hierarchy Standard, and the virtual filesystem layer.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 16 — Paths resolve from a starting point

⏱ 2 MIN  ·  MODULE 2 · MODEL
★ One tree rooted at /; absolute vs relative is only the starting point; every parent needs x. A 'missing file' error is often a statement about position.
? ASK: same file, two different valid paths — how?
──────────────────────────────────────────────
Establish the coordinate system first. Linux presents one directory tree, rooted at /, and mounted filesystems simply join it at directories — there are no drive letters. A path is a route through that tree: an absolute path starts at the root, a relative path starts at your working directory. The consequence: the same file has many valid names depending on where you stand, and an error about a 'missing' file is often a statement about your position. One requirement people meet later in the permissions module already applies here: traversing a directory needs its search permission.
──────────────────────────────────────────────
→ NEXT: build-up: resolution is mechanical

## Slide 17 — Path resolution checks one component at a time

⏱ 2 MIN  ·  MODULE 2 · BUILD THE MODEL
★ Resolution is mechanical: start → each entry → follow mounts/symlinks → x required on every parent. A 644 file can still be unreachable.
──────────────────────────────────────────────
Let's make path resolution concrete, because it's mechanical. The kernel walks your path one component at a time. It picks a starting point, slash for absolute or your working directory for relative. It reads each directory entry left to right, following any mounts or symlinks it meets. And at every parent directory it demands search permission, the x bit. The consequence that surprises people: a file can be perfectly readable, mode 644, and you still can't reach it because you lack x on a directory above it. So 'permission denied' might be about the path, not the file.
──────────────────────────────────────────────
→ NEXT: the links model, then the worked example

## Slide 18 — Names, hard links, and symbolic links

⏱ 3 MIN  ·  MODULE 2 · MODEL
★ DEFINE inode first: the file's on-disk record — metadata + data location, link count, and no name. Names are directory entries pointing at it. Hard link = second name; symlink = stored path text.
? ASK: hard-link a file, rename the original — does the hard link still work?
──────────────────────────────────────────────
Define the central term before using it. On disk, a file IS its inode: the filesystem's record holding the metadata — owner, mode, size, timestamps, link count — and the location of the data blocks. One thing the inode does not contain is a name. Names live in directories: a directory entry is a label that points at an inode number, and that number, not the name, is the file's identity. From that definition both link types follow. A hard link is simply a second directory entry pointing at the same inode — neither name is more 'real'. A symbolic link is different in kind: its content is a path as text, resolved on every use, so renaming the target leaves it pointing at nothing. Prediction for the picture: hard-link a file, rename the original — does the hard link still work?
──────────────────────────────────────────────
→ NEXT: the links picture, then the worked example

## Slide 19 — Hard link vs symbolic link

⏱ 3 MIN  ·  MODULE 2 · PICTURE THE LINKS
★ Left: two names → one inode, link count 2; rm one name and content survives. Right: the symlink stores only path text, re-resolved each use; rename the target → dangling.
? ASK: which panel changes when the target is renamed — and why?
──────────────────────────────────────────────
Read the two panels side by side. On the left, the hard link: two directory entries, notes/welcome.txt and notes/welcome-hard.txt, both point directly at inode 5124. Neither is the original — they are equal names for one object, and the inode's link count records that there are two. Remove one name and the other still opens the content; the data is freed only when the link count reaches zero. On the right, the symbolic link: links/latest-note contains no data at all, only the text '../notes/welcome.txt'. That path is resolved every time the link is used, relative to the link's own directory. Rename the target and the stored text now resolves to nothing — a dangling link — while the hard link on the left is unaffected. The two commands along the bottom are your evidence tools: ls -li for inode numbers, readlink for the stored path.
──────────────────────────────────────────────
→ NEXT: the worked example: links in practice

## Slide 20 — Predict link behavior before changing names

⏱ 3 MIN  ·  MODULE 2 · WORKED EXAMPLE
★ Equal inode numbers = identity, proof on screen. A symlink stores only path text — move the target and it dangles.
──────────────────────────────────────────────
Read this as behavior, not keystrokes. First 'ln' with no dash-s makes welcome-hard.txt a hard link, a second name for the same inode as welcome.txt. Then 'ln -s' makes a symbolic link storing the text '../notes/welcome.txt'. Now 'ls -li' shows inode numbers: the original and the hard link share a number, and that shared number is identity, proof they're the same object. 'readlink' shows the path stored inside the symlink. The lesson lands when you move the target: the symlink breaks because its stored path no longer resolves, but the hard link keeps working because it never cared about the name.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 21 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 2 · GUIDED COMMANDS
★ pwd / file / realpath / stat / find — and 'file' only guesses; 'stat' is the authority.
──────────────────────────────────────────────
Reference. Each answers one question. 'pwd': where am I? 'file PATH': what kind of content is this? 'realpath PATH': what's the fully-resolved absolute path? 'stat PATH': the authoritative metadata, inode, link count, owner, mode. 'find' with -printf: enumerate names and their link targets. Don't memorize; the lab guide has the syntax and the expected evidence. One caution: 'file' only guesses from content, it's a hint, not truth; 'stat' is the authority.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 22 — Demo: a 'missing' file that isn't

⏱ 4 MIN  ·  MODULE 2 · LIVE DEMO
★ Fail on purpose in the wrong dir; rebuild coordinates: pwd → realpath → namei -l → correct cat. Nothing was repaired — only the position assumption.
? ASK: is the file missing, or am I — and which command settles it?
──────────────────────────────────────────────
A deliberate failure first: cat report.txt from the wrong working directory, and the error stays on screen. Then rebuild the coordinates out loud: pwd for position, realpath for what the relative name would resolve to from here, namei -l on the intended absolute path to walk every component. Only then cat again, correctly. The point to name explicitly: nothing was repaired — only the position assumption changed, and the evidence identified it without any retry-and-hope. Setup/cleanup in resources/LIVE_DEMOS.md.
──────────────────────────────────────────────
→ NEXT: Lab 2

## Slide 23 — Filesystem navigation, objects, and links

⏱ 25 MIN  ·  HANDS-ON · LAB 2
★ 25 min: organize ~/inbox, then demonstrate copy vs hard link vs relative symlink semantics.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty-five minutes. Mission: organize ~/inbox, then prove, not assert, the different semantics of a copy, a hard link, and a relative symlink. Readiness check before you start: can you tell an absolute path from a relative one, can you predict what copy, move, hard-link and symlink each do, and will you inspect the exact target before you change it? A copy is independent; a hard link shares the inode; a relative symlink is fragile to moves, and your evidence should show each. Stuck? Identity, host, directory, command, unchanged output. Guide is labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 24 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 2 · DEBRIEF
★ 'No such file' usually reveals a position assumption, not missing data. The error is a hypothesis, not a verdict.
? ASK: was it realpath or the inode from stat that closed it for you?
──────────────────────────────────────────────
Without re-running: tell me why 'No such file' this module was usually a lie, the data was there, your assumption about where it lived wasn't. And which independent view closed it for you, was it realpath, or the inode number from stat? The habit forming here is that an error message is a starting hypothesis, not a verdict. Next we stop navigating and start extracting: turning file and log text into a reviewable answer with the shell.
──────────────────────────────────────────────
→ NEXT: Module 3: text into evidence

## Slide 25 — Shell execution, streams, editing, and text evidence

⏱ 1 MIN  ·  MODULE 3
★ Can a pipeline turn a pile of records into a small reviewable answer? Yes — one explainable stage at a time.
? ASK: how many distinct steps to count status codes in a log? (hold a number)
──────────────────────────────────────────────
Module three. Now we make the shell do work for us. The question: how can a pipeline turn a pile of records, say a log file, into a small, reviewable answer? Predict: if I want the count of each HTTP status code in an access log, how many distinct steps do you think that takes? Hold a number. By the end you'll build it one stage at a time and be able to explain every stage. Scope: Bash plus the GNU text tools on the Ubuntu lab.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 26 — Streams separate data from diagnostics

⏱ 2 MIN  ·  MODULE 3 · MODEL
★ Three streams; redirecting stdout does not capture stderr; exit status is a third signal. Tie-back: 2>/dev/null is the 'discarding errors' the ground rules forbid.
? ASK: the output file looks clean — what does that establish about errors?
──────────────────────────────────────────────
Every process is created with three streams: standard input to read, standard output for its results, and standard error for its diagnostics. The design decision that matters: output and errors travel on separate channels. Redirect stdout into a file and the file receives the data only — errors continue to the terminal. So a clean-looking output file does not demonstrate a clean run. The third, independent signal is the exit status: zero for success, non-zero for failure, and testable in scripts. This is also the mechanism behind a ground rule from the introduction: writing '2>/dev/null' sends stream 2 — stderr — into the discard device, which is precisely the 'do not suppress error messages' rule made concrete. Question for the room: you redirect a command's output to a file and the file looks correct — what has that established about errors?
──────────────────────────────────────────────
→ NEXT: picture: streams end to end

## Slide 27 — Streams and pipelines

⏱ 3 MIN  ·  MODULE 3 · PICTURE THE STREAMS
★ Top: the three streams. Bottom: stdout chains stage to stage, stderr still hits your terminal, and exit status is a third separate signal (last command's, in bash).
──────────────────────────────────────────────
Module three in one picture. Every process is born with three streams: standard input on descriptor 0, standard output on 1, and standard error on 2. The top half shows them — input comes in, the answer goes out on stdout, and, the part that catches people, diagnostics go out on a completely separate channel, stderr. The bottom half is a pipeline: the shell wires each command's stdout into the next command's stdin — awk to sort to uniq -c — and a final redirect saves the last stdout into status-counts.txt. But look at the red arrows: every stage's stderr still goes to your terminal, not into the file, so a file that looks clean can hide errors you never captured. And there's a third, separate signal we lean on all course: the exit status, where 0 means success, and in bash a pipeline reports its last command's status.
──────────────────────────────────────────────
→ NEXT: build-up: several processes, not one command

## Slide 28 — A pipeline is several processes, not one command

⏱ 2 MIN  ·  MODULE 3 · BUILD THE MODEL
★ A pipeline is several processes started at once. Status comes from the last command — an early stage can fail silently. Inspect between stages.
──────────────────────────────────────────────
Let's be precise about what a pipeline is, because treating it as one thing causes bad debugging. The shell creates the pipes first, then starts all the programs at once. Each stage receives the previous stage's standard output. Standard error stays separate unless you explicitly redirect it. And in Bash the pipeline's exit status normally comes from the last command, which means an earlier stage can fail silently while the whole thing looks successful. So when a pipeline gives a weird answer, inspect between the stages.
──────────────────────────────────────────────
→ NEXT: the staging model, then the worked example

## Slide 29 — A pipeline is a staged transformation

⏱ 2 MIN  ·  MODULE 3 · MODEL
★ Build one stage at a time and inspect between stages; sort must precede uniq -c.
? ASK: what does uniq -c report on unsorted input?
──────────────────────────────────────────────
Now the composition rule the worked example relies on. A pipeline connects one command's standard output to the next command's standard input, so a long transformation becomes a sequence of small, checkable stages: inspect the record structure, select the relevant records, extract the field, group, and only then save. Build it one stage at a time and look at the intermediate output before adding the next. And one ordering rule with no exceptions: sort before uniq -c, because uniq counts only adjacent identical lines. Prediction: what does uniq -c report on unsorted input?
──────────────────────────────────────────────
→ NEXT: the worked example: build the pipeline

## Slide 30 — Make every pipeline stage explainable

⏱ 3 MIN  ·  MODULE 3 · WORKED EXAMPLE
★ Every stage has one job you can state in a sentence — and you can stop after any stage and eyeball it. That's what makes the answer trustworthy.
──────────────────────────────────────────────
Data flow, stage by stage. First 'awk' prints field four of the access log, one HTTP status per line. Pipe into 'sort', which groups equal values next to each other. Pipe into 'uniq -c', which now counts each adjacent group. Then a final 'awk' flips the columns to STATUS then COUNT and we redirect to a file. Every stage has one job you can state in a sentence, and you could stop after any stage and eyeball the intermediate output. That's what makes the result trustworthy rather than magical.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 31 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 3 · GUIDED COMMANDS
★ nano / grep / awk / sort / uniq -c — sort-then-uniq are a team, never separate them.
──────────────────────────────────────────────
Reference. 'nano FILE': edit interactively, Ctrl-O saves, Ctrl-X exits. 'grep PATTERN': select matching records. 'awk': extract or reshape fields. 'sort': order records so equal ones sit together. 'uniq -c': count adjacent identical lines. The pairing to remember is sort-then-uniq; they're a team. Lab guide has the exact syntax and expected output.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 32 — Demo: a pipeline built one stage at a time

⏱ 4 MIN  ·  MODULE 3 · LIVE DEMO
★ head → awk → sort | uniq -c → redirect, inspecting between every stage. If time allows, show the wrong counts without sort.
? ASK: what do the counts look like if sort is skipped?
──────────────────────────────────────────────
Build the pipeline the way it should be debugged: one stage, inspect, next stage. head shows the record structure; awk extracts the single field we care about, and we look at that intermediate output before continuing; sort groups equal values so uniq -c can count them — the room has already predicted what happens without sort, and if time allows, show it. Finally redirect to a file and read the file back, because saving and verifying are separate acts. Resist assembling the one-liner in a single step — the staged build is the lesson.
──────────────────────────────────────────────
→ NEXT: Lab 3

## Slide 33 — Shell execution, streams, editing, and text evidence

⏱ 20 MIN  ·  HANDS-ON · LAB 3
★ 20 min: edit app.conf, reduce logs into evidence files another operator could review without rerunning you.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty minutes. Mission: edit app.conf, then reduce the application and access logs into small evidence files another operator could review without rerunning your work. Readiness: can you explain stdin, stdout, stderr and exit status; can you say what each pipeline stage receives and emits; and can you edit, save, reopen and validate a text file? Build incrementally and inspect between stages. Stuck? The usual five: identity, host, directory, command, unchanged output. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 34 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 3 · DEBRIEF
★ A pipeline is trustworthy when each stage has a stated input and output — anyone can check it.
? ASK: which intermediate inspection saved you from a wrong answer?
──────────────────────────────────────────────
No re-running. Tell me: what makes a pipeline trustworthy rather than just clever? Right, every stage has a stated input and output, so anyone can check it. And which stage did you inspect that saved you from a wrong answer? Next, we point this same evidence discipline at software itself: package tools give us several independent views of what's installed and where it came from.
──────────────────────────────────────────────
→ NEXT: Module 4: software provenance

## Slide 35 — Packages and software provenance

⏱ 1 MIN  ·  MODULE 4
★ What proves software came from the supported repo? running it is not sufficient evidence.
? ASK: I type a command and it works — installed from Ubuntu's repos?
──────────────────────────────────────────────
Module four. Software. The question sounds simple but it's sharp: what actually proves that a program came from the supported package system, rather than just happening to be runnable? Predict: if I type a command and it works, does that prove it's installed from Ubuntu's repositories? Hold your answer. Scope: Ubuntu 24.04 with APT and dpkg.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 36 — Package tools expose different states

⏱ 2 MIN  ·  MODULE 4 · MODEL
★ Three stores: the repository (network), the local index (apt update refreshes only this), the installed database (dpkg).
? ASK: immediately after 'apt update' — has anything been installed?
──────────────────────────────────────────────
Three separate stores of state, frequently conflated. A repository, on the network, publishes packages and signed metadata. Your local index is a cached copy of that catalogue — 'apt update' refreshes the index and installs nothing. And the installed database, maintained by dpkg, records what is actually on this machine and which files belong to which package. APT works at the top of this stack, resolving and fetching; dpkg records the ground truth below. Question: immediately after 'apt update', has anything new been installed?
──────────────────────────────────────────────
→ NEXT: build-up: the independent layers

## Slide 37 — Software state has several independent layers

⏱ 2 MIN  ·  MODULE 4 · BUILD THE MODEL
★ Four independent layers. A binary dropped in /usr/local/bin runs fine and is invisible to dpkg — 'works' ≠ 'supported install'.
──────────────────────────────────────────────
Software state has independent layers, and conflating them leads to incorrect conclusions. Repository metadata says what's available. The package database says what's registered as installed. The shell decides which executable path it would actually run, via PATH. And the executable's behavior is a final, separate observation. A binary you dropped in /usr/local/bin runs fine and is invisible to dpkg. So 'it works' and 'it's a supported install' are genuinely different facts.
──────────────────────────────────────────────
→ NEXT: the provenance chain, then the worked example

## Slide 38 — Provenance is a chain of five claims

⏱ 2 MIN  ·  MODULE 4 · MODEL
★ Candidate → registered → on PATH → owned → behaves. Each claim has its own command; running the tool proves only the fifth.
? ASK: which of the five does 'the command runs' prove?
──────────────────────────────────────────────
The worked example verifies one tool through five independent claims, so name them first. One: a candidate version exists in a configured repository. Two: the package is registered as installed. Three: an executable with that name is discoverable on PATH. Four: that specific file is owned by that package. Five: the program behaves correctly. Each claim has its own command, and none follows from the others — in particular, a working command establishes only the fifth. Question: which of the five does 'the command runs' actually prove?
──────────────────────────────────────────────
→ NEXT: the worked example on 'tree'

## Slide 39 — Verify software through independent views

⏱ 3 MIN  ·  MODULE 4 · WORKED EXAMPLE
★ Five commands, five distinct questions about one tool. Only the last one is 'does it behave'.
──────────────────────────────────────────────
Independent views of one tool, 'tree'. 'apt-cache policy tree' shows the candidate, what's available. Install it. 'dpkg-query -W' with a status format shows it's registered as installed, a different claim. 'command -v tree' asks the shell where it would run tree from, that's discovery, not ownership. Then 'dpkg-query -S' on that path asks which package owns the file. Only after all that do we run tree to confirm behavior. Five commands, five distinct questions, that's the whole point.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 40 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 4 · GUIDED COMMANDS
★ Division of labour: apt talks to the repository world, dpkg-query to the installed-state world.
──────────────────────────────────────────────
Reference. 'apt-cache policy NAME': inspect candidate versions. 'apt update': refresh metadata only. 'apt install NAME': resolve and install. 'dpkg-query -W': is it registered installed? 'dpkg-query -S PATH': which package owns this file? Note the division of labour: apt for the repository world, dpkg-query for the installed-state world.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 41 — Demo: proving where jq comes from

⏱ 4 MIN  ·  MODULE 4 · LIVE DEMO
★ Five commands ↔ five claims, mapped by the room before each run. 'It printed output' never substitutes for the first four.
? ASK: which claim does each command close?
──────────────────────────────────────────────
One tool, five claims, five commands — and the room maps each command to its claim before I run it. apt-cache policy shows a candidate and its repository. After installing, dpkg-query -W shows registration — a different fact from 'it runs'. command -v shows what the shell would execute; dpkg-query -S on that exact path shows ownership. Only then does jq process a piece of JSON, closing the behaviour claim. The discipline to name: at no point did 'it printed output' substitute for any of the first four claims.
──────────────────────────────────────────────
→ NEXT: Lab 4

## Slide 42 — Packages and software provenance

⏱ 20 MIN  ·  HANDS-ON · LAB 4
★ 20 min: install tree, produce evidence for all five claims — candidate, state, path, ownership, behavior.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty minutes. Mission: install 'tree' from the configured Ubuntu repositories and produce evidence for all five, candidate, installed state, path, ownership, and behavior. Readiness: can you distinguish repository, index, installed state, and files; can you say why update and install are separate steps; and can you verify provenance and behavior independently? Stuck? Identity, host, directory, command, unchanged output. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 43 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 4 · DEBRIEF
★ Package state is a chain of claims, not a single command result.
? ASK: which independent view did you trust most — ownership via dpkg-query -S?
──────────────────────────────────────────────
No re-running. Someone state why 'the command works' was not enough this module. Right, package state is a chain of claims, and a runnable binary can satisfy none of them. Which independent view did you trust most, ownership via dpkg-query -S? Next: now that we can trust where files came from, who is even allowed to change them? Identity and permissions.
──────────────────────────────────────────────
→ NEXT: Module 5: who may change those files

## Slide 44 — Users, groups, permissions, and shared directories

⏱ 1 MIN  ·  MODULE 5
★ Same file, one identity granted, another denied — the task is establishing why.
? ASK: file is 640 root:webteam, alice is in webteam — can she read it?
──────────────────────────────────────────────
Module five. Permissions — an area where systematic reasoning matters most. The question: why does one identity get access while another is denied, for the very same file? Predict: if a file is mode 640 and owned by root:webteam, and Alice is in webteam, can she read it? Consider it carefully. Scope: traditional Linux discretionary access control, with Ubuntu's sudo.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 45 — Access checks begin with process identity

⏱ 2 MIN  ·  MODULE 5 · MODEL
★ Identity is numeric and captured at login; exactly one class applies — owner, else group, else other — never combined.
? ASK: 640 root:webteam, alice in webteam — can she read it?
──────────────────────────────────────────────
Access control starts with who is asking. A process carries an effective user and a set of group credentials, captured when the session started — which is why a group change requires a new login. The kernel compares numeric identities, not usernames. Then the selection rule that surprises people: for traditional mode bits the kernel applies exactly one class. If you are the owner, the owner bits decide; otherwise, if a group matches, the group bits decide; otherwise the other bits. The classes are never combined. Question: a file is mode 640, owner root, group webteam, and alice is a member of webteam — can she read it?
──────────────────────────────────────────────
→ NEXT: three picture slides: ls -l, users & groups, special bits

## Slide 46 — Reading an ls -l line — the permission bits

⏱ 3 MIN  ·  MODULE 5 · READING ls -l
★ Type char + three triads (owner/group/others), each r-w-x. Octal: add 4/2/1 per slot → 644. Drill the second example: rwxr-x--- = 750.
──────────────────────────────────────────────
Before you can fix permissions you have to read them. The first character is the type — a dash for a file, d for a directory, l for a symlink. Then nine characters in three groups of three: owner, group, others, and within each group it's read, write, execute in that order. So -rw-r--r-- means owner alice can read and write, group devs can read, and everyone else can read — nobody can execute. To get the octal, add the bits in each slot: r is 4, w is 2, x is 1, and a missing letter is 0. So rw- is 6 and r-- is 4, which gives 644. Practise on the second example — rwxr-x--- is 750. Once these three digits are automatic, chmod stops being guesswork.
──────────────────────────────────────────────
→ NEXT: the rest of the line

## Slide 47 — Reading an ls -l line — the whole line

⏱ 2 MIN  ·  MODULE 5 · READING ls -l
★ Read the line as a sentence: file, owned by alice, group devs. Owner + group are the two identities every access check uses.
──────────────────────────────────────────────
The permission block is only the front of the line — here's the rest, field by field. After the ten permission characters comes the link count, then the owner, then the group, then the size in bytes, then the last-modified time, and finally the name. Two of these are the identities every access check uses: the owner and the group. So read a listing as a sentence — this is a file, owned by alice, group devs, that alice can write and everyone can read. When a teammate can't touch a file, this one line usually tells you why before you run anything else.
──────────────────────────────────────────────
→ NEXT: how identities are made

## Slide 48 — Create users and groups

⏱ 3 MIN  ·  MODULE 5 · USERS & GROUPS
★ groupadd → useradd -m -G → usermod -aG (forget -a and you replace their groups) → id to verify. Groups are captured at login — re-login to pick up changes.
──────────────────────────────────────────────
Permissions are checked against identities, so you need to know how identities are made. Groups first: groupadd developers makes an empty group. Then useradd with -m creates the user alice and her home directory, and -G puts her in developers at creation. To add someone who already exists, usermod -aG — and the -a is the one people forget; without it you replace all of that user's extra groups instead of appending, which quietly locks them out of everything else. Finally, id alice checks your work: it prints her uid, her primary group, and every supplementary group the kernel will actually use. Remember from the model — a login shell captures these groups when the session starts, so after changing someone's groups they must log out and back in.
──────────────────────────────────────────────
→ NEXT: the three special bits

## Slide 49 — setuid, setgid, and the sticky bit

⏱ 3 MIN  ·  MODULE 5 · SPECIAL BITS
★ setuid 4000 = run as file's owner (passwd). setgid 2000 = dir's group inherited (team folders). sticky 1000 = only owner deletes (/tmp). Lowercase s/t = x set; uppercase = not.
──────────────────────────────────────────────
Beyond read, write and execute there are three special bits, and they show up right in the ls -l string. setuid, octal 4000, puts an s where the owner's execute would be: the program runs as the file's owner, not as you. The classic case is /usr/bin/passwd — owned by root with setuid, which is how an ordinary user can update the root-owned password file. setgid, octal 2000, is the s in the group slot; on a directory it's the one from our lab — new files inherit the directory's group, ideal for a shared team folder. Sticky, octal 1000, is the t in the others slot: in a world-writable directory like /tmp, only the owner of a file may delete it, so people can't remove each other's work. One subtlety worth naming: a lowercase s or t means execute is set too; an uppercase S or T means the special bit is set but execute is not, usually a mistake.
──────────────────────────────────────────────
→ NEXT: directory permissions, then the diagnosis order

## Slide 50 — Directory permissions govern path operations

⏱ 2 MIN  ·  MODULE 5 · MODEL
★ Directory bits: r lists, w adds/removes names, x traverses; reaching a file needs x on every parent. setgid inherits the group; sticky guards deletion.
? ASK: your own file, mode 400, yet read fails — likely cause?
──────────────────────────────────────────────
Directories interpret the same three bits differently, and this is where most real diagnoses end up. On a directory, read lists the names, write creates or removes names — including deleting files — and execute permits traversal. Reaching any file therefore requires x on every directory along its path. Two special bits from the earlier slide now become operational: setgid on a shared directory makes new files inherit the group, and the sticky bit prevents users deleting each other's files. Question: a file is mode 400 and you own it, yet reading fails — what is the likely cause?
──────────────────────────────────────────────
→ NEXT: the diagnosis order

## Slide 51 — Permission diagnosis follows a fixed decision order

⏱ 2 MIN  ·  MODULE 5 · BUILD THE MODEL
★ Fixed order: id → namei -l every parent → pick the ONE class → test the exact operation. chmod comes last, after you know which check failed.
──────────────────────────────────────────────
Permission diagnosis follows a fixed order, and jumping to chmod is the classic mistake. Step one: identify the process user and its supplementary groups. Step two: check search, the x bit, on every parent directory. Step three: figure out which single class applies, owner, matching group, or other. Step four: test the exact operation you need, read, write, create, or remove. Only then do you know which check failed, and therefore what the minimal fix is. chmod-ing blindly often opens more than you meant and still doesn't fix the real problem.
──────────────────────────────────────────────
→ NEXT: worked repair

## Slide 52 — Repair from identity outward

⏱ 3 MIN  ·  MODULE 5 · WORKED EXAMPLE
★ Repair from identity outward — and test as Alice with sudo -u, because testing as yourself proves nothing. 2770 = setgid + rwx/rwx/---.
──────────────────────────────────────────────
Repair from identity outward. 'id alice' shows the credentials the kernel will actually use, not who you think she is. 'namei -l' on the file walks every path component and shows its permissions, exposing a missing x on a parent. Then we set group ownership and mode 2770 on the shared directory, and that leading 2 is setgid, so new files inherit the group. The crucial last line: 'sudo -u alice test -w' tests the policy AS Alice. Testing as yourself proves nothing about her.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 53 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 5 · GUIDED COMMANDS
★ The essential commands are id and namei -l (identity and path — the two things permission depends on). chmod 2770 / chown u:g close the loop.
──────────────────────────────────────────────
Reference. 'id USER': the UID, primary group, supplementary groups. 'namei -l PATH': every component along the path with its permissions. 'stat -c': owner, group, numeric mode. 'sudo -u' runs a check as another identity — the only honest test. And the fix commands now share the slide: 'chmod 2770' sets setgid plus rwx for owner and group and nothing for others, and 'chown u:g' sets ownership. Decode any mode in your head — 2770 is setgid, then rwx, rwx, ---. The essential commands are 'sudo -u' and 'namei -l': identity and path, the two things permission actually depends on.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 54 — Demo: diagnose before chmod

⏱ 4 MIN  ·  MODULE 5 · LIVE DEMO
★ id both identities → namei -l to the failing component → ONE change (chown + 2770) → verify BOTH verdicts with sudo -u.
? ASK: which check fails first — class selection or a parent's x?
──────────────────────────────────────────────
The discipline on display: no chmod until the failing check is named. id on both identities shows what the kernel actually compares. namei -l walks the path and exposes the component where access dies. Then exactly one change — group ownership plus mode 2770 — chosen to satisfy the named failure, not sprayed. Verification is two-sided: demoops must succeed AND outsider must still be denied, each tested with sudo -u, because testing as myself proves nothing about either.
──────────────────────────────────────────────
→ NEXT: Lab 5

## Slide 55 — Users, groups, permissions, and shared directories

⏱ 30 MIN  ·  HANDS-ON · LAB 5
★ 30 min: webteam creates and updates, outsider stays denied — prove both halves. A fix proving only the insider is half a fix.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Thirty minutes, the longest lab, because this is subtle. Mission: repair /srv/team-share so webteam members can create and update files while an outsider stays denied, and prove both halves. Readiness: can you select owner, group, or other without combining them; can you explain directory r, w, x; and will you test both the allowed and the denied identity? A fix that only proves the insider works is half a fix. Stuck? Identity, host, directory, command, unchanged output. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 56 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 5 · DEBRIEF
★ Least privilege = matching identity + path traversal + the exact operation.
? ASK: did you test as the denied identity?
──────────────────────────────────────────────
No re-running. Tell me the causal chain for one denial you hit, was it the class rule, or a missing x on a parent? And how did you prove the outsider is still denied, did you actually test as them? Least privilege comes from matching identity, path traversal, and the exact operation. Next: we leave one machine and connect two, SSH, and how each end proves who it is.
──────────────────────────────────────────────
→ NEXT: Module 6: SSH, two machines

## Slide 57 — SSH transport, host trust, and user authentication

⏱ 1 MIN  ·  MODULE 6
★ Two halves: how your client knows the server, and how the server knows you.
? ASK: you typed 'yes' at the fingerprint prompt — what exactly did you vouch for?
──────────────────────────────────────────────
Module six. We go remote. The question has two halves: how does your SSH client know the server is really the server, and how does the server know you're really you? Predict: when SSH shows that 'authenticity of host can't be established, fingerprint is...' prompt and you type yes, what exactly did you just vouch for? Scope: OpenSSH against an Ubuntu lab endpoint.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 58 — SSH authenticates both ends

⏱ 2 MIN  ·  MODULE 6 · MODEL
★ Encryption is not identity. The server proves itself by host key against known_hosts; a first contact must be verified out-of-band.
? ASK: what exactly does typing 'yes' at the prompt assert?
──────────────────────────────────────────────
Begin with what the encrypted channel does not provide: identity. Encryption protects the conversation, but with an unverified peer it is a private conversation with an unknown party. SSH therefore authenticates the server: it presents its host key, and your client compares that key's fingerprint with the record in known_hosts. The critical moment is the first connection, when no record exists — the fingerprint must be compared through an independent, trusted channel before you accept it. Question: what exactly does typing 'yes' at that prompt assert?
──────────────────────────────────────────────
→ NEXT: the trust picture

## Slide 59 — SSH proves two identities

⏱ 3 MIN  ·  MODULE 6 · PICTURE THE TRUST
★ Two arrows, two keys: ① host key checked against known_hosts (first time: out-of-band). ② your private key signs; server checks authorized_keys. Failures are specific to an arrow.
──────────────────────────────────────────────
Here's the whole module in one picture. On the left, your laptop; on the right, the server. The encrypted tunnel in the middle is the easy part and, on its own, proves nothing about who you're talking to. The real work is two separate decisions with two different keys. Decision one, in coral: is the server really the server? The server presents its host key and your client compares that key's fingerprint against ~/.ssh/known_hosts — and the first time, against a value you trust from an independent channel. Decision two, in purple: are you really you? Your client signs a challenge with your private key, which never leaves the laptop, and the server checks the matching public key in ~/.ssh/authorized_keys. Keep them separate, because failures are specific: a host-key mismatch is decision one shouting at you — never silence it by deleting known_hosts — while 'permission denied (publickey)' is decision two.
──────────────────────────────────────────────
→ NEXT: the four stages

## Slide 60 — An SSH connection establishes trust in stages

⏱ 2 MIN  ·  MODULE 6 · BUILD THE MODEL
★ Four stages: reach → verify host → offer key → server matches policy. Never fix one stage by weakening another — deleting known_hosts on a mismatch is the classic error.
──────────────────────────────────────────────
An SSH connection builds trust in stages, and the danger is fixing one stage by weakening another. Stage one: reach the correct host and TCP port. Stage two: verify the server's host-key fingerprint independently. Stage three: offer proof from your client's private key. Stage four: the server matches your authorized public key and its account policy. When something fails, name the stage. The classic error is a host-key mismatch, a stage-two alarm, being silenced by deleting known_hosts, which is precisely when it must not be.
──────────────────────────────────────────────
→ NEXT: user authentication model, then the worked example

## Slide 61 — User authentication is a separate key pair

⏱ 2 MIN  ·  MODULE 6 · MODEL
★ The private key stays on the client and proves possession; authorized_keys is the server's authorisation; over-permissive key files are refused silently.
? ASK: key login silently falls back to a password — likely cause?
──────────────────────────────────────────────
The second trust decision uses a different key pair entirely. You generate a key pair; the private half remains on the client and is never transmitted — authentication works by proving possession through a signature. The public half is placed in the server account's authorized_keys, which is the server's authorisation decision. OpenSSH additionally checks ownership and permissions along this path, and refuses a private key that is readable by others — silently, from the user's point of view. Question: key-based login quietly falls back to a password prompt — what is the likely cause?
──────────────────────────────────────────────
→ NEXT: the worked example: verify host, then user

## Slide 62 — Verify host trust before user trust

⏱ 3 MIN  ·  MODULE 6 · WORKED EXAMPLE
★ ssh-keyscan collects; it does not authenticate — compare the fingerprint out-of-band first. BatchMode=yes fails loudly instead of hiding key failure behind a password prompt.
──────────────────────────────────────────────
Verify host trust before user trust. 'ssh-keyscan' on port 2222 collects the server's key into a file, but collecting is not authenticating. 'ssh-keygen -lf' prints its fingerprint, which you compare against the value the instructor gives you out-of-band. Only once that matches do we connect, with 'BatchMode=yes', which is a deliberate choice: it makes SSH fail loudly instead of falling back to a password prompt that would hide a key failure. Order is the lesson: trust the host, then prove the user.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 63 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 6 · GUIDED COMMANDS
★ ssh -G answers 'why did it use that key?'. BatchMode is a diagnostic tool, not just a setting.
──────────────────────────────────────────────
Reference. 'ssh-keygen -t ed25519': make a dedicated key pair. 'ssh-keyscan': collect a server's host key. 'ssh-keygen -lf': show a fingerprint. 'ssh -G HOST': print the effective client config for that host, great for 'why did it use that key?'. 'BatchMode=yes': fail instead of prompting for a password. That last one is a diagnostic tool, not just a setting.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 64 — Demo: trusting a host, then proving a user

⏱ 4 MIN  ·  MODULE 6 · LIVE DEMO
★ keyscan collects → fingerprint compared against the posted value → BatchMode key login. Mismatch = stop; known_hosts is never deleted.
? ASK: does a matching fingerprint prove identity, or only consistency?
──────────────────────────────────────────────
Order is the lesson: host trust before user trust. ssh-keyscan collects the server's key — collecting is not trusting. ssh-keygen -lf turns it into a fingerprint, and I compare it against the value posted through an independent channel, in front of the room. Only after recording it do we authenticate the user, with BatchMode=yes so a key failure fails loudly instead of hiding behind a password prompt. And the counterfactual, stated: had the fingerprint mismatched, the demo would stop there — that alarm is never silenced by deleting known_hosts.
──────────────────────────────────────────────
→ NEXT: Lab 6

## Slide 65 — SSH transport, host trust, and user authentication

⏱ 25 MIN  ·  HANDS-ON · LAB 6
★ 25 min: strict profile on port 2222, verified host key, dedicated key authorized, BatchMode login proven.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty-five minutes. Mission: create a strict client profile for training-server on port 2222, verify its host key, authorize a dedicated user key, and prove a BatchMode login. Readiness: can you separate transport, server identity, and user identity; can you protect the private key and its authorization path; and can you diagnose network, host-key, and user-key failures as three different problems? Stuck? Identity, host, directory, command, unchanged output. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 66 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 6 · DEBRIEF
★ A successful session rests on two explicit yeses — host and user.
? ASK: when it failed: which stage was it, and did you fix THAT one?
──────────────────────────────────────────────
No re-running. Tell me the two trust decisions a successful login actually rests on. And when your first attempt failed, which stage was it, and did you fix the right one, or weaken a different one? A good SSH setup is two explicit yeses, host and user. Next: when a service or login fails, the logs let us reconstruct what happened.
──────────────────────────────────────────────
→ NEXT: Module 7: logs reconstruct failures

## Slide 67 — Logs, journal scope, and causal events

⏱ 1 MIN  ·  MODULE 7
★ Which event explains the failure, rather than reporting its consequence?
? ASK: the line that says 'failed' — cause, or aftermath?
──────────────────────────────────────────────
Module seven. Things fail; now we investigate. The question: which log event actually explains a failure, rather than just reporting its consequence? Predict: when a service dies, is the line that says 'failed' usually the cause, or the aftermath? Hold that. Scope: the systemd journal on Ubuntu 24.04.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 68 — Logs are bounded event evidence

⏱ 2 MIN  ·  MODULE 7 · MODEL
★ The journal holds structured records. Scope by unit, boot, and time; read the chronology before any keyword filter.
? ASK: why read before searching?
──────────────────────────────────────────────
Logs are evidence, and evidence needs a defined scope. The systemd journal stores structured records — timestamp, unit, priority, message — which means you can bound your view precisely: one unit, one boot, one time window around the symptom. Establish that window first, and read the sequence in order before filtering for any keyword. A grep executed too early returns the lines that contain your word and removes the chronology around them — and the chronology is usually where the explanation lives. Question: why read before searching?
──────────────────────────────────────────────
→ NEXT: build-up: the incident window

## Slide 69 — A useful incident window preserves causality

⏱ 2 MIN  ·  MODULE 7 · BUILD THE MODEL
★ Narrow the noise without destroying the story. Over-filtering deletes evidence; a premature grep hides the cause.
──────────────────────────────────────────────
A good incident window preserves causality, narrow it without destroying the story. Step one: select the affected unit and the boot. Step two: bound the time around the reported symptom. Step three: read the sequence before filtering for keywords, because a premature grep hides the cause. Step four: separate the first cause from the later failure summaries. Narrow scope reduces noise; over-filtering deletes evidence. The difference matters.
──────────────────────────────────────────────
→ NEXT: state vs events, then the worked example

## Slide 70 — State summaries and causal events differ

⏱ 2 MIN  ·  MODULE 7 · MODEL
★ show -p summarises the outcome; journalctl holds the events. 'failed' is a consequence; the cause is the earliest relevant record.
? ASK: inside the window — cause near the top or the bottom?
──────────────────────────────────────────────
Two different questions, two different tools. 'systemctl show' with properties such as ActiveState, Result, and ExecMainStatus reports the outcome — a summary of where the unit ended up. journalctl reports the sequence of events that led there. Keep them apart, because the record that says 'failed' is almost always a consequence, written after the interesting part. The cause is the earliest relevant record inside your bounded window. Question: within the window, do you expect the cause near the top or the bottom?
──────────────────────────────────────────────
→ NEXT: the worked example

## Slide 71 — Narrow evidence without losing chronology

⏱ 3 MIN  ·  MODULE 7 · WORKED EXAMPLE
★ show -p gives the symptom; bounded journalctl gives the sequence; time bounds make the query repeatable by someone else.
──────────────────────────────────────────────
Narrow without losing chronology. 'systemctl show' with ActiveState, Result, ExecMainStatus gives the state summary, the symptom. Then 'journalctl -u noisy.service -b --since "-10 min"' with iso timestamps gives the event sequence within a bounded window. Properties tell you what state it's in; the journal tells you how it got there. And the time bound makes the query repeatable, someone else can run the exact same thing and see the exact same evidence.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 72 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 7 · GUIDED COMMANDS
★ The flag order encodes the method: -u, -b, --since/--until — and only then -p severity.
──────────────────────────────────────────────
Reference. 'journalctl -u UNIT': one unit. '-b': the current boot. '--since / --until': bound the time. '-p PRIORITY': filter by severity, but after scoping, not instead of it. '--no-pager': stable, scriptable output. The order encodes the method: unit, boot, time, then maybe priority.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 73 — Demo: the line that says 'failed' is not the cause

⏱ 4 MIN  ·  MODULE 7 · LIVE DEMO
★ status → show -p (exit 17) → bounded journal read top-to-bottom. STALE_CACHE sits above the 'failed' consequences.
? ASK: cause near the top of the window, or the bottom?
──────────────────────────────────────────────
Start the service, let it fail, and resist the urge to grep. status gives the symptom; show -p gives the recorded outcome, exit code 17. Then the disciplined part: a journal window bounded by unit, boot, and time, read top to bottom. The room has predicted where the cause sits; the STALE_CACHE record appears well above the final 'failed' lines, which are consequences written by the manager afterwards. Close by re-stating the rule: the last line is almost never the explanation.
──────────────────────────────────────────────
→ NEXT: Lab 7

## Slide 74 — Logs, journal scope, and causal events

⏱ 20 MIN  ·  HANDS-ON · LAB 7
★ 20 min: disk-threshold incident — preserve unit-scoped evidence, explain exit 42, keep the causal line.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty minutes. Mission: investigate a disk-threshold incident, preserve unit-scoped journal evidence, and explain why exit code 42 occurred. Readiness: can you distinguish state properties from event records; will you scope by unit, boot, and time before grepping; and can you preserve the causal line along with its exit evidence? Save evidence someone else could re-derive. Stuck? Identity, host, directory, command, unchanged output. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 75 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 7 · DEBRIEF
★ The journal connects a state to the sequence that produced it.
? ASK: how did you KNOW your line was cause, not symptom?
──────────────────────────────────────────────
No re-running. Tell me the earliest causal line you found and how you knew it was the cause and not a symptom. Did scoping before grepping change what you saw? The journal connects a state to the sequence that produced it. Next: we go up a level to systemd itself, what the manager was declared to do, and why it did or didn't.
──────────────────────────────────────────────
→ NEXT: Module 8: the manager itself

## Slide 76 — systemd declarations, dependencies, ordering, and diagnosis

⏱ 1 MIN  ·  MODULE 8
★ How does a text file (the unit) become runtime behavior?
? ASK: After=network.target — is the network ready for the application?
──────────────────────────────────────────────
Module eight. We meet the manager. The question: how does systemd turn a unit declaration, a text file, into actual runtime behavior? Predict: if a unit says 'After=network.target', does that guarantee the network is ready for the app when it starts? Consider it carefully. Scope: systemd on Ubuntu 24.04.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 77 — A unit declaration is not runtime state

⏱ 2 MIN  ·  MODULE 8 · MODEL
★ A unit file is a declaration; the manager records transitions. Loaded, enabled, active, successful are independent; status is a symptom summary.
? ASK: enabled but not active — is that a fault?
──────────────────────────────────────────────
Separate what is written from what is happening. A unit file is a declaration: the command, the identity to run as, the working directory, dependencies, environment, restart policy. The manager reads it, attempts to reach the declared state, and records each transition. Runtime reality is then described by four independent facts: loaded — was the file read; enabled — will it start at boot; active — is it running now; successful — did it exit cleanly. None implies another, and 'systemctl status' is a symptom summary, not a diagnosis. Question: a unit is enabled but not active — is that a fault?
──────────────────────────────────────────────
→ NEXT: picture: states + needs vs order

## Slide 78 — Four states, and needs vs order

⏱ 3 MIN  ·  MODULE 8 · PICTURE THE STATES
★ Four cards, four commands — check each fact on its own. Bottom: activation (pulls in) vs ordering (sequences only, never pulls in).
──────────────────────────────────────────────
This is the mental model for the whole systemd block. On top, four facts people collapse into one word, 'running,' but they're independent — check each on its own. Loaded: has systemd read and parsed the unit file? Enabled: will it start at boot? Active: is it running this second? Successful: did its process exit cleanly? A unit can be enabled but not active, or active now but not successful a moment later — none implies another. The bottom half fixes the other classic confusion. Requires and Wants are about activation: if A requires B, starting A pulls B into the same job and starts it too. After and Before are only about order — they sequence units that are already going to run, but never pull anything in. That's why After=network.target just means 'start me after that point'; it doesn't add the network or promise it's ready for your app.
──────────────────────────────────────────────
→ NEXT: requirement vs ordering, then the transaction

## Slide 79 — Requirement and ordering are separate relations

⏱ 2 MIN  ·  MODULE 8 · MODEL
★ Requires/Wants select units into the transaction; After/Before only sequence them; ordering never pulls a unit in. network.target is not network-ready.
? ASK: with only After=network.target — may it start with no usable network?
──────────────────────────────────────────────
The two relationship families in unit files answer different questions, and conflating them causes real outages. Requires= and Wants= are activation relations: they decide which units are pulled into the same transaction. After= and Before= are ordering relations: they decide sequence among units that are already going to run — ordering never pulls a missing unit in. The canonical example: After=network.target sequences your service after that point in boot; it neither starts the network nor guarantees it is usable by applications. Question: with only After=network.target declared, may the service start with no usable network?
──────────────────────────────────────────────
→ NEXT: build-up: the transaction

## Slide 80 — systemd builds a transaction before starting processes

⏱ 2 MIN  ·  MODULE 8 · BUILD THE MODEL
★ systemd builds the transaction first: activation picks members, ordering sequences them, conditions can stop before ExecStart. Mantra: Requires ≠ 'run first'; After ≠ 'start it'.
──────────────────────────────────────────────
systemd builds a transaction before it starts any process, think it through in that order. Activation relationships, Requires and Wants, decide which units join the job. Ordering relationships, After and Before, decide which one runs first. Conditions and prerequisites can stop execution before ExecStart even runs, so a service can 'do nothing' and still not be a bug. And every transition leaves both manager evidence and application evidence. The mantra: Requires does not mean 'run first'; After does not mean 'start it'.
──────────────────────────────────────────────
→ NEXT: worked diagnosis

## Slide 81 — Read diagnosis from declaration to behavior

⏱ 3 MIN  ·  MODULE 8 · WORKED EXAMPLE
★ Move deliberately: status (symptom) → journal (events) → cat (declaration) → show (relationships). Each answers a different question.
──────────────────────────────────────────────
Read diagnosis from declaration to behavior. 'systemctl status' names the symptom and recent context. 'journalctl -u' shows the transition and failure events. 'systemctl cat' shows the effective unit, the actual declaration, including drop-ins. 'systemctl show' with Wants, Requires, After exposes the real relationships, normalized. So you move deliberately: state, then events, then declaration, then relationships, each answering a different question about why the manager did what it did.
──────────────────────────────────────────────
→ NEXT: create your OWN service

## Slide 82 — Create a minimal service of your own

⏱ 4 MIN  ·  MODULE 8 · CREATE A SERVICE
★ Three sections: [Unit] name+order, [Service] ExecStart/WorkingDirectory/Restart, [Install] WantedBy for enable. Ritual: daemon-reload → enable --now → status + curl. Never edit /lib units.
──────────────────────────────────────────────
This is the part the course never showed until now: writing your own unit. Three sections. [Unit] names it and orders it after the network is up. [Service] is the heart — ExecStart is the command to run, WorkingDirectory is where, and Restart=on-failure brings it back if it crashes. [Install] with WantedBy is what 'enable' hooks into so it also starts at boot. Then the ritual you already know from diagnosis: daemon-reload so systemd reads the file, enable --now to start it now and at boot, and status plus a curl to prove it actually serves on 8080. Changing it later? Edit, daemon-reload, restart — and never hand-edit the vendor files under /lib/systemd; put your change in /etc or a drop-in.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 83 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 8 · GUIDED COMMANDS
★ cat/show = the effective declaration. daemon-reload after any edit. Keep enabled and active separate in your head.
──────────────────────────────────────────────
Reference. 'status / is-active': current runtime state. 'is-enabled': boot policy. 'cat / show': the effective declaration and its normalized properties. 'daemon-reload': make the manager reread changed unit files. 'restart': create a fresh execution from the effective definition. Keep 'enabled' and 'active' separate in your head, they answer different questions.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 84 — Demo: the unit is fine; its world is not

⏱ 4 MIN  ·  MODULE 8 · LIVE DEMO
★ status → journal names the missing EnvironmentFile → cat confirms the declaration → create the file, restart, curl. Unit never edited.
? ASK: edit the unit, or satisfy its declaration — which is safer?
──────────────────────────────────────────────
A failing service whose unit file is entirely correct. status points at trouble; the journal names it — a required EnvironmentFile does not exist; systemctl cat confirms the declaration expects it. The room votes on the fix before I act: edit the unit, or create what it declares? We create the file, restart, and verify with curl. The principle, stated plainly: the safest repair satisfies the declaration rather than rewriting it — the unit remains exactly as shipped.
──────────────────────────────────────────────
→ NEXT: Lab 8

## Slide 85 — systemd declarations, dependencies, ordering, and diagnosis

⏱ 25 MIN  ·  HANDS-ON · LAB 8
★ 25 min: fix course-web's CHDIR failure WITHOUT editing the supplied unit — the constraint is the lesson.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Twenty-five minutes. Mission: repair course-web.service from its CHDIR failure, without editing the supplied unit, then prove state, enablement, socket, and HTTP behavior. Readiness: can you separate activation requirements from ordering; can you distinguish enabled, active, loaded, and successful; and can you move from state to events to declaration to behavior? The 'don't edit the unit' constraint is the whole lesson, fix the environment, not the file. Stuck? The usual five. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 86 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 8 · DEBRIEF
★ The safest repair satisfies the declaration's missing prerequisite; it doesn't fork the file.
? ASK: what was actually broken — the unit, or its world?
──────────────────────────────────────────────
No re-running. Tell me: what was actually broken, the unit, or its world? And why is satisfying the missing prerequisite safer than editing the vendor unit? A declaration is intent; runtime state is reality; they can disagree. Next: we drop below the manager to the process and socket it actually produced.
──────────────────────────────────────────────
→ NEXT: Module 9: the running thing

## Slide 87 — Processes, sockets, and client-visible behavior

⏱ 1 MIN  ·  MODULE 9
★ Where do unit, process, socket, and behavior connect — and where can they disagree?
? ASK: active service + listening port — does a user get a correct response?
──────────────────────────────────────────────
Module nine. Below the manager: the actual running thing. The question: how do unit state, process state, socket state, and client-visible behavior connect, and where can they disagree? Predict: a service is active and a port is listening. Does that prove a user gets a correct response? Scope: general Linux processes, iproute2, and systemd.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 88 — A process is a running program with context

⏱ 2 MIN  ·  MODULE 9 · MODEL
★ Executable = template; process = live instantiation with PID, parent, identity, memory, descriptors. MainPID names the supervised one; PIDs are transient.
? ASK: after a restart, does the PID survive?
──────────────────────────────────────────────
Distinguish the program from the process. The executable on disk is a template; the process is that template running, with context of its own: a process ID, a parent, an effective identity, memory, and open file descriptors. PIDs are transient — restart the service and the number changes — so treat them as observations, not identifiers to memorise. For managed services, systemd's MainPID property names the one process it supervises; ps shows that process's context, and /proc/PID offers the kernel's view. Question: after a service restart, does its PID survive?
──────────────────────────────────────────────
→ NEXT: annotated htop

## Slide 89 — What htop shows you about a process

⏱ 3 MIN  ·  MODULE 9 · PICTURE A PROCESS
★ htop live: meters = kernel arbitration; PID is temporary; USER is what the kernel checks; R/S state; PID 1 = systemd, ancestor of every service. F9 signals — but we stop via systemd.
──────────────────────────────────────────────
Let's make 'a process' concrete with htop — you can run it yourself with just 'htop'. Along the top: per-core CPU meters and a memory bar, the kernel's arbitration you can watch live. Below, one row per process; follow the highlighted row, our little web service. PID 1234 is its identity — one number, and temporary; restart it and the number changes. USER alice is the effective identity the kernel checks for every permission. S is state: R is running right now, S is sleeping. CPU% and MEM% are the exact resources the kernel is handing it. COMMAND is the program plus its arguments — the recipe. And notice PID 1 at the bottom is systemd, the ancestor of every service. F9 sends a signal here, but managed services we stop through systemd, not with a kill.
──────────────────────────────────────────────
→ NEXT: listener vs behaviour, then the four layers

## Slide 90 — A listener is not correct behaviour

⏱ 2 MIN  ·  MODULE 9 · MODEL
★ ss proves acceptance at a port and nothing more; only a real client verifies answers; stop managed processes through systemd.
? ASK: describe one way a port is open while the application is broken
──────────────────────────────────────────────
Before tracing the four layers, fix the distinction the whole trace rests on. A listening socket, shown by ss, proves that some process accepts connections at a port — nothing more. An application can accept connections and still return errors, wrong data, or nothing. Behaviour is verified only by a real client, such as curl against the actual endpoint. And an operational rule: stop managed processes through systemd rather than killing the PID, so the manager's records remain accurate. Question: describe one way a port can be open while the application is broken.
──────────────────────────────────────────────
→ NEXT: build-up: four layers

## Slide 91 — A service claim crosses four observable layers

⏱ 2 MIN  ·  MODULE 9 · BUILD THE MODEL
★ Four layers — manager, process, socket, client — each can pass while the next fails. Only a real client speaks for the user.
──────────────────────────────────────────────
A service claim crosses four observable layers, and each can succeed while the next fails. Manager state connects the unit to a MainPID. Process evidence shows that PID's identity and command context. Socket evidence shows whether a transport endpoint is actually listening. And a real client proves application-visible behavior. Four layers, four checks, because 'active' at the top doesn't guarantee 'answers correctly' at the bottom.
──────────────────────────────────────────────
→ NEXT: worked trace

## Slide 92 — Trace one service through four layers

⏱ 3 MIN  ·  MODULE 9 · WORKED EXAMPLE
★ MainPID → ps → ss -ltnp → curl --fail. Each command hands evidence to the next; only curl speaks for the user.
──────────────────────────────────────────────
Trace one service through the four layers. Capture MainPID from 'systemctl show'. Feed it to 'ps' to see identity and command line. 'ss -ltnp' on the port shows the listener and, with privilege, the owning process. Then 'curl --fail' proves the application actually responds. Notice each command hands evidence to the next, and only the last one, curl, speaks for the user. Everything above it is necessary but not sufficient.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 93 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 9 · GUIDED COMMANDS
★ ss -ltnp: listening-tcp-numeric-process. curl --fail turns an HTTP error into a non-zero exit. htop is the live overview.
──────────────────────────────────────────────
Reference. 'systemctl show -p MainPID': the manager's PID for the service. 'ps -p PID': inspect that one process. '/proc/PID/cmdline': supporting argument evidence. 'ss -ltnp': numeric TCP listeners with owning process. 'curl --fail URL': behavior as a client, and --fail so an HTTP error becomes a non-zero exit, not a pretty error page you might mistake for success. And 'htop' is the live overview — CPU and memory meters, the process tree, F3 to search, F9 to signal — the picture earlier in this module.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 94 — Demo: four layers, one service

⏱ 4 MIN  ·  MODULE 9 · LIVE DEMO
★ MainPID → ps → ss :9191 → curl; then stop THROUGH systemd and re-check all four layers. Manager records stay truthful.
? ASK: after the stop, what does each layer report?
──────────────────────────────────────────────
One service traced through all four layers, each command handing evidence to the next. MainPID connects the manager's claim to a real process; ps shows that process's identity and command line; ss shows the listener on 9191 owned by that PID; curl gives the only verdict that speaks for a client. Then the finale the room has predicted: stop through systemd — not kill — and re-check every layer. Unit inactive, process gone, socket released, client refused; and the manager's records stayed truthful because the stop went through it.
──────────────────────────────────────────────
→ NEXT: Lab 9

## Slide 95 — Processes, sockets, and client-visible behavior

⏱ 15 MIN  ·  HANDS-ON · LAB 9
★ 15 min: trace course-probe end to end (unit→PID→user→cmdline→port→HTTP), stop it, prove the listener is gone.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Fifteen minutes. Mission: trace course-probe.service through unit, PID, user, command line, port 9099, and HTTP, then stop it and prove the listener is gone. Readiness: can you explain why a PID is temporary; can you separate process, listener, and application evidence; and will you stop the service through its manager and re-verify every layer? Stuck? The usual five. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 96 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 9 · DEBRIEF
★ No single interface proves the whole service — each layer only speaks for itself.
? ASK: which layer looked fine while another was broken?
──────────────────────────────────────────────
No re-running. Tell me a layer that looked fine while another was broken, active but not answering, maybe. Why does no single interface prove the whole service? Because each layer only speaks for itself; only a real client speaks for the user. Last module: making a durable configuration change without editing the file systemd shipped.
──────────────────────────────────────────────
→ NEXT: Module 10: durable changes

## Slide 97 — Unit layering, drop-ins, reloads, and durable changes

⏱ 1 MIN  ·  MODULE 10
★ Change a unit's behavior without forking the vendor file — so updates still work and undo is trivial.
? ASK: you edit the shipped unit file directly — what happens on the next package update?
──────────────────────────────────────────────
Module ten, the final module. The question: how does an administrator change a unit's behavior without forking the vendor's file, so that package updates still work and your change is easy to undo? Predict: if you edit the shipped unit file directly, what happens on the next package update? Scope: systemd unit layering on Ubuntu 24.04.
──────────────────────────────────────────────
→ NEXT: the model

## Slide 98 — Effective configuration is assembled from layers

⏱ 2 MIN  ·  MODULE 10 · MODEL
★ Effective config = vendor fragment + admin units + drop-ins, by precedence. A drop-in is a narrow, attributable override; the vendor file stays intact.
? ASK: what is the failure mode of editing the vendor file directly?
──────────────────────────────────────────────
A unit's effective configuration is not one file — it is assembled from layers: the vendor's shipped fragment, any administrator unit, and drop-in files, combined by load-path precedence. This is why the recommended change mechanism is a drop-in: it records a narrow, attributable override while the vendor file stays intact for package updates and for comparison. One technical footnote: some list-valued directives, such as ExecStart for some unit types, must be reset with an empty assignment before new entries are added. Question: what is the failure mode of editing the vendor file directly?
──────────────────────────────────────────────
→ NEXT: build-up

## Slide 99 — A drop-in changes one layer of effective configuration

⏱ 2 MIN  ·  MODULE 10 · BUILD THE MODEL
★ Plan the rollback (remove the drop-in) before applying. A change you can't cleanly undo isn't finished.
──────────────────────────────────────────────
A drop-in changes exactly one layer of the effective configuration, and the discipline is to plan the undo up front. The supplied fragment stays intact. Your administrator drop-in loads with higher precedence. 'daemon-reload' updates the manager's picture. 'restart' makes a new process, and then behavior verifies the result. And crucially: plan removal of the drop-in as your rollback path before you apply it, a change you can't cleanly undo isn't finished.
──────────────────────────────────────────────
→ NEXT: reload vs restart, then the worked example

## Slide 100 — Reloading definitions is not restarting

⏱ 2 MIN  ·  MODULE 10 · MODEL
★ daemon-reload re-reads unit files; the process keeps its old configuration until restart. Five separately verifiable states.
? ASK: after reload, before restart — which configuration is the process using?
──────────────────────────────────────────────
The distinction the worked example turns on: reloading definitions versus restarting a process. 'systemctl daemon-reload' makes the manager re-read unit files — its picture of the world updates, but the running process is untouched and continues with its old configuration. Only 'restart' creates a new execution that observes the effective settings. That gives five separately verifiable states: enabled, active, definitions reloaded, process restarted, and behaviour observed. Verify each; none substitutes for another. Question: after daemon-reload but before restart, which configuration is the process using?
──────────────────────────────────────────────
→ NEXT: the worked example

## Slide 101 — Close the loop from layer to behavior

⏱ 3 MIN  ·  MODULE 10 · WORKED EXAMPLE
★ Provenance (FragmentPath/DropInPaths) → daemon-reload → restart → the regenerated /run file is the proof, not the edit itself.
──────────────────────────────────────────────
Close the loop from layer to behavior. 'systemctl show' with FragmentPath, DropInPaths, Environment shows configuration provenance, where each setting comes from. 'daemon-reload' updates the manager's definition. 'restart' creates the new process. Then 'cat /run/course-banner.txt', the regenerated file, proves the restarted process actually observed the new value. Provenance, then reload, then restart, then behavior. The generated artifact is the proof, not the fact that you edited a file.
──────────────────────────────────────────────
→ NEXT: guided commands

## Slide 102 — These commands are tools for specific questions

⏱ 2 MIN  ·  MODULE 10 · GUIDED COMMANDS
★ systemctl edit over hand-hacking files; systemctl revert drops all overrides back to shipped.
──────────────────────────────────────────────
Reference. 'systemctl cat UNIT': the fragment and its drop-ins together. 'systemctl edit UNIT': create an administrator drop-in the safe way. 'FragmentPath / DropInPaths': inspect provenance. 'daemon-reload': reread definitions. And restart plus a behavior check: apply, then independently verify. Using 'edit' over hand-hacking files is the habit to leave with.
──────────────────────────────────────────────
→ NEXT: live demo

## Slide 103 — Demo: a drop-in, a reload, a restart

⏱ 4 MIN  ·  MODULE 10 · LIVE DEMO
★ Freeze-frame: drop-in via systemctl edit → after daemon-reload the manager knows but the process doesn't → restart closes the gap (regenerated file).
? ASK: what changes after reload but before restart?
──────────────────────────────────────────────
The freeze-frame demo. Record the current Environment value and the current output file. systemctl edit writes a drop-in — the vendor file untouched. After daemon-reload the room's prediction is tested: systemctl show already reports the new value, yet the running process still writes the old one — the manager knows, the process does not. Only the restart closes the gap, proven by the regenerated file. Five states — enabled, active, reloaded, restarted, observed — verified separately, exactly as the model claimed.
──────────────────────────────────────────────
→ NEXT: Lab 10

## Slide 104 — Unit layering, drop-ins, reloads, and durable changes

⏱ 15 MIN  ·  HANDS-ON · LAB 10
★ 15 min: COURSE_MODE=production via drop-in — and design verification and rollback before changing anything. That last part is the whole course.
? ASK: what is your first inspection step?
──────────────────────────────────────────────
Fifteen minutes, the capstone. Mission: set COURSE_MODE=production with a drop-in, reload definitions, restart the service, and prove both effective configuration and regenerated behavior. Readiness: can you explain fragment and drop-in precedence; can you distinguish reloading definitions from restarting a process; and did you design your verification and your rollback before changing anything? That last one is the whole course. Stuck? The usual five. Guide: labs/LAB_GUIDE.md.
──────────────────────────────────────────────
→ NEXT: debrief

## Slide 105 — Connect the result to the model

⏱ 1 MIN  ·  MODULE 10 · DEBRIEF
★ A durable change is complete when provenance, runtime state, and behavior agree — and rollback is understood.
? ASK: why does a drop-in beat editing the vendor file?
──────────────────────────────────────────────
No re-running. Tell me why a drop-in beats editing the vendor file, and what your rollback path was. When is a durable change actually complete? When provenance, runtime state, and behavior all agree, and you know how to undo it. That's every module in one sentence. Let's zoom out and name the pattern you've been practising all day.
──────────────────────────────────────────────
→ NEXT: synthesis

## Slide 106 — A safe operator closes every change with evidence

⏱ 4 MIN  ·  SYNTHESIS
★ The loop, one slide: locate → predict → act narrowly → observe → verify independently. Then the 60-second pair exercise — listen for the five evidence steps.
──────────────────────────────────────────────
Here's the whole course on one slide, and it's a loop you can carry to any system. Locate your context. Predict the state. Act narrowly, one bounded change. Observe the output and the events. Then verify behavior independently. Three warnings we hit over and over: a declaration is not runtime state, runtime state is not useful behavior, and one successful command is not the whole claim. Quick exercise: turn to a partner, I'll give you a fresh broken-service scenario, and in sixty seconds name the five evidence steps out loud. I'm listening for identity, host, target, prediction, bounded change, event evidence, and client behavior.
──────────────────────────────────────────────
→ NEXT: assessment

## Slide 107 — Explain the chain when you are blocked

⏱ 3 MIN  ·  ASSESSMENT
★ Grade the evidence chain and safe recovery, not command volume. Four parts: identity/host/dir, target state, repeatable command+output, change+independent check.
──────────────────────────────────────────────
Your assessment isn't 'how many commands do you know.' It's whether you can explain the chain when you're blocked, well enough that someone else could reason alongside you. Four things make a help request useful: which user, host, and directory you're on; the exact target state you inspected; the command and its unchanged output, repeatable by someone else; and what you changed plus the independent check that followed. Do this as a peer check, pair up and grade each other on the coherence of the evidence chain and a safe recovery choice, not on command volume.
──────────────────────────────────────────────
→ NEXT: delivery note

## Slide 108 — Protect the 50/50 balance when adapting delivery

⏱ 1 MIN  ·  DELIVERY
★ If the schedule shrinks: compress examples and discussion, never labs, verification, or debriefs.
──────────────────────────────────────────────
A note for anyone re-delivering this, including future me. Protect the 50/50 balance. If the room's schedule shrinks, shorten the examples and the discussion evenly, do not remove labs, verification steps, or debriefs. Never buy back lecture time by cutting learner verification, and never teach a required concept for the very first time inside the lab. The hands-on half is where the learning actually happens; guard it.
──────────────────────────────────────────────
→ NEXT: next steps

## Slide 109 — Practise the loop on a reset incident

⏱ 2 MIN  ·  NEXT STEPS
★ Transfer beats thank-you: each person picks one practice task and states when. A plan with a time beats a good intention.
──────────────────────────────────────────────
Don't close the laptop and forget this. One concrete practice: reset a single lab and solve it again without copying your earlier command sequence, and explain the evidence out loud as you go. A few targeted reps: rebuild the SSH profile from the trust model, explain 640 and 2770 without looking them up, and trace a service from its unit all the way to client behavior. Pick one now and say when you'll do it, a plan with a time beats a good intention.
──────────────────────────────────────────────
→ NEXT: sources

## Slide 110 — Primary manuals define the claims

⏱ <1 MIN  ·  SOURCES
★ Manuals are authoritative; community courses are inspiration. CLAIM_LEDGER.md maps every claim to a primary source.
──────────────────────────────────────────────
Where the claims come from, because in this course manuals are authoritative and community tutorials are just inspiration. The GNU Bash reference, Ubuntu Server docs, the systemd manuals, OpenSSH manuals, the Linux man-pages and the Filesystem Hierarchy Standard, and the Incus instance docs. The claim ledger in resources/CLAIM_LEDGER.md maps every module and lab back to one of these, so if you ever doubt something I said, you can check the primary source, not a forum post.
──────────────────────────────────────────────
→ NEXT: closing

## Slide 111 — Operate the system. Trust the evidence.

⏱ <1 MIN  ·  LINUX FOUNDATIONS
★ Resolve the promise: know the question to ask, what changed, and what would prove it. Invite final questions framed as evidence chains.
──────────────────────────────────────────────
Where we started: operate the system, trust the evidence. You do not need to remember every command, they'll change, and you can look them up. What you need is to know which question to ask, what you changed, and what would prove it. That transfers to every machine you'll ever touch. Final questions, but frame them as evidence chains, and let's close the loop.
──────────────────────────────────────────────
