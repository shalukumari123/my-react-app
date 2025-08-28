import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/state-manage/rootReducer';

// Configure store with rootReducer
export const store = configureStore({
  reducer: rootReducer,
});

// Infer types if using TypeScript
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
