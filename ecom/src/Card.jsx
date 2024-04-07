

import { Link } from "react-router-dom";

const Card = (products) => {
  const { _id, image, name, price } = products;

 
  return (
    <Link to={`/SingleProduct/${_id}`} className="card">
      <div >
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
    </Link>
  );
};

export default Card;
