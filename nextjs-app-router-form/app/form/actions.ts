'use server'

import { z, ZodError } from 'zod'

const schema = z.object({
  title: z.string().min(5).max(10),
  description: z.string().min(10).max(100),
})

type Schema = z.infer<typeof schema>
export type Response = {
  ok: boolean
  error: ReturnType<ZodError<Schema>['flatten']>['fieldErrors']
}
export async function createNote(prevState: any, formdata: FormData) {
  const validated = schema.safeParse({
    title: formdata.get('title'),
    description: formdata.get('description'),
  })
  console.log(validated)

  if (!validated.success) {
    const res = {
      ok: false,
      error: validated.error.flatten().fieldErrors,
    }
    console.log('res', res)
    return res
  }

  return { ok: true, error: {} }
}
