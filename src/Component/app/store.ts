import { configureStore } from '@reduxjs/toolkit'
import shopingCardReducer from '../features/shopingCardSlice'

export const store = configureStore({
  reducer: {
    shopingCarRedux: shopingCardReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;