import { createSlice } from '@reduxjs/toolkit';
import { loadLoginsFromLS } from '../localStorage';

const loginsInLS = loadLoginsFromLS()
const initialState: string[] = loginsInLS;

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