import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { increment, decrement } from './Actions/actions';

function App({counter,increment,decrement}) {
  return (
    <div className="App">
      <div className="title">
        <h1>Counter with Redux</h1>
      </div>
     <div className='counter'>
      <button onClick={()=>increment()}>+</button>
      <p>{counter}</p>
      <button  onClick={()=>decrement()}>-</button>
    </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    counter:state.CounterReducer
  }
  
}
const mapDispatchToProps=dispatch=>{
  return{
  increment:()=>dispatch({type:'INCREMENT'}),
  decrement:()=>dispatch({type:'DECREMENT'})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
