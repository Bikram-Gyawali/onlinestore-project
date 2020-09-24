import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

function Data(props) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // let arr = props.value;

  // let result = datas.map(get=>{
  //         return get.category;
  //     })
  //     console.log("result",result[arr]);
  // if(result[0] === "all" ){
  //   return console.log()
  // }
  function handleValue(){
    
    if (props.type === "All"){
      return datas; 
    }else{
      return content ;
      
    }
  }

  let content = datas.filter((item) => {
    // console.log("Item got ", item);
    //access state here ;
    let currentState = props.type;
    return item.category === currentState;
  });

 
  return (
    <div>
      {
        // datas.filter(datafilter=>datafilter.category('M')).map(extract=>(

        <Card value={handleValue()} />
        // ))
      }
    </div>
  );
}

export default Data;


// let content = datas.filter((item) => {
//   // console.log("Item got ", item);
//   //access state here ;
//   let currentState = props.type;
//   return item.category === currentState;
// });