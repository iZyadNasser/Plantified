import { useState, type CSSProperties, type KeyboardEvent } from "react";
import { plants, type Crop } from "../../data/plants";
import { Reveal } from "../Reveal/Reveal";
import styles from "./ProductShowcase.module.css";
import { asset } from "../../lib/asset";

const specIcons = {
  lifespan: asset("assets/icons/spec-lifespan.svg"),
  height: asset("assets/icons/spec-height.svg"),
  watering: asset("assets/icons/spec-watering.svg"),
};

const cropStyle = (crop: Crop): CSSProperties =>
  crop
    ? {
        position: "absolute",
        width: crop.width,
        height: crop.height,
        left: crop.left,
        top: crop.top,
        maxWidth: "none",
      }
    : { width: "100%", height: "100%", objectFit: "cover" };

const thumbStyle = (crop: Crop, image: string): CSSProperties => ({
  backgroundImage: `url(${image})`,
  ...(crop
    ? {
        width: crop.width,
        height: crop.height,
        left: crop.left,
        top: crop.top,
        backgroundSize: "100% 100%",
      }
    : {
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundSize: "cover",
      }),
});

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const plant = plants[active];

  const handleKeyDown = (event: KeyboardEvent) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + plants.length) % plants.length;
    setActive(next);
    document.getElementById(`plant-tab-${plants[next].id}`)?.focus();
  };

  return (
    <section
      className={styles.section}
      id="plants"
      aria-labelledby="product-heading"
    >
      <div className={styles.band}>

        <div className={styles.clip} aria-hidden="true">

          <img
            className={styles.glow}
            src={asset("assets/images/product-glow.svg")}
            alt=""
            width={900}
            height={900}
          />

          <img
            className={styles.foliage}
            src={asset("assets/images/product-foliage.png")}
            alt=""
            width={550}
            height={261}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.inner}>

          <div
            className={styles.window}
            style={{ aspectRatio: `450 / ${plant.displayHeight}` }}
          >
            <Reveal style={{ width: "100%", height: "100%" }} delay={0}>
              <img
                key={plant.id}
                className={styles.plantImage}
                style={cropStyle(plant.crop)}
                src={plant.image}
                alt={plant.alt}
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>

          <div
            className={styles.info}
            id="plant-panel"
            role="tabpanel"
            aria-live="polite"
          >
            <div key={plant.id} className={styles.infoFade}>
              <Reveal as="h2" className={styles.title} id="product-heading" delay={80}>
                {plant.name}
              </Reveal>
              <Reveal as="p" className={styles.description} delay={160}>
                {plant.description}
              </Reveal>

              <ul className={styles.specs}>
                {(
                  [
                    ["Lifespan", plant.lifespan, specIcons.lifespan],
                    ["Avg Height", plant.height, specIcons.height],
                    ["Watering", plant.watering, specIcons.watering],
                  ] as const
                ).map(([label, value, icon], i) => (
                  <Reveal as="li" className={styles.spec} key={label} delay={240 + i * 80}>
                    <img src={icon} alt="" width={24} height={24} aria-hidden />
                    <div>
                      <span className={styles.specLabel}>{label}</span>
                      <span className={styles.specValue}>{value}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={480}>
                <button type="button" className={styles.addButton}>
                  <span className={styles.addLabel}>
                    Add to my desk
                    <span className={styles.dot} aria-hidden="true" />
                    {plant.price}
                  </span>
                  <span className={styles.basket} aria-hidden="true">
                    <img
                      src={asset("assets/icons/basket-add.svg")}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                </button>
              </Reveal>
            </div>
          </div>

          <div
            className={styles.thumbs}
            role="tablist"
            aria-label="Choose a plant"
          >
            {plants.map((p, i) => (
              <Reveal key={p.id} delay={560 + i * 80}>
                <button
                  id={`plant-tab-${p.id}`}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="plant-panel"
                  aria-label={p.name}
                  tabIndex={i === active ? 0 : -1}
                  className={styles.thumb}
                  data-active={i === active}
                  onClick={() => setActive(i)}
                  onKeyDown={handleKeyDown}
                >
                  <span className={styles.thumbFrame}>
                    <span
                      className={styles.thumbImg}
                      style={thumbStyle(p.thumbCrop, p.thumb)}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
