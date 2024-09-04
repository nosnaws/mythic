import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Note from './Note'

import { store } from './state/store'

import './NotePad.css'

type NotePadProps = {
}

const NotePad: Component<NotePadProps> = (props) => {
  const layout = store.layout

  return (
    <div class="NotePad">
      <For each={layout}>
        {item =>
          <div class={item.size === 'full' ? '.Full' : '.Half'}>
            <Note id={item.noteId} />
          </div>
        }
      </For>
    </div>
  )
}

export default NotePad
