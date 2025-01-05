import styles from "@/styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <section className={styles.preview}>
        <div id="contact" className={styles.project}>
          <h3>Contact Us</h3>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <form action="/message" method="GET" className={styles.form}>
          <input
            className={`${styles.input} ${styles.name}`}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Phone"
            required
          />
          <input
            maxLength="38"
            className={`${styles.input} ${styles.message}`}
            type="text"
            placeholder="Your Message"
            required
          />

          <button className={styles.btn}>
            <Link className={styles.btnlink} href="/message">
              SUBMIT
            </Link>
          </button>
        </form>
      </section>

      <section className={styles.alllocation}>
        <div className={styles.cities}>
          <div className={styles.location}>
            <Image
              src="/illustration-canada.svg"
              alt="illustration of canada-"
              width={202}
              height={202}
            />
          </div>
          <h3>Canada</h3>
          <Link className={styles.link} href="/locations#canada">
            See Location
          </Link>
        </div>

        <div className={styles.cities}>
          <div className={styles.location}>
            <Image
              src="/illustration-australia.svg"
              alt="illustration-australia"
              width={202}
              height={202}
            />
          </div>
          <h3> Australia</h3>
          <Link className={styles.link} href="/locations#australia">
            See Location
          </Link>
        </div>

        <div className={styles.cities}>
          <div className={styles.location}>
            <Image
              src="/illustration-united-kingdom.svg"
              alt="illustration-united-kingdom"
              width={202}
              height={202}
            />
          </div>
          <h3> United Kingdom</h3>
          <Link className={styles.link} href="/locations#uk">
            See Location
          </Link>
        </div>
      </section>
    </>
  );
};

export default contact;
