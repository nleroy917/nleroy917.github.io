import { fetchContent } from '@/utils/cms'
import { Layout } from '@/components/layout/layout'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { NextPage } from 'next'
import Link from 'next/link'

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
      <h2 className="mb-3 text-2xl font-bold text-purple-600">My Socials</h2>
      <ul className="list-disc list-inside">
        <li>
          <i className="mr-1 bi bi-github"></i>
          <Link href="https://github.com/nleroy917">GitHub</Link>
        </li>
        <li>
          <i className="mr-1 bi bi-twitter"></i>
          <Link href="https://twitter.com/nathanjleroy">Twitter</Link>
        </li>
        <li>
          <i className="mr-1 bi bi-linkedin"></i>
          <Link href="https://www.linkedin.com/in/nathanjleroy/">LinkedIn</Link>
        </li>
        <li>
          <i className="mr-1 bi bi-terminal"></i>
          <Link href="https://hub.docker.com/u/nleroy917">Dockerhub</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Home
