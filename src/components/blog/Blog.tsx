import { FaArrowRight } from "react-icons/fa6";

import styles from "./styles.module.css";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.smTitle}>LATEST BLOG</p>
          <h2 className={styles.title}>LATEST BLOG INSIGHTS</h2>
        </div>
        <ul className={styles.blogList}>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/src/assets/blog-01.jpg" alt="blog" />
              <span className={styles.note}>Building</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
                Best of the World Largest Passive House Buildings Solution
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>Read Details</span>
                <FaArrowRight className={styles.icon} />
              </a>
            </div>
          </li>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/src/assets/blog-02.jpg" alt="blog" />
              <span className={styles.note}>Building</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
                One of the World Largest Passive House Buildings Solution
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>Read Details</span>
                <FaArrowRight className={styles.icon} />
              </a>
            </div>
          </li>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/src/assets/blog-03.jpg" alt="blog" />
              <span className={styles.note}>Building</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
                Key foature Largest Passive House Buildings Solution Solution
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>Read Details</span>
                <FaArrowRight className={styles.icon} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
