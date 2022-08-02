import React, { useRef } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useValidation from '../../app/hooks';
import { signIn } from '../../app/reducers/user-slice';
import { loadUser, loginVerification, emailVerification } from '../../app/localStorage';
import { APP_PATHS } from '../../constants/const';
import { useForm } from 'react-hook-form';
import { SignUpTypes } from '../../types/types';

const SignIn = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { isInvalid: isLoginInvalid } = useValidation('login');
	
	const {isInvalid: isEmailInvalid} = useValidation('email');

	const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<SignUpTypes>({
		defaultValues: { login: '', email: '' },
	});
	const login = useRef({});
	login.current = watch('login', '');
	const registeredLogins = useAppSelector((state) => state.localStorageState);

	const onSubmit = (data: SignUpTypes) => {
		const user = loadUser(data.login, data.email);
		dispatch(signIn(user));
		reset();
		navigate(APP_PATHS.main);
	};

	return (
		<div className='sign-in'>
			<h1 className='sign-in__title'>Sign In</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='sign-in__form form'>
				<div className='form-item'>
					<label className='form-item__label'>Login</label>
					<input className='form-item__input input' {...register('login', {
						validate: { loginVerificat: (v) => !loginVerification(v, registeredLogins) || 'User does not exist' }
					})} type='login' required 
					/>
					{errors.login && <div className='form__error'>{errors.login.message}</div>}
					{isLoginInvalid && <span>Login is invalid</span>}
				</div>
				<div className='form-item'>
					<label className='form-item__label'>Email</label>
					<input className='form-item__input input' {...register('email', {
						validate: {
							emailVerificat: (v) => emailVerification(login.current.toString(), v) || 'Wrong password'
						},
					})} type='email' required  />
					{errors.email && <div className='form__error'>{errors.email.message}</div>}
					{isEmailInvalid && <span>Email is invalid</span>}
				</div>
				<div>
					<button className='form-button button' type='submit'>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
}

export default SignIn;