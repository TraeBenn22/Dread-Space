import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import './components/introLevel.js';
function App() {

    const [enterName, setUserName] = useState("Enter your name");
    const [enterAge, setUserAge] = useState("Enter your age");
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);



    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    function handleResize(e) {
        setWindowWidth(window.outerWidth);
    }

    function storeUser(e) {
        setUserName(e.target.value);
        localStorage.setItem("Username", e.target.value);
    }

    function storeAge(e) {
        setUserAge(e.target.value);
        localStorage.setItem("Age", e.target.value);
    }
  return (

    <div className={'wrapper'}
    style{{border: "4px solid black"}}>
        <h4>Dread Space</h4>
      <form id="nameForm">
          <div className='form-name'>
              <input value={enterName} onChange={storeUser}></>
              <input value={enterAge} onChange ={storeAge}></>
          </div>
      </form>
    </div>
  );
}

export default App;
