// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Spring, animated } from "react-spring/renderprops";
// import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

// import "../../assets/poppstyl.css";

// export default class Mod extends Component {
//   state = {
//     isOpen: false
//   };

//   onToggle = () => this.setState(state => ({ isOpen: !this.state.isOpen }));
//   onClickClose = () => this.setState(state => ({ isOpen: false }));

//   render() {
//     const { isOpen } = this.state;

//     return (
//       <div className="Appp">
//         <div className="modall-toggle" onClick={this.onToggle.bind(this)}>
//           toggle
//         </div>
//         <Spring
//           native
//           force
//           from={{ transform: "scale(0)" }}
//           to={{ transform: isOpen ? "scale(1)" : "scale(0)" }}
//           config={{ easing: Easing.easeOut }}
//         >
//           {props => {
//             return (
//               <animated.div className="modall-wrapper" style={props}>
//                 <div className="modall">
//                   <div
//                     class="modall--close"
//                     onClick={this.onClickClose.bind(this)}
//                   >
//                     close
//                   </div>
//                   <div className="modall--body">hello</div>
//                 </div>
//               </animated.div>
//             );
//           }}
//         </Spring>
//       </div>
//     );
//   }
// }
// // export default Mod;
// // const rootElement = document.getElementById("root");

