//Credit Tim Showalter
import React, { useState } from 'react';
function Schedule() {

  //Based form code on example code from w3schools: https://www.w3schools.com/react/react_forms.asp
  const[start, setStart] = useState("");
  const[end, setEnd] = useState("");
  const[date, setDate] = useState("");

  const signUp = event => {
    event.preventDefault();
    alert(`You have signed up to volunter on '${date}' from '${start}' to '${end}'`);
  }

  function setDay(day) {
    if (date !== day)
      setDate(day);
  }

  return (
    <div>
      <h1>Sign up to volunteer</h1>
      
      <p> {/*Text modified from monthly volunteer signup email written by Marilyn Martin*/}
        Loaves and Fishes is open on the third Saturday of every month, so volunteers are needed that morning as well as the preceeding afternoon and evening for setup.
        <br/><br/>
        Here is how you can help: 
        <br/><br/>
        <u>Friday at 1:00PM</u> at the Worcester County Food Bank. If you are able to assist in any way (mostly heavy lifting)  or if you can help to off-load at UUCW at 2PM, please sign up to do so.  We know that it is right in the middle of the day, and it is hard work, but if we had one or two more helpers for this task, it would be much appreciated. 
        <br/><br/>
        <u>Friday at 5PM</u> at UUCW to set up bags for the distribution. We will work until we we are done (maybe 1 - 2 hours?). 
        <br/><br/>
        <u>Saturday starting at 8:30 AM:</u> Distribution! Our hours are officially over at 11:30 but we still have some clean-up to do. We need YOUR help! Remember, even if you can’t make it for the whole time, your participation at any point is appreciated. 
      </p>

      <form onSubmit={signUp}>
        <h2>Friday, April 19</h2>
        <p>Select start time:</p>
        <input 
          value={start} 
          aria-label="Start time" 
          type="time"
          min="13:00"
          max="18:30" 
          defaultValue="13:00"
          onChange={(e) => setStart(e.target.value)}
        />
        <p>Select end time:</p>
        <input 
          value={end} 
          aria-label="End time" 
          type="time"
          min="13:30"
          max="19:00"
          defaultValue="19:00" 
          onChange={(e) => setEnd(e.target.value)}
        />
        <br />
        <button onClick={() => setDay("2024-04-19")} type="submit">Submit</button>
      </form>

      <form onSubmit={signUp}>
        <h2>Saturday, April 20</h2>
        <p>Select start time:</p>
        <input 
          value={start} 
          aria-label="Start time" 
          type="time"
          min="8:00"
          max="11:30" 
          onChange={(e) => setStart(e.target.value)}
        />
        <p>Select end time:</p>
        <input 
          value={end} 
          aria-label="End time" 
          type="time"
          min="8:30"
          max="12:00" 
          onChange={(e) => setEnd(e.target.value)}
        />
        <br />
        <button onClick={() => setDay("2024-04-20")} type="submit">Submit</button>
      </form>

      <form onSubmit={signUp}>
        <h2>Friday, May 17</h2>
        <p>Select start time:</p>
        <input 
          value={start} 
          aria-label="Start time" 
          type="time"
          min="13:00"
          max="18:30" 
          onChange={(e) => setStart(e.target.value)}
        />
        <p>Select end time:</p>
        <input 
          value={end} 
          aria-label="End time" 
          type="time"
          min="13:30"
          max="19:00" 
          onChange={(e) => setEnd(e.target.value)}
        />
        <br />
        <button onClick={() => setDay("2024-05-17")} type="submit">Submit</button>
      </form>

      <form onSubmit={signUp}>
        <h2>Saturday, May 18</h2>
        <p>Select start time:</p>
        <input 
          value={start} 
          aria-label="Start time" 
          type="time"
          min="8:00"
          max="11:30" 
          onChange={(e) => setStart(e.target.value)}
        />
        <p>Select end time:</p>
        <input 
          value={end} 
          aria-label="End time" 
          type="time"
          min="8:30"
          max="12:00" 
          onChange={(e) => setEnd(e.target.value)}
        />
        <br />
        <button onClick={() => setDay("2024-05-18")} type="submit">Submit</button>
      </form>
    </div>
  );
    
};

export default Schedule;