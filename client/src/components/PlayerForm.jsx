import React, { useState, useEffect } from "react";
import customForm from "../customForm";

function PlayerForm(props) {
  const players = props.playerInfo;
  console.log(players);
  const { handleChange, handleSubmit, values } = customForm(submit);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearched] = useState("");

  function submit() {
    console.log("submitted");
  }

  useEffect(() => {
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(search)
    );
    setFiltered(filteredPlayers);
  }, [search]);


  function handleChanges(e){
  
    handleChange(e);
    setSearched(e.target.value);

}
  console.log(filtered);
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder = "filter by name"
          value={search}
          onChange={handleChanges}
        />
        <input type="submit" />
      </form>
      <div>
        {filtered.map(filt => {
          return (
            <div classname="filtered">
              <ul>
                <h2>{filt.name}</h2>
                <li>{filt.country}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayerForm;
