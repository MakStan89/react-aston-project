import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Search from './components/search/Search';
import History from './components/search/history/History';
import Cards from './components/cards/Cards';
import Card from './components/cards/card/Card';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Favourites from './components/favourites/Favourites';
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
					<Route path={AppPath.history} element={<History />} />
					<Route path={AppPath.cards} element={<Cards />} />
					<Route path={AppPath.card} element={<Card />} />
					<Route path={AppPath.signIn} element={<SignIn />} />
					<Route path={AppPath.signUp} element={<SignUp />} />
					<Route path={AppPath.favourites} element={<Favourites />} />
					<Route path={AppPath.notFound} element={<NotFound />} />
				</Routes>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

export default App;
