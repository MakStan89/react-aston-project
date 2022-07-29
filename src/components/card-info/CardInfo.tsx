import React from 'react';
import './CardInfo.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetCardByIdQuery } from '../../app/reducers/api-slice';
import { addFavourite, removeFavourite } from '../../app/reducers/user-slice'
import { takeUsedFiltres } from '../../app/takeUsedFiltres';

const CardInfo = (): JSX.Element => {

	const user = useAppSelector(state => state.userState.user); 
	const { id } = useParams();

	const { data, isLoading, isError } = useGetCardByIdQuery(id);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const strId = (id ?? 0).toString()
	const changeLike = (favouriteState: boolean, id: string) =>
		dispatch(favouriteState ? removeFavourite(id) : addFavourite(id));
	const likeStatus = user.favourites.includes(strId) ? 'card-info__like like' : 'card-info__like unLike';
	const stateFilters = useAppSelector((state) => state.filterState);
	const usedFiltres = takeUsedFiltres(stateFilters);
	const categoryChoise = usedFiltres.strCategory;
	const alcoholicChoise = usedFiltres.strAlcoholic;
	const hiddenClass = (
		(categoryChoise && (categoryChoise !== data.strCategory)) || (alcoholicChoise && (alcoholicChoise !== data.strAlcoholic)) 
			? 'hidden-card-info'
			: 'card-info'
	)

	return (
		<>
			{isLoading && <h2 className='loading'>Loading...</h2>}
			{!isError && data && (
				<div className={hiddenClass}>
					<div className='card-info-wrapper'>
						<img className='card-info-wrapper_image' src={data.strDrinkThumb} alt='' />
						<div className={likeStatus} role='button' onClick={(ev) => {
							changeLike(user.favourites.includes(strId), strId);
							ev.preventDefault()
						}}></div>
					</div>
					<div className='card-info-date'>
						<h2 className='card-info-date__title'>{data.strDrink}</h2>
						<div className='cacard-inford-date__category'>{data.strCategory}</div>
						<div className='card-info-date__alcoholic'>{data.strAlcoholic}</div>
						<div className='card-info-date__glass'>{data.strGlass}</div>
						<div className='card-info-date__instructions'>{data.strInstructions}</div>
					</div>
					<button className='card-info-button button' onClick={() => navigate(-1)}>Go Back</button>
				</div>
			)}
		</>
	);
}

export default CardInfo;