import React from 'react';
import { Link } from 'react-router-dom';
import { APP_PATHS } from '../../constants/const';
import { CardInfoTypesArray, CardTypes } from '../../types/types';
import Card from '../card/Card';
import './CardsBoard.css';

const CardsBoard = ({ cardsArray }: CardInfoTypesArray): JSX.Element => {

	return (
		<div className='cards-board'>
			{cardsArray.map((item: CardTypes) => (
				<Link to={`${APP_PATHS.search}/${item.idDrink}`} className='cardLink' key={item.idDrink}>
					<Card idDrink={item.idDrink}
								strDrink={item.strDrink}
								strCategory={item.strCategory}
								strAlcoholic={item.strAlcoholic}
								strDrinkThumb={item.strDrinkThumb} />
			</Link>
			))}
		</div>
	);
};

export default CardsBoard;