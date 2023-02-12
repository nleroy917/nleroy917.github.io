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
      <main className="w-full flex flex-col items-center content-center">
        <header className="w-full">
          <Nav />
        </header>
        <div className="max-w-7xl w-full p-4">{children}</div>
      </main>
    </>
  )
}
