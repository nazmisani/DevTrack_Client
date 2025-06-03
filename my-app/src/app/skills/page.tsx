"use client";

import LayoutWithSidebar from "../layout-with-sidebar";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <LayoutWithSidebar>
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 flex text-gray-500">
          <li className="flex items-center">
            <Link
              href="/dashboard"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center mx-2">/</li>
          <li>Skills</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">My Skills</h1>

        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">
              Skill Categories
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                All
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Frontend
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Backend
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                DevOps
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {/* Frontend Skills */}
            <div className="space-y-5">
              <h4 className="font-medium text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </span>
                Frontend Technologies
              </h4>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    React
                  </span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[92%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    TypeScript
                  </span>
                  <span className="text-xs text-cyan-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[75%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    TailwindCSS
                  </span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[90%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Next.js
                  </span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[85%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Redux
                  </span>
                  <span className="text-xs text-cyan-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[70%]"></div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="space-y-5">
              <h4 className="font-medium text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </span>
                Backend Technologies
              </h4>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Node.js
                  </span>
                  <span className="text-xs text-purple-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[88%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Express.js
                  </span>
                  <span className="text-xs text-purple-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[85%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    MongoDB
                  </span>
                  <span className="text-xs text-purple-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[68%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    PostgreSQL
                  </span>
                  <span className="text-xs text-purple-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[65%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    GraphQL
                  </span>
                  <span className="text-xs text-purple-400">Beginner</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[45%]"></div>
                </div>
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="space-y-5">
              <h4 className="font-medium text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                DevOps & Tools
              </h4>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Docker
                  </span>
                  <span className="text-xs text-pink-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[72%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Git</span>
                  <span className="text-xs text-pink-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[93%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    CI/CD
                  </span>
                  <span className="text-xs text-pink-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[65%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">AWS</span>
                  <span className="text-xs text-pink-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[68%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    Linux
                  </span>
                  <span className="text-xs text-pink-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Progress */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <h3 className="text-lg font-medium text-gray-200 mb-6">
            Learning Progress
          </h3>

          <div className="aspect-[16/7] w-full bg-gray-800/40 rounded-lg flex items-center justify-center">
            {/* This would be replaced with an actual chart component */}
            <div className="text-center">
              <div className="relative h-40 w-full">
                {/* Simulate chart lines */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-700"></div>
                <div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gray-700"></div>
                <div className="absolute bottom-[50%] left-0 w-full h-[1px] bg-gray-700"></div>
                <div className="absolute bottom-[75%] left-0 w-full h-[1px] bg-gray-700"></div>

                {/* Line chart */}
                <svg className="h-full w-full" viewBox="0 0 100 40">
                  <path
                    d="M0,35 L10,30 L20,32 L30,25 L40,22 L50,15 L60,18 L70,10 L80,8 L90,5 L100,7"
                    stroke="url(#gradient)"
                    fill="none"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Your skill progression over time
              </p>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <h3 className="text-lg font-medium text-gray-200 mb-6">
            Recent Achievements
          </h3>

          <div className="relative pl-6 before:content-[''] before:absolute before:top-0 before:left-2 before:h-full before:w-0.5 before:bg-gray-800 space-y-6">
            {/* Achievement Item */}
            <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-cyan-500 before:bg-gray-900 before:rounded-full">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  React Advanced Certificate
                </span>
                <span className="text-xs text-gray-400 mt-1">June 2, 2025</span>
                <p className="text-xs text-gray-500 mt-2">
                  Completed advanced React certification with a focus on
                  performance optimization and state management.
                </p>
              </div>
            </div>

            {/* Achievement Item */}
            <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-purple-500 before:bg-gray-900 before:rounded-full">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  Published Technical Article
                </span>
                <span className="text-xs text-gray-400 mt-1">May 15, 2025</span>
                <p className="text-xs text-gray-500 mt-2">
                  Published "Advanced TypeScript Patterns" on DevCommunity,
                  reaching over 5k developers.
                </p>
              </div>
            </div>

            {/* Achievement Item */}
            <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-pink-500 before:bg-gray-900 before:rounded-full">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  Completed AWS Solutions Architect Course
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  April 28, 2025
                </span>
                <p className="text-xs text-gray-500 mt-2">
                  Successfully completed the AWS Solutions Architect Associate
                  certification course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
