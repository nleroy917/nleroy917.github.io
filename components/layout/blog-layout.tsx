import { FC } from 'react'
import { SEO } from '../seo/head'

interface Props {
  title?: string
  description?: string
  image?: string
  children?: React.ReactNode
}

export const BlogLayout: FC<Props> = (props) => {
  const { children, title, description, image } = props
  return (
    <>
      <SEO title={title} description={description} image={image} />
      <main className="flex flex-col items-center content-center w-full min-h-screen mt-2 large:mt-3">
        <div className="w-full p-4 max-w-7xl">{children}</div>
      </main>
    </>
  )
}
