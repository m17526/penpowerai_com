'use client';

import { ContentState, EditorState } from 'draft-js';
import { atom, atomFamily } from 'recoil';

export const userAtom = atom({
  key: "userAtom",
  default: null,
});

export const projectsAtom = atom({
  key: "projectsAtom",
  default: null,
});

type InsertModal = {
  show?: boolean;
  type?: string;
  label?: string;
  description?: string;
};

export const insertModalAtom = atom<InsertModal>({
  key: 'insertModalAtom',
  default: { show: false },
});


export const editorStateAtom = atomFamily({
  key: 'editorStateAtom',
  default: EditorState.createEmpty(),
  // default: EditorState.createWithContent(
  //   ContentState.createFromText('Hello, Recoil!')
  // ),
});
