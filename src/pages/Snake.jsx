import { useState, useEffect, useRef } from "react";

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(randomFood(INITIAL_SNAKE));
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveRef = useRef(direction);
  moveRef.current = direction;

  function randomFood(snake) {
    while (true) {
      const food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!snake.some((seg) => seg.x === food.x && seg.y === food.y)) {
        return food;
      }
    }
  }

  const changeDirection = (newDir) => {
    if (
      (newDir.x === 1 && moveRef.current.x === -1) ||
      (newDir.x === -1 && moveRef.current.x === 1) ||
      (newDir.y === 1 && moveRef.current.y === -1) ||
      (newDir.y === -1 && moveRef.current.y === 1)
    ) return;
    setDirection(newDir);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowUp") changeDirection({ x: 0, y: -1 });
      else if (e.key === "ArrowDown") changeDirection({ x: 0, y: 1 });
      else if (e.key === "ArrowLeft") changeDirection({ x: -1, y: 0 });
      else if (e.key === "ArrowRight") changeDirection({ x: 1, y: 0 });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = {
          x: head.x + moveRef.current.x,
          y: head.y + moveRef.current.y,
        };

        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE ||
            prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          setIsGameOver(true);
          return prev;
        }

        let newSnake = [newHead, ...prev];
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood(randomFood(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [food, isGameOver]);

  function handleRestart() {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(randomFood(INITIAL_SNAKE));
    setIsGameOver(false);
    setScore(0);
  }

  const DPadButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="p-6 bg-green-800 text-white font-bold rounded-lg active:bg-green-600 touch-manipulation"
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-6 my-5 flex flex-col items-center touch-none">
      <section className="max-w-md w-full p-6 bg-white/40 backdrop-blur-md border-4 border-green-900 shadow-[0_4px_0_rgba(0,0,0,0.4)]">
        <h1 className="text-2xl font-bold text-green-950 mb-4 uppercase">Snake</h1>
        <p className="font-bold text-green-950 mb-4">Score: {score}</p>

        <div
          className="mx-auto border-4 border-green-900 bg-[#D7D3E0]"
          style={{
            width: "300px", height: "300px",
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          }}>
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div key={index} className={`border border-green-900/10 ${isSnake ? (isHead ? "bg-green-900" : "bg-green-700") : ""} ${isFood ? "bg-red-500" : ""}`} />
            );
          })}
        </div>

        {isGameOver && (
          <div className="mt-4 text-center">
            <p className="text-red-700 font-bold mb-2">GAME OVER</p>
            <button onClick={handleRestart} className="px-6 py-2 bg-green-700 text-white font-bold border-2 border-green-900">Restart</button>
          </div>
        )}
      </section>

      <div className="grid grid-cols-3 gap-2 p-4 md:hidden">
        <div />
        <DPadButton onClick={() => changeDirection({ x: 0, y: -1 })}>▲</DPadButton>
        <div />
        <DPadButton onClick={() => changeDirection({ x: -1, y: 0 })}>◀</DPadButton>
        <div />
        <DPadButton onClick={() => changeDirection({ x: 1, y: 0 })}>▶</DPadButton>
        <div />
        <DPadButton onClick={() => changeDirection({ x: 0, y: 1 })}>▼</DPadButton>
        <div />
      </div>
    </div>
  );
}