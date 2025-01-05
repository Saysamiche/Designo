import Link from "next/link";
import styles from "@/styles/Award.module.css";
import Image from "next/image";

const Award = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.awardtext}>
          <h2>Award-winning custom designs and digital branding solutions </h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link className={styles.awardlink} href="#services">
            Learn More
          </Link>
        </div>
        <Image
          src="/phone.avif"
          alt="Phone-image"
          width={640}
          height={930}
          className={styles.awardimg}
        />
      </main>

      <section id="services" className={styles.designcontainer}>
        <div className={styles.webcontainer}>
          <div className={styles.webdesign}>
            <Link className={styles.designlink} href="/">
              <h3 className={styles.webdesignhead}>WEB DESIGN</h3>
              <p>
                VIEW PROJECTS <span className={styles.span}> {">"} </span>
              </p>
            </Link>
          </div>
        </div>

        <div className={styles.appgraphics}>
          <div className={styles.appdesign}>
            <Link className={styles.designlink} href="/design">
              <h3>APP DESIGN</h3>
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
        </div>
      </section>

      <section className={styles.allactivities}>
        <div className={styles.activity}>
          <div className={styles.persons}>
            <Image
              src="/illustration-passionate.svg"
              alt="illustration of passionate person"
              width={202}
              height={202}
            />
          </div>
          <h3>Passionate</h3>
          <p className={styles.pone}>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>

        <div className={styles.activity}>
          <div className={styles.persons}>
            <Image
              src="/illustration-resourceful.svg"
              alt="illustration of a resourceful person"
              width={202}
              height={202}
            />
          </div>
          <h3>Resourceful</h3>
          <p className={styles.ptwo}>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>

        <div className={styles.activity}>
          <div className={styles.persons}>
            <Image
              src="/illustration-friendly.svg"
              alt="illustration of friendly"
              width={202}
              height={202}
            />
          </div>
          <h3>friendly</h3>
          <p className={styles.pthree}>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </>
  );
};

export default Award;
