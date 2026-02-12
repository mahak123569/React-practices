
import { createContext ,useState} from 'react';
import './App.css'
import ChildA from './ChildA';
const UserContext = createContext();
const ThemeContext = createContext();
function App() {
  const [user, setuser] = useState({name:'Game'});
   const [theme, setTheme] = useState('light');

  return (
    <>
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme , setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA />
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
     <div> usecontext project!</div>

    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}

