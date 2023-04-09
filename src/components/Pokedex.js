import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

export default function Pokedex() {
  const [pokePage, setPokePage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPokePage = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        (currentPage - 1) * 12
      }&limit=12`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokePage(data.results);
      });
  };

  useEffect(() => {
    getPokePage();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div class="dexGridContainer">
        <div class="dexGridWrapper">
          <div class="dexGrid">
            {pokePage.map((pokemon) => (
              <PokeCard
                key={pokemon.url}
                name={pokemon.name}
                class="gridItem"
              />
            ))}
          </div>
          <div class="pagination">
            <button
              class="pageButton"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              Previous
            </button>
            <button
              class="pageButton"
              disabled={pokePage.length < 12}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
