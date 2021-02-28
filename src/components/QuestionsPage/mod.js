import React from 'react';
import Rodal from 'rodal';
import Demo from './Datatable/demo.js';
// include styles
import 'rodal/lib/rodal.css';

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
      <div className="mrd">
        <button className="pos" onClick={this.show.bind(this)}>Leaderboard</button>

        <Rodal className="mrd" visible={this.state.visible} onClose={this.hide.bind(this)} animation="door" customStyles={{height: '80%',width:'70%',display:"inline-block",margin:'auto'}}>
          <div className="mrd">
              <h2>Leaderboard</h2>
              <Demo />
          </div>
        </Rodal>
      </div>
    );
  }
}