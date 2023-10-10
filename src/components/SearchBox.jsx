import PropTypes from 'prop-types';

const SearchBox = (props) => {
    return (
        <>
            <div className='search-block'>
                <input
                    type='text'
                    className='search-field'
                    value={props.value}
                    onChange={(e) => props.setSearchValue(e.target.value)}
                    placeholder='Type to search...'
                />
            </div>
        </>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string,
    setSearchValue: PropTypes.func,
};

export default SearchBox;
