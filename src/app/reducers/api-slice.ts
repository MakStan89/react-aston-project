import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../constants/const';

export const apiSlice = createApi({

	reducerPath: 'apiSlice',
	baseQuery: fetchBaseQuery({ baseUrl: API_PATH }),

	endpoints: builder  => ({
		getCards: builder.query({
			query: (search) => `/search.php?s=${search}`,
				transformResponse: (responseData: any) => {
				const { drinks: drinksArray } = responseData;
				return drinksArray;
			},
		}),
		
		getCardById: builder.query({
			query: (id) => `/lookup.php?i=${id}`,
			transformResponse: (responseData: any) => {
				const { drinks: [item] } = responseData;
				return item;
			},
		}),
	}),
});

export const { useGetCardsQuery, useGetCardByIdQuery } = apiSlice;