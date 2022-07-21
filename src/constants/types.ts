export type Auth = {
	isAuth: boolean;
	user: {
		name: string;
		email: string;
		favourites: number[];
		history: string[];
	}
}
