//Credit Cecilia Carbonell
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [returnedData, setReturnedData] = useState(['hello']);
  const [dataBack, setDataBack] = useState(['oh, hello'])
  //useState is a hook for functional components that creates a state on a component-by-component basis
  const [user, setUser] = useState({Username: '', Password: '', UserType: '', HouseNumber: 0})
  const [preference, setPreference] = useState({User_ID: 0, Food_ID: 0})

  // const [time, setTime] = useState({Users_ID: 0, Time: ''})
  // const [gotData, setGotData] = useState({Users_ID: 0, Time: ''})

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

  const setPrefInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'User_ID' || name === 'Food_ID') {
        setPreference(prevState => ({
            ...prevState,
            [name]: parseInt(value)
        }));
        return;
    }
    setPreference(prevState => ({
        ...prevState,
        [name]: value
    }))
}
  
// const setGotData = (e) => {
//     const {name, value} = e.target;
//     console.log(value);
//     if (name === 'Users_ID') {
//         setPreference(prevState => ({
//             ...prevState,
//             [name]: parseInt(value)
//         }));
//         return;
//     }
//     setPreference(prevState => ({
//         ...prevState,
//         [name]: value
//     }))
// }

  //call backend
 const fetchData = async () => {
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

  const getData = async (url) => {
    console.log(preference);
    const someData = await fetch('/test', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: preference.User_ID
        })
    })
    .then(res => res.json());
    console.log(someData);
    setDataBack(someData[0]);
}

  const fetchPrefs = async () => {
    console.log(user);
    //fetch is a built-in library, makes it easier than axios
    const newData = await fetch('/getpref', {
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

  // const fetchTimes = async () => {
  //   //fetch is a built-in library, makes it easier than axios
  //   const newData = await fetch('/timed', {
  //     //gets response from backend
  //     method: 'POST',
  //     //tells response how data is sent and accepted
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: user.Users_ID
  //     })
  //   })
  //   .then(res => res.json())
  //   console.log(newData);
  //   setGotData(newData[0])
  // } 

  return (
    <div className="Admin">
      <input 
        name="Username" 
        placeholder="Username" 
        onChange={setInput}></input>
      <button onClick={() => fetchData()}>See Client Information</button>
      <p>User ID: {returnedData.Users_ID}</p>
      <p>Username: {returnedData.Username}</p>
      <p>Password: {returnedData.Password}</p>
      <p>Number in Household: {returnedData.HouseNumber}</p>
      
      <input 
            type="number" 
            name="User_ID" 
            placeholder="User ID"
            onChange={setPrefInput}></input>
        <input 
            type="number" 
            name="Food_ID" 
            placeholder="Food ID"
            onChange={setPrefInput}></input>
        <button onClick={() => getData('/testing')}>Look Up Preferences</button>
        <p>Food ID: {dataBack.Food_ID}</p>

        {/* <input 
            type="number" 
            name="Users_ID" 
            placeholder="User ID"
            onChange={setGotData}></input>
        <input 
            name="Time" 
            placeholder="Time"
            onChange={setGotData}></input>
        <button onClick={() => fetchTimes('/timed')}>Look Up Times</button>
        <p>Time: {gotData.Time}</p> */}
        <Link to='/'>Home</Link>
    </div>
  );
}

export default Admin;