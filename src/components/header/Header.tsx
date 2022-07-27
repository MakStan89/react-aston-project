import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { APP_PATHS } from '../../constants/const';
import { signOut } from '../../app/reducers/user-slice';

const Header = (): JSX.Element => {
	const isAuth = useAppSelector(state => state.userState.isAuth);
  const dispatch = useAppDispatch();

	return (
		<header className='header'>
			<div className='header-title'>
				<Link to={APP_PATHS.main} className='header-title__link'>Title</Link>
			</div>
			
			{isAuth && (
				<div className='header-user'>
					<Link to={APP_PATHS.favourites} className='header-user__link' >Favourites</Link>
					<Link to={APP_PATHS.history} className='header-user__link'>History</Link>
					<Link to={APP_PATHS.main} className='header-user__link' onClick={() => dispatch(signOut())} >Sign Out</Link>
				</div>
			)}

			{!isAuth && (
				<div className='header-user'>
					<Link to={APP_PATHS.signIn} className='header-user__link'>Sign In</Link>
					<Link to={APP_PATHS.signUp} className='header-user__link'>Sign Up</Link>
				</div>
			)}
		</header>
	)
}

export default Header;