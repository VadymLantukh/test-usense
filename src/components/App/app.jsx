import { Fragment, useState } from 'react';

import { querySearchGifs } from '../../api/api.js';
import SearchBar from '../SearchBar/search-bar.jsx';
import GifList from '../GifList/gif-list.jsx';

import styles from './styles.module.css';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async query => {
    setLoading(true);
    setError(null);
    setGifs([]);

    try {
      const results = await querySearchGifs(query);
      setGifs(results);
    } catch {
      setError('Something went wrong during the download');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />

      <main>
        {loading && <div className={styles.loading}>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}

        {!loading && !error && <GifList gifs={gifs} />}
      </main>
    </Fragment>
  );
};

export default App;
