import type { Component } from 'solid-js'
import Editor from './Editor'
import type { Note } from './types'

import { store, updateNote } from './state/store'

import './Note.css'

type NoteProps = {
  id: Note['id']
}

const Note: Component<NoteProps> = (props) => {
  const note = () => store.notes[props.id]

  return (
    <div class="Note">
      <Editor
        initialContent={note().content}
        onChange={content => updateNote(note().id, { content })}
      />
    </div>
  )
}

export default Note
