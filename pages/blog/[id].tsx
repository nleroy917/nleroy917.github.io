import { fetchContent } from '@/utils/cms'
import fs from 'fs'
import { GetStaticProps, NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const getStaticPaths = async () => {
  const blogPostPaths = fs
    .readdirSync('./data/cms/blog')
    .filter((path) => path.endsWith('.md'))
    .map((path) => {
      return {
        params: {
          id: path.replace('.md', ''),
        },
      }
    })

  return {
    paths: blogPostPaths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      markdown: fetchContent(`./data/cms/blog/${params?.id}.md`),
    },
  }
}

interface Props {
  markdown: string
}

const BlogPostPage: NextPage<Props> = (props) => {
  const { markdown } = props
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default BlogPostPage
