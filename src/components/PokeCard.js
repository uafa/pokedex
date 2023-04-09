import React, { useEffect, useState } from "react";
import "./PokeCard.css";
import Popup from "./Popup";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const imgSrc =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    pokemon.id +
    ".png";

  const colorMap = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  const color = types.length > 0 ? colorMap[types[0].name] : "";

  const getPokemon = (pokeName) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setTypes(data.types.map((type) => type.type));
        setAbilities(data.abilities.map((ability) => ability.ability));
        setStats(data.stats.map((stat) => stat.base_stat));
      });
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect((pokeName) => {
    getPokemon(props.name);
  }, []);

  const uppercaseName = (name) => {
    if (!name) {
      return "";
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <button
        onClick={handleOpenPopup}
        class="button-card"
        role="button"
        style={{ background: color }}
      >
        <div>
          <p>{uppercaseName(pokemon.name)}</p>
          <img src={imgSrc} />
        </div>
        <p id="idText"> id: {pokemon.id}</p>
      </button>
      {showPopup && (
        <Popup
          pokemon={pokemon}
          pokeImg={imgSrc}
          stats={stats}
          abilities={abilities}
          types={types}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
