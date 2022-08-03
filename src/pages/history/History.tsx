import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import { APP_PATHS } from '../../constants/const';
import { useAppDispatch, useAppSelector, useClass } from '../../app/hooks';
import { removeHistory } from '../../app/reducers/user-slice';
import HistoryItem from '../../components/history-item/HistoryItem';
import { ThemeContext } from '../../App';

const History = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.userState.user);
	const theme = useContext(ThemeContext);
	const historyTheme = useClass([theme, 'history-clear button']);

	return (
		<div className='history'>
			<h2 className='history-title'>Search history</h2>
			<button className={historyTheme} onClick={() => dispatch(removeHistory())}>
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
