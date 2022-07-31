import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import { useAppDispatch } from '../../app/hooks';
import { APP_PATHS, KEY_CODES } from '../../constants/const';
import { addHistory } from '../../app/reducers/user-slice';
import { defaultFiltersValues } from '../../filters/filters';
import { changeAllFilters } from '../../app/reducers/filter-slice';

const Main = (): JSX.Element => {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	
	const navigateTo = (value: string) => {
		dispatch(addHistory({ ...defaultFiltersValues, strDrink: value }))
		if (value) {
			dispatch(changeAllFilters({ strDrink: value }))
			navigate(`${APP_PATHS.search}/?strDrink=${inputValue}`);
		} else {
			dispatch(changeAllFilters({ strDrink: ' ' }))
			navigate(`${APP_PATHS.search}`);
		}
	}
	const onKeyDown = (ev: { keyCode: number }) => {
		if (ev.keyCode === KEY_CODES.enter) navigateTo(inputValue);
	};

	return (
		<div className='main'>
			<div className='main__text'>
				<p>Here you can find any cocktails to your taste</p>
			</div>
			<div className='main-search'>
				<input className='main-search__input input' type='text' value={inputValue} onChange={onChange} onKeyDown={onKeyDown} />
				<button className='main-search__button button' onClick={()=>navigateTo(inputValue)}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Main;