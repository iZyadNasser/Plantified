import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./TopBar.module.css";
import { asset } from "../../lib/asset";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Categories", id: "plants" },
  { label: "Blog", id: "care-steps" },
  { label: "Contacts", id: "care" },
  { label: "About us", id: "find-plant" },
];

const actions = [
  { icon: "notification", label: "Notifications", dot: true },
  { icon: "heart", label: "Wishlist", dot: false },
  { icon: "bag", label: "Cart", dot: false },
];

const INDICATOR_WIDTH = 50;

export function TopBar() {
  const [active, setActive] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const spyLocked = useRef(false);
  const unlockTimer = useRef(0);

  const measureIndicator = useCallback(() => {
    const nav = navRef.current;
    const link = nav?.querySelectorAll("a")[active];
    if (!nav || !link) return;
    const navBox = nav.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    setIndicatorLeft(
      linkBox.left - navBox.left + linkBox.width / 2 - INDICATOR_WIDTH / 2,
    );
  }, [active]);

  useLayoutEffect(measureIndicator, [measureIndicator]);
  useEffect(() => {
    window.addEventListener("resize", measureIndicator);
    document.fonts?.ready.then(measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [measureIndicator]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (spyLocked.current) return;
      const doc = document.documentElement;
      const vh = window.innerHeight;
      const last = navItems.length - 1;

      let index = 0;
      navItems.forEach((item, i) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= vh * 0.5) index = i;
      });

      const lastSection = document.getElementById(navItems[last].id);
      const atBottom = vh + window.scrollY >= doc.scrollHeight - 2;
      if (
        lastSection &&
        (atBottom || lastSection.getBoundingClientRect().top <= vh * 0.66)
      ) {
        index = last;
      }
      setActive(index);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (index: number) => {
    setActive(index);
    spyLocked.current = true;
    const unlock = () => {
      spyLocked.current = false;
    };
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(unlock, 1200);
    window.addEventListener("scrollend", unlock, { once: true });
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.menu}>
          <a className={styles.logo} href="#home">
            Plantified
          </a>
          <nav className={styles.nav} aria-label="Primary" ref={navRef}>
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.navLink}
                aria-current={i === active ? "page" : undefined}
                data-active={i === active}
                onClick={() => handleNavClick(i)}
              >
                {item.label}
              </a>
            ))}
            <span
              className={styles.indicator}
              aria-hidden="true"
              style={
                indicatorLeft === null
                  ? { opacity: 0 }
                  : { transform: `translateX(${indicatorLeft}px)` }
              }
            />
          </nav>
        </div>

        <div className={styles.actions}>
          {actions.map((action) => (
            <button
              key={action.icon}
              type="button"
              className={styles.iconButton}
              aria-label={action.label}
              data-dot={action.dot}
            >
              <img
                src={asset(`assets/icons/${action.icon}.svg`)}
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
