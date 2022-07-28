import { createSlice } from '@reduxjs/toolkit';

const initialState = { strDrink: '', strCategory: '', strAlcoholic: ''};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeAllFilters(state, action) {
			return action.payload;
		},
	},
});

export const { changeAllFilters } = filterSlice.actions;
export default filterSlice.reducer;