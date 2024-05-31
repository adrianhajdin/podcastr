import { Loader } from 'lucide-react'
import React from 'react'

const LoaderSpinner = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Loader className="animate-spin text-orange-1" size={30} />
    </div>
  )
}

export default LoaderSpinner