import * as React from 'react'

interface ProjectProps {
  name: string
}

export const Project: React.FC<ProjectProps> = ({ name }) => {
  return <div className='sm:w-1/3 p-6 sm:ml-4 mb-4 sm:mb-0 first:ml-0 border border-indigo-400 rounded-md shadow-md hover:shadow-lg active:shadow-xl active:bg-indigo-100'>{name}</div>
}