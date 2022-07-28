import React from 'react';
import './AuthForm.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import useValidation from '../../app/hooks';
import { signUp } from '../../app/reducers/user-slice';
import { setLogin } from '../../app/reducers/localStorage-slice';
import { saveNewUser, loadUser } from '../../app/localStorage';
import { APP_PATHS } from '../../constants/const';

const AuthForm: React.FC<{ header: any }> = (props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		inputRef: inputLoginRef,
		isInvalid: isLoginInvalid,
		validateHandler: validateLoginHandler,
	} = useValidation('login');

	const {
		inputRef: inputEmailRef,
		isInvalid: isEmailInvalid,
		validateHandler: validateEmailHandler,
	} = useValidation('email');

	const submitHandler = (ev: React.FormEvent) => {
		ev.preventDefault();

		const currentLogin = inputLoginRef.current!.value;
		const currentEmail = inputEmailRef.current!.value;
		const isLoginValid = validateLoginHandler(currentLogin);
		const isEmailValid = validateEmailHandler(currentEmail);

		if (isEmailValid && isLoginValid) {
			dispatch(setLogin(currentLogin));
			saveNewUser(currentLogin, currentEmail, [], []);
			const user = loadUser(currentLogin);
			dispatch(signUp(user));
			navigate(APP_PATHS.main);
		}
	};

	return (
		<div className='signUp'>
			<h1>{props.header}</h1>
			<form onSubmit={submitHandler} noValidate>
				<div className='form-item'>
					<label>Login</label>
					<input className='form-item__input' type='login' id='login' required ref={inputLoginRef} />
					{isLoginInvalid && <span>Login is invalid</span>}
				</div>
				<div>
					<label>Email</label>
					<input className='form-item__input' type='email' id='email' required ref={inputEmailRef} />
					{isEmailInvalid && <span>Email is invalid</span>}
				</div>
				<div>
					<button className='form-button' type='submit'>
						{props.header}
					</button>
				</div>
			</form>
		</div>
	);
}

AuthForm.propTypes = {
	header: PropTypes.string,
};

export default AuthForm;