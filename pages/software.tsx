import { Layout } from '@/components/layout/layout'
import { SoftwareCard } from '@/components/software/software-entry'
import { fetchContent, getSoftware, Software } from '@/utils/cms'
import { NextPage } from 'next'
import Link from 'next/link'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const getStaticProps = () => {
  const software = getSoftware()
  return {
    props: {
      markdown: fetchContent('./data/cms/software-header.md'),
      software: software,
    },
  }
}

interface Props {
  markdown: string
  software: Software
}

const Software: NextPage<Props> = ({ markdown, software }) => {
  return (
    <Layout>
      <h2 className="text-4xl font-bold text-indigo-600">My Software</h2>
      <div className="border-b border-gray-400 markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      {software.software.map((entry) => {
        return (
          <Link
            className="no-underline"
            key={entry.registry}
            href={entry.github}
          >
            <SoftwareCard entry={entry} />
          </Link>
        )
      })}
    </Layout>
  )
}

export default Software
