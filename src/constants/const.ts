import { CardInfoTypes } from '../types/types';

export const APP_PATHS = {
  main: '/',
	search: '/search',
	cardInfo: '/search/:id',
  signIn: '/signin',
	signUp: '/signup',
	favourites: '/favourites',
	history: '/history',
  notFound: '*',
};

export const DEFAULT_FILTERS_VALUES: CardInfoTypes = {
	idDrink: '',
	strDrink: '',
	strCategory: '',
	strAlcoholic: '',
	strGlass: '',
	strInstructions: '',
	strDrinkThumb: '',
}

export const API_PATH = 'https://www.thecocktaildb.com/api/json/v1/1';

export const KEY_CODES = { enter: 13 };

export const CATEGORY = ['', 'Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown', 'Cocoa', 'Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Beer', 'Soft Drink'];

export const ALCOHOLIC = ['', 'Alcoholic', 'Non alcoholic', 'Optional alcohol'];