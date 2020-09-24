import React from "react";
import "./CheckoutItems.css";
import { useStateValue } from "../Stateprovider/StateProvider";

function CheckoutItems(props) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="check-items">
      <div className="checkout-image">
        <img src={props.image} alt={props.category} />
      </div>

      <div className="checkout-info">
        <h1 className="checkout-title">{props.title}</h1>
        {/* <p className="checkout-category">#{props.category}</p> */}
        <h3 className="checkout-price">${props.price}/- only</h3>
        <div>
          <button
            className="checkout-delete"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_BASKET",
                id: props.id,
              });
            }}
          >
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
