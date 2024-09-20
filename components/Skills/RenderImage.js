import Image from 'next/image';
import styles from './GridLayout.module.css';

const RenderImage = ({ images }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.gridContainer}>
        {images.map((img, index) => (
          <div key={index} className={styles.gridItem} >
              <div className={styles.imageWrapper}>
                <Image src={img.src} alt={img.name} width={150} /* Base width */ height={150} /* Base height */
                priority={true} // This makes the image load with priority
                placeholder="blur" // This enables the blur effect while the image is loading
                blurDataURL="/images/placeholder-blur.png"/>
                </div>     
                <span className={styles.imageLabel}>{img.name}</span> {/* Floating name label */}  
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderImage;
