import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image 
          src="/images/logo.png" 
          alt="Winista Pharmaceutical Logo" 
          width={60} 
          height={55} 
          //className={styles.logoImage} 
        />
        <div className={styles.logoText}>WINISTA PHARMACEUTICAL PVT. LTD. </div>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
