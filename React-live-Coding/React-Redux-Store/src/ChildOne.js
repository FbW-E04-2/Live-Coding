import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


export default function ChildOne() {

   /*  const {x, setX} = useContext(MyContext) */
/*    const x = useSelector(state=>state.x)
   const state= useSelector(state=>state) */
    const {x} = useSelector(state=>state)
    const dispatch = useDispatch()

  return <div>
      <h1>Child One Component</h1>
      <h2>Value of X: {x}</h2>
      <button onClick={()=>dispatch({type:"incrementY"})}>increment Y</button>
  </div>;
}
