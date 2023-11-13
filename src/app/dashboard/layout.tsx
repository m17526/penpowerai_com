import React from 'react';
import DashboardProviders from './providers';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { getUser } from '@/utils/db/users';
import { ProjectProps, UserProps } from '@/types';
import { getProjects } from '@/utils/db/projects';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {

    const session = await getServerSession(options);    
    const email = session?.user?.email
    const user: UserProps = await getUser({email})
    const projects: ProjectProps[] = await getProjects({email});

    const initialize = {
      user,
      projects
    };
    

  return (
    <DashboardProviders initialize={initialize}>
      <div className="my-5">{children}</div>
    </DashboardProviders>
  )
}
