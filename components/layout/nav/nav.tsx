import Link from 'next/link'
import { FC } from 'react'
import { NavItem } from './nav-item'

export const Nav: FC = () => {
  return (
    <nav className="2xl:px-44 px-6 flex flex-row justify-between items-center w-full h-16 border-b-2 border-b-black">
      <div></div>
      <div className="flex flex-row items-center">
        <Link href="/" className="no-underline">
          <NavItem>Software</NavItem>
        </Link>
        <Link href="/" className="no-underline">
          <NavItem>Publications</NavItem>
        </Link>
        <Link href="/blog" className="no-underline">
          <NavItem>Blog</NavItem>
        </Link>
        <Link href="/" className="no-underline">
          <NavItem>Resume</NavItem>
        </Link>
      </div>
    </nav>
  )
}
