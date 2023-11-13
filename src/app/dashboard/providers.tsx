'use client';

import { projectsAtom, userAtom } from '@/lib/recoil/atoms';
import React from 'react';
import { RecoilRoot } from 'recoil';

interface DashboardProvidersProps {
  children: React.ReactNode;
  initialize: any
}

export default function DashboardProviders({ children, initialize }: DashboardProvidersProps) {
    function initializeState({ set }: any) {
    set(userAtom, initialize.user);
    set(projectsAtom, initialize.projects);
  }

  return (
      <RecoilRoot initializeState={initializeState}>
        {children}
      </RecoilRoot>      
  );
}
