type Props = {
  genre: string
}

type TagProperties = {
  class: string
}

const TagProperties: Record<string, TagProperties> = {
  country: {
    class:
      'text-sm border px-2 py-0 border-orange-600 text-orange-600 bg-orange-200 rounded-full',
  },
  pop: {
    class:
      'text-sm border px-2 py-0 border-blue-600 text-blue-600 bg-blue-200 rounded-full',
  },
  'hip hop': {
    class:
      'text-sm border px-2 py-0 border-green-600 text-green-600 bg-green-200 rounded-full',
  },
  'rock n roll': {
    class:
      'text-sm border px-2 py-0 border-red-600 text-red-600 bg-red-200 rounded-full',
  },
  jazz: {
    class:
      'text-sm border px-2 py-0 border-purple-600 text-purple-600 bg-purple-200 rounded-full',
  },
  'r&b': {
    class:
      'text-sm border px-2 py-0 border-yellow-600 text-yellow-600 bg-yellow-200 rounded-full',
  },
}

export const GenreTag = (props: Props) => {
  const { genre } = props
  const properties = TagProperties[genre]

  return <div className={properties?.class || ''}>{genre}</div>
}
