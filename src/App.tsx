import type { Component } from 'solid-js'
import { createSignal, For } from 'solid-js'
import type { JSONContent } from '@tiptap/core'

import NotePad from './NotePad'

import './App.css'

type Note = {
  content: JSONContent | undefined
}

const App: Component = () => {
  const [content, setContent] = createSignal<Note['content']>()
  // const handler = (event) => {

  //   console.log(event);
  // }

  return (
    <div class="App" >
      <div class="Content">
        <NotePad />
      </div>
      <p>
        {JSON.stringify(content(), null, 2)}
      </p>
    </div>
  )
}

export default App
