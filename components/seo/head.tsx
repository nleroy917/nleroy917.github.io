import { FC } from 'react'
import Head from 'next/head'
import { siteConstants } from '@/data/const'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export const SEO: FC<SEOProps> = (props) => {
  const { title, description, image } = props
  return (
    <Head>
      <title>{title || siteConstants.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={description || siteConstants.description}
      />
      {/* open-graph things */}
      <meta property="og:title" content={title || siteConstants.title} />
      <meta
        property="og:description"
        content={description || siteConstants.description}
      />
      {image ? <meta property="og:image" content={image} /> : null}
    </Head>
  )
}
