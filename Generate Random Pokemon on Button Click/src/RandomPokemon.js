import { useState } from "react";
import "./RandomPokemon.css";

function getRandomNumber() {
  const rand = Math.floor(Math.random() * 151 + 1);
  return rand;
}

function getRandomPokemon(rand) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rand}.png`;
  return url;
}

export default function RandomPokemon() {
  const [rand, setRand] = useState(getRandomNumber());
  const [url, setUrl] = useState(getRandomPokemon(rand));

  function handleClick() {
    setRand(getRandomNumber());
    setUrl(getRandomPokemon(rand));
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{rand}</h1>
      <div className="RandomPokemon">
        <img src={url} />
      </div>
      <button onClick={handleClick}>Get Random Pokemon</button>
    </>
  );
}
