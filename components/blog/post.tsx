import { FC } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface Props {
  markdown: string
}

export const BlogPost: FC<Props> = (props) => {
  const { markdown } = props
  return (
    <div className="max-1-6xl p-4">
      <div className="markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}
