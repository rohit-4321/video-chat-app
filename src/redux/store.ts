import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { socketReducer } from './slices/socketSlice';
import { socketMiddleware } from './middleware/socketMiddleware';

export const store = configureStore({
	reducer: {
		userReducer,
		socketReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
