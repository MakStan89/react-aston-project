import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setLogin } from './reducers/localStorage-slice';

export const localStorageMiddleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
	if (setLogin.match(action)) {
		const logins = JSON.parse(localStorage.getItem('logins') as string);
		logins.push(action.payload);
		localStorage.setItem('logins', JSON.stringify(logins));
	}
	return next(action);
};