import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
  href: string
}

export const NavItem: FC<Props> = (props) => {
  const { children, href } = props
  const router = useRouter()
  const active = router.pathname === href

  let className
  if (active) {
    className =
      'px-2 py-1 ml-3 text-white no-underline transition-all bg-black border-2 border-black rounded-md'
  } else {
    className =
      'px-2 py-1 ml-3 text-black no-underline transition-all border-2 border-black rounded-md hover:bg-black hover:text-white'
  }

  return (
    <Link href={href} className="no-underline">
      <div className={className}>{children}</div>
    </Link>
  )
}
