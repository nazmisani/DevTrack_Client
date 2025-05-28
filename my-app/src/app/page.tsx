import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* Code-like background decoration - enhanced with more elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs md:text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            >
              {["{</>}", "const()", "import", "export", "function()", "=>"][i % 6]}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="relative z-20 w-full">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              &lt;DevTrack/&gt;
            </span>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/login"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="w-full backdrop-blur-lg bg-black bg-opacity-40 rounded-3xl border border-gray-800 shadow-2xl p-8 md:p-12 my-8 md:my-12">
            <div className="mb-12 relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 border-t-2 border-l-2 border-cyan-500 opacity-50"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 border-b-2 border-r-2 border-purple-500 opacity-50"></div>

              <h1 className="relative inline-block text-5xl md:text-7xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  &lt;Dev<span className="text-white">Track</span>/&gt;
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto relative">
                Your development journey, beautifully tracked. Manage skills,
                showcase projects, and generate a professional portfolio — all in
                one place.
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/login"
                className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70"></span>
                <span
                  className="absolute inset-0 w-full h-full transition-all duration-300 
                bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 
                group-hover:opacity-70 group-hover:scale-110"
                ></span>
                <span
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 
                group-hover:animate-[shine_1.5s_ease-in-out_infinite]"
                ></span>
                <span className="relative flex items-center justify-center z-10 text-white">
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/register"
                className="group relative px-8 py-4 text-lg font-medium overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 border-2 border-cyan-500 rounded-lg"></span>
                <span className="absolute -inset-2 blur-sm bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 right-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-700"></span>
                <span className="absolute bottom-0 right-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent group-hover:w-full transition-all duration-700"></span>
                <span className="relative text-cyan-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  Register
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform group-hover:rotate-90 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                    <path d="M16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 
              transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20
              overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-cyan-500 rounded-full filter blur-3xl opacity-10 
                group-hover:opacity-30 transition-opacity duration-500"
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-cyan-500 rounded-full filter blur-2xl opacity-10 
                group-hover:opacity-30 group-hover:w-16 group-hover:h-16 transition-all duration-500"
              ></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                Track Skills
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent 
                  group-hover:w-full transition-all duration-300 ease-out"
                ></span>
              </h3>
              <p className="relative z-10 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Visualize your growth journey with interactive charts and
                real-time metrics. Monitor progress and identify areas for improvement.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-sm text-cyan-400 group-hover:text-cyan-300">Learn more →</span>
              </div>
            </div>

            <div
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 
              transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20
              overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full filter blur-3xl opacity-10 
                group-hover:opacity-30 transition-opacity duration-500"
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-500 rounded-full filter blur-2xl opacity-10 
                group-hover:opacity-30 group-hover:w-16 group-hover:h-16 transition-all duration-500"
              ></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                Manage Projects
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent 
                  group-hover:w-full transition-all duration-300 ease-out"
                ></span>
              </h3>
              <p className="relative z-10 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Showcase your work with rich details, tech stacks, and
                impressive metrics. Document your achievements in one place.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-sm text-purple-400 group-hover:text-purple-300">Learn more →</span>
              </div>
            </div>

            <div
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 
              transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/20
              overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-pink-500 rounded-full filter blur-3xl opacity-10 
                group-hover:opacity-30 transition-opacity duration-500"
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-pink-500 rounded-full filter blur-2xl opacity-10 
                group-hover:opacity-30 group-hover:w-16 group-hover:h-16 transition-all duration-500"
              ></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">
                Build Portfolio
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-transparent 
                  group-hover:w-full transition-all duration-300 ease-out"
                ></span>
              </h3>
              <p className="relative z-10 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Generate a stunning public profile to impress potential
                employers. Share your professional journey with the world.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-sm text-pink-400 group-hover:text-pink-300">Learn more →</span>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-20 pt-12 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "TailwindCSS",
                "MongoDB",
              ].map((tech) => (
                <div
                  key={tech}
                  className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} DevTrack • Empowering developers worldwide
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-white">About</a>
                <a href="#" className="text-gray-500 hover:text-white">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-white">Terms</a>
                <a href="#" className="text-gray-500 hover:text-white">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
