import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { APP_PATHS } from '../../constants/const';
import { signOut } from '../../app/reducers/user-slice';
import { setContext } from '../../app/reducers/context-slice';

const Header = (): JSX.Element => {
	const isAuth = useAppSelector(state => state.userState.isAuth);
	const login = useAppSelector(state => state.userState.user.login);
	const dispatch = useAppDispatch();
	const theme = useAppSelector(state => state.contextState.colorTheme)
	const headerTheme = (theme === 'bisque' ? 'header theme-bisque' : theme === 'white' ? 'header theme-white' : 'header theme-skyblue');

	return (
		<header className={headerTheme}>
			<div className='header-title'>
				<Link to={APP_PATHS.main} className='header-title__link'>COCKTAIL WORLD</Link>
			</div>
			
			{isAuth && (
				<div className='header-user'>
					<div className='header-user-top'>
						<Link to={APP_PATHS.favourites} className='header-user-top__link' >Favourites</Link>
						<Link to={APP_PATHS.history} className='header-user-top__link'>History</Link>
						<Link to={APP_PATHS.main} className='header-user-top__link' onClick={() => dispatch(signOut())} >Sign Out</Link>
					</div>
					<div className='header-user-bottom'>
						<div className='header-user-bottom__login'><h2>{login}</h2></div>
						<div className='header-user-bottom-theme theme'>
							<h4 className='theme__title'>Theme:</h4>
							<button className='theme__bisque' onClick={() => dispatch(setContext('bisque'))}>bisque</button>
							<button className='theme__white' onClick={() => dispatch(setContext('white'))}>white</button>
							<button className='theme__skyblue' onClick={() => dispatch(setContext('skyblue'))}>skyblue</button>
						</div>
					</div>
				</div>
			)}

			{!isAuth && (
				<div className='header-user'>
					<div className='header-user-item'>
						<Link to={APP_PATHS.signIn} className='header-user__link'>Sign In</Link>
						<Link to={APP_PATHS.signUp} className='header-user__link'>Sign Up</Link>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header;