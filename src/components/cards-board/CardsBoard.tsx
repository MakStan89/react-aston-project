import React from 'react';
import { CardInfoTypesArray, CardTypes } from '../../types/types';
import Card from '../card/Card';
import './CardsBoard.css';

const CardsBoard = ({ cardsArray }: CardInfoTypesArray ): JSX.Element => {

	return (
		<div className='cards-board'>
			{cardsArray.map((item: CardTypes) => (
				<Card idDrink={item.idDrink}
							strDrink={item.strDrink}
							strCategory={item.strCategory}
							strAlcoholic={item.strAlcoholic}
							strDrinkThumb={item.strDrinkThumb}
							key={item.idDrink}
				/>
			))}
		</div>
	);
};

export default CardsBoard;