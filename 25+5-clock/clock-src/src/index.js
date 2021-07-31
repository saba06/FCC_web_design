import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Break = props => (
  <div id='break-wrapper'>
    <div id='break-label'><h2>Break Length</h2></div>
    <button className="btn" id='break-increment' onClick={props.increment}><i className='fa fa-arrow-up'></i></button>
    <div id='break-length'>{props.breakLength}</div>
    <button className="btn" id='break-decrement' onClick={props.decrement}><i className='fa fa-arrow-down'></i></button>
  </div>
);
const Session = props =>(
  <div id='session-wrapper'>
    <div id='session-label'><h2>Session Length</h2></div>
    <button className="btn" id='session-increment' onClick={props.increment}><i className="fas fa-arrow-up"></i></button>
    <div id='session-length'>{props.sessionLength}</div>
    <button className="btn" id='session-decrement' onClick={props.decrement}><i className="fas fa-arrow-down"></i></button>
  </div>
);

const Timer = props =>(
    <div id='timer'>
      <div id='timer-label'><h2>{props.whatsOn}</h2></div>
      <audio id='beep' preload='auto' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
      <div id='time-left'><h1>{props.mm.toString().padStart(2, 0)}:{props.ss.toString().padStart(2,0)}</h1></div>
    </div>
  );

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakLength :5,
      sessionLength: 25,
      mm: 25,
      ss: 0,
      whatsOn: "Session",
      play: false,
    }
    this.breakIncrement=this.breakIncrement.bind(this);
    this.breakDecrement=this.breakDecrement.bind(this);
    this.sessionIncrement=this.sessionIncrement.bind(this);
    this.sessionDecrement=this.sessionDecrement.bind(this);
    this.swap=this.swap.bind(this);
    this.countDown=this.countDown.bind(this);
    this.timer = 0;
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
  }
  breakIncrement = () => {
    if(!this.state.play && this.state.breakLength < 60){
      let deltaChange = { breakLength: this.state.breakLength + 1}
      if (this.state.whatsOn === "Break"){
        deltaChange.mm= this.state.mm + 1;
      }
      this.setState({...this.state,...deltaChange});
    }
  }
  breakDecrement = () => {
    if(!this.state.play && this.state.breakLength > 1){
      let deltaChange ={ breakLength: this.state.breakLength -1}
      if(this.state.whatsOn === "Break"){
        deltaChange.mm =this.state.mm - 1;
      }
      this.setState({...this.state,...deltaChange});
    }
  }
  sessionIncrement = () =>{
    if(!this.state.play && this.state.sessionLength < 60){
      let deltaChange ={ sessionLength: this.state.sessionLength +1}
      if(this.state.whatsOn === "Session"){
        deltaChange.mm = this.state.mm +1;
      }
      this.setState({...this.state,...deltaChange});
    }
  }
  sessionDecrement = () =>{
    if(!this.state.play && this.state.sessionLength > 1){
      let deltaChange = { sessionLength: this.state.sessionLength -1}
      if(this.state.whatsOn === "Session"){
        deltaChange.mm = this.state.mm -1;
      }
      this.setState({...this.state,...deltaChange});
    }
  }

  swap = () =>{
    let deltaChange = this.state.whatsOn === "Session" ? 
    {whatsOn: "Break",mm: this.state.breakLength}: {whatsOn: "Session",mm: this.state.sessionLength};
    this.setState({...this.state,...deltaChange,ss: 0});
  }
  countDown = ()=>{
    if(this.state.play){
      if(this.state.ss !== 0){
        this.setState({...this.state,ss: this.state.ss-1});
        if(this.state.mm === 0){
        }
      }
      else if(this.state.ss === 0 && this.state.mm !== 0){this.setState({...this.state, mm: this.state.mm-1, ss: 59});}
      else if(this.state.ss ===0  && this.state.mm === 0){
        const audio = document.getElementById('beep');
        audio.play();
        audio.currentTime = 0;
        this.swap();
      }
    }
  }

  playPause = () =>{
    if (this.state.play) { this.setState({ ...this.state, play: false });console.log('timer being cleared'); clearInterval(this.timer); this.timer =0;}
    else { this.setState({...this.state,play: true});console.log('time set with 1000ms'); this.timer = setInterval(this.countDown,1000);}
  }
  
  reset = () =>{ this.setState({
    breakLength: 5,
    sessionLength: 25,
    mm: 25,
    ss: 0,
    whatsOn: "Session",
    play: false,
    } );
    clearInterval(this.timer);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }
  render(){
    return(
      <div id='wrapper'>
        <Break breakLength={this.state.breakLength} increment={this.breakIncrement} decrement={this.breakDecrement}></Break>
        <div id='timer-wrapper'>
          <Timer whatsOn={this.state.whatsOn} mm={this.state.mm} ss={this.state.ss}></Timer>
          <div id='timer-buttons'>
            <button className="btn" id='start_stop' onClick={this.playPause}>
              {this.state.play ? <i className='fa fa-pause'></i> : <i className='fa fa-play'></i>}
            </button>
            <button className='btn' id='reset' onClick={this.reset}><i className="fas fa-sync-alt"></i></button>

          </div>
        </div>
        <Session sessionLength={this.state.sessionLength} increment={this.sessionIncrement} decrement={this.sessionDecrement}></Session>
      </div>
    );
  }  
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);