import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

export const NavItem: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className="no-underline ml-3 border-2 px-2 py-1 text-white bg-black border-black rounded-md hover:bg-white hover:text-black transition-all">
      {children}
    </div>
  )
}
