"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type TypingTextProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export function TypingText({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1800,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const wordsRef = useRef(words);
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const longestWord = useMemo(
    () => words.reduce((longest, word) => (word.length > longest.length ? word : longest), ""),
    [words],
  );
  const wordsKey = useMemo(() => words.join("\u0000"), [words]);

  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  useEffect(() => {
    if (!wordsRef.current.length) {
      return;
    }

    wordIndexRef.current = 0;
    charIndexRef.current = 0;
    isDeletingRef.current = false;

    const cursorTween = cursorRef.current
      ? gsap.to(cursorRef.current, {
          autoAlpha: 0,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      : null;

    const tick = () => {
      const currentWords = wordsRef.current;
      const currentWord = currentWords[wordIndexRef.current] ?? "";

      if (!isDeletingRef.current) {
        charIndexRef.current += 1;
        const nextText = currentWord.slice(0, charIndexRef.current);
        setDisplayText(nextText);

        if (nextText === currentWord) {
          timeoutRef.current = window.setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, pause);
          return;
        }

        timeoutRef.current = window.setTimeout(tick, typingSpeed);
        return;
      }

      charIndexRef.current = Math.max(charIndexRef.current - 1, 0);
      const nextText = currentWord.slice(0, charIndexRef.current);
      setDisplayText(nextText);

      if (charIndexRef.current === 0) {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % currentWords.length;
      }

      timeoutRef.current = window.setTimeout(tick, deletingSpeed);
    };

    timeoutRef.current = window.setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      cursorTween?.kill();
    };
  }, [wordsKey, typingSpeed, deletingSpeed, pause]);

  if (!words.length) {
    return null;
  }

  return (
    <span className="relative inline-grid items-center overflow-hidden align-baseline">
      <span className="invisible whitespace-pre">{longestWord}</span>
      <span className="absolute inset-0 inline-block align-middle whitespace-pre">
        <span className="inline-block">{displayText}</span>
        <span
          ref={cursorRef}
          className="ml-1 inline-block align-middle h-[1em] w-px bg-current"
        />
      </span>
    </span>
  );
}
