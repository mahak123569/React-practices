import React from 'react'

const ChildComponent = (props) => {
  console.log("Child Component go re-rendered again");
  return (
    <div>
      <button>
        {props.buttonName}
        </button>
        </div>
  )
}

export default ChildComponent;