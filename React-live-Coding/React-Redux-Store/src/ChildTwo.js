import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

export default function ChildTwo() {

    const {y}=useSelector(state=>state)
    const dispatch = useDispatch()
  return <div>
      <h1>Child Two Component</h1>
      <h2>Value of Y: {y}</h2>
      <button onClick={()=>dispatch({type:"incrementX"})}>increment X</button>
  </div>;
}
