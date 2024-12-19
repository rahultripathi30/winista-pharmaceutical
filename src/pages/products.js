import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/Products.module.css';

export default function Products() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.productsSection}>
          <h1 className={styles.heading}>Our Products</h1>
          <p className={styles.introduction}>
            Winista Pharmaceutical has been providing quality healthcare products since 2000, ensuring the health and well-being of our customers through advanced and trusted solutions.
          </p>
          
          <div className={styles.productsList}>
            <div className={styles.productCard}>
              <img src="/images/logo.png" alt="Product 1" className={styles.productImage} />
              <h2 className={styles.productTitle}>Product 1</h2>
              <p className={styles.productDescription}>
                High-quality healthcare product designed to improve your well-being. 
                Trusted by healthcare professionals.
              </p>
            </div>
            
            <div className={styles.productCard}>
              <img src="/images/logo.png" alt="Product 2" className={styles.productImage} />
              <h2 className={styles.productTitle}>Product 2</h2>
              <p className={styles.productDescription}>
                An innovative solution for effective treatment. Provides long-lasting relief for patients.
              </p>
            </div>

            <div className={styles.productCard}>
              <img src="/images/logo.png" alt="Product 3" className={styles.productImage} />
              <h2 className={styles.productTitle}>Product 3</h2>
              <p className={styles.productDescription}>
                A revolutionary product that delivers fast results. Manufactured with precision and care.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
