import type { Component } from 'solid-js'
import type { NodeViewProps } from '@tiptap/core'
import { NodeViewWrapper, NodeViewContent } from 'tiptap-solid'

import { openNote } from '../../../state/store'

import './Reference.css'

const Reference: Component<NodeViewProps> = (props) => {
  const click = () => {
    openNote(props.node.attrs.id)
  }

  return (
    <NodeViewWrapper >
      <span contenteditable={false} onClick={click} class="Reference">Hallo {props.node.attrs.id}</span>
    </NodeViewWrapper>
  )
}

export default Reference
