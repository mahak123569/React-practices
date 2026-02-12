import './App.css'

function App() {
  
function handClickpar(){
  alert("I am Clicked button")
}
function handleMouseOver(){
  alert("2 clicked ")
}
function handleInputChange(e){
console.log("Input me Value changes h");
  console.log("value till now:", e.target.value);
}
function handleSubmit(e){
  e.preventDefault();
  alert("From Submit hua ");
}
  return (

    <div>
      <button onClick={()=>alert("button select hua")}>Select me</button>




<form onSubmit={handleSubmit}>
  <input type='text' onChange={handleInputChange}/>
  <button type='submit'>Submit</button>
</form>


      <p onMouseOver={handleMouseOver}  style={{border:"1px solid black"}}> I am a para</p> 
   <button onClick={handClickpar}>click me</button>
   </div>
   
  
  )
  
}


export default App
