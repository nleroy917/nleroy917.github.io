import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

export const NavItem: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className="px-2 py-1 ml-3 text-black no-underline transition-all border-2 border-black rounded-md hover:bg-black hover:text-white">
      {children}
    </div>
  )
}
