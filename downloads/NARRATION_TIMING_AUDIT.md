# Slide narration timing audit

Verified 19 July 2026 against `instructor/SPEAKER_SCRIPT.md` and the canonical
100-slide parser used by the narration pipeline.

## Measured source

- Slides parsed: 100.
- Spoken words after removing timing metadata, lab-facilitation metadata, and
  source-claim annotations: 9,232.
- Explicit theory and distinct-demo schedule in the notes: 180 minutes.
- Interleaved learner labs: 210 minutes.
- Full instructional route: 390 minutes before breaks.

## Expected spoken-audio length

| Speaking rate | Estimated continuous speech |
|---:|---:|
| 130 words/minute | 71.0 minutes |
| 150 words/minute | 61.5 minutes |
| 180 words/minute | 51.3 minutes |
| 200 words/minute | 46.2 minutes |

The slide audio is intentionally not padded to 180 minutes. The 180-minute
teaching schedule includes ten distinct live demonstrations, prediction
questions, terminal typing, reading command output, evidence comparison,
checkpoint discussion, and transitions. A fast speaker should use the
two-second command-output pauses and prediction prompts in the runbook; racing
through the continuous MP3 is not a valid rehearsal of the interactive route.

## Acceptance rule

Do not label the narration complete until all 100 English tracks are generated
from the final script, every track passes the Whisper ASR and protected-term
checks, the continuous MP3 duration is measured from the encoded file, and the
portal contains no audio from the earlier 98-slide deck.
