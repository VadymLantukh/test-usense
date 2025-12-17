import GifItem from '../GifItem/gif-item.jsx';
import styles from './styles.module.css';

const GifList = ({ gifs }) => {
  if (!gifs.length) {
    return <p className={styles.empty}>Введіть запит, щоб знайти GIF!</p>;
  }

  return (
    <ul className={styles.listGifs}>
      {gifs.map(gif => (
        <GifItem gif={gif} />
      ))}
    </ul>
  );
};

export default GifList;
