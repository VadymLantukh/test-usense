import { useState } from 'react';
import styles from './styles.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const cleanQuery = query.trim();

    onSearch(cleanQuery);
  };

  return (
    <header className={styles.header}>
      <search>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="search"
            className={styles.input}
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Search GIFs..."
          />

          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </search>
    </header>
  );
};

export default SearchBar;
