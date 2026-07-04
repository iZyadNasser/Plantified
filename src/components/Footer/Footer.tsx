import styles from "./Footer.module.css";
import { asset } from "../../lib/asset";

const socials = [
  { icon: asset("assets/icons/social-1.svg"), label: "Instagram" },
  { icon: asset("assets/icons/social-2.svg"), label: "Twitter" },
  { icon: asset("assets/icons/social-3.svg"), label: "Facebook" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>© 2026 Plantified, Grown with care.</p>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                className={styles.social}
                href="#home"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
