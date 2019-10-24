import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

function Points() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
  axiosWithAuth()
  .get("/api/chores/:id/points")
  .then(res => {
    console.log(res.data);
    setPoints(res.data);
  }).catch(err => console.log(err))

  }, [])


  return (
    <>
     <div className="points">
       <h1>Points</h1>
        {points.map(point => (
          <div>
            <div className="point-card">{points.points} 
         </div>
     </div>
      ))
        }
      </div>
      </>
    );


}


export default Points;
