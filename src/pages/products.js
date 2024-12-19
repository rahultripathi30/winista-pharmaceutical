import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/Products.module.css';
import Link from 'next/link';

// Importing the product data from JSON
import productData from '../constants/products.json';

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
            {productData.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className={styles.productCard}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <h2 className={styles.productTitle}>{product.name}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
