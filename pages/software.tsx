import { Layout } from '@/components/layout/layout'
import { SoftwareCard } from '@/components/software/software-entry'
import { fetchContent, getSoftware, Software } from '@/utils/cms'
import { NextPage } from 'next'
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
      <h1 className="text-3xl font-bold text-purple-600">My Software</h1>
      <div className="markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      {software.software.map((entry) => {
        return <SoftwareCard key={entry.registry} entry={entry} />
      })}
    </Layout>
  )
}

export default Software
