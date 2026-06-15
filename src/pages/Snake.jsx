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

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowUp" && moveRef.current.y !== 1) {
        setDirection({ x: 0, y: -1 });
      } else if (e.key === "ArrowDown" && moveRef.current.y !== -1) {
        setDirection({ x: 0, y: 1 });
      } else if (e.key === "ArrowLeft" && moveRef.current.x !== 1) {
        setDirection({ x: -1, y: 0 });
      } else if (e.key === "ArrowRight" && moveRef.current.x !== -1) {
        setDirection({ x: 1, y: 0 });
      }
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

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          return prev;
        }

        // Self collision
        if (prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          setIsGameOver(true);
          return prev;
        }

        let newSnake = [newHead, ...prev];

        // Eat food
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
          Snake
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <p className="text-green-900/80 mb-2">
          Use the arrow keys to move. Don&apos;t hit the walls or yourself!
        </p>
        <p className="font-bold text-green-950 mb-4">Score: {score}</p>

        <div
          className="mx-auto border-4 border-green-900 bg-[#D7D3E0]"
          style={{
            width: "300px",
            height: "300px",
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);

            const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={`
                  border border-green-900/40
                  ${isSnake ? (isHead ? "bg-green-900" : "bg-green-700") : ""}
                  ${isFood ? "bg-red-500" : ""}
                `}
              />
            );
          })}
        </div>

        {isGameOver && (
          <div className="mt-4 text-center">
            <p className="text-red-700 font-bold mb-2 uppercase">
              Game Over
            </p>
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
          </div>
        )}
      </section>
    </div>
  );
}


