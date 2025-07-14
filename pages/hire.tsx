import { Layout } from '@/components/layout/layout'
import { fetchContent } from '@/utils/cms'
import { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export const getStaticProps = async () => {
  const tldr = fetchContent('./data/cms/hire/tldr.md')
  const atacformer = fetchContent('./data/cms/hire/atacformer.md')
  const novacards = fetchContent('./data/cms/hire/novacards.md')

  return {
    props: {
      tldr,
      atacformer,
      novacards,
    },
  }
}

const Hire: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tldr,
  atacformer,
  novacards,
}) => {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center w-full gap-5 pb-5 mb-4 border-b sm:flex-row sm:justify-start">
        <Image
          src="/headshot-square.png"
          alt="Nathan Leroy"
          width={200}
          height={200}
          className="mx-auto border-2 border-black rounded-full shadow-md"
        />
        <div className="w-full ">
          <h2 className="text-2xl font-bold text-center md:text-3xl md:text-left">
            TL;DR - Computational Biologist, ML Engineer, and Builder
          </h2>
          <ReactMarkdown className="h-full my-auto mt-4 text-sm markdown md:text-base">
            {tldr}
          </ReactMarkdown>
        </div>
      </div>
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">What I Work On</h1>
      <div className="flex flex-col gap-2">
        <div className="markdown">
          <ReactMarkdown>{atacformer}</ReactMarkdown>
        </div>
        <div className="mt-4 markdown">
          <ReactMarkdown>{novacards}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export default Hire
