import style from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  handelImageClick,
}) => {
  return (
    <li className={style.imageGalleryItem}>
      <img
        onClick={() => {
          handelImageClick(largeImageURL);
        }}
        className={style.imageGalleryItem_image}
        src={webformatURL}
        alt=""
      />
    </li>
  );
};
export default ImageGalleryItem;
