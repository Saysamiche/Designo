import styles from "@/styles/company.module.css";
import Image from "next/image";
import Link from "next/link";

const company = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.about}>
          <h2>About Us </h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <Image
          src="/about-image-1.avif"
          alt="team-meeting-image"
          width={476}
          height={480}
          className={styles.aboutimg}
        />
      </main>

      <section className={styles.container}>
        <Image
          src="/about-image-2.avif"
          alt="A woman contemplating on a frame"
          width={476}
          height={640}
          className={styles.talentimg}
        />
        <div className={styles.worldtalent}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br />
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>
      {/* <Image
        className={styles.bottomimg}
        src="/bg-pattern-leaf.svg"
        alt="leaf"
        width={1000}
        height={590}
      /> */}

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

      <section className={`${styles.container} ${styles.flip}`}>
        <div className={`${styles.worldtalent} ${styles.real}`}>
          <h2>The real deal </h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br />
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>


        <Image
          src="/about-image-3.avif"
          alt="A woman contemplating on a frame"
          width={476}
          height={640}
          className={styles.realimg}
        />
      </section>
      <br />
    </>
  );
};

export default company;
