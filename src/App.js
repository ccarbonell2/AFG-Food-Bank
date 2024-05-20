//Credit Cecilia Carbonell
import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [returnedData, setReturnedData] = useState(['hello']);
  //useState is a hook for functional components that creates a state on a component-by-component basis
  const [user, setUser] = useState({Username: '', Password: '', UserType: '', HouseNumber: 0})

  //destructure event
  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    //makes HouseNumber an int
    if (name === 'HouseNumber') {
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

  //call backend
 const fetchData = async () => {
    console.log(user);
    //fetch is a built-in library, makes it easier than axios
    const newData = await fetch('/api', {
      //gets response from backend
      method: 'POST',
      //tells response how data is sent and accepted
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: user.Username
      })
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData[0])
  } 

  const addUser = async () => {
    //fetch is a built-in library, makes it easier than axios
    const newData = await fetch('/hello', {
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
        name="Username" 
        placeholder="Username" 
        onChange={setInput}></input>
      <input 
        name="Password" 
        placeholder="Password" 
        onChange={setInput}></input>
      <input 
        name="UserType" 
        placeholder="Enter admin or client" 
        onChange={setInput}></input>
      <input 
        type="number"
        name="HouseNumber" 
        placeholder="Number in Household" 
        onChange={setInput}></input>
      <button onClick={() => fetchData()}>Login</button>
      <button onClick={() => addUser()}>Create Account</button>
      <p>Username: {returnedData.Username}</p>
      <p>Password: {returnedData.Password}</p>
      <p>Number in Household: {returnedData.HouseNumber}</p>
        <Link to="/admin">Welcome, admin. Click here!</Link>
        <Link to="/preferences">Welcome, client. Click here!</Link>
        <Link to="/ClientSchedule">Client Scheduling</Link>
        <Link to="/Schedule">Volunteer Schedule</Link>
        <Link to="/PickUps">Client Schedule</Link>
    </div>
  );
}

export default App;