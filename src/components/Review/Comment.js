import React, { useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import "./Comment.css";
import Star from "../Star/Star";
const Comment = () => {
  const [collectedData, setCollectedData] = useState([
    { id: "1", name: "Bikram Gyawali", email:"bicky34@gmail.com", comment: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci rem sequi consectetur ullam atque laborum vitae in voluptatem minima! Expedita?" },
    { id: "2", name: "Robin Hood",email:"hoodrobinhod123@gmail.com", comment: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci rem sequi consectetur ullam atque laborum vitae in voluptatem minima! Expedita?" },
  ]);
  const [name, setName] = useState([]);
  const [comment, setComment] = useState([]);
  const [email, setEmail] = useState([]);
  const generator = new AvatarGenerator();
  generator.generateRandomAvatar("avatar");

  function getName(e) {
    setName(e.target.value);
  }
  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getComment(e) {
    setComment(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();
    setName([name]);

    let tmpData = collectedData;
    tmpData.unshift({ name, comment,email });
    setCollectedData(tmpData);
  }

  return (
    <div className="review-box">
      <h1>CUSTOMER REVIEW SECTION</h1>
      <Star/>
      <form
        className="form"
        onSubmit={(e) => {
          formSubmit(e);
        }}
        action="submit"
      >
        <div>
          <div className="username">
            <input
              required
              value={name}
              type="text"
              placeholder="Your name"
              onChange={(e) => {
                getName(e);
              }}
            />
            <div className="email">
              <input 
                required
                type="mail"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => {
                  getEmail(e);
                }}
              />
            </div>
          </div>
          <textarea  required wrap="on" rows="1" column="1"
            onChange={(e) => {
              getComment(e);
            }}
            className="review"
            placeholder="Your comment"
          >
           
          </textarea>
          <input type="submit" className="post" value="POST"></input>
          
        </div>
      </form>

      {collectedData.map((element, index) => {
        // console.log("index", index);
        return (
          <div className="review-list">
            <div className="review-name">
       
              <p > {element.name}<code className="email-cm">-{element.email}</code></p>
            <span className="review-comment">
              <p>{element.comment}</p>
            </span>
            </div>

            <button
              className="delete"
              key={index}
              onClick={() => {
                const delRev = [...collectedData];
                delRev.splice(index, 1);
                setCollectedData(delRev);
              }}
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
