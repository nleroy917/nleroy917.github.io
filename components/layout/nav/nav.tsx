import Link from 'next/link'
import { FC } from 'react'
import { HamburgerMenu } from './hamburger-menu'
import { NavItem } from './nav-item'

export const Nav: FC = () => {
  return (
    <nav className="2xl:px-44 px-6 flex flex-row justify-between items-center w-full h-16 border-b-2 border-b-black">
      <div></div>
      <div className="flex-row items-center">
        {/* desktop/tablet */}
        <div className="hidden lg:flex ">
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
        {/* mobile */}
        <HamburgerMenu />
      </div>
    </nav>
  )
}
