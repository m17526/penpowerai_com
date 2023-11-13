'use client'

import { Dropdown, type MenuProps } from 'antd';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



export default function DropdownMmenu({user} : any) {

    const items: MenuProps['items'] = [
        {
            label: <Link href="/dashboard">Dashboard</Link>,
            key: "dashboard",
        },
        {
            label: <Link href="/dashboard/account">Account</Link>,
            key: "account",
        },
        {
            type: 'divider',
        },
        {
          label: "Sign Out",
          key: "signOut",
          onClick: () => signOut(),
        },
    ];

  return (
  <Dropdown 
  menu={{items}} 
  trigger={['click']}
  >
    <div className='p-1 border border-primary rounded-full'>
        <Image
        src={user.image}
        width={25}
        height={25}
        alt={user.name}
        />
    </div>
  </Dropdown>
);
}
