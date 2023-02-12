import { fetchContent } from '@/utils/cms'
import { Layout } from '@/components/layout/layout'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { NextPage } from 'next'

export const getStaticProps = async () => {
  return {
    props: {
      markdown: fetchContent('./data/cms/landing.md'),
    },
  }
}

interface Props {
  markdown: string
}

const Home: NextPage<Props> = ({ markdown }) => {
  return (
    <Layout>
      <div className="markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Home
