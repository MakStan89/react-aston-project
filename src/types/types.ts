export type AuthTypes = {
	isAuth: boolean;
	user: {
		login: string;
		email: string;
		favourites: string[];
		history: string[];
		localName: string;
	}
}

export type UserTypes = {
	login: string;
	email: string;
	favourites: string[];
	history: string[];
	localName: string;
}

export type SignUpTypes = {
	login: string;
	email: string;
}

export type RegisteredDateTypes = {
	registeredLogin: string[];
	registeredEmail: string[];
}

export type CardInfoTypes = {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strAlcoholic: string;
	strGlass: string;
	strInstructions: string;
	strDrinkThumb: string;
}

export type CardTypes = {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strAlcoholic: string;
	strDrinkThumb: string;
}

export type CardInfoTypesArray = {
	cardsArray: CardTypes[];
}

export type HistoryItemTypes = {
	strDrink: string;
	strCategory: string;
	strAlcoholic: string;
}

export type HistoryTypes = {
	card: HistoryItemTypes;
	index: number;
};

export type ThemeTypes = {
  colorTheme: string;
};

export type ProtectorType = {
  children?: React.ReactNode;
};


