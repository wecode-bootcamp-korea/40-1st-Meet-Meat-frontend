import React from 'react';
import './ReviewListCard.scss';

const ReviewListCard = ({ reviewList }) => {
  const { userName, Date, reviewContent } = reviewList;
  return (
    <li className="detailReviewList">
      <div className="reviewInfo">
        <div className="reviewContentBox">
          <p className="reviewDetail">{reviewContent}</p>
        </div>
        <div className="reviewCostomer">
          <div className="reviewCustomerName">
            <p>{userName}</p>
          </div>
          <p>{Date}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewListCard;
