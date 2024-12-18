import styles from '../styles/Home.module.css';

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>Slide 1</div>
      <div className={styles.slide}>Slide 2</div>
      <div className={styles.slide}>Slide 3</div>
    </div>
  );
}
