import { getServerSession, } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import type { Session } from "next-auth"
import { getProject, getProjects } from '@/utils/db/projects';
import { getDocumentsByProjectKey } from '@/utils/db/documents';
import { DocumentProps, ProjectProps } from '@/types';
import Documents from '@/components/dashboard/documents';

interface Props {
  params: {
    projectKey: string;
  }
}

export default async function ProjectPage({params}: Props) {
  
 const session: Session | null = await getServerSession(options);
const email = session?.user?.email

const projects: ProjectProps[] = await getProjects({email});
const project: ProjectProps = await getProject({projectKey: params.projectKey})
const documents: DocumentProps[] = await getDocumentsByProjectKey({ projectKey: params.projectKey})

  return <Documents documents={documents}  />  
}