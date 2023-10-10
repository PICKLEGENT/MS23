import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import MovieList from './components/MovieList';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
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
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem(
            'react-movie-app-favourites',
            JSON.stringify(items)
        );
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
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
                        handleFavouritesClick={addFavouriteMovie}
                        favouriteComponent={AddFavourites}
                    />
                </div>
                <div className='heading-container'>
                    <MovieListHeading heading='Favourites' />
                </div>
                <div className='row'>
                    <MovieList
                        movies={favourites}
                        handleFavouritesClick={removeFavouriteMovie}
                        favouriteComponent={RemoveFavourites}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
