import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import './GetSingleListing.scss';
import Thumbnail from '../../assests/Images/Listingthumbnails.jpg';

function ListingPage() {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const game = localStorage.getItem('game');
    if (game) {
      const parsedGame = JSON.parse(game);
      const result = data.find((item) => item.id === parsedGame.id);
      if (!result) {
        data.push(parsedGame);
      }
    }


    if (id) {
      const result = data.find((item) => item.id === parseInt(id));
      setSingleItem(result);
      setComments(result?.comments || []);
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const newComment = {
      id: Math.floor(Math.random() * 1000) + 11,
      name: 'Tristan Pernot',
      comment,
    };
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    setComments((prevComments) => [...prevComments, newComment]);
    event.target.comment.value = '';
  };

  return (
    <div>
      <img src={Thumbnail} alt='Thumbnail' className='thumbnail' />
      <h1>{singleItem?.title}</h1>
      <span className='bold'>Description:</span>
      <p className='describe'>
       {singleItem?.description}
      </p>
      <div className='description'>
        <div className='description__content'>
          <p>
            <span className='bold'>Game Master:</span> {singleItem?.author}
          </p>
          <p className='description__content'>
            <span className='bold'>Preferred Contact Method:</span> {singleItem?.contact}
          </p>
        </div>
        <p className='description__content'>
          <span className='bold'>System:</span> {singleItem?.gametype}
        </p>
        <p className='description__content'>
          This game is {singleItem?.online ? 'Online' : 'Offline'}
        </p>
      </div>

      <div className='comments'>
        <h2>Applications</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form__input'
            id='comment'
            name='comment'
            placeholder='Apply here'
            required
          />
          <button className='btn' type='submit'>
            Apply
          </button>
        </form>
        {comments.map((comment) => (
          <div key={comment.id} className='commentlist__comment'>
            <h3 className='commentlist__comment-name'>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
