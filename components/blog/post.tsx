import { FC } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface Props {
  markdown: string
}

export const BlogPost: FC<Props> = (props) => {
  const { markdown } = props
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
