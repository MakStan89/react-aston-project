import React, { useEffect } from 'react';
import './CardInfo.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetCardByIdQuery } from '../../app/reducers/api-slice';
import { addFavourite, removeFavourite } from '../../app/reducers/user-slice'
import { saveUserData } from '../../app/localStorage';

const CardInfo = (): JSX.Element => {

	const user = useAppSelector(state => state.userState.user); 
	const { id } = useParams();

	const { data, isLoading, isError } = useGetCardByIdQuery(id);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const strId = (id ?? 0).toString()
	const changeLike = (isFavourite: boolean, id: string) =>
		dispatch(isFavourite ? removeFavourite(id) : addFavourite(id));
	const likeStatus = user.favourites.includes(strId) ? 'card-info-img__like like' : 'card-info-img__like unLike';
	useEffect(() => { saveUserData(user) }, [user]);

	return (
		<>
			{isLoading && <h2 className='loading'>Loading...</h2>}
			{!isError && data && (
				<div className='card-info-wrapper'>
					<div className='card-info'>
						<div className='card-info-image'>
							<img className='card-info-image__img' src={data.strDrinkThumb} alt='' />
								<div className={likeStatus} role='button' onClick={(ev) => {
									changeLike(user.favourites.includes(strId), strId);
									ev.preventDefault()
								}}></div>
						</div>
						<div className='card-info-data data'>
							<h1 className='data__title'>{data.strDrink}</h1>
							<div className='data-info'>
								<div className='data-info__item'>Category: {data.strCategory}</div>
								<div className='data-info__item'>{data.strAlcoholic}</div>
								<div className='data-info__item'>Glass: {data.strGlass}</div>
								<div className='data-info__item'><p>{data.strInstructions}</p></div>
							</div>
						</div>
					</div>
					<button className='card-info-button button' onClick={() => navigate(-1)}>Go Back</button>
				</div>
			)}
		</>
	);
}

export default CardInfo;