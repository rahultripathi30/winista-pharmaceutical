import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/ContactUs.module.css';

export default function ContactUs() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.contactSection}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.introduction}>
            Have any questions or concerns? Reach out to us! We're here to assist you with all your healthcare product needs.
          </p>
          
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
