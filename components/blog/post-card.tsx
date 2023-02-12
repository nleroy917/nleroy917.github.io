import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

export const PostCard: FC<Props> = ({ children }) => {
  return (
    <div className="shadow-sm rounded-md mb-3 border-2 border-black p-4">
      {children}
    </div>
  )
}
