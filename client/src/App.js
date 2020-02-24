import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PlayerInfo from "./components/PlayerInfo";
import PlayerForm from "./components/PlayerForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      playerInfo: []
    };
  }

  fetchPlayerData = () => {
    axios
      .get("http://localhost:5000/api/players")

      .then(info => {
        console.log(info.data);
        this.setState({ playerInfo: info.data });
      })

      .catch(err => {
        console.log("cannot retrieve data", err);
      });

    // fetch("https://localhost:5000/api/players")
    //   .then(res => {
    //     return res.json();
    //   })

    //   .then(info => {
    //     console.log(info);
    //   })

    //   .catch(err => {
    //     console.log("cannot retrieve data", err);
    //   });
  };

  componentDidMount() {
    this.fetchPlayerData();
  }

  componentDidUpdate() {
    console.log(this.state.playerInfo);
  }

  render() {
    return (
      <div className="App">
        <h1>Players</h1>
        
        <div>
        <PlayerForm playerInfo={this.state.playerInfo} />
        </div>
      </div>
    );
  }
}

export default App;
