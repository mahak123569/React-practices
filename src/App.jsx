import UserCard from "./components/UserCard.jsx"
import "./App.css"
import Food from './assets/Food.jpg'
import Daniel from './assets/daniel.jpg'
import Craig from './assets/craig.jpg'
function App() {
  

  return (
    
      <div className="container">
       {/* <h1>Hello Mahek! My React file</h1> */}
       <UserCard name="sweet-Dish" desc="desc1" image={Food} style={{"border-radius":"10px"}}/>
       <UserCard name="under-water" desc="desc2"  image={Daniel} style={{"border-radius":"10px"}}/>
       <UserCard name="nature-water" desc="desc3"  image={Craig} style={{"border-radius":"10px"}}/>

      </div>
     
    
  );
}

export default App;
