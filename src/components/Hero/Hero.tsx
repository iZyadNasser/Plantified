import { Reveal } from "../Reveal/Reveal";
import styles from "./Hero.module.css";
import { asset } from "../../lib/asset";

const links = ["A plant won't interrupt you", "A cute little roommate"];

export function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <div className={styles.inner}>

        <span className={styles.circle} aria-hidden="true" />
        <img
          className={styles.glow}
          src={asset("assets/images/ellipse-glow.svg")}
          alt=""
          aria-hidden="true"
          width={900}
          height={900}
        />
        <img
          className={styles.leaf}
          src={asset("assets/images/deco-leaf.webp")}
          alt=""
          aria-hidden="true"
          width={263}
          height={137}
        />
        <img
          className={styles.plant}
          src={asset("assets/images/hero-monstera.webp")}
          srcSet={`${asset("assets/images/hero-monstera-480.webp")} 480w, ${asset("assets/images/hero-monstera-720.webp")} 720w, ${asset("assets/images/hero-monstera.webp")} 886w`}
          sizes="(max-width: 959px) 90vw, 669px"
          alt="A lush monstera plant in a white pot"
          width={669}
          height={709}
          fetchPriority="high"
          decoding="async"
        />

        <div className={styles.text}>
          <Reveal as="h1" className={styles.heading}>
            <span id="hero-heading">
              Life is too short, Bring a{" "}
              <span className={styles.accent}>green</span> friend
            </span>
          </Reveal>

          <Reveal as="p" className={styles.description} delay={80}>
            Your screen shouldn't be the only thing you look at all day.
            Breathe life back into your workspace with low maintenance desk
            plants designed for busy minds.
          </Reveal>

          <Reveal className={styles.links} delay={160}>
            {links.map((link) => (
              <span key={link} className={styles.pill}>
                {link}
              </span>
            ))}
          </Reveal>

          <Reveal className={styles.buttons} delay={240}>
            <a className={styles.primary} href="#plants">
              Find Your Plant Friend
              <span className={styles.arrow} aria-hidden="true">
                <img
                  src={asset("assets/icons/arrow-right.svg")}
                  alt=""
                  width={12}
                  height={18}
                />
              </span>
            </a>
            <a className={styles.secondary} href="#care">
              Explore
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
