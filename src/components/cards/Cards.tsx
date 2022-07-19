import React from 'react';
import s from './Cards.module.css';
import Card from './card/Card';


const Cards = () => {
	return (
		<div className={s.cards}>
			<Card />
		</div>
	);
}

export default Cards;