
// import React from 'react'S
import React, { useState } from 'react'
import Panel from './Panel'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is the About panel content.
      </Panel>

      <Panel
        title="Contact"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is the Contact panel content.
      </Panel>
    </div>
  )
}

export default Accordion;
