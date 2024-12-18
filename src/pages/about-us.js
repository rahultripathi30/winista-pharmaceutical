import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.introduction}>
            Winista Pharmaceutical has been providing quality healthcare products since 2000, ensuring the health and well-being of our customers through advanced and trusted solutions.
          </p>
          <p className={styles.description}>
            Our company is dedicated to innovation, research, and development, with a wide range of pharmaceutical products that cater to diverse medical needs. We focus on delivering the highest quality in every product we produce, while ensuring the highest standards of patient care.
          </p>
          <h2 className={styles.subHeading}>Our Mission</h2>
          <p className={styles.description}>
            At Winista Pharmaceutical, our mission is to improve lives by providing high-quality, affordable pharmaceutical products. We aim to lead in the industry with cutting-edge solutions that benefit both healthcare professionals and patients around the world.
          </p>
          <h2 className={styles.subHeading}>Our Vision</h2>
          <p className={styles.description}>
            We strive to be a global leader in healthcare, bringing innovative products to the market that make a meaningful impact on global health. Our vision is to be recognized for our commitment to improving the health and lives of people everywhere.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
