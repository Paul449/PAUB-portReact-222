//importing useState
import { useState } from "react";
//function
export default function Contact(){
  //useState hook to hold data from contact information
const[Name, setName] = useState('Paul');
const[Email, setEmail] = useState('paul_bilbatua@hotmail.com');
const[Message, setMessage] = useState('');
//event handling in case something goes wrong when submiting form
const handling = function (e){
//e.preventDefault();
console.log('Name',Name);
console.log('Email', Email);
console.log('Message',Message);
}
return(<>
    <form className="form" onSubmit={handling()}>
      <div className="Name">
        <label>Name:</label>
        <input id="NameText" type="text" value={Name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div className="Email">
        <label>Email:</label>
        <input id="EmailText" type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className="Message">
        <label id="TM">Message:</label>
        <textarea id="txtM" type="text" value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        </div>
        <div id="submit">
            <button id="submitBtn" type="submit">Submit</button>
            </div>
    </form>
</>)
}
