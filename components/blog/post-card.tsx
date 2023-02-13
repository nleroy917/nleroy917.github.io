import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

export const PostCard: FC<Props> = ({ children }) => {
  return (
    <div className="p-4 mb-3 bg-purple-200 border-2 border-black rounded-md shadow-sm">
      {children}
    </div>
  )
}
