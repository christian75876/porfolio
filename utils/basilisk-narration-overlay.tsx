import { useState, useRef } from "react";

const basiliskStory = `El basilisco es una criatura legendaria de la saga de Harry Potter.
Conocida como el Rey de las Serpientes, habita en las profundidades de la Cámara de los Secretos del Colegio Hogwarts.
Su mirada es mortal y puede petrificar o matar con solo cruzarse con los ojos de su víctima.
Harry Potter se enfrentó al basilisco usando la espada de Godric Gryffindor y la ayuda de Fawkes, el fénix de Dumbledore.`;

export function BasiliskNarrationOverlay() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const words = basiliskStory.split(/\s+/);

  const handleNarrate = () => {
    if (!("speechSynthesis" in window)) return;

    // Reinicia
    window.speechSynthesis.cancel();
    setActiveIndex(-1);
    setPlaying(true);

    const utter = new window.SpeechSynthesisUtterance(basiliskStory);
    utter.lang = "es-ES";
    utter.rate = 0.93;

    utter.onboundary = (event) => {
      if (event.name === "word") {
        // Encuentra el índice de la palabra actual
        const textUntil = basiliskStory.slice(0, event.charIndex);
        const count = textUntil.trim().split(/\s+/).length;
        setActiveIndex(count);
      }
    };

    utter.onend = () => {
      setActiveIndex(-1);
      setPlaying(false);
    };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  };

  // Muestra solo las últimas 2 líneas para no sobrecargar
  const lineLength = 7;
  const start = Math.max(0, activeIndex - lineLength + 1);
  const currentLineWords = words.slice(start, activeIndex + 1);
  const sliceStart = Math.max(0, activeIndex - 6);
  return (
    <div className="relative flex flex-col items-center mb-2 w-full">
      <button
        className={`mb-4 px-6 py-2 rounded-full shadow bg-slate-700 text-white hover:bg-slate-900 transition text-sm ${
          playing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNarrate}
        disabled={playing}
      >
        {playing ? "Narrando..." : "Escuchar leyenda del basilisco 🐍"}
      </button>

      <div
        className="
          absolute z-20
          bottom-5
          left-1/2
          -translate-x-1/2
          bg-black/70
          text-white
          rounded-2xl
          px-6 py-3
          max-w-[90vw] w-[320px] text-base
          text-center
          select-none
          pointer-events-none
          shadow-xl
          transition-all
        "
      >
        {(playing || activeIndex > -1) && (
          <div
            className="
      absolute z-20
      bottom-5
      left-1/2
      -translate-x-1/2
      bg-black/70
      text-white
      rounded-2xl
      px-6 py-3
      max-w-[90vw] w-[320px] text-base
      text-center
      select-none
      pointer-events-none
      shadow-xl
      transition-all
    "
          >
            {words.slice(sliceStart, activeIndex + 1).map((w, i) => (
              <span key={i + sliceStart} className={`...`}>
                {w}{" "}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
