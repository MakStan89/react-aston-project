import { createSlice } from '@reduxjs/toolkit';

const initialFavouritesState = {
	
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: initialFavouritesState,

	reducers: {

	}
});

/*export const {  } = favouritesSlice.actions;*/
export default favouritesSlice.reducer;