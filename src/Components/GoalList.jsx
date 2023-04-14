import React from 'react'

function GoalList(goalList,setGoalList) {
  return (
<div>
{  
   goalList.map((item,index)=>{
       return (
     <li class="listitems" key={index}>
     <div>
     <h3> {item.firstinput} </h3>
     <p>  {item.secondinput} </p>
     </div>
     </li>
       )})}

   </div>
  )
}

export default GoalList