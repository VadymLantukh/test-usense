import GifItem from '../GifItem/gif-item.tsx';
import styles from './styles.module.css';
import type { INormalizedGif } from '../../schema/api.ts';

interface IGifListProps {
  gifs: INormalizedGif[];
}

const GifList = ({ gifs }: IGifListProps) => {
  if (!gifs.length) {
    return <p className={styles.empty}>Enter a query to find a GIF!</p>;
  }

  return (
    <ul className={styles.listGifs}>
      {gifs.map(gif => (
        <GifItem gif={gif} key={gif.id} />
      ))}
    </ul>
  );
};

export default GifList;
