// import './CreateListing.scss'
import Thumbnail from '../../assests/Images/unsplashdnd.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
function CreateListing() {

  // new video object parameter
      function addListing (newListing) {
        axios
        .post('http://localhost:8080/videos', newListing)
        .then((result) => {
        })
        .catch((error) => {
        console.error(error);
        });
      }

      const handleFormSubmit = (event) => {
        event.preventDefault();
        const newListing = {
          title: event.target.title.value,
          gametype: event.target.gametype.value,
          description: event.target.description.value,
        };
        addListing(newListing);
      }

       return ( 
        <>
        <div className='flexcontainer'>
        <div className='row'>
        <img src={Thumbnail} alt='Upload-img-preview.jpg' className='uploadimg'/>
        </div>
        <div class="column">
          <div className='uploadform'>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor='title'className='uploadform__label'>
                Title of your game
              </label>
              <input
                type='text'
                id='title'
                className='uploadform__input'
                name='title'
                placeholder='Add a Title to your game'
                required
              />
            <label htmlFor='description' className='uploadform__label'>
                Add a Description of what your game is about
              </label>
              <input
                type='text'
                id='description'
                className='uploadform__input'
                name='description'
                placeholder='Give your game a description'
                required
              />
              <Link to="/listings">
              <button className='btn__upload'>
                Create Listing
              </button>
              </Link>
            </form>
            </div>
          </div>
        </div>
        <div className='buttons'>
        <Link className='cancelbtn' to="/listings">
          cancel
        </Link>
        </div>
    
  
        </>

    );
}

export default CreateListing;