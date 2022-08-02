import { createSlice } from '@reduxjs/toolkit';
import { AuthTypes } from '../../types/types'

const initialUserState: AuthTypes = {
	isAuth: false,
	user: {
		login: '',
		email: '',
		favourites: [],
		history: [],
		localName: '',
	},
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState: initialUserState,

	reducers: {

		signIn(state, action) {
			state.isAuth = true;
			state.user = action.payload;
		},

		signOut(state) {
			state.isAuth = false;
			state.user = {
				login: '',
				email: '',
				favourites: [],
				history: [],
				localName: '',
			}
		},
		
		addFavourite(state, action) {
			state.user.favourites.push(action.payload);
		},

		removeFavourite(state, action) {
			state.user.favourites = state.user.favourites.filter((id) => id !== action.payload);
		},

		addHistory(state, action) {
			state.user.history.push(action.payload);
		},

		removeHistory(state) {
			state.user.history = [];
		},
	},
});

export const { signIn, signOut, addFavourite, removeFavourite, addHistory, removeHistory } = userSlice.actions;
export default userSlice.reducer;