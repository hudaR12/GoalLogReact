import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';
import bg from './Photos/bg.PNG';

function App() {
  const[firstinput,setFirstInput] = useState("");
  const[secondinput,setSecondInput] = useState("");
  const[goalList,setGoalList] = useState([]);

   return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }} >
      <div className='wrapper'>
        <div>
     <Header/>
     </div>
     <div>
      <Form input= {firstinput}
      setFirstInput={setFirstInput}
      firstinput ={firstinput}
      secondinput={secondinput}
      setSecondInput={setSecondInput}
      goalList={goalList}
      setGoalList={setGoalList}
      />
     </div>
     <div>
      </div>
     </div>
     </div>
    
  );
}

export default App;
