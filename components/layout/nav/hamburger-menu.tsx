import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Link from 'next/link'
import { FC, useState, useRef } from 'react'

export const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  useOnClickOutside(menuRef, () => setIsOpen(false), [buttonRef])

  return (
    <>
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
          <li className="my-1 font-bold">
            <Link href="/" className="text-black underline">
              home
            </Link>
          </li>
          <li className="my-1 font-bold">
            <Link className="text-black underline" href="/software">
              software
            </Link>
          </li>
          <li className="my-1 font-bold">
            <Link className="text-black underline" href="/publications">
              publications
            </Link>
          </li>
          <li className="my-1 font-bold">
            <Link className="text-black underline" href="/blog">
              blog
            </Link>
          </li>
          {/* <li className="my-1 font-bold">
            <Link className="text-black underline" href="/">
              resume
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}
