import { useState, useRef, useEffect } from "react";

const basiliskStory = `El basilisco es una criatura legendaria de la saga de Harry Potter.
Conocida como el Rey de las Serpientes, habita en las profundidades de la Cámara de los Secretos del Colegio Hogwarts.
Su mirada es mortal y puede petrificar o matar con solo cruzarse con los ojos de su víctima.
Harry Potter se enfrentó al basilisco usando la espada de Godric Gryffindor y la ayuda de Fawkes, el fénix de Dumbledore.`;

export function BasiliskNarrationOverlay() {
  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const words = basiliskStory.split(/\s+/);

  const handleNarrate = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setActiveIndex(0);
    setPlaying(true);

    const utter = new window.SpeechSynthesisUtterance(basiliskStory);
    utter.lang = "es-ES";
    utter.rate = 0.75;
    utter.pitch = 0.9;

    const voices = window.speechSynthesis.getVoices();
    let selectedVoice =
      voices.find((v) => v.lang === "es-ES" && v.name.includes("Pablo")) ||
      voices.find((v) => v.lang === "es-ES");
    if (selectedVoice) utter.voice = selectedVoice;

    utter.onboundary = (event) => {
      if (event.name === "word") {
        const textUntil = basiliskStory.slice(0, event.charIndex);
        let count = textUntil.trim().split(/\s+/).length;
        if (count > words.length - 1) count = words.length - 1;
        setActiveIndex(count);
      }
    };

    utter.onend = () => {
      setTimeout(() => {
        setActiveIndex(-1);
        setPlaying(false);
      }, 2000);
    };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  };

  const sliceStart = Math.max(0, activeIndex - 7);

  return (
    <div className="relative flex flex-col items-center mb-2 w-full">
      <button
        className={`mb-4 px-6 py-2 rounded-full shadow bg-slate-700 text-white hover:bg-slate-900 transition text-sm ${
          playing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNarrate}
        disabled={playing}
      >
        {playing ? "" : "Escuchar leyenda del basilisco 🐍"}
      </button>

      {(playing || activeIndex > -1) && (
        <div
          className={`
            absolute z-20 bottom-5 left-1/2 -translate-x-1/2
            bg-gradient-to-br from-black/70 via-slate-800/80 to-black/70
            text-white rounded-2xl px-6 py-5
            max-w-[95vw] w-[340px] md:w-[400px] text-base
            text-center md:text-lg leading-relaxed
            select-none pointer-events-none shadow-2xl
            transition-all duration-500
            animate-fade-in
          `}
        >
          {words.slice(sliceStart, activeIndex + 1).map((w, i) => (
            <span
              key={i + sliceStart}
              className={`
                mx-1
                transition-all duration-200
                ${
                  i + sliceStart === activeIndex
                    ? "bg-yellow-200 text-yellow-900 font-bold px-2 py-1 rounded shadow"
                    : "text-gray-200 opacity-80"
                }
              `}
            >
              {w}{" "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
