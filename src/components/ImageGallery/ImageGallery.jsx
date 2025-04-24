import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ galleryItems, onImageClick }) {
    return (
        <>
            <ul className={styles.gallery}>
                {galleryItems.map((item, index) => (
                    <li key={index} className={styles.galleryItem}>
                        <ImageCard imageItem={item} onClick={onImageClick} />
                    </li>
                ))}
            </ul>

        </>
    );
}
