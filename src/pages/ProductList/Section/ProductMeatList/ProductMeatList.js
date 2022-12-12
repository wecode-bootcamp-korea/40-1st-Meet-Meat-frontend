import React from 'react';
// import { useNavigate } from 'react-router-dom';
import ProductListCard from './ProductListCard/ProductListCard';

const ProductMeatList = ({ data }) => {
  // const [count, setCount] = useState(1);
  // const [priceAmount, setPriceAmount] = useState(1);
  // const navigate = useNavigate();
  // const goToDetails = event => {
  //   navigate(`/product-page/${event.target.id}`);
  // };

  return (
    <div className="productListData">
      <ul className="productListDataSquare">
        {data.map(meat => {
          return <ProductListCard key={meat.meatId} meat={meat} />;
        })}
      </ul>
    </div>
  );
};

export default ProductMeatList;
