import { useState } from "react";
const Home = () => {
  const [body, Setbody] = useState('');
  const [title, Settitle] = useState('');
  const [goal, Setgoal] = useState('');
  const [date, setDate] = useState('');
  const [tuesdayGoal, setTuesdayGoal] = useState(""); 
  const [WensdayGoal, setWensdayGoal] = useState(""); 
  const [ThrusdayGoal, setThursdayGoal] = useState(""); 
  const [FridayGoal, setFridayGoal] = useState(""); 
  const [SaturGoal, setSaturGoal] = useState(""); 
  const [SunGoal, setSunGoal] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, body };
    fetch('http://localhost:3000/Notes', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(note)

    }
    ).then(() => {
      alert("new Note has been added ");
    })
  }
  const handleAddittion = (day,goal) => {
    const newGoal = { Date: day, goal: goal };
   
    
    
    fetch('http://localhost:3000/Goals', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newGoal)
    }
    ).then(() => {
      alert(`New goal for ${day} has been added`);
    })
  }
  return (
    <div>
      <h2 className="faseel-note" >Add your Note:</h2>
      <div className="note-area">
        <form onSubmit={handleSubmit}>
       
          <p className="title">Add Title : </p>
          <input type="text"
          className="input-note"
            value={title}
            required
           
            onChange={(e) => Settitle(e.target.value)} ></input>
          
          <textarea
           placeholder="your note..."
           value={body}
            onChange={(e) => Setbody(e.target.value)}
            className='input-size' required> notes...</textarea>
          <button 
          className="addNote">Add Note</button>
        </form>
      </div>
      <h2 className="faseel"> Write your everyday goals below!:</h2>
      <div class="container">
   
        <div  class="box">
        
          <p  className="pDay" value={date}>Monday</p>

          <textarea
            value={goal}
            onChange={(e) => {
              Setgoal(e.target.value);
              setDate("monday");
              
            }}
          ></textarea>
          <button className="btnote" onClick={() => handleAddittion("Monday")}>Submit</button>
        </div>
        

        <div class="box">
          <p className="pDay" value= {date} >Tusday</p>
          <textarea
          value={tuesdayGoal}
          onChange={(e) => setTuesdayGoal(e.target.value)}
          
        ></textarea>
        <button className="btnote" onClick={() => handleAddittion("Tuesday", tuesdayGoal )}>Submit</button>
        
        </div>
        <div class="box">
          <p className="pDay"  value= {date}  >Wensday</p>
          <textarea
          value={WensdayGoal}
          onChange={(e) => setWensdayGoal(e.target.value)}
          
        ></textarea>
        <button className="btnote" onClick={() => handleAddittion("Wensday", WensdayGoal)}>Submit</button>
        </div>
        <div class="box">
          <p className="pDay"  value={date}>Thrusday</p>
          <textarea
          value={ThrusdayGoal}
          onChange={(e) => setThursdayGoal(e.target.value)}
          
        ></textarea>
        <button className="btnote" onClick={() => handleAddittion("Thrusday", ThrusdayGoal)}>Submit</button>
        </div>
        <div class="box">
        <p className="pDay" value={date}>Friday</p>
          <textarea
          value={FridayGoal}
          onChange={(e) => setFridayGoal(e.target.value)}
        ></textarea>
        <button className="btnote"  onClick={() => handleAddittion("Friday", FridayGoal)}>Submit</button>
        </div>
        <div class="box">
          <p className="pDay"  value={date}> Saturday</p>
        <textarea
          value={SaturGoal}
          onChange={(e) => setSaturGoal(e.target.value)}
        ></textarea>
        <button className="btnote" onClick={() => handleAddittion("Saturday", SaturGoal)}>Submit</button>
        
        </div>
        
        <div class="box">
          <p className="pDay"  value={date}> Sunday</p>
          <textarea
          value={SunGoal}
          onChange={(e) => setSunGoal(e.target.value)}
        ></textarea>
        <button className="btnote"  onClick={() => handleAddittion("Sunday", SunGoal)}>Submit</button>
        </div>
        </div>
      </div>



  );
}

export default Home;