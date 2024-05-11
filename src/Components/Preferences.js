//Credit Cecilia Carbonell
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [returnedData, setReturnedData] = useState(['testing']);
  //useState is a hook for functional components that creates a state on a component-by-component basis
  const [food, setFood] = useState({User_ID: 0, Food_ID: 0})

  //destructure event
  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    //makes HouseNumber an int
    if (name === 'User_ID' || name === 'Food_ID') {
      setFood(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      //return early
      return;
    }
    //basically an else
    setFood(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const addPref = async () => {
    console.log(food);
    const newData = await fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...food
        })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div className="App">
      <input 
        type="number"
        name="User_ID" 
        placeholder="User ID" 
        onChange={setInput}></input>
      <input 
        type="number"
        name="Food_ID" 
        placeholder="Food ID" 
        onChange={setInput}></input>
      <button onClick={() => addPref()}>Add Preference</button>
      <p>User ID: {returnedData.User_ID}</p>
      <p>Food ID: {returnedData.Food_ID}</p>
        <Link to="/admin">Welcome, admin. Click here!</Link>
        <Link to="/preferences">Welcome, client. Click here!</Link>
    </div>
  );
}

export default App;