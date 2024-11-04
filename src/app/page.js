
 'use client'
import React , { useEffect, useState } from "react";
import Letter from "./components/letter";
import { handleClientScriptLoad } from "next/script";

export default function Page ( )  {
  const [letras , setLetras] = useState([])
  const arrayLetras = []


  const getAlphabetArray = () => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  };  

  const setAbecedario = () => {
    const arrayLetras = getAlphabetArray();
    setLetras(arrayLetras);
  };
  
  useEffect(() => {
    setAbecedario();
     
  }, []);
  

  const log = () => {
    console.log('test')
    
  }

  return(
    <>
    <div className="grid grid-cols-6 gap-4"> 
    {letras.map((letra,index) => (
       
      <div className=" col-span-1" key={index}> <Letter key={index} 
      letra={letra}  /></div>
     
    ))}
    </div>
   
    </>
  )
}