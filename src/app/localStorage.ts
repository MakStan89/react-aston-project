import { UserTypes } from '../types/types';

export const loginVerification = (login: string, registeredLogin: string[]) => {
	return !registeredLogin.includes(login);
};

export const emailVerification = (login: string, email: string) => {
	return localStorage.getItem(`${login}/${email}`) ? true : false;
};

export const loadLoginsFromLS = (): string[] => {
  if (!localStorage.getItem('logins')) localStorage.setItem('logins', JSON.stringify([]));
  return JSON.parse(localStorage.getItem('logins') as string);
};

export const saveNewUser = (login: string, email: string, history: string[], favourites: string[] ) => {
	const localNameValue = `${login}/${email}`;
	const user = new User(login, email, history, favourites, localNameValue);
	localStorage.setItem(localNameValue, JSON.stringify(user));
};

export const saveUserData = (user: UserTypes) => {
	localStorage.setItem(user.localName, JSON.stringify(user));
};

export const loadUser = (login: string, email: string) => {
	const loadedJsonUser = localStorage.getItem(`${login}/${email}`);
	if (!loadedJsonUser) throw new Error('Loading failed');
	return JSON.parse(loadedJsonUser) as UserTypes;
};

class User {
	login: string;
	email: string;
	history: string[];
	favourites: string[];
	localName: string;

	constructor(login: string, email: string, history: string[], favourites: string[], localName: string) {
		this.login = login;
		this.email = email;
		this.history = history;
		this.favourites = favourites;
		this.localName = localName;
	}
}