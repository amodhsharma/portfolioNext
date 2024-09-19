import Image from 'next/image';
import styles from './GridLayout.module.css';

const RenderImage = ({ images }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.gridContainer}>
        {images.map((img, index) => (
          <div key={index} className={styles.gridItem} >
              <div className={styles.imageWrapper}>
                <Image src={img.src} alt={img.name} layout="responsive" width={150} /* Base width */ height={150} /* Base height *//>
                </div>     
                <span className={styles.imageLabel}>{img.name}</span> {/* Floating name label */}  
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderImage;
