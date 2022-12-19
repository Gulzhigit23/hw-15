import React from 'react'

const Demo = (props) => {
    console.log("DEMO");
  return (
    <div>
      <button onClick={props.onClick}>Demo click</button>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  )
}

export default React.memo(Demo); // Дает знать React'у, что эта компонента в будущем никогда не измениться, можешь его не не рендерить 
                                // Рендериться только в начале, и сохраняет его в памяти,  далее уже не ререндериться, а возвращать то,
                              // что сохранено в памяти 