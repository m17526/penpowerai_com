'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { CardProps } from '@/types';
import Link from 'next/link';
import { Tooltip } from 'antd';
import moment from 'moment';
import { Icons } from '../icons';

interface Props {
  items?: CardProps[]
}

export default function CardGrid({items}: Props) {
  const {projectKey} = useParams()
  console.log("projectKey: ", projectKey)

  const link = (key : string) => !projectKey ? `/dashboard/${key}` : `/dashboard/${projectKey}/${key}`

  return (
    <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items?.map((item) => (
            <li key={item.key} className="h-full">
              <Link href={link(item.key)}>
                  <div className="min-h-full flex rounded-lg border border-primary px-6 py-3 flex-col gap-3 transition duration-200 ease-in transform hover:scale-105 hover:z-50">
                      <div className="flex items-center space-x-1">
                          <div className="w-8 h-8 inline-flex items-center justify-center flex-shrink-0">
                              <Icons.pen size={20} strokeWidth={1} />
                          </div>
                          <Tooltip title={item.name}>
                            <h3 className="leading-relaxed line-clamp-1">{item.name}</h3>
                          </Tooltip>
                      </div>

                      <div className="flex-grow">
                          <p className="leading-relaxed line-clamp-3">
                              {item.description || item.topic}
                          </p>                
                      </div>

                      <div className="flex justify-between text-md">
                        <Tooltip placement="top" title="Created At">
                          <p>{moment(item.createdAt).format("MMM Do YY")}</p>
                        </Tooltip>
                        <Tooltip placement="top" title="Updated At">
                          <p>{moment(item.updatedAt).startOf("minutes").fromNow()}</p>
                        </Tooltip>
                      </div>
                  </div>
              </Link>
            </li>
          ))}
        </ul>
        )
}
