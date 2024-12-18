import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
