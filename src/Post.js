import React from "react";
import styles from "./Post.module.css";

export default function Post({ title, score, url, author_fullname }) {
  return (
    <div className={styles.post}>
      <a href={url}>
        <p>{title}</p>
      </a>
      <p className={styles.details}>
        Author: {author_fullname} - Score: {score}
      </p>
    </div>
  );
}
