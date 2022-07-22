import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { AppPath } from '../../constants/const';
import { signOut } from '../../app/reducers/user-slice';



const Header = (): JSX.Element => {
	const isAuth = useAppSelector(state => state.userState.isAuth);
  const dispatch = useAppDispatch();

	return (
		<header className='header'>
			<div className='header-title'>
				<Link to={AppPath.main} className='header-title__link'>Title</Link>
			</div>
			
			{isAuth && (
				<div className='header-user'>
					<Link to={AppPath.favourites} className='header-user__link' >Favourites</Link>
					<Link to={AppPath.history} className='header-user__link'>History</Link>
					<Link to={AppPath.main} className='header-user__link' onClick={() => dispatch(signOut())} >Sign Out</Link>
				</div>
			)}

			{!isAuth && (
				<div className='header-user'>
					<Link to={AppPath.signIn} className='header-user__link'>Sign In</Link>
					<Link to={AppPath.signUp} className='header-user__link'>Sign Up</Link>
				</div>
			)}
		</header>
	)
}

export default Header;