import React from "react"
import "../../styles/index.css";

export default function SecondsCounter ({seconds}) {
        const secondsString = seconds.toString().padStart(5, '0');
        const secondsArray = secondsString.split('');
      
        return (
        <div className="App">
            
          <div className="counter">
            {secondsArray.map((digit, index) => (
              <span key={index} className="counter__number">{digit}</span>
            ))}
            <span className="counter__label">Seconds</span>
          </div>
          
        </div>
        );
      }