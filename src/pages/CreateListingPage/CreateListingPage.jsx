import React from 'react';
import { Link } from 'react-router-dom';
import './CreateListingPage.scss';
import Thumbnail from '../../assests/Images/unsplashdnd.jpg';

function CreateListing() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const game = {
      id: Math.floor(Math.random() * 1000) + 11,
      title: event.target.title.value,
      description: event.target.description.value,
      author: "Tristan Pernot",
      gametype: event.target.gametype.value,
      contact: event.target.contact.value
    };

    localStorage.setItem("game", JSON.stringify(game));
  };

  return (
    <div className='wholecontainer'>
      <div className='flexcontainer'>
        <div className='row'>
          <img src={Thumbnail} alt='Upload-img-preview.jpg' className='uploadimg' />
        </div>
        <div className="column">
          <div className='uploadform'>
            <form className='uploadform' onSubmit={handleSubmit}>
              <label htmlFor='title' className='uploadform__label'>
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
              <label htmlFor="gametype" className='uploadform__label'>Choose a system for your TTRPG:</label>
              <select id="gametype" name="gametype" className='uploadform__input' required>
                <option value="Call of Cthulhu">Call of Cthulhu</option>
                <option value="Shadowrun">Shadowrun</option>
                <option value="Dungeons and Dragons">Dungeons and Dragons</option>
                <option value="Mutants and Masterminds">Mutants and Masterminds</option>
              </select>
              <label htmlFor="contact" className='uploadform__label'>Choose a system for you to contact people:</label>
              <select id="contact" name="contact" className='uploadform__input' required>
                <option value="Email">Email</option>
                <option value="Discord">Discord</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Other">Other Please describe in Description</option>
              </select>
              <div>
              <input type="radio" id="online" name="online" value="online" className='uploadform__smallinput' />
              <label htmlFor="online" className='uploadform__smalllabel'>Is the game going to be Online?</label>
              </div>
              <div className='uploadform__btn-container'>
              <Link to="/listings">
                <button className='cancelbtn' type='button'>
                    Cancel
                </button>
              </Link>
              <button className='butn' type="submit">
                Create Listing
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CreateListing;
