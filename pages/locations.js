import styles from "@/styles/location.module.css";
import Image from "next/image";

const location = () => {
  return (
    <main className={styles.main}>
      <section id="canada" className={styles.contact}>
        <div className={styles.container}>
          <h2>Canada</h2>
          <div className={styles.address}>
            <div className={styles.location}>
              <h3>Designo Central Office</h3>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>

        <Image
          className={styles.image}
          src="/canada-desktop.avif"
          alt="canada-map"
          width={350}
          height={325}
        />
      </section>

      <section id="australia" className={`${styles.contact} ${styles.contactaust}`}>
        <div className={styles.container}>
          <h2>Australia</h2>
          <div className={styles.address}>
            <div className={styles.location}>
              <h3>Designo AU Office</h3>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>

            <div>
              <h3>Contact</h3>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
        <Image
          className={styles.image}
          src="/australia-desktop.avif"
          alt="australia-map"
          width={350}
          height={325}
        />
      </section>

      <section id="uk" className={styles.contact}>
        <div className={styles.container}>
          <h2>United Kingdom</h2>
          <div className={styles.address}>
            <div className={styles.location}>
              <h3>Designo UK Office</h3>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>

        <Image
          className={styles.image}
          src="/image-map-uk-desktop.avif"
          alt="UK-map"
          width={350}
          height={325}
        />
      </section>
    </main>
  );
};

export default location;
