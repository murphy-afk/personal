import { useState, useEffect } from "react";

const ICONS = ["🗡️", "🌸", "⭐", "🎮", "💾", "🍄"];

function createDeck() {
  const doubled = [...ICONS, ...ICONS];
  return doubled
    .map((icon, index) => ({ id: index, icon, matched: false }))
    .sort(() => Math.random() - 0.5);
}

export default function Memory() {
  const [cards, setCards] = useState(createDeck);
  const [flipped, setFlipped] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    if (flipped.length === 2) {
      setLockBoard(true);
      const [first, second] = flipped;
      const firstCard = cards.find((c) => c.id === first);
      const secondCard = cards.find((c) => c.id === second);

      if (firstCard.icon === secondCard.icon) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
        setMatchedCount((m) => m + 1);
        setFlipped([]);
        setLockBoard(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLockBoard(false);
        }, 800);
      }
      setMoves((m) => m + 1);
    }
  }, [flipped, cards]);

  function handleCardClick(id) {
    if (lockBoard) return;
    if (flipped.includes(id)) return;

    setFlipped((prev) => [...prev, id].slice(0, 2));
  }

  function handleRestart() {
    setCards(createDeck());
    setFlipped([]);
    setLockBoard(false);
    setMoves(0);
    setMatchedCount(0);
  }

  const allMatched = matchedCount === ICONS.length;

  return (
    <div className="space-y-6 my-5">
      <section
        className="
          max-w-md mx-auto p-6
          bg-white/40 backdrop-blur-md
          border-4 border-green-900
          shadow-[0_4px_0_rgba(0,0,0,0.4)]
          bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[6px_6px]
        "
      >
        <h1 className="text-2xl font-bold text-green-950 mb-4 relative inline-block uppercase tracking-wide">
          Memory Match
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <p className="text-green-900/80 mb-2">
          Flip two cards at a time and find all the pairs.
        </p>
        <p className="font-bold text-green-950 mb-4">Moves: {moves}</p>

        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          }}
        >
          {cards.map((card) => {
            const isFlipped =
              flipped.includes(card.id) || card.matched;

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  aspect-square flex items-center justify-center
                  border-4 border-green-900
                  shadow-[0_3px_0_rgba(0,0,0,0.4)]
                  text-2xl font-bold
                  transition-all duration-150
                  ${
                    isFlipped
                      ? "bg-green-700/70 text-[#2C1E2E]"
                      : "bg-[#EEEAF7] text-green-900"
                  }
                `}
              >
                {isFlipped ? card.icon : "?"}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleRestart}
            className="
              px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all
            "
          >
            Restart
          </button>

          {allMatched && (
            <span className="text-green-900 font-bold uppercase">
              All matched! 🎉
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
