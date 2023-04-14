import React from 'react';

function Form({firstinput,setFirstInput,secondinput,setSecondInput,goalList,setGoalList}) {
  
    const formData = (e) => {
     e.preventDefault();
     
    }

    const deleteItem=({index}) => {
      let list = [...goalList];
      list.splice(index, 1);
      setGoalList(list);
    }

    const onAdd = () =>{
      let newList = {
      firstinput:firstinput,
      secondinput:secondinput,
      }

      let updatedList = [...goalList];
      updatedList.push(newList);
      setGoalList(updatedList);

      setFirstInput('')
      setSecondInput('')
    }
  
  return (
    <form onSubmit={formData}>
        <input type="text" placeholder='Enter your goal' className='inputs' value={firstinput} onChange={(e)=>setFirstInput(e.target.value)}/>
        <input type="text" placeholder='Enter goal description' className='inputs' value={secondinput}  onChange={(e)=>setSecondInput(e.target.value)}/>
        <button className='addBtn' onClick={onAdd}>Add</button>
        <div>
{  
   goalList.map((item,index)=>{
       return (
     <li class="listitems" key={index}>
     <div>
     <h3 style={{color:"white"}}> {item.firstinput} </h3>
     <p style={{color:"white", fontSize:"14px"}}>  {item.secondinput} </p>
     </div>
     <div>
      <button onClick={()=>deleteItem(index)} className='deletebtn task-button'>
       <i className='fa fa-trash'></i>
      </button>
      </div>
     </li>
       )})}
   </div>
   </form>
  )
}

export default Form