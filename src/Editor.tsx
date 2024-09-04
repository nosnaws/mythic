import type { EditorOptions, JSONContent } from '@tiptap/core'
import { Editor as TTEditor } from '@tiptap/core'
import { createEffect, createSignal, onCleanup } from 'solid-js'
import type { Component } from 'solid-js'
import StarterKit from '@tiptap/starter-kit'
import { createEditor, EditorContent } from 'tiptap-solid'
import MenuBar from './MenuBar'

import Reference from './editor/extensions/reference/node'

type EditorRef = TTEditor | ((editor: TTEditor) => void)
type BaseEditorOptions = Omit<Partial<EditorOptions>, 'element'>

interface UseEditorOptions<T extends HTMLElement> extends BaseEditorOptions {
  element: T
}

function createEditorTransaction<T, V extends TTEditor | null>(
  instance: () => V,
  read: (value: V) => T,
): () => T {
  const [depend, update] = createSignal(undefined, { equals: false })

  function forceUpdate() {
    update()
  }

  createEffect(() => {
    const editor = instance();
    if (editor) {
      editor.on('transaction', forceUpdate);
      onCleanup(() => {
        editor.off('transaction', forceUpdate);
      })
    }
  })

  return () => {
    depend()
    return read(instance())
  }
}

function useEditorJSON<
  V extends TTEditor | null,
  R extends Record<string, unknown>,
>(editor: () => V): () => JSONContent | undefined {
  return createEditorTransaction(editor, instance => instance?.getJSON() as R)
}

type EditorProps = {
  onChange: (content: JSONContent) => void 
  initialContent?: JSONContent
}

const Editor: Component<EditorProps> = (props) => {
  const editor = createEditor(({
    extensions: [
      StarterKit,
      Reference,
    ],
    content: props.initialContent
  }))

  const s = useEditorJSON(editor)

  createEffect(() => {
    const content = s()
    if (content) {
      props.onChange(content)
    }
  })


  return (
    <>
      <MenuBar editor={editor()} />
      <EditorContent editor={editor()}  />
    </>
  )
};

export default Editor;
