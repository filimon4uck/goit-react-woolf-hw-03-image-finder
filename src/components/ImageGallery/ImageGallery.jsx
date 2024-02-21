import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import styles from './ImageGallery.module.css';
const ImageGallery = ({ images, handelImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          handelImageClick={handelImageClick}
          // Додав nanoid тому що прилітає помилка що id повторюються
          key={id + nanoid()}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
