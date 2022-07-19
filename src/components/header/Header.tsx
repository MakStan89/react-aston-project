import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom'
import { AppPath } from '../../constants/const';


const Header = (): JSX.Element => {
	

	return (
		<header className={s.header}>
			<Link to={AppPath.main} className={s.header__link}>
				<div className={s['header-title']}>Title</div>
			</Link>
			<div className = 'header-sign'></div>
		</header>
	)
}

export default Header;