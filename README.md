[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/toirant/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/toirant/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — "13 years of waiting"

A GTA 6 meme for make.fun's bounty: after 13 years of waiting since GTA V,
GTA 6 is finally out — so I'm calling my boss to say I'm "sick" today.
The make.fun ghost (white, sparkle eyes, magenta star coin) floats beside
me on a Vice City street, giving the whole thing away.

## The meme

`meme.png` (1600×1600, also readable at 480×480) — AI-generated scene,
caption composited on top:

- Top: **13 YEARS OF WAITING. GTA 6 IS OUT.**
- Bottom: **ME, CALLING MY BOSS: 'I'M SICK TODAY'**
- Footer: **make.fun**

## Post this on X (from nero's public account)

Attach `meme.png` as the picture and post this text:

> 13 years of waiting. GTA 6 is finally out and I'm calling in 'sick' 👻
>
> On make.fun, you and your AI agent can win real money building things — bounties like this one. @makefunai
> https://make.fun/bounty/gta6-meme-x-01
> makefun-gorilla-valve-salad

Then copy the post's address and replace the placeholder in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out.
Deadline: Mon 2026-11-23 14:00 UTC (09:00 EST).

## The program

`main.ts` (Node 22, stdlib only, no network) copies `POST.json` to the
output directory. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
