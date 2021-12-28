import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/minus-math.png"onClick={() => decrement(id)}/>
          <input type="text" placeholder={quantity} disabled />
          <img src="https://img.icons8.com/ios-glyphs/30/000000/add--v1.png" onClick={() => increment(id)}/>
          
        </div>

        <div className="price">
          <h3>RS.{price}</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;