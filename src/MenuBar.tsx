import type { Component, Accessor } from 'solid-js'
import type { Editor as TTEditor } from '@tiptap/core'
import { Show } from 'solid-js'

type MenuBarProps = {
  editor: TTEditor | null
}

const MenuBar: Component<MenuBarProps> = (props) => {
  const editor = props.editor

  return (
    <Show when={props.editor}>
      <div class="control-group">
        <div class="button-group">
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            class={editor?.isActive('bold') ? 'is-active' : ''}
          >
            Bold
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            class={editor?.isActive('italic') ? 'is-active' : ''}
          >
            Italic
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            class={editor?.isActive('strike') ? 'is-active' : ''}
          >
            Strike
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleCode().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            class={editor?.isActive('code') ? 'is-active' : ''}
          >
            Code
          </button>
          <button onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
            Clear marks
          </button>
          <button onClick={() => editor?.chain().focus().clearNodes().run()}>
            Clear nodes
          </button>
          <button
            onClick={() => editor?.chain().focus().setParagraph().run()}
            class={editor?.isActive('paragraph') ? 'is-active' : ''}
          >
            Paragraph
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
            class={editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            H1
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
            class={editor?.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            H2
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
            class={editor?.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            H3
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
            class={editor?.isActive('heading', { level: 4 }) ? 'is-active' : ''}
          >
            H4
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
            class={editor?.isActive('heading', { level: 5 }) ? 'is-active' : ''}
          >
            H5
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
            class={editor?.isActive('heading', { level: 6 }) ? 'is-active' : ''}
          >
            H6
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            class={editor?.isActive('bulletList') ? 'is-active' : ''}
          >
            Bullet list
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            class={editor?.isActive('orderedList') ? 'is-active' : ''}
          >
            Ordered list
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            class={editor?.isActive('codeBlock') ? 'is-active' : ''}
          >
            Code block
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            class={editor?.isActive('blockquote') ? 'is-active' : ''}
          >
            Blockquote
          </button>
          <button onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
            Horizontal rule
          </button>
          <button onClick={() => editor?.chain().focus().setHardBreak().run()}>
            Hard break
          </button>
          <button
            onClick={() => editor?.chain().focus().undo().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
          >
            Undo
          </button>
          <button
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={
              !editor?.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            Redo
          </button>
        </div>
      </div>
    </Show>
  )
}

export default MenuBar
