//Credit Tim Schowalter
import React from 'react';

function ClientSchedule() {

  const time = new Date("2024-05-19");

  const signUp = event => {
    event.preventDefault();
  }

  function select(hr,min) {
    time.setHours(hr, min);
    alert(`You have signed up for pickup on ${time}`);
  }

  return (
    <div>
      <h1>Schedule pickup</h1>
      
      <p>Please select a time to pick up food on Saturday, May 18: </p>

      <button className="time-button" onClick={() => select(9,0)}>9:00 AM</button>
<br />
<button className="time-button" onClick={() => select(9,10)}>9:10 AM</button>
<br />
<button className="time-button" onClick={() => select(9,20)}>9:20 AM</button>
<br />
<button className="time-button" onClick={() => select(9,30)}>9:30 AM</button>
<br />
<button className="time-button" onClick={() => select(9,40)}>9:40 AM</button>
<br />
<button className="time-button" onClick={() => select(9,50)}>9:50 AM</button>
<br />
<button className="time-button" onClick={() => select(10,0)}>10:00 AM</button>
<br />
<button className="time-button" onClick={() => select(10,10)}>10:10 AM</button>
<br />
<button className="time-button" onClick={() => select(10,20)}>10:20 AM</button>
<br />
<button className="time-button" onClick={() => select(10,30)}>10:30 AM</button>
<br />
<button className="time-button" onClick={() => select(10,40)}>10:40 AM</button>
<br />
<button className="time-button" onClick={() => select(10,50)}>10:50 AM</button>
<br />
<button className="time-button" onClick={() => select(11,0)}>11:00 AM</button>
<br />
<button className="time-button" onClick={() => select(11,10)}>11:10 AM</button>
<br />
<button className="time-button" onClick={() => select(11,20)}>11:20 AM</button>
<br />
<button className="time-button" onClick={() => select(11,30)}>11:30 AM</button>
<br />
    </div>
  );
    
};

export default ClientSchedule;