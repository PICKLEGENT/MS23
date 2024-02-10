import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import MovieList from './components/MovieList';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

function App() {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=8e167d12`;

		const response = await fetch(URL);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('react-movie-app-favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
	};

	const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	return (
		<>
			<div className='wrapper'>
				<header>
					<div className='logo'>
						<h1>Movie Searcher</h1>
					</div>
					<SearchBox
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
					<div className='brand-name'>
						<h1>AR23</h1>
					</div>
				</header>
				<div className='heading-container'>
					<MovieListHeading heading='Movies' />
				</div>
				<div className='row'>
					<MovieList
						movies={movies}
						handleFavoritesClick={addFavoriteMovie}
						favoriteComponent={AddFavorites}
					/>
				</div>
				<div className='heading-container'>
					<MovieListHeading heading='Favorites' />
				</div>
				<div className='row'>
					<MovieList
						movies={favorites}
						handleFavoritesClick={removeFavoriteMovie}
						favoriteComponent={RemoveFavorites}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
