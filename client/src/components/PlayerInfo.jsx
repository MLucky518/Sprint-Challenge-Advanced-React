import React from "react";

function PlayerInfo(props) {
  const players = props.playerInfo;
  console.log(players);
  return (
    <div className="playerContainer">
      {players.map(player => {
        return (
          <ul>
            <li>
              <h2>{player.name}</h2>
            </li>
            <li>
              <p>{player.country}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default PlayerInfo;
