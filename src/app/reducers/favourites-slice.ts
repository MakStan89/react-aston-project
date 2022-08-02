import { createSlice } from '@reduxjs/toolkit';

const initialFavouritesState = {
	favourites: []
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: initialFavouritesState,

	reducers: {}
});


export default favouritesSlice.reducer;