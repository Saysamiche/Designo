import styles from "@/styles/design.module.css";
import Image from "next/image";
import Link from "next/link";

const design = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.web}>
          <h2>App Design</h2>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </main>

      <section className={styles.topsection}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Air filter.avif"
            width={326}
            height={298}
            alt="Air filter"
          />
          <div className={styles.text}>
            <h3>AIR FILTER</h3>
            <p>
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Eye cam.avif"
            width={326}
            height={298}
            alt="Eye Cam"
          />
          <div className={styles.text}>
            <h3>EYECAM</h3>
            <p>
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Face it.avif"
            width={326}
            height={298}
            alt="Face it"
          />
          <div className={styles.text}>
            <h3>FACEIT</h3>
            <p>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bottomsection}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Todo.avif"
            width={326}
            height={298}
            alt="To do"
          />
          <div className={styles.text}>
            <h3>TODO</h3>
            <p>A todo app that features cloud sync with light and dark mode</p>
          </div>
        </div>

        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/Loopstudio.avif"
            width={326}
            height={298}
            alt="image for Blogr"
          />
          <div className={styles.text}>
            <h3> LOOPSTUDIOS</h3>
            <p>A VR experience app made for Loopstudios</p>
          </div>
        </div>

        <div className={`${styles.container} ${styles.hidden}`}>
          <Image
            className={styles.image}
            src="/image-6.avif"
            width={326}
            height={298}
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
          <Link className={styles.designlink} href="/">
            <h3>WEB DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>

        <div className={styles.graphicdesign}>
          <Link className={styles.designlink} href="/graphics">
            <h3>GRAPHIC DESIGN</h3>
            <p>
              VIEW PROJECTS <span className={styles.span}> {">"} </span>
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default design;
