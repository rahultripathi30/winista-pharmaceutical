import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <h3>Winista Pharmaceutical</h3>
          <p>Your trusted partner in healthcare solutions.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>Email: info@winista.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Pharma Street, Health City, USA</p>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Winista Pharmaceutical. All rights reserved.</p>
      </div>
    </footer>
  );
}
