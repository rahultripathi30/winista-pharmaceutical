import Header from '../components/Header';
import Carousel from '../components/Carasoel';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    alert('Work In Progress');
  }, []); 
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <Carousel />
        <section className={styles.introSection}>
          <h1 className={styles.heading}>Welcome to Winista Pharmaceutical</h1>
          <p className={styles.tagline}>Your trusted partner in healthcare solutions.</p>
          <p className={styles.description}>
            At Winista Pharmaceutical, we are committed to delivering high-quality and innovative solutions
            that meet the diverse needs of the healthcare industry. Our mission is to improve lives through 
            advanced pharmaceutical products and exceptional care.
          </p>
          <p className={styles.description}>
            We specialize in manufacturing, research, and distribution of pharmaceutical products, with a 
            focus on patient well-being. Join us as we continue to advance healthcare and make a positive 
            impact globally.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
