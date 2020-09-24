import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../Stateprovider/StateProvider";

function Card(props) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="list">
        <ToastContainer
          hideProgressBar={true}
          autoClose={5000}
          draggable
          limit={3}
        />
        {props.value.map((item) => (
          <div className="card">
            <img className="image" src={item.image} alt={item.category} />
            <div className="info">
              <h3 className="titles" key={item.id}>
                <NavLink
                  className="link-to"
                  to={`/details/${item.id}/${item.category}`}
                >
                  {item.title}
                </NavLink>
              </h3>
              <div className="head">
                <h4>Price:</h4>
                <p className="price"> ${item.price}</p>
              </div>
              <div></div>
              <div className="head">
                <p>Category:</p>
                <p className="category">{item.category}</p>
              </div>

              <button
                className="add"
                onClick={(e) => {
                  console.log("notify", e);
                  e.preventDefault();
                  dispatch({
                    type: "ADD_TO_BASKET",
                    item: {
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      category: item.category,
                    },
                  });
                  toast.success(`${item.title} added to  your cart`, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }}
              >
                <i className="far fa-plus-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
