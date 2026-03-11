import { useState, useEffect, useCallback, useRef } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  
  const directionRef = useRef(direction);
  const gameLoopRef = useRef<number | null>(null);

  // 生成随机食物位置
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  // 重置游戏
  const resetGame = useCallback(() => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setGameOver(false);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setIsPaused(false);
    setGameStarted(true);
  }, [generateFood]);

  // 处理键盘输入
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted && !gameOver) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
          resetGame();
          return;
        }
      }

      if (e.key === ' ' && gameStarted && !gameOver) {
        setIsPaused(prev => !prev);
        return;
      }

      if (gameOver && e.key === ' ') {
        resetGame();
        return;
      }

      const currentDir = directionRef.current;
      
      switch (e.key) {
        case 'ArrowUp':
          if (currentDir !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (currentDir !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (currentDir !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (currentDir !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver, resetGame]);

  // 游戏主循环
  useEffect(() => {
    if (gameOver || isPaused || !gameStarted) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    gameLoopRef.current = window.setInterval(() => {
      directionRef.current = direction;
      
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        const currentDir = directionRef.current;

        switch (currentDir) {
          case 'UP': head.y -= 1; break;
          case 'DOWN': head.y += 1; break;
          case 'LEFT': head.x -= 1; break;
          case 'RIGHT': head.x += 1; break;
        }

        // 检测碰撞
        if (
          head.x < 0 || head.x >= GRID_SIZE ||
          head.y < 0 || head.y >= GRID_SIZE ||
          prevSnake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
          setGameOver(true);
          setHighScore(prev => Math.max(prev, score));
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // 检测是否吃到食物
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 10);
          setSpeed(prev => Math.max(50, prev - SPEED_INCREMENT));
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, speed);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [direction, food, gameOver, isPaused, gameStarted, score, speed, generateFood]);

  // 移动端控制
  const handleDirectionClick = (newDir: Direction) => {
    if (!gameStarted) {
      resetGame();
      return;
    }
    
    const opposites: Record<Direction, Direction> = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT',
    };

    if (directionRef.current !== opposites[newDir]) {
      setDirection(newDir);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-4 lg:mb-8 text-center">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </a>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">🐍 贪吃蛇</h1>
          <p className="text-slate-400 text-sm lg:text-base">使用方向键或 WASD 控制，空格键暂停/继续</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
          {/* 游戏区域 */}
          <div className="relative order-1">
            <div 
              className="grid gap-px bg-slate-800/50 p-2 rounded-xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20"
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                width: 'min(85vw, 400px)',
                height: 'min(85vw, 400px)',
              }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y;
                const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
                const isFood = food.x === x && food.y === y;

                return (
                  <div
                    key={index}
                    className={`
                      aspect-square rounded-sm transition-all duration-75
                      ${isSnakeHead ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-110' : ''}
                      ${isSnakeBody ? 'bg-green-600/80' : ''}
                      ${isFood ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse rounded-full' : ''}
                      ${!isSnakeHead && !isSnakeBody && !isFood ? 'bg-slate-700/30' : ''}
                    `}
                  />
                );
              })}
            </div>

            {/* 游戏开始/结束覆盖层 */}
            {(!gameStarted || gameOver) && (
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center">
                <div className="text-center p-8">
                  {gameOver ? (
                    <>
                      <h2 className="text-3xl font-bold text-red-400 mb-2">游戏结束!</h2>
                      <p className="text-xl text-white mb-4">得分：{score}</p>
                      {score >= highScore && score > 0 && (
                        <p className="text-yellow-400 mb-4">🏆 新纪录!</p>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-white mb-4">准备好了吗？</h2>
                      <p className="text-slate-300 mb-4">按任意方向键或点击下方按钮开始</p>
                    </>
                  )}
                  <button
                    onClick={resetGame}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-105 shadow-lg"
                  >
                    {gameOver ? '再玩一次' : '开始游戏'}
                  </button>
                </div>
              </div>
            )}

            {/* 暂停覆盖层 */}
            {isPaused && !gameOver && (
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-2">暂停</h2>
                  <p className="text-slate-300">按空格键继续</p>
                </div>
              </div>
            )}
          </div>

          {/* 移动端控制按钮 - 紧挨游戏区域下方 */}
          <div className="lg:hidden order-3 mt-2">
            <div className="grid grid-cols-3 gap-3 max-w-[220px] mx-auto">
              <div />
              <button
                onClick={() => handleDirectionClick('UP')}
                className="aspect-square bg-slate-800/90 hover:bg-purple-600 active:bg-purple-500 rounded-xl text-3xl text-white transition shadow-lg"
              >
                ↑
              </button>
              <div />
              <button
                onClick={() => handleDirectionClick('LEFT')}
                className="aspect-square bg-slate-800/90 hover:bg-purple-600 active:bg-purple-500 rounded-xl text-3xl text-white transition shadow-lg"
              >
                ←
              </button>
              <button
                onClick={() => setIsPaused(prev => !prev)}
                className="aspect-square bg-slate-800/90 hover:bg-yellow-600 active:bg-yellow-500 rounded-xl text-lg text-white transition shadow-lg"
              >
                {isPaused ? '▶' : '⏸'}
              </button>
              <button
                onClick={() => handleDirectionClick('RIGHT')}
                className="aspect-square bg-slate-800/90 hover:bg-purple-600 active:bg-purple-500 rounded-xl text-3xl text-white transition shadow-lg"
              >
                →
              </button>
              <div />
              <button
                onClick={() => handleDirectionClick('DOWN')}
                className="aspect-square bg-slate-800/90 hover:bg-purple-600 active:bg-purple-500 rounded-xl text-3xl text-white transition shadow-lg"
              >
                ↓
              </button>
              <div />
            </div>
          </div>

          {/* 侧边信息面板 - 桌面端显示 */}
          <div className="hidden lg:flex flex-col gap-6 w-64 order-2">
            {/* 分数面板 */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <div className="mb-4">
                <p className="text-slate-400 text-sm mb-1">当前得分</p>
                <p className="text-4xl font-bold text-green-400">{score}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">最高纪录</p>
                <p className="text-2xl font-bold text-yellow-400">🏆 {highScore}</p>
              </div>
              {gameStarted && !gameOver && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-slate-400 text-sm">速度等级</p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i < (INITIAL_SPEED - speed) / SPEED_INCREMENT
                            ? 'bg-gradient-to-r from-green-400 to-red-400'
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 操作说明 */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h3 className="text-white font-semibold mb-3">操作说明</h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">↑↓←→</kbd>
                  <span>或 WASD 移动</span>
                </li>
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">空格</kbd>
                  <span>暂停/继续</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">🟢</span>
                  <span>吃到食物得分</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">⚠️</span>
                  <span>撞墙或撞自己结束</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 移动端分数显示 */}
          <div className="lg:hidden order-2 flex gap-4 mt-4">
            <div className="bg-slate-800/80 backdrop-blur rounded-xl px-6 py-3 border border-slate-700">
              <p className="text-slate-400 text-xs mb-1">得分</p>
              <p className="text-2xl font-bold text-green-400">{score}</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur rounded-xl px-6 py-3 border border-slate-700">
              <p className="text-slate-400 text-xs mb-1">最高</p>
              <p className="text-2xl font-bold text-yellow-400">🏆 {highScore}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
