'use client';

import React, { useRef, useState } from 'react';
import { Editor, EditorState, Modifier } from 'draft-js';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editorStateAtom } from '@/lib/recoil/atoms';

export default function RichTextEditor() {
  const initialEditorState = useRecoilValue(editorStateAtom('abc'));
  const setInitialEditorState = useSetRecoilState(editorStateAtom('abc'));

  const [editorState, setEditorState] =
    React.useState<EditorState>(initialEditorState);

  const editor = useRef<Editor>(null);

  const handleChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    setInitialEditorState(newEditorState);
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={handleChange} ref={editor} />
    </div>
  );
}
