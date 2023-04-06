import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ title }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/blog">Blog</a>
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <div>
          <a href="/events/london">
            <img />
            <h2> Events in London</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </a>

          <a href="/events/barcelona">
            <img />
            <h2> Events in Barcelona</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </a>

          <a href="/events/milan">
            <img />
            <h2> Events in Milan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </a>

          <a href="/events/vilnius">
            <img />
            <h2> Events in Vilnius</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 ammocodes development</p>
      </footer>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      title: "Hello everyone, I'm a prop",
    },
  };
}
