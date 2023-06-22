import './CreateListingPage.scss'
import React from 'react'
import Thumbnail from '../../assests/Images/unsplashdnd.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './CreateListingPage.scss'
function CreateListing() {
    // const [dndData, setDndData] = useState([]);
  
    // const addItem = () => {
    //   const newItem = 'New Item';
    //   setItems(prevItems => [...prevItems, newItem]);
    // };

       return ( 
        <>
        <div className='flexcontainer'>
        <div className='row'>
        <img src={Thumbnail} alt='Upload-img-preview.jpg' className='uploadimg'/>
        </div>
        <div class="column">
          <div className='uploadform'>
          <form>
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
              <label for="gametype" className='uploadform__label'>Choose a system for you TTRPG:</label>
              <select id="gametype" name="gametype" className='uploadform__input' required>
                <option value="Call_of_Cthulhu">Call of Cthulhu</option>
                <option value="Shadowrun">Shadowrun</option>
                <option value="Dungeons_and_Dragons">Dungeons and Dragons</option>
                <option value="Mutants_and_Masterminds">Mutants and Masterminds</option>
              </select>
              <label for="contact" className='uploadform__label'>Choose a system for you to contact people:</label>
              <select id="contact" name="contact" className='uploadform__input' required>
                <option value="Email">Email</option>
                <option value="Discord">Discord</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Other">Other Please describe in Description</option>
              </select>
              <input type="radio" id="online" name="online_check" value="Online" className='uploadform__smallinput'/>
              <label for="online" className='uploadform__smallinput'>Online?</label>
              <Link to="/listings">
              <button className='btn'>
                Create Listing
              </button>
              </Link>
            </form>
            </div>
          </div>
        </div>
        <Link className='cancelbtn' to="/listings">
          <button className='btn'>
            Cancel
          </button>
        </Link>
  
        </>

    );
}

export default CreateListing;