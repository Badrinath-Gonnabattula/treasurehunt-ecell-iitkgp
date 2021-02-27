import React, { useState, useRef } from "react";
import { useSpring, animated } from 'react-spring'
import Popup from "./popup.js";
import "../../assets/hint.css";
// import "../../assets/poppstyl.css";
// import './Playnowcard.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.3]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Hint(propss) {

  const [isOpen, setIsOpen] = useState(false);

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 50 } }))

  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
    <div classname="pop" onClick = {() => setIsOpen(!isOpen)}>
    <animated.div
      class="hint"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // onClick={() => setIsOpen(!isOpen)}
      
      style={{ transform: props.xys.interpolate(trans)}}
    >
    <p >{propss.name}</p></animated.div>
    {/* <Popup isOpen={!isOpen}>Lorem ipsum</Popup> */}
    </div>
     {/* <Popup isOpen={isOpen}>Lorem ipsum</Popup> */}
     </div>
  )
}

export default Hint;
