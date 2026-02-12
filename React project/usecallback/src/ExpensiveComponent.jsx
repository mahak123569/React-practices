import { useState } from "react";
import React , { usecallback, useEffect} from 'react';


const ExpensiveComponent = () => {
    const [value,setCount]=  useState(0);
    const [text ,setText] = useState("");
    const expensiveCalculation =usecallback(() => {
    console.log("Running expensive calculation ...");
    let result = 0;
    for(let i = 0 ;i<1000000000;i++){
result += i;
    }
    return result;
    }, [count]);                                     useEffect(()=> {
        if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation) {
            console.log("Function not re-created");
        }
        else {
            console.log("Function got re-created");
        }
     }

    else {
        previousFunction.current = expensiveCalculation;
    }
}, [expensiveCalculation])
    
  return (
    <div>
        <input
        type = "text"
        value ={text}
        onChange={(e)=> setText(e.target.value)}
        placeHolder="Type Something"
        />
        <p>Expensive Calculation Result:{expensiveCalculation()}</p>
        <button onClick={()=> setCount(count +1)}>
        Increament Count </button>
        </div>
  );
};

export default ExpensiveComponent