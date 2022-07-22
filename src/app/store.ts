import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/user-slice';
import apiReducer from './reducers/user-slice';
import historyReducer from './reducers/user-slice';
import favoritesReducer from './reducers/user-slice';
import localStorageReducer from './reducers/localStorage-slice';


export const store = configureStore({
	reducer: {
		userState: userReducer,
		apiState: apiReducer,
		historyState: historyReducer,
		favouritesState: favoritesReducer,
		localStorageState: localStorageReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
