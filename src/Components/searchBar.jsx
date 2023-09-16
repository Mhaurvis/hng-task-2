import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/searchBar.css';

    const SearchBar = () => {
        return(
            <div className="search-bar">
                <input type="text" placeholder="Seacrh Here"  />
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
            </div>
        );
    };

export default SearchBar;