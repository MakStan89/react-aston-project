import { createSlice } from '@reduxjs/toolkit';
import { AuthTypes } from '../../constants/types'


const initialUserState: AuthTypes = {
	isAuth: false,
	user: {
		login: '',
		email: '',
		favourites: [],
		history: [],
	},
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState: initialUserState,

	reducers: {
		
		signUp(state, action) {
			state.isAuth = true;
			state.user = action.payload;
		},

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
			}
		},
		
		addFavourite(state, action) {
			state.user.favourites.push(action.payload);
		},

		removeFavourite(state, action) {
			state.user.favourites.filter((e) => e !== action.payload);
		},

		addHistory(state, action) {
			state.user.history.push(action.payload);
		},

		removeHistory(state) {
			state.user.history = [];
		},
	},
});

export const { signUp, signIn, signOut, addFavourite, removeFavourite, addHistory, removeHistory } = userSlice.actions;

export default userSlice.reducer;