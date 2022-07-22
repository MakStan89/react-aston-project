export type AuthTypes = {
	isAuth: boolean;
	user: {
		login: string;
		email: string;
		favourites: number[];
		history: string[];
	}
}

export type UserTypes = {
	login: string;
	email: string;
	favourites: number[];
	history: string[];
}

export type SignUpTypes = {
	login: string;
	email: string;
}

export type SpecificTypes = {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
}
