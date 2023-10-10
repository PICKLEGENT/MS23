import PropTypes from 'prop-types';

const MovieListHeading = (props) => {
    return (
        <div className='heading'>
            <span>{props.heading}</span>
        </div>
    );
};

MovieListHeading.propTypes = {
    heading: PropTypes.string,
};

export default MovieListHeading;
