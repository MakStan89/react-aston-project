import React, { useEffect } from 'react';
import './Card.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFavourite, removeFavourite } from '../../app/reducers/user-slice'
import { CardTypes } from '../../types/types';
import { takeUsedFiltres } from '../../app/takeUsedFiltres';
import { saveUserData } from '../../app/localStorage';

const Card = ({ idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic }: CardTypes): JSX.Element => {

	const user = useAppSelector(state => state.userState.user);
	const dispatch = useAppDispatch();
	const changeLike = (favouriteState: boolean, idDrink: string) =>
		dispatch(favouriteState ? removeFavourite(idDrink) : addFavourite(idDrink));
	const likeStatus = user.favourites.includes(idDrink) ? 'card__like like' : 'card__like unLike';
	const stateFilters = useAppSelector((state) => state.filterState);
	const usedFiltres = takeUsedFiltres(stateFilters);
	const categoryChoise = usedFiltres.strCategory;
	const alcoholicChoise = usedFiltres.strAlcoholic;

	const hiddenClass = (
		(categoryChoise && (categoryChoise !== strCategory)) || (alcoholicChoise && (alcoholicChoise !== strAlcoholic)) 
			? 'hidden-card'
			: 'card'
	)
	
	useEffect(() => {saveUserData(user)}, [user]);

	return (
		<>
			<div className={hiddenClass}>
				<div className='card-wrapper'>
					<img className='card-wrapper_image' src={strDrinkThumb} alt=''/>
					<div className={likeStatus} role='button' onClick={(ev) => {
						changeLike(user.favourites.includes(idDrink), idDrink);
						ev.preventDefault()
					}}></div>
				</div>
				<div className='card-date'>
					<h2 className='card-date__drink'>{strDrink}</h2>
					<h4 className='card-date__category'>{strCategory}</h4>
					<h4 className='card-date__alcoholic'>{strAlcoholic}</h4>
				</div>
			</div>
		</>
	);
}

export default Card;
