import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component{
    state = {
      name : "Jeyaseelan",
      age : 21
    }
  
    increment = ()=>{
      this.setState({
          name :this.state.name + 'S',
        age: this.state.age + 5});
      }
  
      render(){
        return <>
          <p>{this.state.name}</p>
          <p>{this.state.age}</p>
          <button onClick={this.increment}>Increment</button>
        </>
      
      }
    }
//This is a comment, will check it added successfully
    
export default Counter;
