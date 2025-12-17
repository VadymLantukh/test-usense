import { useState } from 'react';
import { uploadGif } from '../../helpers/upload-gif';

import styles from './styles.module.css';

export const GifItem = ({ gif }) => {
  const [showDetails, setShowDetails] = useState(false);
  const title = gif.title || 'Untitled GIF';
  const imageUrl = gif.images.fixed_height.url;
  const originalUrl = gif.images.original.url;
  const author = gif.username || 'Unknown';
  const date = gif.import_datetime;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(originalUrl);
    alert('Link copied');
  };

  const handleDownload = () => {
    uploadGif(originalUrl, `${title}.gif`);
  };

  return (
    <li className={styles.cardGif} key={gif.id}>
      <div
        className={styles.imageContainer}
        onClick={() => setShowDetails(!showDetails)}
      >
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <span>Click for details</span>
        </div>
      </div>

      {showDetails && (
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.info}>
            <strong>Author:</strong> {author}
          </p>
          <p className={styles.info}>
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </p>

          <div className={styles.actions}>
            <button onClick={handleCopyLink} className={styles.actionBtn}>
              Copy Link
            </button>
            <button onClick={handleDownload} className={styles.actionBtn}>
              Download
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default GifItem;
