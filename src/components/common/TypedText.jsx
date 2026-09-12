import { useEffect, useState } from "react";
import styles from "./TypedText.module.css";

export const TypedText = ({ words, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    if (!currentWord) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          const next = currentWord.slice(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, words]);

  return (
    <span className={`${styles.wrapper} ${className}`}>
      <span className={styles.text}>{displayText}</span>
      <span className={styles.cursor} aria-hidden="true">
        |
      </span>
    </span>
  );
};
