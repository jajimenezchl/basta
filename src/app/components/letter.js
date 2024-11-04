
import React, { useState } from 'react';

export default function Letter({ letra, accion }) {
const [Active, setActive] = useState(false);

    const handleClick = () => {
    console.log('test')
    setActive(!Active);
       
    };
  
    return (
      <>
        <div className={Active ? "letraTarjetaOn" : "letraTarjetaOff"} onClick={handleClick}> 
          {letra}
        </div>
      </>
    );
  }