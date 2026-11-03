export interface Chunk {
  id: string
  pagePath: string
  headingId: string
  headingPath: string[]
  module: string
  text: string
  hash: string
  embedding: number[]
}

export interface AskRequest {
  question: string
  pagePath: string
  headingId?: string
  headingTitle?: string
  paragraph?: string
}

// Works with any OpenAI-compatible embeddings API (OpenAI, Voyage, etc.)
export async function embed(texts: string[]): Promise<number[][]> {
  const out: number[][] = []
  for (let i = 0; i < texts.length; i += 64) {
    const res = await fetch(`${process.env.EMBEDDINGS_URL}/embeddings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.EMBEDDINGS_KEY}`,
      },
      body: JSON.stringify({ model: process.env.EMBEDDINGS_MODEL, input: texts.slice(i, i + 64) }),
    })
    if (!res.ok) throw new Error(`Embeddings failed: ${res.status} ${await res.text()}`)
    const json = (await res.json()) as { data: { embedding: number[] }[] }
    out.push(...json.data.map((d) => d.embedding))
  }
  return out
}

export function cosine(a: number[], b: number[]): number {
  let d = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) {
    d += a[i] * b[i]
    na += a[i] ** 2
    nb += b[i] ** 2
  }
  return d / (Math.sqrt(na * nb) || 1)
}
