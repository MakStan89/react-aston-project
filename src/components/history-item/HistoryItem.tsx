import React from 'react';
import PropTypes from 'prop-types';
import './HistoryItem.css';
import { HistoryTypes} from '../../types/types';


const HistoryItem = ({ card, index }: HistoryTypes): JSX.Element => {

	const { strDrink, strCategory, strAlcoholic } = card ;

	return (
		<div className='history-item'>
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
