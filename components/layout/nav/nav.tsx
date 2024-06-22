import Link from 'next/link'
import { FC } from 'react'
import { HamburgerMenu } from './hamburger-menu'
import { NavItem } from './nav-item'

export const Nav: FC = () => {
  return (
    <nav className="flex flex-row items-center justify-between w-full h-16 px-6 bg-indigo-200 border-b-2 shadow-md 2xl:px-44 border-b-black">
      <div>
        <Link className="text-lg font-bold text-black no-underline" href="/">
          <span>Nathan LeRoy</span>
        </Link>
      </div>
      <div className="flex-row items-center">
        {/* desktop/tablet */}
        <div className="hidden lg:flex ">
          <NavItem href="/software">Software</NavItem>
          <NavItem href="/publications">Publications</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/favorites">Favorites</NavItem>
          {/* <Link href="/" className="no-underline">
            <NavItem>Resume</NavItem>
          </Link> */}
        </div>
        {/* mobile */}
        <HamburgerMenu />
      </div>
      <div className="hidden lg:flex ">
        <Link href="https://github.com/nleroy917">
          <i
            className="text-4xl text-black transition-all bi bi-github hover:text-gray-800"
            aria-label="Github"
          ></i>
        </Link>
      </div>
    </nav>
  )
}
