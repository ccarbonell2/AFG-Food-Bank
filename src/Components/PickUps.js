//Credit Cecilia Carbonell
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PickUps() {
  const [returnedData, setReturnedData] = useState(['timed']);
  //useState is a hook for functional components that creates a state on a component-by-component basis
  const [user, setUser] = useState({Users_ID: 0, Time: ''})

  //destructure event
  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    //makes HouseNumber an int
    if (name === 'Users_ID') {
      setUser(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      //return early
      return;
    }
    //basically an else
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const addUser = async () => {
    //fetch is a built-in library, makes it easier than axios
    const newData = await fetch('/timing', {
      //gets response from backend
      method: 'POST',
      //tells response how data is sent and accepted
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...user
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  } 
  return (
    <div className="App">
      <input 
        name="Users_ID" 
        placeholder="User ID" 
        onChange={setInput}></input>
      <input 
        name="Time" 
        placeholder="Ideal Time" 
        onChange={setInput}></input>
      <button onClick={() => addUser()}>Set Pickup Time</button>
      <p>User ID: {returnedData.Users_ID}</p>
      <p>Ideal Time: {returnedData.Time}</p>
        <Link to="/admin">Welcome, admin. Click here!</Link>
        <Link to="/preferences">Welcome, client. Click here!</Link>
        <Link to="/ClientSchedule">Client Scheduling</Link>
        <Link to="/Schedule">Volunteer Schedule</Link>
    </div>
  );
}

export default PickUps;