import React from "react";
import {useEffect} from 'react';
import './Congratulations.css';
import {TweenMax,Power1,Back} from 'gsap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const _ = require("lodash");   

const Congratulations = (props) =>{
    function createStart(i){
        return (
            <div className={'blob fa fa-star '+i}></div>
        );
    }
    useEffect(()=>{
        animateText();
        animateBlobs();
    },[])

    
    function animateText() {
            let e = document.getElementsByTagName('h1')[0];
            TweenMax.from(e, 0.8, {
            scale: 0.4,
            opacity: 0,
            rotation: 15,
            ease: Back.easeOut.config(4),
        });
    }
        
    function animateBlobs() {
        
        var xSeed = _.random(350, 380);
        var ySeed = _.random(120, 170);
        let blobs = document.getElementsByClassName('blob');
        for(var i=0;i<blobs.length;++i){
            var blob = blobs[i];
            var speed = _.random(1, 5);
            var rotation = _.random(5, 100);
            var scale = _.random(0.8, 1.5);
            var x = _.random(-xSeed, xSeed);
            var y = _.random(-ySeed, ySeed);
    
            TweenMax.to(blob, speed, {
                x: x,
                y: y,
                ease: Power1.easeOut,
                opacity: 0,
                rotation: rotation,
                scale: scale,
                onStartParams: [blob],
                onStart: function(blob) {
                    blob.style.display = 'block';
                },
                onCompleteParams: [blob],
                onComplete: function(blob) {
                    blob.style.display = 'none';
                }
            });
        }
    }
    let e = []
    for(var i = 0 ; i<200 ; ++i){
        e[i] = (<div className={'blob fa fa-star ' + i}></div>);
    }

    return (
        <div className={"congrats"}>
            <h1>Congratulations!<br></br>Correct Answer!</h1>
            {e.map(x=>x)}
        </div>
    )
}

export default Congratulations;