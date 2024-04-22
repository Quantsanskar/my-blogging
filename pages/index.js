import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/mainpage.module.css';
import Link from 'next/link';



const Index = () => {
    const router = useRouter();
    const navigateToBlogsPage = () => {
        router.push('/routes/blogs');
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Your Blogging Website</title>
                <meta name="description" content="Welcome to your blogging website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src="/demo-logo.webp" alt="Your Blogging Website Logo" />
                        <h1>Your Blogging Website</h1>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">Categories</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                    <button className={styles.hamburger}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </nav>
            </header>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>
                        Welcome to <span>Your Blogging Website</span>
                    </h1>
                    <p className={styles.description}>
                        Start exploring amazing blog posts now!
                    </p>
                    <button className={styles.exploreButton} onClick={navigateToBlogsPage}>Explore Now</button>
                </section>

                <section className={styles.featuredPosts}>
                    <h2 className={styles.sectionTitle}>Featured Blog Posts</h2>
                    <div className={styles.postGrid}>
                        {/* Featured blog posts */}
                        <div className={styles.postCard}>
                            <img src="/blog-post-1.jpg" alt="Blog Post 1" />
                            <div className={styles.postContent}>
                                <h3>10 Best Travel Destinations in 2024</h3>
                                <p>Explore the top travel destinations for your next adventure.</p>
                            </div>
                        </div>
                        <div className={styles.postCard}>
                            <img src="/blog-post-2.jpg" alt="Blog Post 2" />
                            <div className={styles.postContent}>
                                <h3>How to Start a Successful Blog: A Beginner's Guide</h3>
                                <p>Learn the essential steps to start your own successful blog.</p>
                            </div>
                        </div>
                        {/* Add more featured blog posts */}
                    </div>
                </section>

                {/* Add more sections as needed */}
            </main>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Your Blogging Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Index;
