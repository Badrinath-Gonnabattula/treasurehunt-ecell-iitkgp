import React, { useState, useRef ,useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import Hint from './hint.js';
import Popup from "./popup.js";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "../../assets/cardstyle.css";
import "../../assets/hint.css";
import "../../assets/poppstyl.css";
import Alert from '@material-ui/lab/Alert';

function QuestionCard(props) {
    // obj=props
    console.log(props);
    const [Question, setQuestion] = useState({questionbody:"",hint:[]});
    const [Resp,setResp] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const cards = [
      {
      //   id:{ props.id},
        title:props.questiontitle,
        description:props.question,

        image: props.image,
        imageRatio: 784 / 1016,
        ans: props.ans,
        submitted:Resp,

      }];
    

    useEffect(()=>{
      setQuestion(props.question);
      setIsOpen(false);
      setResp('');
      const alertWindow = document.getElementsByClassName('WA')[0];
      alertWindow.style.display = "none";
    },[props])
    
    return (
      <div className="main">
        
          <Hero>
            <div className="container">
              <div className="row">
                <div className="column">
                    <Card>
                      {/* <div className="card-title">{Question.title}</div> */}
                      <div className="card-body">{Question.questionbody}</div>
                      {/* <Image ratio={card.imageRatio} src={card.image} /> */}
                      <div>
                      <Hint container justify="center" spacing={0} className='cards-container' name="Hint" callback = {setIsOpen}> Hint</Hint>
                      </div>
                      <Popup isOpen={isOpen}>
                        <div className="flex-img-container">
                          {Question.hint.map((e)=>(
                            <Image ratio={cards[0].imageRatio} src={e} width={100/Question.hint.length}/>
                          ))}
                          {/* <Image ratio={cards[0].imageRatio} src={Question.hint} width={100}/> */}
                        </div>
                          
                        
                      </Popup>
                      <TextField
                        id="outlined-full-width"
                        // ref="ans"
                        // value={cards[i].submitted}
                        label="Ans"
                        placeholder="Placeholder"
                        // helperText="Full width!"
                        // fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true
                        }}
                        variant="outlined"
                        value = {Resp}
                        onChange={e => setResp(e.target.value)}
                      />
                      <div className='WA'>
                        <Alert severity="error" style={{marginBottom:5}}>
                          Incorrect answer! Tumse na ho payega XD
                        </Alert>
                      </div>
                      
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => props.onSubmit(e,Resp)}
                        // endIcon={<Icon>send</Icon>}
                      >
                        Submit
                      </Button>
                    </Card>
                  </div>
              </div>
            </div>
          </Hero>
       
      </div>
    );
  }
  
  function Card({ children }) {
    // We add this ref to card element and use in onMouseMove event ...
    // ... to get element's offset and dimensions.
    const ref = useRef();
  
    // Keep track of whether card is hovered so we can increment ...
    // ... zIndex to ensure it shows up above other cards when animation causes overlap.
    const [isHovered, setHovered] = useState(false);
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        // Array containing [rotateX, rotateY, and scale] values.
        // We store under a single key (xys) instead of separate keys ...
        // ... so that we can use animatedProps.xys.interpolate() to ...
        // ... easily generate the css transform value below.
        xys: [0, 0, 1],
        // Setup physics
        config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
      };
    });
  
    return (
      <animated.div
        ref={ref}
        className="card"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
          // Get mouse x position within card
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || window.pageXOffset || document.body.scrollLeft));
  
          // Get mouse y position within card
          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || window.pageYOffset || document.body.scrollTop));
  
          // Set animated values based on mouse position and card dimensions
          const dampen = 50; // Lower the number the less rotation
          const xys = [
            -(y - ref.current.clientHeight / 2) / dampen, // rotateX
            (x - ref.current.clientWidth / 2) / dampen, // rotateY
            1.07 // Scale
          ];
  
          // Update values to animate to
          setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false);
          // Set xys back to original
          setAnimatedProps({ xys: [0, 0, 1] });
        }}
        style={{
          // If hovered we want it to overlap other cards when it scales up
          zIndex: isHovered ? 2 : 1,
          // Interpolate function to handle css changes
          transform: animatedProps.xys.interpolate(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        }}
      >
        {children}
      </animated.div>
    );
  }
  

  function Hero({ children }) {
    return (
      <div className="hero">
        <div className="hero-body">{children}</div>
      </div>
    );
  }
  
  function Image({ ratio, src ,width}) {
    width = width + '%';
    return (
      <div className="image-container" style={{width:width}}>
        <div className="image-inner-container">
          <div
            className="ratio"
            style={{
              paddingTop: ratio * 100 + "%"
            }}
          >
            <div className="ratio-inner">
              <img src={src} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  
  
    // {
    //   id: 2,
    //   title: "Tweak anything 👩‍🎨",
    //   description:
    //     "Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.",
    //   image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    //   imageRatio: 839 / 1133,
    //   ans: "2",
    //   submitted: ""
    // },
    // {
    //   id: 3,
    //   title: "Tweak anything 👩‍🎨",
    //   description:
    //     "Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.",
    //   image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    //   imageRatio: 839 / 1133,
    //   ans: "3",
    //   submitted: ""
    // },
    // {
    //   id: 4,
    //   title: "Tweak anything 👩‍🎨",
    //   description:
    //     "Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.",
    //   image: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
    //   imageRatio: 839 / 1133,
    //   ans: "4",
    //   submitted: ""
    // },
  
    // {
    //   id: 5,
    //   title: "Export your code 🚀",
    //   description:
    //     "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    //   image: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
    //   imageRatio: 730 / 1030,
    //   ans: "5",
    //   submitted: ""
    // }
 
  
  
  export default QuestionCard;

