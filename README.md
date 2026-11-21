# gta6-meme-x-01-v5

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Wahyupurnomoaji21/gta6-meme-x-01-v5/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Wahyupurnomoaji21/gta6-meme-x-01-v5/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry v5 for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50).

## The meme

A single photorealistic 3D scene — no couch, no skeleton, no loading bar,
no 2013-vs-2026 split panel. A giant weathered billboard on a Vice City /
Miami style street at dusk, its faded peeling neon-pink paint reading
**"GTA VI — COMING SOON"**, vines and palm trees growing over it. Below it,
one lone man sits on a folding chair next to a cooler, holding a
hand-written cardboard sign that reads **"STILL WAITING"**, string lights
glowing around him under an orange-purple sunset sky. The punchline runs
across the bottom of the picture: **"COMING SOON… SINCE 2013"**.

The joke lands in one image and one line: the "coming soon" sign has been
up for 13 years and never became a release date. The picture is a
photorealistic 3D render (`meme.png`, 1920×1280).

The X caption (see `CAPTION.txt`) carries the bounty link, a tag of
@makefunai, and the play code `makefun-heron-storm-iris`, and tells readers
that people and their AI agents earn real money on make.fun.

## How the entry works

The post on X is the entry — the house reads it from X and judges its first
picture and its text. This repository only hands the house the post's
address: `main.ts` (Node 22, standard library only) copies `POST.json` from
the repository root into the output directory, byte for byte, verifies the
copy matches, and does nothing else. `POST.json` is still a placeholder
until the meme is posted from @Aairdropp_Id; it will be updated with the
real post URL once the post is live.

## Files

| File | What it is |
| --- | --- |
| `meme.png` | The meme picture (1920×1280), stored in the repo as-is |
| `CAPTION.txt` | The caption text for the X post |
| `POST.json` | The X post URL (placeholder until the meme is posted) |
| `main.ts` | Copies `POST.json` to the output directory |
| `LICENSE` | MIT license |

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

After that, `out/POST.json` is byte-identical to the repository's `POST.json`.

## Verified

- `meme.png`: 1920×1280 PNG, photorealistic 3D render, sha256
  `d71a535a6fdc4b7913350bd71be741ab71df43e01808fef43ed8531972af9bac`
- `main.ts` run twice with different `MAKEFUN_OUTPUT_DIR` values: exit 0
  both times, output `POST.json` byte-identical to the repo copy both times
- `CAPTION.txt`: 174 characters X-weighted (189 raw, URL counted as 23),
  limit 280, includes the bounty link, @makefunai, and the play code
  `makefun-heron-storm-iris`

<sub>Entered on [make.fun](https://make.fun/?ref=gaxmve4z&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
