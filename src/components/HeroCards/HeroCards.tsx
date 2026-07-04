import { Reveal } from "../Reveal/Reveal";
import styles from "./HeroCards.module.css";
import { asset } from "../../lib/asset";

type Card = {
  id: string;
  image: string;
  alt: string;
  lines: [string, string];
  price: string;
};

const cards: Card[] = [
  {
    id: "ivy",
    image: asset("assets/images/card-ivy.webp"),
    alt: "Ivy plant in a pot",
    lines: ["Always you Busy?", "Meet Ivy"],
    price: "24.99$",
  },
  {
    id: "mint",
    image: asset("assets/images/card-mint.webp"),
    alt: "Mint plant in a pot",
    lines: ["Need for inspiration?", "Meet mint"],
    price: "5.99$",
  },
  {
    id: "spike",
    image: asset("assets/images/card-spike.webp"),
    alt: "Spike cactus in a pot",
    lines: ["Always on the move?", "Meet Spike"],
    price: "16.99$",
  },
];

export function HeroCards() {
  return (
    <section
      className={styles.section}
      id="featured"
      aria-label="Featured plants"
    >
      <div className={styles.inner}>

        <img
          className={styles.panel}
          src={asset("assets/images/cards-bg.svg")}
          alt=""
          aria-hidden="true"
          width={1152}
          height={343}
          loading="lazy"
          decoding="async"
        />
        <img
          className={styles.deco}
          src={asset("assets/images/deco-plant.webp")}
          alt=""
          aria-hidden="true"
          width={108}
          height={264}
          loading="lazy"
          decoding="async"
        />

        <ul className={styles.grid}>
          {cards.map((card, i) => (
            <Reveal
              as="li"
              key={card.id}
              delay={i * 120}
              className={styles.cardWrap}
            >
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={237}
                    height={237}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.badge}>{card.price}</span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>
                    {card.lines[0]}
                    <br />
                    {card.lines[1]}
                  </h3>
                  <a className={styles.details} href="#plants">
                    View Details
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className={styles.caption} delay={200}>
          Different plants, Different personalities.
          <br />
          Find the one that feels most like you.
        </Reveal>
      </div>
    </section>
  );
}
