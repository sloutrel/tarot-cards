import React, { useState } from 'react';
import Cards from './tarot-data/tarot-images';
import Card from './Card';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const selectFilter = (e) => {
    setSearchTerm(e.target.value);
    let selector = document.querySelector('#card-select');
    selector.value = '';
  };
  const searchBar = (e) => {
    setSearchTerm(e.target.value);
    let search = document.querySelector('.searchbar');
    search.value = '';
  };
  return (
    <div className="Search">
      <div className="Search-filters">
        <div className="Search-searchbar">
          <label for="search">Search:</label>
          <input
            name="search"
            className="searchbar"
            type="text"
            placeholder="search"
            onChange={(e) => selectFilter(e)}
          />
        </div>
        OR
        <div className="Search-selector">
          <label for="card-select">Filter by:</label>

          <select
            onChange={(e) => searchBar(e)}
            name="cards"
            className="selector"
            id="card-select"
          >
            <option value="">All</option>
            <option value="Major">Major Arcana</option>
            <option value="Minor">Minor Arcana</option>
            <option value="Cups">Cups</option>
            <option value="Swords">Swords</option>
            <option value="Wands">Wands</option>
            <option value="Pentacles">Pentacles</option>
          </select>
        </div>
      </div>
      <div className="card-display">
        {Cards.filter((val) => {
          if (searchTerm === '') {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.suit.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.arcana.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <Card
              id={val.key}
              key={val.name}
              name={val.name}
              number={val.number}
              arcana={val.arcana}
              suit={val.suit}
              img={val.img}
              fortune={val.fortune_telling}
              keywords={val.keywords}
              meanings={val.meanings}
              astrology={val.Astrology}
              numerology={val.Numerology}
              affirmation={val.Affirmation}
              archetype={val.Archetype}
              element={val.Elemental}
              myth={val.Mythical}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
