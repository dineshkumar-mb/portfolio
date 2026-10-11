import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaRedo, FaGamepad, FaRobot, FaTrophy, FaBolt } from "react-icons/fa";
import fallbackData from "../data/githubContributionsFallback.json";

const COLS = 53;
const ROWS = 7;
const BLOCK_SIZE = 12;
const BLOCK_MARGIN = 4;
const CELL_TOTAL = BLOCK_SIZE + BLOCK_MARGIN;
const OFFSET_X = 36; // left margin for weekday labels
const OFFSET_Y = 24; // top margin for month labels
const SVG_WIDTH = OFFSET_X + COLS * CELL_TOTAL + 10;
const SVG_HEIGHT = OFFSET_Y + ROWS * CELL_TOTAL + 10;

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

// Colors
const THEME_COLORS = {
  dark: {
    empty: "#1e293b",
    border: "rgba(255, 255, 255, 0.05)",
    levels: ["#1e293b", "#0e4429", "#006d32", "#26a641", "#39d353"],
    text: "#94a3b8",
    snakeHead: "#38bdf8",
    snakeBody: "#2563eb",
    snakeGlow: "rgba(56, 189, 248, 0.8)",
  },
  light: {
    empty: "#f1f5f9",
    border: "rgba(0, 0, 0, 0.06)",
    levels: ["#f1f5f9", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    text: "#64748b",
    snakeHead: "#6366f1",
    snakeBody: "#4f46e5",
    snakeGlow: "rgba(99, 102, 241, 0.7)",
  },
};

const GithubSnakeCalendar = ({ username = "dineshkumar-mb", isDark = true, refreshKey = 0, onDataLoaded }) => {
  // 2D grid matrix of cells
  const [grid, setGrid] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [monthLabels, setMonthLabels] = useState([]);
  const [eatenCount, setEatenCount] = useState(0);
  const [totalFoodCount, setTotalFoodCount] = useState(0);
  const [mode, setMode] = useState("auto"); // "auto" | "play"
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(110); // ms per tick
  const [gameOver, setGameOver] = useState(false);
  const [particles, setParticles] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  // Snake State
  const [snake, setSnake] = useState([
    { x: 12, y: 3 },
    { x: 11, y: 3 },
    { x: 10, y: 3 },
    { x: 9, y: 3 },
    { x: 8, y: 3 },
  ]);
  const directionRef = useRef({ dx: 1, dy: 0 });
  const nextDirectionRef = useRef({ dx: 1, dy: 0 });

  // References for game loop
  const gridRef = useRef([]);
  gridRef.current = grid;
  const snakeRef = useRef(snake);
  snakeRef.current = snake;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;
  const gameOverRef = useRef(gameOver);
  gameOverRef.current = gameOver;

  // Initialize or transform contribution data into 53x7 grid
  const initGridData = useCallback((data) => {
    const rawList = data?.contributions || [];
    const total = data?.total?.lastYear || 473;
    setTotalContributions(total);

    // Calculate dates and map into 53 columns x 7 rows
    const newGrid = Array.from({ length: COLS }, () => Array(ROWS).fill(null));
    const labels = [];
    let currentMonth = -1;
    let foodCount = 0;

    // The last date in the list is the most recent day (today)
    // Align dates so that column index = week, row index = day of week (0=Sun, 6=Sat)
    if (rawList.length > 0) {
      const firstDate = new Date(rawList[0].date);
      const startDayOfWeek = firstDate.getDay();

      rawList.forEach((item, index) => {
        const absoluteDay = index + startDayOfWeek;
        const col = Math.floor(absoluteDay / 7);
        const row = absoluteDay % 7;

        if (col < COLS && row < ROWS) {
          const itemDate = new Date(item.date);
          const month = itemDate.getMonth();

          // Collect month label for the first week the month appears
          if (row === 0 && month !== currentMonth) {
            currentMonth = month;
            labels.push({ col, label: MONTH_NAMES[month] });
          }

          if (item.level > 0) foodCount++;

          newGrid[col][row] = {
            date: item.date,
            count: item.count,
            level: item.level,
            originalLevel: item.level,
            eaten: false,
          };
        }
      });
    }

    // Filter month labels to avoid crowding (at least 3 weeks apart)
    const filteredLabels = labels.filter((lbl, idx, arr) => {
      if (idx === 0) return true;
      return lbl.col - arr[idx - 1].col >= 3;
    });

    setMonthLabels(filteredLabels);
    setGrid(newGrid);
    setTotalFoodCount(foodCount);
    setEatenCount(0);
  }, []);

  // Fetch live contributions or use bundled fallback
  const fetchContributions = useCallback(async () => {
    try {
      // Append cache buster to bypass intermediary HTTP proxy caching when updates are pushed
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last&_t=${Date.now()}`);
      if (!res.ok) throw new Error("API failed");
      const json = await res.json();
      initGridData(json);
      if (onDataLoaded) onDataLoaded(json);
    } catch (err) {
      initGridData(fallbackData);
      if (onDataLoaded) onDataLoaded(fallbackData);
    }
  }, [username, initGridData, onDataLoaded]);

  useEffect(() => {
    fetchContributions();

    // Re-check contributions whenever user refocuses the tab (e.g., pushed code to GitHub & returned)
    const handleFocus = () => {
      fetchContributions();
    };
    window.addEventListener("focus", handleFocus);

    // Auto-poll every 90 seconds for real-time updates
    const pollInterval = setInterval(() => {
      fetchContributions();
    }, 90000);

    return () => {
      window.removeEventListener("focus", handleFocus);
      clearInterval(pollInterval);
    };
  }, [fetchContributions, refreshKey]);

  // Restart / Respawn grid
  const handleRespawn = useCallback(() => {
    setGrid((prevGrid) =>
      prevGrid.map((col) =>
        col.map((cell) => (cell ? { ...cell, eaten: false, level: cell.originalLevel } : null))
      )
    );
    setEatenCount(0);
    setGameOver(false);
  }, []);

  // Pathfinding AI for Autonomous Mode
  const getNextAIMove = useCallback((currentSnake, currentGrid) => {
    const head = currentSnake[0];

    // Find all remaining uneaten contributions
    const uneatenFoods = [];
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const cell = currentGrid[c]?.[r];
        if (cell && cell.originalLevel > 0 && !cell.eaten) {
          const dist = Math.abs(c - head.x) + Math.abs(r - head.y);
          uneatenFoods.push({ x: c, y: r, dist });
        }
      }
    }

    // If no food left, respawn and wander
    if (uneatenFoods.length === 0) {
      handleRespawn();
      return getSafeWander(currentSnake);
    }

    // Sort food by distance
    uneatenFoods.sort((a, b) => a.dist - b.dist);
    const target = uneatenFoods[0];

    // BFS shortest path to nearest target, treating snake body as obstacle
    const bodySet = new Set(currentSnake.slice(0, -1).map((s) => `${s.x},${s.y}`));
    const queue = [[head]];
    const visited = new Set([`${head.x},${head.y}`]);
    let chosenPath = null;

    const dirs = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ];

    while (queue.length > 0) {
      const path = queue.shift();
      const curr = path[path.length - 1];

      if (curr.x === target.x && curr.y === target.y) {
        chosenPath = path;
        break;
      }

      // Check adjacent cells
      for (const d of dirs) {
        const nx = curr.x + d.dx;
        const ny = curr.y + d.dy;
        const key = `${nx},${ny}`;

        if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && !visited.has(key) && !bodySet.has(key)) {
          visited.add(key);
          queue.push([...path, { x: nx, y: ny }]);
        }
      }
    }

    if (chosenPath && chosenPath.length > 1) {
      return {
        dx: chosenPath[1].x - head.x,
        dy: chosenPath[1].y - head.y,
      };
    }

    // If BFS direct path is blocked, find any safe move
    return getSafeWander(currentSnake);
  }, [handleRespawn]);

  // Safe wander move that prevents colliding with self or wall
  const getSafeWander = (currentSnake) => {
    const head = currentSnake[0];
    const bodySet = new Set(currentSnake.slice(0, -1).map((s) => `${s.x},${s.y}`));
    const dirs = [
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: -1 },
    ];

    for (const d of dirs) {
      const nx = head.x + d.dx;
      const ny = head.y + d.dy;
      if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && !bodySet.has(`${nx},${ny}`)) {
        return d;
      }
    }

    // Default to existing or right
    return directionRef.current;
  };

  // Keyboard controls for Play Mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modeRef.current !== "play") return;

      const currentDir = directionRef.current;
      let newDir = null;

      if (["ArrowUp", "KeyW"].includes(e.code)) {
        if (currentDir.dy === 0) newDir = { dx: 0, dy: -1 };
        e.preventDefault();
      } else if (["ArrowDown", "KeyS"].includes(e.code)) {
        if (currentDir.dy === 0) newDir = { dx: 0, dy: 1 };
        e.preventDefault();
      } else if (["ArrowLeft", "KeyA"].includes(e.code)) {
        if (currentDir.dx === 0) newDir = { dx: -1, dy: 0 };
        e.preventDefault();
      } else if (["ArrowRight", "KeyD"].includes(e.code)) {
        if (currentDir.dx === 0) newDir = { dx: 1, dy: 0 };
        e.preventDefault();
      } else if (e.code === "Space") {
        setIsPaused((p) => !p);
        e.preventDefault();
      }

      if (newDir) {
        nextDirectionRef.current = newDir;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Main Game Loop Tick
  useEffect(() => {
    if (grid.length === 0 || isPaused || gameOver) return;

    const interval = setInterval(() => {
      const currentSnake = snakeRef.current;
      const currentGrid = gridRef.current;
      const currentMode = modeRef.current;

      let move = null;
      if (currentMode === "auto") {
        move = getNextAIMove(currentSnake, currentGrid);
      } else {
        move = nextDirectionRef.current;
      }

      directionRef.current = move;

      const head = currentSnake[0];
      const newHead = {
        x: head.x + move.dx,
        y: head.y + move.dy,
      };

      // Play mode wall collision
      if (currentMode === "play") {
        if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
          setGameOver(true);
          return;
        }

        const hitsSelf = currentSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y);
        if (hitsSelf) {
          setGameOver(true);
          return;
        }
      } else {
        // Auto mode: wrap or clamp just in case
        if (newHead.x < 0) newHead.x = COLS - 1;
        if (newHead.x >= COLS) newHead.x = 0;
        if (newHead.y < 0) newHead.y = ROWS - 1;
        if (newHead.y >= ROWS) newHead.y = 0;
      }

      // Check if food eaten
      const targetCell = currentGrid[newHead.x]?.[newHead.y];
      let hasEaten = false;

      if (targetCell && targetCell.originalLevel > 0 && !targetCell.eaten) {
        hasEaten = true;
        setEatenCount((c) => c + 1);

        // Mark eaten on grid
        setGrid((prev) => {
          const next = prev.map((col) => [...col]);
          if (next[newHead.x]?.[newHead.y]) {
            next[newHead.x][newHead.y] = {
              ...next[newHead.x][newHead.y],
              eaten: true,
              level: 0,
            };
          }
          return next;
        });

        // Spawn sparkle particle
        setParticles((prev) => [
          ...prev.slice(-10),
          {
            id: Date.now() + Math.random(),
            x: OFFSET_X + newHead.x * CELL_TOTAL + BLOCK_SIZE / 2,
            y: OFFSET_Y + newHead.y * CELL_TOTAL + BLOCK_SIZE / 2,
          },
        ]);
      }

      // Snake body update
      const newSnake = [newHead, ...currentSnake];
      if (!hasEaten && newSnake.length > 5) {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, speed);

    return () => clearInterval(interval);
  }, [grid.length, isPaused, gameOver, speed, getNextAIMove]);

  // Clean particles after animation
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles((p) => p.slice(1));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  const colors = isDark ? THEME_COLORS.dark : THEME_COLORS.light;

  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* Top Controls Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        {/* Status indicator */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-slate-700 dark:text-gray-300 flex items-center gap-1.5">
            {mode === "auto" ? (
              <>
                <FaRobot className="text-blue-500" /> Autonomous Snake Active
              </>
            ) : (
              <>
                <FaGamepad className="text-purple-500" /> Player Mode Active (Arrow Keys / WASD)
              </>
            )}
          </span>
        </div>

        {/* Center / Right Metrics & Mode Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <FaTrophy size={11} /> Eaten: {eatenCount} / {totalFoodCount}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-200/80 dark:bg-white/10 rounded-full p-0.5 border border-slate-300 dark:border-white/10">
            <button
              onClick={() => {
                setMode("auto");
                setGameOver(false);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                mode === "auto"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaRobot size={11} /> Auto AI
            </button>
            <button
              onClick={() => {
                setMode("play");
                setGameOver(false);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                mode === "play"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaGamepad size={11} /> Play
            </button>
          </div>

          {/* Speed Toggle */}
          <button
            onClick={() => setSpeed((s) => (s === 110 ? 60 : 110))}
            className="p-1.5 px-2 rounded-lg bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-all text-xs font-semibold flex items-center gap-1"
            title="Toggle Speed"
          >
            <FaBolt className={speed === 60 ? "text-amber-400" : "text-slate-500"} size={11} />
            {speed === 60 ? "2x" : "1x"}
          </button>

          {/* Pause / Play */}
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-all text-xs"
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? <FaPlay size={11} /> : <FaPause size={11} />}
          </button>

          {/* Respawn */}
          <button
            onClick={handleRespawn}
            className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-all text-xs"
            title="Respawn Commits"
          >
            <FaRedo size={11} />
          </button>
        </div>
      </div>

      {/* SVG Canvas Board with Horizontal Scroll */}
      <div className="w-full overflow-x-auto py-2 flex justify-center relative">
        <svg
          width={SVG_WIDTH}
          height={SVG_HEIGHT}
          className="overflow-visible"
          style={{ minWidth: `${SVG_WIDTH}px` }}
        >
          <defs>
            {/* Snake Glow Filter */}
            <filter id="snakeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={colors.snakeGlow} />
            </filter>

            {/* Snake Head Gradient */}
            <linearGradient id="snakeHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            {/* Snake Body Gradient */}
            <linearGradient id="snakeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Month Labels */}
          {monthLabels.map((lbl, idx) => (
            <text
              key={`month-${idx}`}
              x={OFFSET_X + lbl.col * CELL_TOTAL}
              y={OFFSET_Y - 8}
              fill={colors.text}
              fontSize="11"
              fontFamily="inherit"
              fontWeight="500"
            >
              {lbl.label}
            </text>
          ))}

          {/* Weekday Labels */}
          {WEEKDAYS.map((day, r) => (
            <text
              key={`day-${r}`}
              x={OFFSET_X - 10}
              y={OFFSET_Y + r * CELL_TOTAL + BLOCK_SIZE - 2}
              fill={colors.text}
              fontSize="10"
              textAnchor="end"
              fontFamily="inherit"
            >
              {day}
            </text>
          ))}

          {/* Contribution Cells */}
          {grid.map((col, c) =>
            col.map((cell, r) => {
              if (!cell) return null;
              const xPos = OFFSET_X + c * CELL_TOTAL;
              const yPos = OFFSET_Y + r * CELL_TOTAL;
              const cellColor = cell.eaten
                ? colors.empty
                : colors.levels[cell.level] || colors.empty;

              return (
                <rect
                  key={`cell-${c}-${r}`}
                  x={xPos}
                  y={yPos}
                  width={BLOCK_SIZE}
                  height={BLOCK_SIZE}
                  rx="2.5"
                  ry="2.5"
                  fill={cellColor}
                  stroke={colors.border}
                  strokeWidth="1"
                  className="transition-colors duration-200 cursor-pointer"
                  onMouseEnter={() =>
                    setTooltip({
                      x: xPos,
                      y: yPos,
                      text: `${cell.count} contributions on ${cell.date}`,
                    })
                  }
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })
          )}

          {/* Sparkle Burst Particles */}
          {particles.map((p) => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r="7"
              fill="#38bdf8"
              opacity="0.8"
              className="animate-ping pointer-events-none"
            />
          ))}

          {/* Snake Body Segments */}
          {snake.slice(1).map((seg, idx) => {
            const opacity = 1 - (idx / snake.length) * 0.4;
            return (
              <rect
                key={`snake-body-${idx}`}
                x={OFFSET_X + seg.x * CELL_TOTAL}
                y={OFFSET_Y + seg.y * CELL_TOTAL}
                width={BLOCK_SIZE}
                height={BLOCK_SIZE}
                rx="3"
                ry="3"
                fill="url(#snakeBodyGrad)"
                opacity={opacity}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Snake Head with Cute Eyes */}
          {snake.length > 0 && (() => {
            const head = snake[0];
            const hx = OFFSET_X + head.x * CELL_TOTAL;
            const hy = OFFSET_Y + head.y * CELL_TOTAL;
            const dir = directionRef.current;

            // Eye positions based on direction
            let eye1 = { x: hx + 3, y: hy + 3 };
            let eye2 = { x: hx + 9, y: hy + 3 };
            if (dir.dy !== 0) {
              eye1 = { x: hx + 3, y: hy + (dir.dy > 0 ? 8 : 3) };
              eye2 = { x: hx + 9, y: hy + (dir.dy > 0 ? 8 : 3) };
            } else if (dir.dx !== 0) {
              eye1 = { x: hx + (dir.dx > 0 ? 8 : 3), y: hy + 3 };
              eye2 = { x: hx + (dir.dx > 0 ? 8 : 3), y: hy + 9 };
            }

            return (
              <g filter="url(#snakeGlow)">
                <rect
                  x={hx}
                  y={hy}
                  width={BLOCK_SIZE}
                  height={BLOCK_SIZE}
                  rx="3.5"
                  ry="3.5"
                  fill="url(#snakeHeadGrad)"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                />
                {/* Eyes */}
                <circle cx={eye1.x} cy={eye1.y} r="1.5" fill="#ffffff" />
                <circle cx={eye2.x} cy={eye2.y} r="1.5" fill="#ffffff" />
                <circle cx={eye1.x} cy={eye1.y} r="0.8" fill="#0f172a" />
                <circle cx={eye2.x} cy={eye2.y} r="0.8" fill="#0f172a" />
              </g>
            );
          })()}
        </svg>

        {/* Hover Tooltip */}
        {tooltip && (
          <div
            className="absolute z-30 pointer-events-none px-2.5 py-1 text-xs rounded-md bg-slate-900 text-white shadow-lg border border-white/10"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y - 32}px`,
              transform: "translateX(-40%)",
            }}
          >
            {tooltip.text}
          </div>
        )}

        {/* Game Over Overlay (for Play mode) */}
        {gameOver && (
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-3 z-20">
            <h4 className="text-xl font-extrabold text-white">💥 Game Over!</h4>
            <p className="text-xs text-gray-300">
              You ate <span className="text-emerald-400 font-bold">{eatenCount}</span> commits!
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setGameOver(false);
                  setSnake([
                    { x: 12, y: 3 },
                    { x: 11, y: 3 },
                    { x: 10, y: 3 },
                  ]);
                }}
                className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md transition-all"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  setMode("auto");
                  setGameOver(false);
                }}
                className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all"
              >
                Switch to AI Bot
              </button>
            </div>
          </div>
        )}
      </div>

      {/* On-Screen Mobile D-Pad (Visible when in Play mode) */}
      {mode === "play" && !gameOver && (
        <div className="mt-4 flex flex-col items-center gap-1 sm:hidden">
          <button
            onClick={() => {
              if (directionRef.current.dy === 0) nextDirectionRef.current = { dx: 0, dy: -1 };
            }}
            className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center active:bg-purple-600 shadow"
          >
            ▲
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => {
                if (directionRef.current.dx === 0) nextDirectionRef.current = { dx: -1, dy: 0 };
              }}
              className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center active:bg-purple-600 shadow"
            >
              ◀
            </button>
            <button
              onClick={() => {
                if (directionRef.current.dy === 0) nextDirectionRef.current = { dx: 0, dy: 1 };
              }}
              className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center active:bg-purple-600 shadow"
            >
              ▼
            </button>
            <button
              onClick={() => {
                if (directionRef.current.dx === 0) nextDirectionRef.current = { dx: 1, dy: 0 };
              }}
              className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center active:bg-purple-600 shadow"
            >
              ▶
            </button>
          </div>
        </div>
      )}

      {/* Bottom Summary & Legend */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 text-xs text-slate-600 dark:text-gray-400 font-medium px-2">
        <div>
          <span>{totalContributions} contributions in the last year</span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {colors.levels.map((lvlColor, idx) => (
            <span
              key={`legend-${idx}`}
              className="w-3 h-3 rounded-sm border border-slate-300 dark:border-white/10"
              style={{ backgroundColor: lvlColor }}
            />
          ))}
          <span>More</span>
        </div>
      </div>

    </div>
  );
};

export default GithubSnakeCalendar;
