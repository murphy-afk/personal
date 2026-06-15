import { useState } from "react";

export default function Guess() {
  const [target, setTarget] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const num = Number(guess);
    if (!num) return;

    if (num === target) {
      setMessage("Correct!");
    } else if (num < target) {
      setMessage("Too low!");
    } else {
      setMessage("Too high!");
    }

    setCounter((c) => c + 1);
  }

  function resetGame() {
    setTarget(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
    setCounter(0);
  }

  const isCorrect = message === "Correct!";

  return (
    <div className="max-w-md mx-auto mt-10 p-6
      bg-white/40 backdrop-blur-md border-4 border-green-900
      shadow-[0_4px_0_rgba(0,0,0,0.4)]
      bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
      bg-size-[6px_6px]">

      <h1 className="text-2xl font-bold text-green-950 mb-4 relative inline-block uppercase">
        Guess the Number
        <span className="absolute left-0 -bottom-2 w-full h-3 
          bg-green-700/60 border-2 border-green-900 
          shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
      </h1>

      <p className="text-green-900/80 mb-4">
        I'm thinking of a number between 1 and 10.
      </p>

      <p className="font-bold text-green-950 mb-2">Tries: {counter}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full p-2 border-2 border-green-900 bg-white/60 text-green-900"/>
        {!isCorrect ? (
          <button
            type="submit"
            className="w-full py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Guess
          </button>
        ) : (
          <button
            type="button"
            onClick={resetGame}
            className="w-full py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Try Again
          </button>
        )}
      </form>
      {message && (
        <p className="mt-4 text-xl font-bold text-green-950">{message}</p>
      )}
    </div>
  );
}
