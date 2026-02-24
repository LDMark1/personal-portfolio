import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
  const cvPath = path.join(process.cwd(), "assets", "CV.pdf")
  const cvBuffer = await readFile(cvPath)

  return new Response(cvBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Abdul_Rafae_CV.pdf"',
      "Cache-Control": "no-store",
    },
  })
}
