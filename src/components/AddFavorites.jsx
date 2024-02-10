import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function AddFavorites() {
	return (
		<>
			<button className='add-fav-btn'>
				<FontAwesomeIcon icon={faHeart} />
			</button>
		</>
	);
}

export default AddFavorites;
