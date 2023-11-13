import { EditorState } from 'draft-js';
import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
  editorState: any;
  setEditorState?: any;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  editorState: EditorState.createEmpty(),
  setEditorState: (newEditorState: any) =>
    set(() => ({ editorState: newEditorState })),
}));

export default useStore;
