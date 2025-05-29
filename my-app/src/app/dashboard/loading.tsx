export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Animated loading spinner with cyberpunk style */}
          <div className="absolute inset-0 border-t-2 border-r-2 border-cyan-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-t-2 border-pink-500 rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-4 border-t-2 border-purple-500 rounded-full animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              &lt;/&gt;
            </span>
          </div>
        </div>
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          Loading Dashboard...
        </p>
      </div>
    </div>
  );
}
