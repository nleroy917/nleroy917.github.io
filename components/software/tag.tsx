import { FC } from 'react'

interface Props {
  tag: string
}

interface TagProperties {
  class: string
}

const TagProperties: Record<string, TagProperties> = {
  python: {
    class:
      'text-sm border px-2 py-0 border-blue-600 text-blue-600 rounded-full',
  },
  bioinformatics: {
    class:
      'text-sm border px-2 py-0 border-green-600 text-green-600 rounded-full',
  },
  web: {
    class: 'text-sm border px-2 py-0 border-black text-black rounded-full',
  },
  go: {
    class:
      'text-sm border px-2 py-0 border-cyan-600 text-cyan-600 rounded-full',
  },
}

export const Tag: FC<Props> = ({ tag }) => {
  const properties = TagProperties[tag]

  return <div className={properties.class}>{tag}</div>
}
