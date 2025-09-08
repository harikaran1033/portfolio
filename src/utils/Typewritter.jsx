import { useState, useEffect } from "react";

const Typewriter = ({ 
  phrases = ["Hello", "Welcome", "Portfolio"], 
  typingSpeed = 100, 
  pause = 1500 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] || "";

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, pause]);

  return (
    <h1 className="font-poppins text-4xl font-bold text-white break-words">
      <span className="whitespace-pre-wrap">
        {displayedText}
        <span className="animate-blink">|</span>
      </span>
    </h1>
  );
};

export default Typewriter;
