"use client";
import styles from "@/app/page.module.css";
import Blog from "@/app/posts/Blog";
import HomePage from "./posts/HomePage";

export default function Home() {
  return (
    <div id={styles.container}>
      <HomePage />
      <Blog />
    </div>
  );
}
