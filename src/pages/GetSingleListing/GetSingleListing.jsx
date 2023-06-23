import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import './GetSingleListing.scss'
import Thumnail from '../../assests/Images/Listingthumbnails.jpg'

function ListingPage() {
  const { id } = useParams();
  // const [listing, setListing] = useState(data);
  const [singleItem, setSingleItem] = useState();

  const getSelectedItem = (id) => {
    console.log("id: ", id);
    console.log("testid: ", data[data.length - 1].id);
    const result = data.find((item) => item.id === id);
    setSingleItem(result);
  };

  useEffect(() => {
    console.log("running useEffect")
    const game = localStorage.getItem('game');
    if (game) {
      const parsedGame = JSON.parse(game);
      const result = data.find((item) => item.id === parsedGame.id);
      if (!result){
        data.push(parsedGame);
      }
        
    }
    if (id) {
      getSelectedItem(parseInt(id));
    }

  }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     getSelectedItem(parseInt(id));
  //   }
  // }, [id]);

  console.log('id params', id);
  console.log(data);
  console.log('single item', singleItem);

  return (
    <div>
        <img src={`${Thumnail}`} alt='Thumbnail' className='thumbnail' />
        <div className='description'>
            <div className='description__content'>
                <h1>{singleItem?.title}</h1>
                <p>Description: {singleItem?.description}</p>
            </div>
            <div className='description__content'>
                <p>Game Master: {singleItem?.author}</p>
                <p>Game Type: {singleItem?.gametype}</p>
            </div>
            <p className='description__content'>Preferred Contact Method: {singleItem?.contact}</p>
            <p className='description__content'>This game is {singleItem?.online ? 'Online' : 'Offline'}</p>
        </div>

      <div className="comments">
        <h4>Applications</h4>
        {singleItem?.comments && singleItem.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}</p>
            <p>Comment: {comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
