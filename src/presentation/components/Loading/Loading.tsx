import React from 'react'

export const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center" data-testid="loading-component">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
      <p className="text-primary text-lg">Loading...</p>
    </div>
  )
}
