import {useCallback,usestate} from 'react'

import './App.css'
import ChildComponent from './component/ChildComponent';
import ExpensiveComponent from './ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0)
  // function handleClick(){
  //   setCount(count + 1);
  // }

  return (
    <div>
      <ExpensiveComponent/>
       </div>
    
    // <div>
    //   <div>
    //     count: {count}
    //   </div>
    //   <div>
    //     <button onClick={handleClick}> Increment</button>
    //   </div>
    //   <br/> <br/>
    //   <div>
    //     <ChildComponent buttonName="Click me"/>
    //   </div>
    // </div>
  )
}

export default App;
