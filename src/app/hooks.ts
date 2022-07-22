import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useState, useRef } from 'react';

const useValidation = (inputType: string) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInvalid, setIsInvalid] = useState(false);

	const validateInput = (input: string) => {
		const pattern = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
		switch (inputType) {
			case 'login':
				return pattern.test(input) && input.trim().length >= 4;

			case 'email':
				return input.trim().length >= 3 && input.includes('@');

			default:
				console.log('Unknown input type');
		}
	};

	const submitHandler = (currentValue: string) => {
		let isValid = validateInput(currentValue);
		setIsInvalid(!isValid);

		return isValid;
	};

	return { inputRef, isInvalid, submitHandler };
};


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useValidation;