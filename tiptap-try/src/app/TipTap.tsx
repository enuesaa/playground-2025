'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
  })

  return <EditorContent editor={editor} />
}
