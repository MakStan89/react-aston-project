import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Search from './components/search/Search';
import Cards from './components/cards/Cards';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import NotFound from './components/notfound/NotFound';
import { AppPath } from './constants/const';


const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<ErrorBoundary>
				<Routes>
					<Route path={AppPath.main} element={<Main />} />
					<Route path={AppPath.search} element={<Search />} />
					<Route path={AppPath.cards} element={<Cards />} />
					<Route path={AppPath.signIn} element={<SignIn />} />
					<Route path={AppPath.signUp} element={<SignUp />} />
					<Route path={AppPath.notFound} element={<NotFound />} />
				</Routes>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

export default App;
