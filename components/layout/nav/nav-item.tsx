import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

export const NavItem: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className="no-underline text-black ml-3 border-2 border-black rounded-md px-2 hover:bg-black hover:text-white transition-all">
      {children}
    </div>
  )
}
