import { createStore } from 'solid-js/store'
import type { Note } from '../types'

type ID = Note['id']
type State = {
  noteCount: number
  notes: Record<ID, Note>
  layout: Array<{
    size: 'half' | 'full',
    noteId: ID
  }>
}

const [store, setStore] = createStore<State>({
  noteCount: 2,
  notes: {
    1: {
      id: 1,
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "asdfasdfasdfasdf"
              },
              { type: "reference", attrs: { id: 2 } },
              {
                type: "text",
                text: "asdfasdfasdfasdf"
              },
              {
                type: "text",
                text: "hi"
              }
            ]
          }
        ]
      }
    },
    2: {
      id: 2,
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Test number 2"
              },
              { type: "reference", attrs: { id: 1 } },
            ]
          }
        ]
      }
    }
  },
  layout: [
    {
      size: 'full',
      noteId: 1,
    }
  ]
})

const updateNote = (id: Note['id'], note: Partial<Note>) => {
  console.log('updating', id, note)
  setStore("notes", id, note)
}

const newNote = (note: Omit<Note, 'id'>) => {
  const total = Object.keys(store.notes).length
  const id = total + 1
  setStore("notes", id, { id, ...note })
  setStore("noteCount", total + 1)
}

const openNote = (id: Note['id']) => {
  if (store.layout.some(n => n.noteId === id)) {
    return
  }

  setStore("layout", store.layout.length, { size: 'full', noteId: id })
}

export {
  store,
  updateNote,
  newNote,
  openNote,
}
