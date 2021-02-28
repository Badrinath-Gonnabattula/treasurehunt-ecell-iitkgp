// import React from 'react';
import Rodal from 'rodal';
import Demo from './Datatable/demo.js';
import Anb from './anb.js';
import Hint from './hint.js';
import React, { useState, useRef } from "react";
import { useSpring, animated } from 'react-spring'
// include styles
import 'rodal/lib/rodal.css';
import "../../assets/hint.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="mrd" >
          <div className="mrd" onClick={this.show.bind(this)}>
          {/* <Anb  name="Leaderboard" > */}
        <button className="pos" onClick={this.show.bind(this)}>
        
        Leaderboard
        </button>
        {/* </Anb> */}
        </div>
        <Rodal className="mrd " visible={this.state.visible} onClose={this.hide.bind(this)} animation="door" customStyles={{height: '85%',width:'70%',display:"block", top:"5%"}}>
          <div className="mrd ">
              <h2>Leaderboard</h2>
              <Demo />
          </div>
        </Rodal>
      </div>
    );
  }
}