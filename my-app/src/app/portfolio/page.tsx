"use client";

import LayoutWithSidebar from "../layout-with-sidebar";
import Link from "next/link";

export default function PortfolioPage() {
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
          <li>Portfolio</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-200 transition-all duration-300 flex items-center">
              Preview Public View
            </button>
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Publish Changes
            </button>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-5 flex items-center">
            Personal Information
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/30">
              Public
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-white text-xl font-bold">John Doe</h3>
                  <p className="text-gray-400">Full Stack Developer</p>
                </div>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 9h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.28c.6-.66 1.4-1.28 2.5-1.28 1.93 0 3.5 1.57 3.5 3.5V17z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-300">john.doe@example.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Website</p>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  https://johndoe.dev
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-white font-medium mb-3">About Me</h3>
            <p className="text-gray-400">
              Full Stack Developer with over 5 years of experience building web
              applications using modern JavaScript frameworks. Passionate about
              creating elegant, efficient, and user-friendly solutions. Skilled
              in React, Node.js, and database design. Currently focused on
              expanding knowledge in machine learning and AI integration with
              web applications.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-white flex items-center">
              Featured Projects
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/30">
                Public
              </span>
            </h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              Manage
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-800/50 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/90"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    DevTrack
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">
                  A developer productivity tracking application with skill
                  management, portfolio creation and project tracking features.
                </p>
              </div>
              <div className="mt-auto border-t border-gray-700 p-4 flex items-center justify-between">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center"
                >
                  Live Demo
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Source
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-800/50 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/90"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    AI Chat Platform
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      TensorFlow
                    </span>
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      React
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">
                  An AI-powered chat platform with natural language processing
                  capabilities for improved customer support automation.
                </p>
              </div>
              <div className="mt-auto border-t border-gray-700 p-4 flex items-center justify-between">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center"
                >
                  Live Demo
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-white flex items-center">
              Featured Skills
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/30">
                Public
              </span>
            </h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              Manage
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Skills */}
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center">
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
                Frontend
              </h3>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">React</span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">TypeScript</span>
                  <span className="text-xs text-cyan-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">TailwindCSS</span>
                  <span className="text-xs text-cyan-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[90%]"></div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center">
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
                Backend
              </h3>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Node.js</span>
                  <span className="text-xs text-purple-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Express.js</span>
                  <span className="text-xs text-purple-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">MongoDB</span>
                  <span className="text-xs text-purple-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 w-[68%]"></div>
                </div>
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="space-y-4">
              <h3 className="text-white font-medium flex items-center">
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
                DevOps
              </h3>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Docker</span>
                  <span className="text-xs text-pink-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[72%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Git</span>
                  <span className="text-xs text-pink-400">Advanced</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[93%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">AWS</span>
                  <span className="text-xs text-pink-400">Intermediate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Analytics */}
        <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-6">
            Portfolio Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">Total Views</p>
              <h3 className="text-2xl font-bold text-white mb-2">1,482</h3>
              <div className="flex items-center text-xs">
                <span className="text-green-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  22%
                </span>
                <span className="text-gray-500 ml-2">vs. last month</span>
              </div>
            </div>

            <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">Project Clicks</p>
              <h3 className="text-2xl font-bold text-white mb-2">346</h3>
              <div className="flex items-center text-xs">
                <span className="text-green-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  18%
                </span>
                <span className="text-gray-500 ml-2">vs. last month</span>
              </div>
            </div>

            <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">Contact Requests</p>
              <h3 className="text-2xl font-bold text-white mb-2">8</h3>
              <div className="flex items-center text-xs">
                <span className="text-red-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  5%
                </span>
                <span className="text-gray-500 ml-2">vs. last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
