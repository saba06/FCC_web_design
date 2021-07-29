import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buttonList={
  "clear" : "AC",
  "divide": "/",
  "multiply": "X",
  "subtract": "-",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "add": "+",
  "four": "4",
  "five": "5",
  "six": "6",
  "one": "1",
  "two": "2",
  "three": "3",
  "equals": "=",
  "zero": "0",
  "decimal": ".",
}
const numbers = /(\d+\.\d+|\d+)/g;
const Ops = /(\+|-|X|\/)+/g;

const calculate = (str) =>{
  const digits = str.match(numbers).map(s => Number(s));
  const ops = str.match(Ops);
  if (!ops) return str;
  return digits.reduce((accumulator,currentValue,currentIndex) => {
    let Op = ops[currentIndex-1];
    if (Op.length > 1){
      if (Op[Op.length - 1] === "-"){
        currentValue = -currentValue;
        Op = Op[Op.length - 2]
      } 
      else Op = Op[Op.length - 1];
    }
    switch (Op) {
      case "/":
        return accumulator/currentValue;
      case "X":
        return accumulator*currentValue;
      case "+":
        return accumulator+currentValue;
      case "-":
        return accumulator-currentValue;
      default:
        return Infinity;
    }
  })
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.exp = [];
    this.hasDecimal = false; //# has decimal '.'
    this.state = {
      display: "0",
    }
    this.keyPress = this.keyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown",this.keyPress);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown");
  }
  keyPress = e => {
    if (e.key === "Enter") {this.handleClick("=");}
    else if (e.key === "*") {this.handleClick("X");}
    else if (e.key === "Delete") {this.handleClick("AC");}
    else if (e.key === "Backspace") {this.handleClick(e.key);}
    else if (/(\d|\+|-|\/|=|\.)/.test(e.key)) {this.handleClick(e.key);}
    else return;
  }
  handleClick = (lt) =>{
    if (/(\+|-|X|\/)/.test(lt))
      this.hasDecimal = false; //new number
    else if (lt === '.') { //more than 1 '.'

      if (this.hasDecimal)
        return; //no change in state
      else 
        this.hasDecimal = true;
    }

    if (lt === "AC"){
      this.hasDecimal = false;
      this.setState({display: "0"});
    }else if(lt === "Backspace"){
      this.setState({display: this.state.display.slice(0,-1)})
    }else if (lt === "="){
      this.setState({display: calculate(this.state.display)});
    }else if (this.state.display[this.state.display.length-1] === "0" 
    && 
    (lt !== '.' && (this.state.display.length === 1 || isNaN(this.state.display[this.state.display.length-2])))){
      this.setState({display: this.state.display.slice(0,-1)+lt});
    }else{
      this.setState({display: this.state.display+lt});
    }
  }
  render(){
    return(
      <div id="wrapper">
        <div id="display">{this.state.display}</div>
        {Object.keys(buttonList).map((key) => (<button className="button" id={key} key={key} onClick={(e) =>this.handleClick(buttonList[e.target.id])}>{buttonList[key]}</button>))}
        <button className="button" id={"Backspace"} onClick={(e) => this.handleClick("Backspace")}><i className="fas fa-backspace" /></button>
      </div>
    );
  };
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);