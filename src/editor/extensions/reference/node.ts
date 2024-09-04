import { Node, mergeAttributes } from '@tiptap/core'
import { SolidNodeViewRenderer } from 'tiptap-solid'
import Reference from './Reference'


export default Node.create({
  name: 'reference',
  group: 'inline',
  inline: true,
  content: 'text*',
  selectable: false,
  atom: true,
  addAttributes() {
    return {
      id: {
        default: 0
      }
    }
  },
  parseHTML() {
    return [
      {
        tag: 'reference'
      }
    ]
  },
  renderHTML({HTMLAttributes}) {
    return ['reference', mergeAttributes(HTMLAttributes), 0]
  },
  addNodeView() {
    return SolidNodeViewRenderer(Reference)
  }
})
