import React from "react";
import {useEffect,useState} from "react";
import Particles from 'react-particles-js';
import QuestionCard from './QuestionCard';
import Congratulations from './Congratulations';
import '../../assets/particleCss.css';


const Questions = () =>{
  const [question,setQuestion] = useState({});
  const [correct,setCorrect] = useState(false);
  const [congrats,setCongrats] = useState(null);
  const onSubmit = (e,answer) =>{
    //Handle API calls

    console.log(answer);
    setQuestion({
      questionbody:"I’m just like $ and ₹ but cannot be banned like ₹500/₹1000 notes. Unlike the government, I’m “by the people and for the people”, totally decentralized. Who am I?",
      hint:"https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    })

    //If correct answer hide the question window and show congrats!
    //Should be executed after getting correct answer from backend
    let particleWindow = document.getElementById('particles-js');
    let questioncard = document.getElementsByClassName('main');
    setCorrect(true);
    setCongrats(<Congratulations/>);
    particleWindow.style.display = 'none';
    questioncard[0].style.display = 'none';

    //Hide Congrats window after sometime
    setTimeout(()=>{
      setCongrats(null);
      let particleWindow = document.getElementById('particles-js');
      let questioncard = document.getElementsByClassName('main');
      particleWindow.style.display = 'block';
      questioncard[0].style.display = 'block';
      setCorrect(true);
    },4500);
  }


  useEffect(()=>{
    //Handle API calls
    setQuestion({
      questionbody:"No matter where you reach in life, you’ll always remember your first. Even though Elon earned multi millions out of his first, he looks back at it with disappointment.",
      hint:"https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
    })
  },[])


  return (
    <div style={{height:'100%'}}>
        <Particles id="particles-js"
          params = {{
            "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 700 } },
            
            
                "color": {
                  "value": "#ffffff" },
            
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000" },
            
                  "polygon": {
                    "nb_sides": 5 } },
            
            
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 0.1,
                    "opacity_min": 0.1,
                    "sync": false } },
            
            
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false } },
            
            
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1 },
            
                "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200 } } },
            
            
            
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab" },
            
                  "onclick": {
                    "enable": true,
                    "mode": "push" },
            
                  "resize": true },
            
                "modes": {
                  "grab": {
                    "distance": 140,
                    "line_linked": {
                      "opacity": 1 } },
            
            
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3 },
            
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4 },
            
                  "push": {
                    "particles_nb": 4 },
            
                  "remove": {
                    "particles_nb": 2 } } },
            
            
            
              "retina_detect": true
          }}
        >
         
        </Particles>
        <QuestionCard question = {question} onSubmit = {onSubmit} />
        {congrats}
        
    </div>
    
);
}

export default Questions;

