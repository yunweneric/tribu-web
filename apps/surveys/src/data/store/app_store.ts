import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../logic/form.slice";
import TabReducer from "../logic/tab.slice";
import PreviewReducer from "../logic/preview.slice";
// ...

export const store = configureStore({
  reducer: {
    form: FormReducer,
    tabs: TabReducer,
    previewItem: PreviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
