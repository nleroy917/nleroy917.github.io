import { FC } from 'react'

interface Props {
  tag: string
}

interface TagProperties {
  class: string
}

const TagProperties: Record<string, TagProperties> = {
  python: {
    class: 'text-sm border px-2 border-blue-600 text-blue-600 rounded-full',
  },
  bioinformatics: {
    class: 'text-sm border px-2 border-green-600 text-green-600 rounded-full',
  },
  web: {
    class: 'text-sm border px-2 border-black text-black rounded-full',
  },
}

export const Tag: FC<Props> = ({ tag }) => {
  const properties = TagProperties[tag]

  return <div className={properties.class}>{tag}</div>
}
