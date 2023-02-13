/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-file @typescript-eslint/ban-ts-comment
import { NextPage } from 'next'
import { Layout } from '@/components/layout/layout'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { fetchContent, getPublications } from '@/utils/cms'
import { BibFilePresenter, BibEntry } from 'bibtex'

interface Publication {
  title: string
  authors: string
  year: string
  journal: string
  doi: string
  id: string
}

export const getStaticProps = async () => {
  const publications: BibFilePresenter = getPublications()
  const parsed_pubs = publications.entries_raw.map((entry: BibEntry) => ({
    // @ts-ignore
    title: entry.getField('title').stringify(),
    // @ts-ignore
    authors: entry.getField('author').stringify(),
    // @ts-ignore
    year: entry.getField('year').stringify(),
    // @ts-ignore
    journal: entry.getField('journal').stringify(),
    // @ts-ignore
    doi: entry.getField('doi').stringify(),
    id: entry._id,
  }))
  console.log(parsed_pubs)
  return {
    props: {
      markdown: fetchContent('./data/cms/publications-header.md'),
      publications: parsed_pubs,
    },
  }
}

interface Props {
  markdown: string
  publications: Publication[]
}

const Publications: NextPage<Props> = ({ markdown, publications }) => {
  console.log(publications)
  return (
    <Layout>
      <div className="markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <div>
        {publications.map((entry) => {
          return (
            <div key={entry.id} className="my-3">
              <h2 className="font-bold text-lg">{entry.title}</h2>
              <p>{entry.authors}</p>
              <div className="flex flex-row">
                <p className="font-bold">{entry.journal}</p>
                <span className="px-1"></span>
                <p>({entry.year})</p>
                <span className="px-1"></span>
                <p>
                  DOI: <a href={`https://doi.org/${entry.doi}`}>{entry.doi}</a>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Publications
