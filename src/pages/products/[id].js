import { useRouter } from 'next/router';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/ProductDetail.module.css';
import productData from '../../constants/products.json';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query; // Get product ID from URL
  const product = productData.find((data) => data.id === Number(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Header />
      <main className={styles.productDetail}>
        <div className={styles.productInfoWrapper}>
          <div className={styles.productImageContainer}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
          </div>
          <div className={styles.productTextContainer}>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.productDescription}>{product.description}</p>
            {/* <p className={styles.productPrice}>Price: ${product.price}</p>
            <button className={styles.buyNow}>Buy Now</button> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
