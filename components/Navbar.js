import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => {
    setisMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.linkimage}>
        <Link href="/award">
          <Image src="/top-logo.avif" width={190} height={25} alt="logo" />
        </Link>
      </div>

      <div className={styles.menuButton}>
        <button onClick={toggleMenu}>{isMenuOpen ? "X" : <i className="fa fa-bars" aria-hidden="true"></i>}</button>
      </div>

      <div
        className={`${styles.linkcontainer} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <Link className={styles.links} href="/company">
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
  );
};

export default Navbar;
