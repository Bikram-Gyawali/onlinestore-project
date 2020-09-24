import React, { useState, useEffect } from "react";
import { Tabs } from "react-bootstrap";
import axios from "axios";
import Data from "../Data/Data";
import "./Tab.css";
// import { Link } from "react-router-dom";
function Tab() {
  const [key, setKey] = useState();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    axios
      .get(url)
      .then((response) => {
        // console.log("this is response",response);
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // for diff category

    const link = ` https://fakestoreapi.com/products/${key}`;
    // console.log("gotnewlinnk", link);
    axios
      .get(link)
      .then((resp) => {
        // console.log("this is response",resp);
        setItems(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const value = categories.map((select) => {
    return select.category;
  });

  // console.log("value",value);

  // remove duplicate from the array
  var result = [];
  result = value.filter((item, index, arr) => {
    if (arr.indexOf(item) === index) {
      return item;
    } else {
      return null;
    }
  });

  // console.log("item",result);

  function handleSelect(k) {
    setKey(k);
    return k;
  }

  return (
    <div className="tabs">
      <Tabs
        defaultActiveKey={key}
        activeKey={key}
        onSelect={handleSelect}
        id="uncontrolled-tab-example"
      >
        <Tab className="tab-items" eventKey="All" title="All">
          <Data type={"All"} />
        </Tab>

        {result.map((sort) => (
          <Tab className="tab-items" value={sort} eventKey={sort} title={sort}>
            <Data type={key} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default Tab;
