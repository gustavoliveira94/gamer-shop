import React from 'react'

interface LoadingProps {
  height?: string
}

export const Loading: React.FC<LoadingProps> = ({ height }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${height ? height : 'h-[400px]'}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
      <p className="text-primary text-lg">Loading...</p>
    </div>
  )
}
