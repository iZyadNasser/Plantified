import { seasons } from "../../data/seasons";
import { Reveal } from "../Reveal/Reveal";
import styles from "./PlantCareCalendar.module.css";
import { asset } from "../../lib/asset";

export function PlantCareCalendar() {
  return (
    <section
      className={styles.section}
      id="care"
      aria-labelledby="calendar-heading"
    >
      <div className="container">
        <Reveal className={styles.card}>
          <img
            className={styles.hanging}
            src={asset("assets/images/hanging-plant.svg")}
            alt=""
            aria-hidden="true"
            width={150}
            height={303}
            loading="lazy"
            decoding="async"
          />

          <header className={styles.header}>
            <h2 className={styles.title} id="calendar-heading">
              Care at the Right Time
            </h2>
            <p className={styles.subtitle}>
              Know exactly when to water, feed, and repot
            </p>
          </header>

          <div className={styles.timeline}>
            {seasons.map((season, i) => (
              <Reveal
                key={season.id}
                className={styles.season}
                delay={i * 110}
              >
                <div className={styles.seasonHeader}>
                  <span
                    className={styles.seasonIcon}
                    style={{ background: season.iconBg }}
                  >
                    <img
                      src={season.icon}
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden
                    />
                  </span>
                  <div>
                    <h3 className={styles.seasonName}>{season.name}</h3>
                    <p className={styles.seasonMonths}>{season.months}</p>
                  </div>
                </div>

                <ul className={styles.tips}>
                  {season.tips.map((tip) => (
                    <li className={styles.tip} key={tip.label}>

                      <span
                        className={styles.tipIcon}
                        aria-hidden="true"
                        style={{
                          backgroundColor: season.accent,
                          maskImage: `url(${tip.icon})`,
                          WebkitMaskImage: `url(${tip.icon})`,
                        }}
                      />
                      {tip.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
