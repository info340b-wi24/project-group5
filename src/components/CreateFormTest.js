import React from 'react';
import { UseState } from 'react';
import { db } from './src/index.js';
import {addDoc, collection} from 'firebase/firestore'


function formTest(){
    const[input, setInput] = UseState("")
    const inputHandler = (e) =>{
        setInput(e.target.value);
}
    const submitHandler = async (e) =>{
        e.preventDefault();
        if(input){
            await addDoc(collection(db, "emails"),{
                email:input
            })
        }
}
return (
    <div ClassName="emails">
        <form onSubmit={submitHandler} className="form">
            <p> Enter Email </p>
            <input className="email-input" onChange={inputHandler} placeholder="Email" type="email" value={input}></input>
            <button className='email-button'>Submit</button>
        </form>
    </div>
    );
}
export default formTest;