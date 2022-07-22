import { UserTypes } from '../constants/types';


export const loginVerification = (login: string, registeredLogin: string) =>
	!registeredLogin.includes(login);

export const emailVerification = (email: string, registeredEmail: string) =>
	!registeredEmail.includes(email);

export const saveNewUser = (login: string, email: string, history: string[], favourites: number[]) => {
	const user = new UserClass(login, email, history, favourites);
	localStorage.setItem(login, JSON.stringify(user));
};

export const saveUserData = (user: UserTypes) => {
	localStorage.setItem(user.login, JSON.stringify(user));
};

export const loadUser = (login: string) => {
	const loadedJsonUser = localStorage.getItem(login);
	if (!loadedJsonUser) throw new Error('Loading failed');
	return JSON.parse(loadedJsonUser) as UserTypes;
};


class UserClass {
	login: string;
	email: string;
	history: string[];
	favourites: number[];

	constructor(login: string, email: string, history: string[], favourites: number[]) {
		this.login = login;
		this.email = email;
		this.history = history;
		this.favourites = favourites;
	}
}