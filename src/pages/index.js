import Header from '../components/Header';
import Carousel from '../components/Carasoel';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <section>
          <h1>Welcome to Winista Pharmaceutical</h1>
          <p>Your trusted partner in healthcare solutions.</p>
        </section>
      </main>
    </div>
  );
}
