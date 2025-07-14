import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { FC, useState, useRef, Fragment } from 'react'
import { MobileNavItem } from './mobile-nav-item'

export const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  useOnClickOutside(menuRef, () => setIsOpen(false), [buttonRef])

  return (
    <Fragment>
      <button
        ref={buttonRef}
        className="block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <div className="relative">
        <ul
          ref={menuRef}
          className={`${
            isOpen ? '' : 'hidden'
          } absolute right-0 w-48 bg-white p-2 mt-2 rounded-md shadow-lg border-2 border-black`}
        >
          <MobileNavItem href="/software">software</MobileNavItem>
          <MobileNavItem href="/publications">publications</MobileNavItem>
          <MobileNavItem href="/blog">blog</MobileNavItem>
          <MobileNavItem href="/hire">work with me</MobileNavItem>
          <MobileNavItem href="https://github.com/nleroy917">
            github
          </MobileNavItem>
          {/* <MobileNavItem href="/favorites">favorites</MobileNavItem> */}
        </ul>
      </div>
    </Fragment>
  )
}
