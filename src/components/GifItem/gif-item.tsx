import { useState } from 'react';
import { uploadGif } from '../../helpers/upload-gif';

import styles from './styles.module.css';
import type { INormalizedGif } from '../../schema/api.ts';

interface IGifItemProps {
  gif: INormalizedGif;
}

export const GifItem = ({ gif }: IGifItemProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleCopyLink = () => {
    void navigator.clipboard.writeText(gif.downloadUrl).then(() => {
      alert('Link copied!');
    });
  };

  const handleDownload = () => {
    void uploadGif(gif.downloadUrl, `${gif.title}.gif`);
  };

  return (
    <li className={styles.cardGif}>
      <div
        className={styles.imageContainer}
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <img src={gif.previewUrl} alt={gif.title} className={styles.image} />
        <div className={styles.overlay}>
          <span>Click for details</span>
        </div>
      </div>

      {showDetails && (
        <div className={styles.details}>
          <h3 className={styles.title}>{gif.title}</h3>
          <p className={styles.info}>
            <strong>Author:</strong> {gif.author}
          </p>
          <p className={styles.info}>
            <strong>Date:</strong> {new Date(gif.date).toLocaleDateString()}
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={handleCopyLink}
              className={styles.actionBtn}
            >
              Copy Link
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className={styles.actionBtn}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default GifItem;
