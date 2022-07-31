import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import { APP_PATHS } from '../../constants/const';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeHistory } from '../../app/reducers/user-slice';
import HistoryItem from '../history-item/HistoryItem';

const History = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.userState.user);

	return (
		<div className='history'>
			<h2 className='history-title'>History:</h2>
			<button className='history-clear button' onClick={() => dispatch(removeHistory())}>
				Clear
			</button>
			
			<div className='history-header'>
				<div className='history-header__item'>Index:</div>
				<div className='history-header__item'>Drink:</div>
				<div className='history-header__item'>Category:</div>
				<div className='history-header__item'>Alcoholic:</div>
			</div>
			
			{user.history.map((item: any, index) => (
				<Link to={`${APP_PATHS.search}/?strDrink=${item.strDrink}&strCategory=${item.strCategory}&strAlcoholic=${item.strAlcoholic}`} className='history__link' key={index}>
					<HistoryItem card={item} index={index + 1} />
				</Link>
			))}
		</div>
	);
};

export default History;
