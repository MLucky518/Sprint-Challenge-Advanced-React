import React, { useState, useEffect } from "react";
import customForm from "../customForm";

// create a clear button to reset filtered state
// added && necassary for tests to pass

function PlayerForm(props) {
  const players = props.playerInfo;
  console.log(players && players);
  const { handleChange, handleSubmit, values } = customForm(submit);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearched] = useState("");

  function submit() {
    console.log("submitted");
  }

  useEffect(() => {
    const filteredPlayers =
      players &&
      players.filter(player => player.name.toLowerCase().includes(search));
    setFiltered(filteredPlayers && filteredPlayers);
  }, [search]);

  function handleChanges(e) {
    handleChange(e);
    setSearched(e.target.value);
  }
  console.log(filtered && filtered);
  return (
    <div>
      <form data-testid = "filterForm" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Filter By name:</label>
        <input
          type="text"
          name="name"
          placeholder="type desired name here"
          value={search}
          onChange={handleChanges}
        />
       <button type="submit">Submit</button>
      </form>
      <div>
        {filtered &&
          filtered.map(filt => {
            return (
              <div classname="filtered-chars">
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
