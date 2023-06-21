// import './CreateListing.scss'
import Thumbnail from '../../assests/Images/unsplashdnd.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './CreateListingPage.scss'
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
              <label for="gametype">Choose a system for you TTRPG:</label>
              <select id="cars" name="cars">
                <option value="Call_of_Cthulhu">Call of Cthulhu</option>
                <option value="Shadowrun">Shadowrun</option>
                <option value="Dungeons_and_Dragons">Dungeons and Dragons</option>
                <option value="Mutants_and_Masterminds">Mutants and Masterminds</option>
              </select>
              <input type="radio" id="online" name="online_check" value="Online" />
              <label for="html">Online?</label>
              <Link to="/listings">
              <button className='btn'>
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