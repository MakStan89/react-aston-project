import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/user-slice';
import filterReducer from './reducers/filter-slice';
import favoritesReducer from './reducers/user-slice';
import localStorageReducer from './reducers/localStorage-slice';
import { apiSlice } from './reducers/api-slice';
import { localStorageMiddleware } from './localStorageMiddleware';

export const store = configureStore({
	reducer: {
		userState: userReducer,
		filterState: filterReducer,
		favouritesState: favoritesReducer,
		localStorageState: localStorageReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, localStorageMiddleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
