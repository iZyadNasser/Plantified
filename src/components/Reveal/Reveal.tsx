import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.css";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  const [revealed, setRevealed] = useState(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (
      !el ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      el.getBoundingClientRect().top <= window.innerHeight
    )
      return;

    setRevealed(false);
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal}${className ? ` ${className}` : ""}`}
      data-revealed={revealed}
      style={{
        ...style,
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
