import React from 'react';
import './ReviewListCard.scss';

const ReviewListCard = ({ reviewList }) => {
  const { userName, date, reviewContent } = reviewList;
  return (
    <li className="reviewListCard">
      <div className="reviewInfo">
        <div className="reviewContentBox">
          <p className="reviewDetail">{reviewContent}</p>
        </div>
        <div className="reviewCostomer">
          <div className="reviewCustomerName">
            <p>{userName}</p>
          </div>
          <p>{date}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewListCard;
