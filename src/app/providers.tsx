'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import { SessionProvider } from 'next-auth/react';
// import { RecoilRoot } from 'recoil';
import theme from '@/config/themeConfig';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

interface RootProvidersProps {
  children: React.ReactNode;
}

export default function RootProviders({ children }: RootProvidersProps) {
  return (
    <SessionProvider>
      {/* <RecoilRoot> */}
        <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      {/* </RecoilRoot>       */}
    </SessionProvider>
  );
}
