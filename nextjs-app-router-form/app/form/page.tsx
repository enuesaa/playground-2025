'use client'

import { useActionState } from 'react'
import { createNote } from './actions'

const initial = {
  ok: false,
  error: {
    title: [],
    description: [],
  },
}
export default function Page() {
  const [state, formAction, pending] = useActionState(createNote, initial)

  return (
    <form action={formAction}>
      <input name="title" type="text" />
    
      {state.error?.title && state.error?.title.length > 0 && (
        <p>{state.error.title[0]}</p>
      )}
    
      <textarea name="description"></textarea>
      {state.error?.description && state.error?.description.length > 0 && (
        <p>{state.error.description[0]}</p>
      )}

      <button type="submit">submit</button>
    </form>
  )
}
