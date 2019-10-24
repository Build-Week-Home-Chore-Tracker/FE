import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";


const initialPoints = {
    totalPoints: 0,
    bonusPoints: 0
  }
function Points() {
    const [points, setPoints] = useState(initialPoints);

  
  useEffect(() => {
    axiosWithAuth()
    .get(`/chores/${localStorage.getItem("userId")}/points`)
    // .get(`/chores/2/points`)
    .then(res => {
      console.log(res.data);
      setPoints(res.data[0]);
  }).catch(err => console.log(err))
  }, [])


  return (
    <>
     <div className="points">
       <h1>Points</h1>
       <div>Total: {points.totalPoints} </div>
       <div>Bonus: {points.bonusPoints} </div>
        {/* {points.map(point => (
          <div>
            <div className="point-card">{points.points} 
         </div>
     </div>
      ))
        } */}
      </div>
      </>
    );


}


export default Points;
