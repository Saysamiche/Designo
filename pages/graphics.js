import styles from "@/styles/graphics.module.css";
import Image from "next/image";
import Link from "next/link";

const grahics = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.web}>
          <h2>Graphic Design</h2>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </main>
      

      <section className={styles.topsection}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Timbrown.avif"
            width={326}
            height={298}
            alt="Tim Brown"
          />
          <div className={styles.text}>
            <h3>TIM BROWN</h3>
            <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Boxedwater.avif"
            width={326}
            height={298}
            alt="Boxed Water"
          />
          <div className={styles.text}>
            <h3>BOXED WATER</h3>
            <p>A simple packaging concept made for Boxed Water</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Science.avif"
            width={326}
            height={298}
            alt="Science"
          />
          <div className={styles.text}>
            <h3>SCIENCE !</h3>
            <p>A poster made in collaboration with the Federal Art Project</p>
          </div>
        </div>
      </section>

      <section className={styles.designcontainer}>
        <div className={styles.appdesign}>
          <Link className={styles.designlink} href="/">
            <h3>WEB DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>

        <div className={styles.graphicdesign}>
          <Link className={styles.designlink} href="/design">
            <h3>APP DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default grahics;
