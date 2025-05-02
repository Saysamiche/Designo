import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="Designo" content="Designo Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="web" className={styles.main}>
        <div className={styles.web}>
          <h2>Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </main>

      <section className={styles.topsection}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-1.avif"
            width={330}
            height={285}
            alt="image for Express"
            priority
          />
          <div className={styles.text}>
            <h3>EXPRESS</h3>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-2.avif"
            width={330}
            height={285}
            alt="image for Transfer"
          />
          <div className={styles.text}>
            <h3>TRANSFER</h3>
            <p>
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-3.avif"
            width={330}
            height={285}
            alt="image for Photon"
          />
          <div className={styles.text}>
            <h3>PHOTON</h3>
            <p>
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bottomsection}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-4.avif"
            width={330}
            height={285}
            alt="image for Builder"
          />
          <div className={styles.text}>
            <h3>BUILDER</h3>
            <p>Connects users with local contractors based on their location</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-5.avif"
            width={330}
            height={285}
            alt="image for Blogr"
          />
          <div className={styles.text}>
            <h3> BLOGR</h3>
            <p>
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/image-6.avif"
            width={330}
            height={285}
            alt="image for camp"
          />
          <div className={styles.text}>
            <h3>CAMP</h3>
            <p>
              Get expert training in coding, data, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      <section className={styles.designcontainer}>
        <div className={styles.appdesign}>
          <Link className={styles.designlink} href="/design#app">
            <h3>APP DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>

        <div className={styles.graphicdesign}>
          <Link className={styles.designlink} href="/graphics#graphics">
            <h3>GRAPHIC DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
