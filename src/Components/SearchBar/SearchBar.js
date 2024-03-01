import { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() !== '') {
        const suggestions = searchResults.filter(product => {
            return product.title.toLowerCase().includes(value.toLowerCase());
        });
        setSearchSuggestions(suggestions);
    } else {
        setSearchSuggestions([]);
    }
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Найти
      </button>
      {searchSuggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {searchSuggestions.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.title}</li>
          ))}
        </ul>
      )}
      {searchResults.length > 0 && (
        <ul className={styles.resultsList}>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;