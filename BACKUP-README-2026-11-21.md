# Little English Corner — Safety Backup

Created: 2026-11-21

This branch is an isolated safety snapshot created from `main`.
It is NOT the live deployment branch and must NOT be merged into `main` as part of routine backup work.

## Files preserved in this snapshot
- `index.html` — copied from `main`
- `typing.html` — copied from `main`
- `shadowing.html` — copied from `main`

## Important separate archive
The complete `sound-builder.html` file (about 1.33 MB, with embedded recordings) is preserved in the ChatGPT Library as:
- `sound-builder.html` — Library file ID: `file_0000000044848243be7c051782ac8252`

The GitHub copy of `sound-builder.html` was verified as empty at backup time, so it is intentionally NOT treated as a valid project file in this snapshot.

Other working copies of `index.html` and `typing.html` in the Library differ from `main`; this safety snapshot preserves the deployed `main` versions instead.

## Safety rules
1. Do all future work on a separate feature branch.
2. Never edit `main` directly.
3. Before changes, create a new dated backup or tag.
4. Change one feature at a time and test it.
5. Compare the feature branch with `main` before merging.
6. Never replace a working file with an empty or unverified file.
7. Keep the Library copy of the full Sound Builder until it has been independently verified in GitHub.

This is a source-code snapshot, not a tested release. Test the site after any future deployment.
