import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function RemoveFavorites() {
	return (
		<>
			<button className='remove-fav-btn'>
				<FontAwesomeIcon icon={faHeart} />
			</button>
		</>
	);
}

export default RemoveFavorites;
