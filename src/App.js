import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./componets/validationComponent.js";
import CharComponent from './componets/charComponent'
export class App extends Component {
  state = {
    inputLength: 0,
    input:''
  };
  calculateLength = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      input:event.target.value
    });
   
  };

delete = (index) =>{
  const text= this.state.input.split('')
  text.splice(index,1)
  const updatedText = text.join('');
  this.setState({input:updatedText})
}

   

  render() {
    const List = this.state.input.split('').map((char,index) =>{
      return <CharComponent key={index} character={char} clicked={()=>this.delete(index)} />
    })
    return (
      <div className="App">
        <input type="text" onChange={this.calculateLength} />

        <ValidationComponent length={this.state.inputLength} />
     {List}
      </div>
    );
  }
}

export default App;
