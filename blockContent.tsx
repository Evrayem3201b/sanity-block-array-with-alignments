// schemas/blockContent.tsx
import React from 'react'
import {defineType, defineArrayMember} from 'sanity'
import {
  AlignLeft as LeftAlignIcon,
  AlignCenter as CenterAlignIcon,
  AlignRight as RightAlignIcon,
} from 'lucide-react'

// This component will wrap the block contents and align them
type TextAlignValue = 'left' | 'center' | 'right'

const TextAlign = (props: {value?: TextAlignValue; children: React.ReactNode}) => {
  const align: TextAlignValue = props.value ?? 'left'
  return <div style={{textAlign: align, width: '100%'}}>{props.children}</div>
}

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          // whatever your link / custom marks are
        ],
      },
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        // optionally more
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
        {title: 'Left', value: 'left', icon: LeftAlignIcon, component: TextAlign},
        {title: 'Center', value: 'center', icon: CenterAlignIcon, component: TextAlign},
        {title: 'Right', value: 'right', icon: RightAlignIcon, component: TextAlign},
      ],
    }),

    defineArrayMember({type: 'image'}),
    // other block children if needed
  ],
})
