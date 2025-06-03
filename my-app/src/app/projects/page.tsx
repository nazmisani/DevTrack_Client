"use client";

import LayoutWithSidebar from "../layout-with-sidebar";
import Link from "next/link";

export default function ProjectsPage() {
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
          <li>Projects</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">My Projects</h1>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Project
          </button>
        </div>

        {/* Project Filters */}
        <div className="p-4 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                All Projects
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Active
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Completed
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Archived
              </button>
            </div>
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 absolute left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card - Active */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
            <div className="h-40 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-400 border border-green-900/30">
                  Active
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">DevTrack</h2>
                <p className="text-sm text-gray-300">Full Stack Development</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                A developer productivity tracking application with skill
                management, portfolio creation and project tracking features.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  React
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Node.js
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  MongoDB
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                    +3
                  </div>
                </div>
                <Link
                  href="/project/1"
                  className="text-xs flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>

          {/* Project Card - In Progress */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="h-40 bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-orange-900/50 text-orange-400 border border-orange-900/30">
                  In Progress
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  AI Chat Platform
                </h2>
                <p className="text-sm text-gray-300">Machine Learning</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                An AI-powered chat platform with natural language processing
                capabilities for improved customer support automation.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  Python
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  TensorFlow
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  React
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                </div>
                <Link
                  href="/project/2"
                  className="text-xs flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>

          {/* Project Card - Completed */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-pink-800 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/20">
            <div className="h-40 bg-gradient-to-br from-pink-900/40 to-red-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-900/50 text-gray-400 border border-gray-700">
                  Completed
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  E-commerce App
                </h2>
                <p className="text-sm text-gray-300">React Native</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                A mobile e-commerce application with features like product
                search, cart management, and secure checkout flow.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  React Native
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  Redux
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  Firebase
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                    +2
                  </div>
                </div>
                <Link
                  href="/project/3"
                  className="text-xs flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>

          {/* Project Card - Active */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
            <div className="h-40 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-400 border border-green-900/30">
                  Active
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  Weather Dashboard
                </h2>
                <p className="text-sm text-gray-300">Frontend Development</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                A weather application with interactive maps, forecasts and
                real-time weather updates using third-party APIs.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Vue.js
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Mapbox
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Tailwind
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                    +1
                  </div>
                </div>
                <Link
                  href="/project/4"
                  className="text-xs flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>

          {/* Project Card - In Progress */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
            <div className="h-40 bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-orange-900/50 text-orange-400 border border-orange-900/30">
                  In Progress
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  Task Manager API
                </h2>
                <p className="text-sm text-gray-300">Backend Development</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                A RESTful API for task management with authentication, task CRUD
                operations, and team collaboration features.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  Node.js
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  Express
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  MongoDB
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                </div>
                <Link
                  href="/project/5"
                  className="text-xs flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>

          {/* Project Card - Completed */}
          <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 overflow-hidden group hover:border-pink-800 transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/20">
            <div className="h-40 bg-gradient-to-br from-pink-900/40 to-red-900/40 relative p-6">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-900/50 text-gray-400 border border-gray-700">
                  Completed
                </span>
              </div>
              <div className="absolute bottom-0 left-0 m-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  Portfolio Website
                </h2>
                <p className="text-sm text-gray-300">Web Development</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-4">
                A personal portfolio website showcasing projects, skills and
                experience with a modern design and animations.
              </p>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  HTML/CSS
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  JavaScript
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-xs text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                  GSAP
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                </div>
                <Link
                  href="/project/6"
                  className="text-xs flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View Details
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
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-colors">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
            1
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-gray-300 transition-colors">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
