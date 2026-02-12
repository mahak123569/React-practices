import { useEffect, useState } from 'react'

import './App.css'

 function App() {     
  const [count, setCount] = useState(0); 
  const [total, setTotal] = useState(1); 

//variation:1
//runs every render
// useEffect(()=>{
//  alert("I will run on each render");
// })

//variation:2
//that runs on only first render
// useEffect(()=>{
//   alert("I will run 1 reander");
// },[])
//variation:3
// useEffect(()=>{
//   alert("I will run every time when count is updated");
// },[count])

//variation:4
//multiple dependencies
useEffect(() => {
  alert("I will run every time when count/total is updated");
}, [count, total])

//variation:5
//iss baarlet,s add a cleanup function
useEffect(() => {
  alert("Count is updated")

  return () => {
    alert("count is unmounted from UI");
  }
}, [count])





   function handleClick(){
    setCount(count+1);
   }
    function handleClickTotal(){
    setTotal(total+1);
   }

return (
<div>
 <button onClick={handleClick}> 
  update count
 </button>

 <br/>
 Count is: {count}
<br/>

 <button onClick={handleClickTotal}> 
  update Total
</button>
 <br/>
 Total is: {total}
<br/>
</div>
)

 }
 
export default App
