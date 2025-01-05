import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
// import { useRouter } from "next/router";

const Footer = () => {
  // const { pathName } = useRouter();
  // { hidePart }

  return (
    // <>
    //   <footer className={styles.footer}>
    //     <section className={styles.preview}>
    //       <div className={styles.project}>
    //         <h3>
    //           Let’s talk about <br /> your project
    //         </h3>
    //         <p>
    //           Ready to take it to the next level? Contact us today and find out
    //           how our expertise can help your business grow.
    //         </p>
    //       </div>

    //       <div className={styles.button}>
    //         <button>
    //           <Link className={styles.btnlink} href="/contact">
    //             GET IN TOUCH
    //           </Link>
    //         </button>
    //       </div>
    //     </section>
    //   </footer>

    //   {!hidePart && (
    <footer className={styles.footer}>
      <section className={styles.preview}>
        <div className={styles.project}>
          <h3>
            Let’s talk about <br /> your project
          </h3>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <div className={styles.button}>
          <button>
            <Link className={styles.btnlink} href="/contact">
              GET IN TOUCH
            </Link>
          </button>
        </div>
      </section>

      <nav className={styles.nav}>
        <div className={styles.linkimage}>
          <Link href="/award">
            <Image src="/logo.avif" width={190} height={25} alt="logo" />
          </Link>
        </div>

        <div className={styles.linkcontainer}>
          {/* <Link className={styles.links} href="/">
            HOME
          </Link> */}
          <Link className={`${styles.links} ${styles.comp}`} href="/company">
            OUR COMPANY
          </Link>
          <Link className={styles.links} href="/locations">
            LOCATIONS
          </Link>
          <Link className={styles.links} href="/contact">
            CONTACT
          </Link>
        </div>
      </nav>

      <section className={styles.find}>
        <div className={styles.address}>
          <h3>Designo Central Office</h3>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us (Central Office)</h3>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <div className={styles.socialmedia}>
          <div>
            <a href="https://facebook.com" target="_blank">
              <i
                className={`fab fa-facebook ${styles.media}`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://pinterest.com" target="_blank">
              <i
                className={`fab fa-pinterest ${styles.media}`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://instagram.com" target="_blank">
              <i
                className={`fab fa-instagram ${styles.media}`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://twitter.com" target="_blank">
              <i
                className={`fab fa-twitter ${styles.media}`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com" target="_blank">
              <i
                className={`fab fa-youtube ${styles.media}`}
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </section>

      <div className={styles.trademark}>
        <h4>Code challenge designed by SAY &trade; @ 2024</h4>
      </div>
    </footer>
    
    //   )}

    //   {pathName === "/contact"}
    // </>
  );
};

export default Footer;
