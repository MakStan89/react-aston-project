import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Search.css';
import { useGetCardsQuery } from '../../app/reducers/api-slice';
import CardsBoard from '../cards-board/CardsBoard';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { takeUsedFiltres } from '../../app/takeUsedFiltres';
import { CardInfoTypes } from '../../types/types';
import { defaultFiltersValues } from '../../filters/filters';
import { addHistory } from '../../app/reducers/user-slice';
import { ALCOHOLIC, CATEGORY } from '../../constants/const';
import { changeAllFilters } from '../../app/reducers/filter-slice';

const Search = () => {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const { register, handleSubmit, reset } = useForm<CardInfoTypes>({
		defaultValues: {
			strDrink: searchParams.get('strDrink') ?? '',
			strCategory: searchParams.get('strCategory') ?? '',
			strAlcoholic: searchParams.get('strAlcoholic') ?? '',
		},
	});

	const createSetParams = (obj: CardInfoTypes) => {
		const newParams = createSearchParams(takeUsedFiltres(obj));
		setSearchParams(newParams);
	};

	const onSubmit = (obj: CardInfoTypes) => {
		const newObj = { ...defaultFiltersValues, ...obj };
		createSetParams(newObj);
		dispatch(addHistory(newObj));
		dispatch(changeAllFilters(newObj));
		return newObj;
	};

	const stateFilters = useAppSelector((state) => state.filterState);
	const usedFiltres = takeUsedFiltres(stateFilters);
	const currentInput = Object.values(usedFiltres)[0];
	const { data, isLoading, isError } = useGetCardsQuery(currentInput);
	
	return (
		<div className='search'>
			<form onSubmit={handleSubmit(onSubmit)} className='search-form'>
				<div className='search-form-selectors'>
					<div className='search-form-item'>
						<label className='search-form-item__title'>Drink:</label>
						<input {...register('strDrink')} className='search-form-item__input input' />
					</div>
					<div className='search-form-item'>
						<label className='search-form-item__title'>Category:</label>
						<select {...register('strCategory')} className='search-form-item__input input'>
							{CATEGORY.map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
					</div>
					<div className='search-form-item'>
						<label className='search-form-item__title'>Alcoholic:</label>
						<select {...register('strAlcoholic')} className='search-form-item__input input'>
							{ALCOHOLIC.map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='search-form-buttons'>
					<input type='submit' value='Submit' className='search-form__submit button' />
					<input type='reset' value='Reset' className='search-form__reset button' onClick={() => {
							reset();
							handleSubmit(onSubmit)();
						}}
					/>
				</div>
			</form>

			{isLoading && <h2 className='loading'>Loading...</h2>}
			{isError && <h2 className='search__error'>Something went wrong...</h2>}
			{data?.length &&  (
				<CardsBoard cardsArray={data} />
			)}
		</div>
	);
};


export default Search;
