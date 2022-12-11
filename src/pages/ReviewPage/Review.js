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
            <ReviewListCard key={reviewList.reviewId} reviewList={reviewList} />
          );
        })}
        {/* 컴포넌트 화 된 li를 불러들어오는 것 */}
      </ul>
    </div>
  );
};

export default Review;
