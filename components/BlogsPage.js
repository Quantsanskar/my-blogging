// BlogsPage.js
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/blogs.module.css';
import Link from 'next/link';
const BlogsPage = () => {
    // Sample blog data, replace it with your actual blog data
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet...', comments: [] },
        { id: 2, title: 'Second Blog Post', content: 'Consectetur adipiscing elit...', comments: [] },
        // Add more blog posts as needed
    ]);

    const [newBlogTitle, setNewBlogTitle] = useState('');
    const [newBlogContent, setNewBlogContent] = useState('');

    const addComment = (blogId, comment) => {
        const updatedBlogs = blogs.map(blog => {
            if (blog.id === blogId) {
                return {
                    ...blog,
                    comments: [...blog.comments, comment]
                };
            }
            return blog;
        });
        setBlogs(updatedBlogs);
    };

    const handleNewBlogSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            id: blogs.length + 1,
            title: newBlogTitle,
            content: newBlogContent,
            comments: []
        };
        setBlogs([...blogs, newBlog]);
        setNewBlogTitle('');
        setNewBlogContent('');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Blogs | Your Blogging Website</title>
                <meta name="description" content="Explore and interact with blogs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src="/demo-logo.webp" alt="Your Blogging Website Logo" />
                        <h1>Your Blogging Website</h1>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><Link href="/">Home</Link></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <section className={styles.blogSection}>
                    <h2 className={styles.sectionTitle}>Recent Blogs</h2>
                    <div className={styles.blogList}>
                        {/* Display blog posts */}
                        {blogs.map(blog => (
                            <div key={blog.id} className={styles.blogCard}>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                                {/* Add comment section */}
                                <div className={styles.commentSection}>
                                    <h4>Comments</h4>
                                    {/* Display comments */}
                                    {blog.comments.length === 0 ? <p>No comments yet</p> :
                                        blog.comments.map((comment, index) => (
                                            <div key={index} className={styles.comment}>{comment}</div>
                                        ))
                                    }
                                    {/* Add comment form */}
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        const comment = e.target.comment.value;
                                        addComment(blog.id, comment);
                                        e.target.comment.value = '';
                                    }}>
                                        <input type="text" name="comment" placeholder="Add a comment" />
                                        <button type="submit">Add Comment</button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Add New Blog Form */}
                <section className={styles.addBlogSection}>
                    <h2 className={styles.sectionTitle}>Add a New Blog</h2>
                    <form onSubmit={handleNewBlogSubmit}>
                        <input type="text" placeholder="Title" value={newBlogTitle} onChange={(e) => setNewBlogTitle(e.target.value)} />
                        <textarea placeholder="Content" value={newBlogContent} onChange={(e) => setNewBlogContent(e.target.value)}></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Your Blogging Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default BlogsPage;
