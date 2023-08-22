import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loading/loadingSlice'

const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
})

export default store; 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch