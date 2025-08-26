export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-700 flex flex-col items-center justify-center text-white p-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">
          🎮 Game Zone
        </h1>
        <p className="text-2xl mb-10 opacity-90">Build your own game!</p>
      </div>

      <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
        <canvas
          id="gameCanvas"
          width="400"
          height="300"
          className="border-2 border-white/40 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.7)]"
        >
          Your browser does not support the canvas element.
        </canvas>
        <p className="mt-4 text-sm text-gray-200 opacity-80">
          Game canvas ready for your creativity!
        </p>
      </div>

      <div className="mt-10 flex space-x-6">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
          ▶ Start Game
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
          ⟳ Reset
        </button>
      </div>
    </main>
  );
}
