import React from 'react';
import './ReviewListCard.scss';

const ReviewListCard = ({ reviewList }) => {
  const { userName, date, reviewContent } = reviewList;

  const maskingName = userName.replace(/(?<=.{1})./gi, '*');

  return (
    <li className="reviewListCard">
      <div className="reviewInfo">
        <div className="reviewContentBox">
          <p className="reviewDetail">{reviewContent}</p>
        </div>
        <div className="reviewCostomer">
          <div className="reviewCustomerName">
            <p>{maskingName}</p>
          </div>
          <p>{date}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewListCard;
