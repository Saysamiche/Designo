import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.emoji}>😔</h1>

      <h3 className={styles.apologytext}>opps.....Sorry❕</h3>
      <p className={styles.todo}>
        Page not found{" "}
        <Link className={styles.links} href="/contact#contact">
          click here
        </Link>
        👈🏽
      </p>
    </div>
  );
}
