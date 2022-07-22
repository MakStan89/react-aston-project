import { createSlice } from '@reduxjs/toolkit';



const initialState: string[] = [];

const localStorageSlice = createSlice({

	name: 'registerUser',
	initialState,

	reducers: {

		setLogin(state, action) {
			state.push(action.payload.toLowerCase());
		},

		loadLogin(state, action) {
			return action.payload;
		},
	},
});

export const { setLogin, loadLogin } = localStorageSlice.actions;
export default localStorageSlice.reducer;