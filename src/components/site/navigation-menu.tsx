'use client'

import { useState } from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

export default function NavigationMenu({session}: any) { 

    const items: MenuProps['items'] = [
      {
        label: 'Overview',
        key: 'overview',
        // icon: <MailOutlined />,
      },
      {
        label: 'Features',
        key: 'features',
        // icon: <MailOutlined />,
      },
      {
        label: 'How it works',
        key: 'how-it-works',
        // icon: <AppstoreOutlined />,
      },
      {
        label: 'Pricing',
        key: 'pricing',
        // icon: <AppstoreOutlined />,
      },
      {
        type: 'divider',
      },
      {
        label: session ? <Link href="/api/auth/signout">SignOut</Link> : <Link href="/api/auth/signin">SignIn</Link>,
        key: 'login',
        // icon: <AppstoreOutlined />,
      }
    ];

    const [current, setCurrent] = useState('');

     const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu
    style={{ 
    flex: "auto", 
    justifyContent: "end", 
    minWidth: 0,
    backgroundColor: "transparent",
    border: "none"
   }} 
    onClick={onClick} selectedKeys={[current]} 
    mode="horizontal" 
    items={items} />
  )
}
