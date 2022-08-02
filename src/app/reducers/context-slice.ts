import { createSlice } from '@reduxjs/toolkit';
import { ThemeTypes } from '../../types/types';

const initialContextState: ThemeTypes = {
	colorTheme: 'bisque',
}

const contextSlice = createSlice({
	name: 'contextSlice',
	initialState: initialContextState,

	reducers: {

		setContext(state, action) {
			state.colorTheme = action.payload;
		},
	}
});

export const { setContext } = contextSlice.actions;
export default contextSlice.reducer;