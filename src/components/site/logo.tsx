import * as React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

export function Logo() {
  return (
    <div className="flex justify-between gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
        <Icons.logo size={20} strokeWidth={0.8} />        
        </div>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
