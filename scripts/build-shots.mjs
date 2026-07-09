// One-off tool: resize project screenshots into web-friendly WebP files under public/shots/.
// Run with: node scripts/build-shots.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const GH = resolve(process.cwd(), '..')

// [sourcePath, outputSlug]
const jobs = [
  ['cardgame/new-game-project/docs/screenshots/home.png', 'conquestcartes/home'],
  ['cardgame/new-game-project/docs/screenshots/table.png', 'conquestcartes/table'],
  ['blendergame/Blending/docs/screenshots/editor.png', 'blend/editor'],
  ['blendergame/Blending/docs/screenshots/sculpt.png', 'blend/sculpt'],
  ['visualnovel/docs/screenshots/intro.png', 'airoutside/intro'],
  ['visualnovel/docs/screenshots/wren.png', 'airoutside/wren'],
  ['visualnovel/docs/screenshots/morning.png', 'airoutside/morning'],
  ['Hairrison/docs/screenshots/landing.png', 'hairrison/landing'],
  ['Hairrison/docs/screenshots/studio.png', 'hairrison/studio'],
  ['molt/docs/screenshots/title.png', 'molt/title'],
  ['molt/docs/screenshots/suited.png', 'molt/suited'],
  ['molt/docs/screenshots/bare.png', 'molt/bare']
]

const MAX_W = 1600

for (const [src, slug] of jobs) {
  const input = resolve(GH, src)
  const out = resolve(process.cwd(), 'public/shots', `${slug}.webp`)
  await mkdir(dirname(out), { recursive: true })
  const img = sharp(input)
  const meta = await img.metadata()
  const width = Math.min(meta.width ?? MAX_W, MAX_W)
  await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(out)
  const { size } = await sharp(out).metadata().then(async () => {
    const fs = await import('node:fs/promises')
    return fs.stat(out)
  })
  console.log(`${slug}.webp  ${width}px  ${(size / 1024).toFixed(0)}kb`)
}
console.log('done')
