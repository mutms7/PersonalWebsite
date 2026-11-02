# EastEats entry evidence

Reviewed November 2, 2026. The LaTeX snippet uses the user's supplied November 2 resume attachment, including its five-argument project macro and technology emphasis. It is an insertion option, not a replacement for the full resume or public resume PDF.

## Chat coverage and decisions

Read all available pages of these project-development histories using the connected chat tools, including the original build prompt and subsequent decisions:

- **Plan East Eats architecture**, Codex `01a1711b-f029-7742-abe2-498dd679069b`: user asks for separate personal dining priorities; later explicitly requests default restoration of the most recent search to avoid repeated API use, saved search history, likes/dislikes, and post-meal feedback.
- **Improve search and account setup**, Codex `01a19804-870b-74a0-965c-c6907425f728`: account editing, saved-home defaults, compact search, merged enrichment work, and clarification of evidence-dependent taste scores.
- **EastEats Architecture Summary**, ChatGPT `6ae2279b-fbe4-83ea-8e80-046316ded2fd`: architecture and collection/analysis separation, coverage concerns, and evidence availability.
- **Implement EastEats fixes**, ChatGPT `6ae3617e-4d5c-83ea-bcd3-6f041bf2fa1c`: stable enrichment batches, expansion from 36 to up to 120 places, and omission of unsupported scores.

Active ChatGPT history was inspected back past the project's October creation, and archived ChatGPT history returned no chats. Relevant Codex project histories were also read. These are the relevant histories exposed by the connected tools, not a claim about inaccessible or deleted conversations.

## Implementation backing

Source repository: [mutms7/easteats](https://github.com/mutms7/easteats).

| Claim | Evidence in EastEats repository |
| --- | --- |
| Six deterministic ranking signals; missing evidence neutral | `src/server/taste/ranking.ts`, `src/server/taste/profile.ts` |
| Structured Claude evidence extraction | `src/server/taste/extraction.ts`, `src/server/taste/claude.ts` |
| Account-owned snapshots and restoration without provider calls | `src/server/saved-searches.ts`, `src/app/api/searches/[id]/route.ts`, `docs/saved-searches-architecture.md` |
| Up to 120 candidates, stable batches of 12, budget constraints | `src/server/refresh-plan.ts`, `supabase/functions/_shared/worker.ts`, `supabase/migrations/`, `README.md` |
| Shared backend for Next.js and Expo clients, stores pending | `mobile/README.md`, `README.md` |
| October start | Original project build prompt dated October 24, 2026 in the architecture chat |

No adoption, ranking-quality benchmark, latency improvement, percentage savings, or native store release is claimed. The 120-place figure is a configured coverage limit, subject to budget and evidence availability. Zero repeat provider calls describes the saved-list reopening path, not a measured percentage reduction across all traffic.
