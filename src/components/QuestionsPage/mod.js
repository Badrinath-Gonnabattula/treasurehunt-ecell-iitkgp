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


const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false, 
      data:[],
    };
    this.fetchData = this.fetchData.bind(this);

  }

  show() {
    this.setState({ 
      ...this.state,
      visible: true });
  }

  hide() {
    this.setState({ 
      ...this.state,
      visible: false });
  }

  fetchData(){
    axios.get('https://node.ecell-iitkgp.org/hunt/getSortedListOfAllParticipants/')
          .then(res=>{
            const data = res.data.details;
            let allData = [];
            data.map((e,i)=>{
              if(e.name){
                allData[i] = {
                  name:e.name,
                  email:e.email,
                  score:e.score
                } 
              }
              else{
                allData[i] = {
                  name:e.name_iit,
                  email:e.email_iit,
                  score:e.score
                } 
              }
            })
            this.setState({
              ...this.state,
              data:allData,
            })
          })
  }

  componentDidMount(){
    this.fetchData();
  
  }
  
  render() {
    return (
      <div className="mrd" >
          <div className="mrd" onClick={this.show.bind(this)}>
          {/* <Anb  name="Leaderboard" > */}
          <div></div>
        <button className="pos" onClick={()=>{this.show.bind(this); this.fetchData()}}>
        
        Leaderboard
        </button>
        {/* </Anb> */}
        </div>
        <Rodal className="mrd " visible={this.state.visible} onClose={this.hide.bind(this)} animation="door" customStyles={{height: '85%',width:'70%',display:"block", top:"5%"}}>
          <div className="mrd ">
              <h2>Leaderboard</h2>
              <Demo data={this.state.data}/>
          </div>
        </Rodal>
      </div>
    );
  }
}