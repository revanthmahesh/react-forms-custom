import React, { Component } from 'react';
import Compounded from './composition'
function Verdict(props){
    return (
      props.celsius >= 100 ? <p> Water is boiled </p> :<p>Water is not boiled yet! </p>
    )
  }
  
  const types = {c:'Celcius',f:'Fahrenheit'};
  function toCelcius(value) {
      return (value - 32) * 5 / 9;
  }
  function toFahrenheit(value) {
      return (value * 9 / 5) + 32;
  }
  function superConverter(input,changeFunction){
    const temp = parseFloat(input);
    let output = ''
    if(Number.isNaN(temp)){
      return output
    };
    output = Math.round(changeFunction(temp)*1000)/1000;
    return output.toString();
  }
  class TempInput extends Component {
    constructor(props){
      super(props);
      this.state = {temperature:''};
    }
    onTemperatureChange = (e)=>{
      this.props.tempChange(e.target.value);
    }
    render(){
      return (
        <fieldset>
          <legend>Enter temperature in {types[this.props.scale]}:</legend>
          <input value={this.props.temperature}
                 onChange={this.onTemperatureChange} />
        </fieldset>
      )
    }
  }
  class Calculator extends Component{
    constructor(props){
      super(props);
      this.state ={scale:'c',temperature:''}
    }
    celciusChange = (temperature) => {
      this.setState({scale:'c',temperature})
    }
    
    fahrenChange =  (temperature) => {
      this.setState({scale:'f',temperature})
    }
    
    
    render(){
        const cel = this.state.scale === 'f'? superConverter(this.state.temperature, toCelcius): this.state.temperature;
        const far = this.state.scale === 'c'? superConverter(this.state.temperature, toFahrenheit): this.state.temperature;
      return(
      <div>
          <TempInput scale="c" temperature={cel} tempChange = {this.celciusChange}/>
          <TempInput scale="f" temperature={far} tempChange ={this.fahrenChange}/>
          <Verdict
            celsius={cel} />
          <Compounded display= {<p>composition tag here there</p>}/>
          
       </div>
      )
    }
  }
  export default Calculator;