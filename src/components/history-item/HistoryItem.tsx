import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './HistoryItem.css';
import { HistoryTypes} from '../../types/types';
import { ThemeContext } from '../../App';


const HistoryItem = ({ card, index }: HistoryTypes): JSX.Element => {

	const { strDrink, strCategory, strAlcoholic } = card;
	const theme = useContext(ThemeContext);
	const historyItemTheme = (theme === 'bisque' ? 'history-item theme-bisque' : theme === 'white' ? 'history-item theme-white' : 'history-item theme-skyblue');

	return (
		<div className={historyItemTheme}>
			<div className='history-item__field'>
				<span>{index}</span>
			</div>
			<div className='history-item__field'>
				<span>{strDrink}</span>
			</div>
			<div className='history-item__field'>
				<span>{strCategory}</span>
			</div>
			<div className='history-item__field'>
				<span>{strAlcoholic}</span>
			</div>
		</div>
	);
}

HistoryItem.propTypes = {
	card: PropTypes.object,
	index: PropTypes.number
};

export default HistoryItem;
