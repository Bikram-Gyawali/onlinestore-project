import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Star.css';

const Star=()=> {
  const [rate, setRate] = useState();
  
  return (
  
    <div>
        
        {[...Array(5)].map((star, i) => {
            const rateValue = i + 1;

          return (
            <label className="radio-line" htmlFor="star">
              <input
                type="radio"
                name="rate"
                value={rateValue}
                id="rate"
                onClick={() => setRate(rateValue)}
                />

              <FaStar className="star" size={30} color={rateValue <= rate ? "red" : "pink"} />
            </label>
          );
        })}
      </div>
 
  );
}

export default Star;
