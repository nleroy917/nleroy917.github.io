/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-file @typescript-eslint/ban-ts-comment
import { NextPage } from 'next'
import { Layout } from '@/components/layout/layout'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { fetchContent, getPublications } from '@/utils/cms'
import { PublicationCard } from '../../components/publications/publication'
import Link from 'next/link'

export type Publication = {
  title: string
  authors: string[]
  year: string
  journal: string
  doi: string
  id: string
}

export const getStaticProps = async () => {
  const publications = getPublications()
  return {
    props: {
      markdown: fetchContent('./data/cms/publications-header.md'),
      publications: publications,
    },
  }
}

interface Props {
  markdown: string
  publications: Publication[]
}

const Publications: NextPage<Props> = ({ markdown, publications }) => {
  return (
    <Layout>
      <div className="border-b border-gray-400 markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 py-6">
        {publications.map((entry) => {
          return (
            <Link
              className="w-full no-underline"
              key={entry.doi}
              href={entry.doi}
            >
              <PublicationCard entry={entry}></PublicationCard>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Publications
