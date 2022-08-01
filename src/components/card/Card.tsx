import React, { useEffect } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFavourite, removeFavourite } from '../../app/reducers/user-slice'
import { CardTypes } from '../../types/types';
import { APP_PATHS } from '../../constants/const';
import { takeUsedFiltres } from '../../app/takeUsedFiltres';
import { saveUserData } from '../../app/localStorage';

const Card = ({ idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic }: CardTypes): JSX.Element => {

	const user = useAppSelector(state => state.userState.user);
	const dispatch = useAppDispatch();
	const changeLike = (isFavourite: boolean, id: string) =>
		dispatch(isFavourite ? removeFavourite(id) : addFavourite(id));
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
	useEffect(() => { saveUserData(user) }, [user]);

	return (
		<>
			<div className={hiddenClass}>
				<Link to={`${APP_PATHS.search}/${idDrink}`} className='cardLink' key={idDrink}>
					<div className='card-wrapper'>
						<img className='card-wrapper__image' src={strDrinkThumb} alt='' />
						<div className={likeStatus} role='button' onClick={(ev) => {
							changeLike(user.favourites.includes(idDrink), idDrink);
							ev.preventDefault()
						}}></div>
					</div>
					<div className='card-data'>
						<h2 className='card-data__title'>{strDrink}</h2>
						<h5 className='card-data__type'>{strCategory}</h5>
						<h4 className='card-data__type'>{strAlcoholic}</h4>
					</div>
				</Link>
			</div>
		</>
	);
}

export default Card;
