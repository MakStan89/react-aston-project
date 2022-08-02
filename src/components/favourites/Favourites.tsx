import React from 'react';
import './Favourites.css';
import { useAppSelector } from '../../app/hooks';
import FavouritesItem from '../favourites-item/FavouritesItem';

const Favourites = () => {

	const favourites = useAppSelector((state) => state.userState.user.favourites);
	let count = 0;

	return (

		<div className='favourites'>
			{favourites.map((el) => (
				<FavouritesItem id={el} key={count++} />
			))}
		</div>
	);
}

export default Favourites;

