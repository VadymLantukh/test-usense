import { Fragment, useState } from 'react';
import useSWR from 'swr';

import { querySearchGifs } from '../../api/api.ts';
import SearchBar from '../SearchBar/search-bar.tsx';
import GifList from '../GifList/gif-list.tsx';

import styles from './styles.module.css';
import type { INormalizedGif } from '../../schema/api.ts';

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    data: gifsData,
    error,
    isLoading,
  } = useSWR<INormalizedGif[], Error>(searchQuery || null, querySearchGifs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <SearchBar onSearch={handleSearch} />

      <main>
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error.message}</p>}

        {gifsData && <GifList gifs={gifsData} />}
      </main>
    </Fragment>
  );
};

export default App;
