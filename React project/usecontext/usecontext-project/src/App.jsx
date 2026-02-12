import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';

// 1. Create context
const UserContext = createContext();

// 2. Wrap all the children inside a provider
function App() {
  const [user, setUser] = useState({ name: 'Hello' });

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
