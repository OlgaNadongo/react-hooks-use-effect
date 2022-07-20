import React, { useState, useEffect } from "react";

function App() {

   const [count, setCount]=useState(0)
   const [text, setText]=useState("")

   function handleClick(){
         setCount((count)=>count+1)
   }

   function handleChange(e){
       setText(e.target.value)
   }


  useEffect(() => {
    document.title = text; 
  }, [text]);
 
useEffect(()=>{
  console.log("hey");
  setTimeout(()=>setCount(0),5000)
},[])

console.log("Component rendering");

//return JSX
  return (
      <div>
          <button 
          value={count} 
          onClick={handleClick}>
             I've been clicked {count} times
            </button>;


          <input 
          type="text" 
          placeholder="Type away..." 
          value={text} 
          onChange={handleChange} />
      </div>
          )
  
}
    
    

export default App;
