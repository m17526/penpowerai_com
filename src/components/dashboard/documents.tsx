import { DocumentProps } from '@/types'
import React from 'react'
import CardGrid from '@/components/dashboard/card-grid'

interface Props {
  documents?: DocumentProps[],
}

export default function Documents({ documents }: Props) {
  return (
    <div className='space-y-5'>
      <h3>Documents</h3>
      <CardGrid items={documents} />
    </div>
  )
}
