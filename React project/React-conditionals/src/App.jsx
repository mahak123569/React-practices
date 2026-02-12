// import { useState } from 'react' 
// import './App.css'
// import LoginBtn from './Components/LoginBtn';
// import Loginout from './Components/Loginout';

// function App() {
//  const[isLoggedIn] = useState(true);

// const[isLoggedIn, setLoggedIn] = useState(false);

// const[IsLoggedIn, setLoggedIn] = useState(true);

// const[LoggedIn] = useState(false);



// //if else
// if (isLoggedIn) {
//     return(
//      <LoginBtn />
//     )
//   } 
//   else {
//     return (
//     <Loginout />
//     )
//   }
  



// //Ternary operator
// return (
//   <div>
//     {IsLoggedIn ? <LoginBtn/> : <Loginout/>}
//   </div>
// )




// //logical operator
// return(
//   <div>
//     <h1>Welcome new world!</h1>
//   <div>
//   {isLoggedIn && <Loginout/>}
//   </div>
//   </div>
// )




// //Early return
// if(!isLoggedIn){
// return(
// <LoginBtn/>
// )
// }
// return(
//   <div>
//     <h1>Welcome new world!</h1>
//   <div>
//   {isLoggedIn && <Loginout/>}
//   </div>
//   </div>
// )
// }

// export default App;



import { useState } from 'react';
import './App.css';
import LoginBtn from './Components/LoginBtn';
import Loginout from './Components/Loginout';
import './Login.css';

// 1️⃣ If-Else Component
function IfElseRender({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div>
        <h2>1️⃣ IF-ELSE Rendering</h2>
        <LoginBtn />
      </div>
    );
  } else {
    return (
      <div>
        <h2>1️⃣ IF-ELSE Rendering</h2>
        <Loginout />
      </div>
    );
  }
}

// 2️⃣ Ternary Operator Component
function TernaryRender({ isLoggedIn }) {
  return (
    <div>
      <h2>2️⃣ Ternary Operator Rendering</h2>
      {isLoggedIn ? <LoginBtn /> : <Loginout />}
    </div>
  );
}

// 3️⃣ Logical Operator Component
function LogicalRender({ isLoggedIn }) {
  return (
    <div>
      <h2>3️⃣ Logical Operator Rendering</h2>
      {isLoggedIn && <LoginBtn />}
      {!isLoggedIn && <Loginout />}
    </div>
  );
}

// 4️⃣ Early Return Component
function EarlyReturnRender({ isLoggedIn }) {
  if (!isLoggedIn) {
    return (
      <div>
        <h2>4️⃣ Early Return Rendering</h2>
        <Loginout />
      </div>
    );
  }

  return (
    <div>
      <h2>4️⃣ Early Return Rendering</h2>
      <LoginBtn />
    </div>
  );
}

// ✅ Main App Component
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div className="p-6 space-y-6">
      <IfElseRender isLoggedIn={isLoggedIn} />
      <TernaryRender isLoggedIn={isLoggedIn} />
      <LogicalRender isLoggedIn={isLoggedIn} />
      <EarlyReturnRender isLoggedIn={isLoggedIn} />

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setLoggedIn(!isLoggedIn)}
      >
        Toggle Login State
      </button>
    </div>
  );
}

export default App;
