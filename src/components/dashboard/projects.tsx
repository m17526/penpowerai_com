import { ProjectProps } from '@/types'
import React from 'react'
import CardGrid from '@/components/dashboard/card-grid'

interface Props {
  projects?: ProjectProps[],
}

export default function Projects({ projects }: Props) {
  return (
    <div className='space-y-5'>
      <h3>Projects</h3>
      <CardGrid items={projects} />
    </div>
  )
}
