import React from "react";
import "./Checkout.css";
import Bar from "../navbar/Bar";
import { useStateValue } from "../Stateprovider/StateProvider";
import CheckoutItems from "./CheckoutItems";
function Checkout() {
  const [{ basket }] = useStateValue();

  let totalprice = Math.round(
    basket.reduce((amount, dhewa) => amount + dhewa.price, 0)
  );
  function giftDe() {
    if (totalprice > 1000) {
      return <div>you will get suprise gift.</div>;
    } else {
      return <div>To get surprise gift purchase at least $1k </div>;
    }
  }
  return (
    <div>
      <Bar style={{ position: "fixed", top: "0" }} />
      <div>
        <img
          src="https://brandyuva.in/wp-content/uploads/2018/09/wai-wai-print-ads.webp"
          alt=""
          className="checkout-adv"
        />
      </div>
      <div className="check-head">
        {basket?.length === 0 ? (
          <div>
            Your Shopping Basket is empty
            <p>
              You have no items in your basket till now. Tap on Add to cart to
              add
            </p>
          </div>
        ) : (
          <div className="check-left">
            <h2
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "50vw",
              }}
              className="checkout-title"
            >
              Your Basket
            </h2>
            {basket?.map((item) => (
              <CheckoutItems
                id={item.id}
                price={item.price}
                title={item.title}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        )}
        <div className="check-right">
          <div className="title">
            <h1>Checkout Products</h1>
          </div>
          <p className="items-num">
            Total {basket?.length} items added to cart
          </p>
          <h3>
            Amount: $<strong>{totalprice}</strong>
          </h3>
          <div className="gift">{giftDe()}</div>
          <button className="btn-primary"> Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
