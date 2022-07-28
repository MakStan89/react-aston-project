import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetCardByIdQuery } from '../../app/reducers/api-slice';
import { addFavourite, removeFavourite } from '../../app/reducers/user-slice';
import { APP_PATHS } from '../../constants/const';
import './FavouritesItem.css';

const FavouritesList = ( id: any ): JSX.Element => {

	const strId = Object.values(id).toString();
	const { data, isLoading, isError } = useGetCardByIdQuery(strId);
	const user = useAppSelector(state => state.userState.user);
	const dispatch = useAppDispatch();
	const changeLike = (favouriteState: boolean, strId: string) =>
		dispatch(favouriteState ? removeFavourite(strId) : addFavourite(strId));
	const likeStatus = user.favourites.includes(strId) ? 'card__like like' : 'card__like unLike';

	return (

		<div className='favourites-item'>
			{isLoading && <h2 className='loading'>Loading...</h2>}
			{!isError && data && (
			<Link to={`${APP_PATHS.search}/${data.idDrink}`} className='cardLink' key={data.idDrink}>
				<div className='card'>
					<div className='card-wrapper'>
						<img className='card-wrapper_image' src={data.strDrinkThumb} alt=''/>
						<div className={likeStatus} role='button' onClick={(ev) => {
							changeLike(user.favourites.includes(strId), strId);
							ev.preventDefault()
						}}></div>
					</div>
					<div className='card-date'>
						<h2 className='card-date__drink'>{data.strDrink}</h2>
						<h4 className='card-date__category'>{data.strCategory}</h4>
						<h4 className='card-date__alcoholic'>{data.strAlcoholic}</h4>
					</div>
				</div>
			</Link>
			)}
		</div>
	);
}

export default FavouritesList;