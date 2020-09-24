import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "react-bootstrap/Spinner";
import Bar from "../navbar/Bar";
import Comment from "../Review/Comment";
import Share from "./Share";
import ReactImageZoom from "react-image-zoom";
import {useStateValue} from '../Stateprovider/StateProvider'

const Details = (props) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState();
  const [count, setCount] = useState(1);
  const [heart, setHeart] = useState(false);

  const [{basket},dispatch] = useStateValue();


  let itemId = props.match.params.itemid;
  const imageZoom = {
    width: 400,
    height: 400,  // original image ko ht ra width ho hai
    zoomStyle: "opacity: 1;background-color: gray;",  //yo useful xain testo khasai 
    zoomWidth: 500,
    zoomHeight: 500, // zooom vako image ko ho yo chai ht ra width
    zoomPosition: "original",  //right left top bottom hunxa
    img: `${item.image}`,  //image url api ma yeuta image matrra xa hai tara dui tin ta image vaya sayad usestate onClick on image setState garde hunxa jasto lagxa try chai gaareko xain maile aaile samma
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

  function toggleHeart() {
    setHeart(!heart);
  }

  // console.log("keyprops",props.match.params.itemid);
  return loading ? (
    <Spinner className="spinner" animation="border" variant="primary" />
  ) : (
    // selef made spinner got commentes
    // <Loader />
    <div>
      <Bar style={{ margin: "100px" }} />
      <div className="details">
        <Link to="/">
          <i className="fas fa-arrow-circle-left back "></i>
        </Link>
        <section>
          <div className="image-box">
            {/* <img src={item.image} className="img-info" alt={info.category} /> */}
            <ReactImageZoom className="img-info" {...imageZoom} />
          </div>
          <div className="small">
            <img src={item.image} className="small-img" alt={item.category} />
            <img src={item.image} className="small-img" alt={item.category} />
          </div>
        </section>
        <div className="item-description">
          <div>
            <h1 className="title">{item.title}</h1>
          </div>
          <div className="category-info">
            <p className="p">#{item.category}</p>
          </div>

          <hr className="line" />
          <div>
            <p className="description">{item.description}.</p>
            <hr className="line" />
          </div>

          <div className="price">
            <h2>${item.price}/- only</h2>
            <hr className="line" />
          </div>

          <div className="quantity">
            Quantity:
            <div
              className="count"
              onClick={() => {
                count === 1 ? setCount(1) : setCount(count - 1);
              }}
            >
              -
            </div>
            <h4>{count}</h4>
            <div
              className="count"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </div>
            <div>
              <select className="choose">
                <option className="option" selected value="choose">
                  choose gar
                </option>

                <option className="option" value="thulo">
                  thulo
                </option>
                <option className="option" value="sano">
                  sano
                </option>
                <option className="option" value="chyateko">
                  chyateko
                </option>
                <option value="naya">naya</option>
              </select>
            </div>
          </div>
          <div className="button-cart">
            <i
              onClick={toggleHeart}
              className={
                heart ? "fas fa-heart mutu" : "fas fa-heart redheart mutu"
              }
            ></i>

            <Share value={window.location.href} className="fa-share-alt" />

            <ToastContainer  hideProgressBar={true} autoClose={5000} draggable  limit={3} />
            <button onClick={()=>{
              toast.success(` ${count} ${item.title} added to  your cart`, { position: toast.POSITION.BOTTOM_LEFT });
              if(count===1){

                dispatch ({
                  type:"ADD_TO_BASKET",
                  item:{
                    id:item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    category:item.category
                  }
                });
              }else{
                for(let i=0;i<count;i++){

                dispatch ({
                  type:"ADD_TO_BASKET",
                  item:{
                    id:item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    category:item.category
                  }
                });
                }
              }

            }} className="btn ">
              Add to cart <i class="far fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
      <Comment />
      
    </div>
  );
};

export default Details;
