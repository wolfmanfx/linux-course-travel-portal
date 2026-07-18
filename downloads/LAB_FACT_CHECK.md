# Lab fact-check record

Verified 18 July 2026 against the Ubuntu 24.04 classroom baseline and primary
upstream documentation.

## Results by lab

1. **System Orientation — corrected checker.** `/etc/os-release`, `uname`, and
   PID 1 are the right evidence sources. The checker now compares the submitted
   kernel release and architecture with the current seat instead of accepting
   any non-empty value.
2. **Filesystem & Links — verified.** The copy, move, hard-link inode test, and
   relative symbolic-link target agree with GNU coreutils and Linux link
   semantics. The stretch rename intentionally leaves the hard link usable and
   the relative symbolic link dangling.
3. **Editor & Text Evidence — corrected checker.** `sort` must precede `uniq -c`
   because `uniq` counts adjacent runs. The checker now rejects duplicate or
   unexpected configuration lines instead of accepting one valid occurrence
   among duplicates.
4. **Package Lifecycle — corrected checker.** `apt update` refreshes indexes and
   `apt install` changes package state. The checker now requires the exact dpkg
   state `install ok installed`; a successful package-database lookup alone is
   insufficient.
5. **Permission Incident — verified and checker output corrected.** Mode 2770
   combines setgid with `rwxrwx---`; new children inherit the directory group.
   Tests run as Alice, Bob, and outsider prove both allowed and denied behavior.
   The Alice membership check now emits an explicit PASS result.
6. **SSH Trust Setup — security correction.** `ssh-keyscan` retrieves a
   presented key but does not authenticate it. The lab now collects only the
   Ed25519 key, compares its SHA-256 fingerprint with a separately supplied
   trusted value, installs it only after equality, and checks the same equality
   in the grader. User-key authorization and BatchMode login remain separate
   proofs.
7. **Journal Investigation — verified.** `systemctl show` provides stable
   machine-readable properties, while the unit- and boot-scoped journal
   preserves the causal event and systemd consequence. The lab uses only the
   current boot, so it does not assume previous-boot retention.
8. **Broken Service Capstone — verified.** `status=200/CHDIR` is consistent with
   failure to enter `WorkingDirectory`. Creating the declared directory and
   content is narrower than editing a correct unit. `daemon-reload` is not
   needed because no unit definition changes. State, enablement, socket, and
   HTTP response are checked independently.

## Validation performed

- Shell syntax checks passed for setup, checker, and Incus end-to-end scripts.
- Browser-platform static checks passed.
- All eight video scenarios passed schema and ordering validation.
- The corrected 98-slide PowerPoint passed the full canvas overflow test.
- End-to-end Incus execution requires the Linux controller host; Incus is not
  installed on the macOS authoring machine. The repository's
  `tests/incus-checkers.sh` remains the authoritative disposable-instance test.

## Primary references

- GNU Bash manual: https://www.gnu.org/software/bash/manual/bash.html
- GNU coreutils manual: https://www.gnu.org/software/coreutils/manual/coreutils.html
- Linux `path_resolution(7)`: https://man7.org/linux/man-pages/man7/path_resolution.7.html
- Ubuntu package management: https://documentation.ubuntu.com/server/how-to/software/package-management/
- Ubuntu user management: https://documentation.ubuntu.com/server/how-to/security/user-management/
- Ubuntu OpenSSH server guide: https://documentation.ubuntu.com/server/how-to/security/openssh-server/
- OpenSSH `ssh-keyscan(1)`: https://man.openbsd.org/ssh-keyscan.1
- OpenSSH `ssh_config(5)`: https://man.openbsd.org/ssh_config.5
- systemd `journalctl(1)`: https://www.freedesktop.org/software/systemd/man/latest/journalctl.html
- systemd `systemctl(1)`: https://www.freedesktop.org/software/systemd/man/latest/systemctl.html
- systemd `systemd.unit(5)`: https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html
