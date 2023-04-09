import React from "react";
import "./Popup.css";
import { GrClose } from "react-icons/gr";

export default function Popup(props) {
  const pokeAbilities = props.abilities;
  const pokeTypes = props.types;
  const pokeStats = props.stats;

  const statColumns = [
    "Hp",
    "Attack",
    "Defense",
    "Sp-Attack",
    "Sp-Defense",
    "Speed",
  ];


  const uppercaseName = (name) => {
    if (!name) {
        return '';
      }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <img src={props.pokeImg} />
        <h2>{uppercaseName(props.pokemon.name)}</h2>
        <h4>Abilities:</h4>
        <ul>
          {pokeAbilities.map((element) => (
            <li>{element.name}</li>
          ))}
        </ul>
        <h4>Type(s):</h4>
        <ul>
          {pokeTypes.map((element) => (
            <li>{element.name}</li>
          ))}
        </ul>

        <h4>Stats:</h4>
        <table>
          <thead>
            <tr>
              {statColumns.map((element) => {
                return <th>{element}</th>;
              })}
            </tr>
          </thead>
          <tr>
            {pokeStats.map((element) => {
              return <td>{element}</td>;
            })}
          </tr>
        </table>
        <p>
          <b>Weight: </b>
          {props.pokemon.weight} kg
        </p>
        <p>
          <b>Height: </b>
        {props.pokemon.height} cm
        </p>
        <button onClick={props.onClose}>
          <GrClose />
        </button>
      </div>
    </div>
  );
}
