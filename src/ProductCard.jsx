/* eslint-disable no-unused-vars */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Productcard(
  // eslint-disable-next-line react/prop-types
  { productImage, model, rating, price, prime, 
    // eslint-disable-next-line react/prop-types
    offerPrice, inCart, setinCart,
  }
) 
{
  const [show, setShow] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isPrice, setIsprice] = useState(true);
  const [isOfferPrice, setIsofferprice] = useState(true);
  const [removecart, setRemoveCart] = useState(false);
  const [addcart, setAddCart] = useState(false);
  const [isPrime, setIsPrime] = useState(true);


  const addbtunfunc = () => {
    //add button function change to Remove button
    setShow(!show);
    setinCart(inCart + 1);
  };
  const remvbtunfunc = () => {
    //Remove button function change to Add button
    setShow(!show);
    setinCart(inCart - 1);
  };

  // if offerPrice or prime product price striked
  const isPricecolor = {
    textDecoration: isPrice ? "line-through" : "none",
    color: isPrice ? "grey" : "rgb(34, 34, 34)",
  };

  // offer price color change state
  const offerPriceColor = {
    color: isOfferPrice ? "red" : "rgb(34, 34, 34)",
  };

  // remove button color change state
  const removeCartBtnStyle = {
    backgroundColor: removecart ? "red" : "",
    color: removecart ? "rgb(34, 34, 34)" : "",
  };

   // prime product color change state
  const primePro = {
    color: isPrime ? "green" : "123",
  };

  const addCartBtnStyle = {
    backgroundColor: addcart ? "" : "red",
    color: addcart ? "" : "rgb(34, 34, 34)",
  };

  return (
    <div className="main-card">
      <img className="imge" src={productImage} alt="no data avaliable" />
      <h4 className="mdel">{model}</h4>
      <h3 className="rating">{rating}</h3>
      {/* {isPrice ? <h3 className="price">{price}</h3> : <h3 className="mrp">{mrp}</h3> } */}
      <h3 style={isPricecolor} className="price">
        {price}
      </h3>
      {/* {isOfferPrice ? <h3 className="mrp">{mrp}</h3> : <h3 className="offer-price">{offerPrice}</h3>} */}
      {primePro ? (
        <h3 style={primePro} className="primep">
          {prime}
        </h3>
      ) : (
        <h3 style={offerPriceColor} className="offer-price">
          {offerPrice}
        </h3>
      )}
      {isOfferPrice ? (
        <h3 style={offerPriceColor} className="offer-price">
          {offerPrice}
        </h3>
      ) : (
        <h3 className="prime">{prime}</h3>
      )}

      {show === true ? (
        <button
          style={removeCartBtnStyle}
          className="bttn"
          onClick={() => addbtunfunc(setRemoveCart(!removeCartBtnStyle))}
        >
          Add to Cart
        </button>
      ) : (
        <button
          style={addCartBtnStyle}
          className="bttn"
          onClick={() => remvbtunfunc(setAddCart(!addCartBtnStyle))}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
}
export default Productcard;
