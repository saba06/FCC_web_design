import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const drumpads = [
  { id: "Heater-1", letter: "Q", src : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  { id: "Heater-2", letter: "W", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  { id: "Heater-3", letter: "E", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  { id: "Heater-4", letter: "A", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  { id: "Clap", letter: "S", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  { id: "Open-HH", letter: "D", src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  { id: "Kick n' Hat", letter: "Z", src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  { id: "Kick", letter: "X", src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  { id: "Closed-HH", letter: "C", src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
]

let record = [];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: " ",
      recording: false,
    }
    this.keyDown =this.keyDown.bind(this);
    this.handleDisplay =this.handleDisplay.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.record = this.record.bind(this);
    this.playRecord =this.playRecord.bind(this);
    this.resetRecord = this.resetRecord.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }
  keyDown = e => {
    const audio = document.getElementById(e.key.toUpperCase());
    if (audio) {
      audio.play();
      audio.currenTime = 0;
    }
  };
  handleDisplay = (id) => {this.setState({display: id,})}

  handleClick = (e) =>{
    const audio = e.target.firstChild;
    audio.play();
    audio.currenTime = 0;
    this.handleDisplay(e.target.id);
    if (this.state.recording){
      record.push(audio);
    }
  }

  record = ()=>this.setState({...this.state,recording: !this.state.recording});

  playRecord = () => {
    let audio=0;
    var i = setInterval(() => {
    if (record[audio]){
      record[audio].play();
      record[audio].currenTime = 0;
      console.log(record[audio]);
    }
    audio++;
    if (audio>=record.length){
      clearInterval(i);
    }
  }, 500);}
  resetRecord = () =>record = [];

  render(){
    return(
      <div id="drum-machine">
        <div id="display"><p>{this.state.display}</p></div>
          {drumpads.map((ele) => <button className="drum-pad" 
          id={ele.id} 
          key={ele.id} 
          letter={ele.letter} 
          onClick={e =>this.handleClick(e)}>
            <audio className="clip" id={ele.letter} src={ele.src}/>
            {ele.letter}{" "}
          </button>)}
        <button id="Record" className="drum-pad" onClick={this.record}>
          {this.state.recording ? 
          <i className="fa fa-stop-circle" aria-hidden="true"></i> : 
          <i className="fa fa-circle" aria-hidden="true"></i>}
        </button>
        <button id="play" className="drum-pad" onClick={this.playRecord}>
          <i className="fa fa-play" aria-hidden="true"></i>
        </button>
        <button id="reset" className="drum-pad" onClick={this.resetRecord}>Reset</button>
      </div>
    );
  }
}
ReactDOM.render(<App/>,
  document.getElementById('root')
);