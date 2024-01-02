import { FC } from 'react'
import { SEO } from '../seo/head'
import { Nav } from './nav/nav'

interface Props {
  title?: string
  description?: string
  image?: string
  children?: React.ReactNode
}

export const Layout: FC<Props> = (props) => {
  const { children, title, description, image } = props
  return (
    <>
      <SEO title={title} description={description} image={image} />
      <main className="flex flex-col items-center content-center w-full min-h-screen">
        <header className="w-full">
          <Nav />
        </header>
        <div className="w-full max-w-6xl p-4">{children}</div>
      </main>
    </>
  )
}
