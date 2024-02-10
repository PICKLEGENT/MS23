import PropTypes from 'prop-types';
import Blur from 'react-blur';

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<Blur
					img={movie ? movie.Poster : null}
					blurRadius={30}
					enableStyles
					className='movie-cart'
					key={index}
				>
					<img
						src={movie ? movie.Poster : null}
						alt={movie ? movie.Title : null}
						className='movie-poster'
					/>
					<div className='movie-details'>
						<div className='movie-name'>
							<p>{movie ? movie.Title : null}</p>
						</div>
						<div className='movie-year'>
							<p>{movie ? movie.Year : null}</p>
						</div>
					</div>
					<div
						onClick={() => props.handleFavoritesClick(movie)}
						className='fav-btn'
					>
						<FavoriteComponent />
					</div>
				</Blur>
			))}
		</>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array,
	handleFavoritesClick: PropTypes.func,
	favoriteComponent: PropTypes.any,
};

export default MovieList;
