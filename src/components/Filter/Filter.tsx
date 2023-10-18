import { useEffect, useState } from "react";
import cn from 'classnames';
import { getTypes } from "../../api/fetchPokemons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Filter.css';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { capitalizeLetter } from "../../utils/capitalize";
import { PokemonsContext } from "../../context/PokemonsContext";
import React from "react";

export const Filter: React.FC = () => {
  const { selectedType, setSelectedType, setShowSidebar } = React.useContext(PokemonsContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes()
      .then(data => setTypes(data.results.map((el: { name: string }) => capitalizeLetter(el.name))))
  }, []);

  const handleSelect = (item: string) => {
    setSelectedType(item);
    setShowDropdown(false);
  };

  const handleClick= () => {
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    setShowSidebar(false)
  }

  return (
    <div
        className={cn(
        'filter',
        'dropdown',
        'is-left',
        { 'is-active': showDropdown },
      )}
    >
      <div>
        <button
          className="drop-button button is-flex is-justify-content-space-between is-align-content-top"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
          onClick={() => handleClick()}
        >
          <span>{selectedType ? selectedType : 'Filter by Type'}</span>
          <span className="icon is-small">
            {!showDropdown && <FontAwesomeIcon icon={faAngleDown} />}
            {showDropdown && <FontAwesomeIcon icon={faAngleUp} />}
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          {types.map(el => (
            <span
              className="dropdown-item drop-item"
              key={el}
              onClick={() => handleSelect(el)}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
};