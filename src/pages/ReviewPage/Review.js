import React, { useEffect, useState } from 'react';
import ReviewListCard from './ReviewListCard/ReviewListCard';
import './Review.scss';

const Review = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch('/data/ReviewList.json', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'Get',
    })
      .then(response => response.json())
      .then(result => {
        setContents(result.reviewList);
      });
  }, []);

  return (
    <div className="review">
      <div className="reviewUpLoad">
        <input className="reviewUpLoadComment" type="text" />
        <button className="reviewUpLoadCommentBtn">게시</button>
      </div>
      <ul>
        {contents.map(reviewList => {
          return (
            <ReviewListCard key={reviewList.reviewID} reviewList={reviewList} />
          );
        })}
      </ul>
    </div>
  );
};

export default Review;
