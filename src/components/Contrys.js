import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Range from "./Range";
import FilterContrys from "./FilterContrys";
import TrieByPopulation from "./TrieByPopulation";

export default function Contrys() {
  const [contrys, setContrys] = useState([]);
  const [range, setRange] = useState(15);
  const [select, setSelect] = useState("");
  const [trie, setTrie] = useState("");
  const Continants = [
    "Filtrez",
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];
  const tries = ['Trie par population', "plus", "moins"];
  const contrysFilter =
    select == ""
      ? contrys
      : contrys.filter((contry) => contry.continents[0] === select);
   const contrytrie =(trie === "" || trie === "plus")
       ? contrysFilter.sort((a, b) => b.population - a.population)
 
       : contrysFilter.sort((a, b) => a.population - b.population);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setContrys(res.data);

      //   console.log(res.data);
    });
  }, []);

  return (
    <div className="home">
      <div className="filter">
        <FilterContrys
          value={select}
          onChange={setSelect}
          continants={Continants}
        />
        <TrieByPopulation value={trie} onChange={setTrie} tries={tries} />
        <Range value={range} onChange={setRange} />
        <p>Nombres de pays :{contrytrie.length}</p>
      </div>
      <div className="contrys">
        {contrytrie.slice(0, range).map((contry, index) => (
          <Card key={index} ContryName={contry} />
        ))}
      </div>
    </div>
  );
}
