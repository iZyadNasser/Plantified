import { Fragment } from "react";
import { careSteps } from "../../data/careSteps";
import { Reveal } from "../Reveal/Reveal";
import styles from "./CareSteps.module.css";
import { asset } from "../../lib/asset";

const connectors = [
  asset("assets/icons/connector-1.svg"),
  asset("assets/icons/connector-2.svg"),
  asset("assets/icons/connector-3.svg"),
];

export function CareSteps() {
  return (
    <section
      className={styles.section}
      id="care-steps"
      aria-labelledby="care-steps-heading"
    >
      <div className="container">
        <Reveal className={styles.headingWrap}>
          <span className={styles.highlight} aria-hidden="true" />
          <h2 className={styles.heading} id="care-steps-heading">
            Small Care, Big Rewards
          </h2>
        </Reveal>

        <ol className={styles.steps}>
          {careSteps.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal as="li" className={styles.step} delay={i * 120}>
                <span className={styles.icon}>
                  <img src={step.icon} alt="" width={24} height={24} aria-hidden />
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </Reveal>
              {i < connectors.length && (
                <img
                  className={styles.connector}
                  src={connectors[i]}
                  alt=""
                  aria-hidden="true"
                  width={84}
                  height={17}
                />
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
