import { getServerSession, } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import type { Session } from "next-auth"
import { getProjects } from '@/utils/db/projects';
import { ProjectProps } from '@/types';
import Projects from '@/components/dashboard/projects';


export default async function Dashboard() {
  
 const session: Session | null = await getServerSession(options);
const email = session?.user?.email
const projects: ProjectProps[] = await getProjects({email});

  return <Projects projects={projects} />
}



