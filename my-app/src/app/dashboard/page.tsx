"use client";

import LayoutWithSidebar from "../layout-with-sidebar";
import Link from "next/link";

export default function Dashboard() {
  return (
    <LayoutWithSidebar>
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 flex text-gray-500">
          <li className="flex items-center">
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              Dashboard
            </a>
          </li>
          <li className="flex items-center mx-2">/</li>
          <li>Overview</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Welcome back, John!</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skills Card */}
          <div className="relative p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Skills</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-white">24</p>
                <p className="text-sm text-cyan-400">4 new this month</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="relative p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">Projects</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-sm text-purple-400">2 in progress</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Portfolio Views Card */}
          <div className="relative p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-pink-800 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-600 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Portfolio Views
            </h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-white">1.4k</p>
                <p className="text-sm text-pink-400">+22% this month</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Chart Card */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">
              Skill Progression
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Week
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Month
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Year
              </button>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="aspect-[16/7] w-full bg-gray-800/40 rounded-lg flex items-center justify-center">
            {/* This would be replaced with an actual chart component */}
            <div className="text-center">
              <div className="relative h-32 w-full">
                {/* Simulate chart bars */}
                <div className="absolute bottom-0 left-[10%] w-4 h-[20%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[20%] w-4 h-[45%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[30%] w-4 h-[35%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[40%] w-4 h-[60%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[50%] w-4 h-[75%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[60%] w-4 h-[50%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[70%] w-4 h-[80%] bg-cyan-500 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[80%] w-4 h-[65%] bg-cyan-500 rounded-t-sm"></div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Chart visualization would go here
              </p>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-200">
              Recent Projects
            </h3>
            <Link
              href="/projects"
              className="text-xs flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {/* Project Item */}
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-gray-600 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-900/50 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">DevTrack</h4>
                    <p className="text-xs text-gray-400">
                      Full Stack Development
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-green-900/20 text-green-400 border border-green-900/30">
                  Active
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                    +3
                  </div>
                </div>
                <div className="text-xs text-gray-400">Updated 2 days ago</div>
              </div>
            </div>

            {/* Project Item */}
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-gray-600 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-900/50 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      AI Chat Platform
                    </h4>
                    <p className="text-xs text-gray-400">Machine Learning</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-orange-900/20 text-orange-400 border border-orange-900/30">
                  In Progress
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                </div>
                <div className="text-xs text-gray-400">Updated today</div>
              </div>
            </div>

            {/* Project Item */}
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-gray-600 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center group-hover:bg-pink-900/50 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      E-commerce App
                    </h4>
                    <p className="text-xs text-gray-400">React Native</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-gray-900/40 text-gray-400 border border-gray-700">
                  Completed
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                    +2
                  </div>
                </div>
                <div className="text-xs text-gray-400">Updated 1 week ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Skills Card */}
          <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-gray-200 mb-6">
              Top Skills
            </h3>

            <div className="space-y-5">
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
                    Node.js
                  </span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[88%]"></div>
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
                    MongoDB
                  </span>
                  <span className="text-xs text-cyan-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed Card */}
          <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-gray-200 mb-6">
              Activity Feed
            </h3>

            <div className="relative pl-6 pb-1 before:content-[''] before:absolute before:top-0 before:left-2 before:h-full before:w-0.5 before:bg-gray-800 space-y-6">
              {/* Activity Item */}
              <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-cyan-500 before:bg-gray-900 before:rounded-full">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    Updated React skill rating
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    Today, 11:42 AM
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    You updated your React skill from Intermediate to Advanced
                    level.
                  </p>
                </div>
              </div>

              {/* Activity Item */}
              <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-purple-500 before:bg-gray-900 before:rounded-full">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    Created new project
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    Yesterday, 3:24 PM
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    You started a new project "AI Chat Platform" with 2
                    collaborators.
                  </p>
                </div>
              </div>

              {/* Activity Item */}
              <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-pink-500 before:bg-gray-900 before:rounded-full">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    Completed project milestone
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    2 days ago, 9:15 AM
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    You completed the "User Authentication" milestone for the
                    DevTrack project.
                  </p>
                </div>
              </div>

              {/* Activity Item */}
              <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-blue-500 before:bg-gray-900 before:rounded-full">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    Portfolio updated
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    Last week, 2:30 PM
                  </span>
                  <p className="text-xs text-gray-500 mt-2">
                    You added 2 new projects to your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
