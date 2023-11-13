'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
  () => import('@/components/text-editor/rich-text editor'),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function TextEditor() {
  return (
    <div className="rounded-lg border bg-background shadow">
      <RichTextEditor />
    </div>
  );
}
