import Link from 'next/link';

import { Logo } from '@/components/site/logo';
import NavigationMenu from './navigation-menu';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import DropdownMmenu from './dropdown-menu';

export async function SiteHeader() {

  const session  = await getServerSession(options);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between">
        <Logo />
        {/* <NavigationMenu session={session} /> */}

        <div className="flex flex-1 w-1/2 items-center justify-between space-x-4">
        <NavigationMenu session={session} />
            {session && <DropdownMmenu user={session.user} />}
        </div>
      </div>
    </header>
  );
}
