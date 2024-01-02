import React, { FC } from 'react'
import Link from 'next/link'

interface Props {
  children?: React.ReactNode
  href: string
}

export const PostCard: FC<Props> = ({ children, href }) => {
  return (
    <Link className="no-underline" href={href}>
      <div className="no-underline cursor-pointer text-black p-2 my-3 transition-all bg-indigo-100 border-2 border-black rounded-md shadow-sm hover:shadow-md hover:translate-x-0.5 hover:-translate-y-0.5">
        {children}
      </div>
    </Link>
  )
}
