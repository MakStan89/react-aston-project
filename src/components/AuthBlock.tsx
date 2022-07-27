import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { APP_PATHS } from '../constants/const';

const AuthBlock = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	const { isAuth } = useAppSelector((state) => state.userState);
	if (!isAuth) {
		return <Navigate to={APP_PATHS.signIn} state={{ from: location }} replace />;
	}

	return children;
};

export default AuthBlock;