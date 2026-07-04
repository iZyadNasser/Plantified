import { useState, type FormEvent } from "react";
import { Reveal } from "../Reveal/Reveal";
import styles from "./FindPlant.module.css";
import { asset } from "../../lib/asset";

export function FindPlant() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section
      className={styles.section}
      id="find-plant"
      aria-labelledby="find-plant-heading"
    >
      <div className="container">
        <Reveal className={styles.card}>
          <img
            className={styles.windPlant}
            src={asset("assets/images/wind-plant.svg")}
            alt=""
            aria-hidden="true"
            width={68}
            height={264}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.sendDot} aria-hidden="true" />

          <div className={styles.content}>
            <h2 className={styles.heading} id="find-plant-heading">
              Find the plant that grows with you.
            </h2>
            <p className={styles.description}>
              Join 50,000+ urban dwellers who have rediscovered the joy of quiet
              growth. Delivered with care, straight to your door.
            </p>
          </div>

          <form className={styles.signup} onSubmit={handleSubmit}>
            <label className={styles.srOnly} htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className={styles.field}
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <button type="submit" className={styles.send}>
              {sent ? "Sent ✓" : "Send"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
