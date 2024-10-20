import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Welcome to LadyWithLens</h1>
          <p>Your one-stop solution for graphic design brilliance.</p>
          <button className={styles.ctaButton}>Explore Designs</button>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2>What We Offer</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Brand Identity</h3>
            <p>Elevate your brand with our unique visual identity services.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Web Design</h3>
            <p>Create stunning, user-friendly websites that reflect your brand.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Marketing Materials</h3>
            <p>Design brochures, flyers, and more to promote your business.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
