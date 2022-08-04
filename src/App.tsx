import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Search from './pages/search/Search';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Favourites from './pages/favourites/Favourites';
import NotFound from './pages/notfound/NotFound';
import History from './pages/history/History';
import CardInfo from './pages/card-info/CardInfo';
import AuthBlock from './components/AuthBlock';
import { APP_PATHS } from './constants/const';
import { useAppSelector } from './app/hooks';

export const ThemeContext = React.createContext('bisque');

const App = () => {
	const theme = useAppSelector(state => state.contextState.colorTheme)

	return (
		<BrowserRouter>
			<ThemeContext.Provider value={theme}>
				<Header />
				<ErrorBoundary>
						<Routes>
							<Route path={APP_PATHS.main} element={<Main />} />
							<Route path={APP_PATHS.search} element={<Search />} />
							<Route path={APP_PATHS.cardInfo} element={<CardInfo />} />
							<Route path={APP_PATHS.signIn} element={<SignIn />} />
							<Route path={APP_PATHS.signUp} element={<SignUp />} />
							<Route path={APP_PATHS.favourites} element={<AuthBlock><Favourites /></AuthBlock>} />
							<Route path={APP_PATHS.history} element={<AuthBlock><History /></AuthBlock>} />
							<Route path={APP_PATHS.notFound} element={<NotFound />} />
						</Routes>
				</ErrorBoundary>
			</ThemeContext.Provider>
		</BrowserRouter>
	);
}

export default App;