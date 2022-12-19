import React from 'react'

const DemoList = () => {
    console.log("DEMOLIST");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default React.memo(DemoList)
