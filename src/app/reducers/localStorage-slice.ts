import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const localStorageSlice = createSlice({

	name: 'localStorage',
	initialState,
	reducers: {
		setLogin(state, action) {
			state.push(action.payload.toLowerCase());
		},
	},
});

export const { setLogin } = localStorageSlice.actions;
export default localStorageSlice.reducer;