import { Layout } from '@/components/layout/layout'
import { fetchContent } from '@/utils/cms'
import { NextPage } from 'next'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const getStaticProps = async () => {
  return {
    props: {
      markdown: fetchContent('./data/cms/blog-header.md'),
    },
  }
}

interface Props {
  markdown: string
}

const Blog: NextPage<Props> = ({ markdown }) => {
  return (
    <Layout title="Blog" description="Nathan LeRoy's Blog">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Layout>
  )
}

export default Blog
