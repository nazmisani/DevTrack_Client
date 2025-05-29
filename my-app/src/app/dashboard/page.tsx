"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // These states would typically be filled with data from an API
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Code-like background decoration */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs md:text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["{</>}", "const()", "import", "export", "function()", "=>"][i % 6]}
            </div>
          ))}
        </div>
      </div>

      {/* Main layout structure */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 w-64 bg-gray-900 bg-opacity-60 backdrop-blur-lg border-r border-gray-800 hidden md:block">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                &lt;DevTrack/&gt;
              </span>
            </div>
          </div>
          <nav className="mt-6 px-4">
            <div className="space-y-3">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Overview
              </button>

              <button
                onClick={() => setActiveTab("skills")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "skills"
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
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
                Skills
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
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
                Projects
              </button>

              <button
                onClick={() => setActiveTab("portfolio")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "portfolio"
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Portfolio
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === "settings"
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
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
                Settings
              </button>
            </div>
          </nav>

          <div className="absolute bottom-0 w-full p-6 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile menu button - visible only on mobile */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <button className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/20 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          {/* Header / Top Bar */}
          <header className="bg-gray-900 bg-opacity-60 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Mobile logo and menu button */}
              <div className="flex items-center md:hidden">
                <button className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  &lt;DevTrack/&gt;
                </span>
              </div>

              {/* Search bar */}
              <div className="hidden md:flex items-center flex-1 mx-4 px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
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
                  type="search"
                  placeholder="Search for projects, skills..."
                  className="w-full ml-2 bg-transparent border-0 focus:ring-0 text-white placeholder-gray-500 text-sm"
                />
              </div>

              {/* Right-side icons */}
              <div className="flex items-center space-x-4">
                <button className="relative p-1 text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full"></span>
                </button>
                
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  JD
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content Area */}
          <div className="p-6">
            {/* Breadcrumbs */}
            <nav className="text-sm mb-6">
              <ol className="list-none p-0 flex text-gray-500">
                <li className="flex items-center">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300">Dashboard</a>
                </li>
                <li className="flex items-center mx-2">/</li>
                <li className="capitalize">{activeTab}</li>
              </ol>
            </nav>

            {/* Dashboard content - changes based on activeTab */}
            {activeTab === "overview" && (
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
                    <h3 className="text-lg font-medium text-gray-200 mb-2">Portfolio Views</h3>
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
                    <h3 className="text-lg font-medium text-gray-200">Skill Progression</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Week</button>
                      <button className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Month</button>
                      <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">Year</button>
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
                      <p className="mt-2 text-sm text-gray-400">Chart visualization would go here</p>
                    </div>
                  </div>
                </div>

                {/* Recent Projects */}
                <div className="p-6 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-200">Recent Projects</h3>
                    <button className="text-xs flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
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
                    </button>
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
                            <p className="text-xs text-gray-400">Full Stack Development</p>
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
                            <h4 className="text-sm font-medium text-white">AI Chat Platform</h4>
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
                            <h4 className="text-sm font-medium text-white">E-commerce App</h4>
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
                    <h3 className="text-lg font-medium text-gray-200 mb-6">Top Skills</h3>
                    
                    <div className="space-y-5">
                      {/* Skill Item */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">React</span>
                          <span className="text-xs text-cyan-400">Advanced</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[92%]"></div>
                        </div>
                      </div>
                      
                      {/* Skill Item */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">TypeScript</span>
                          <span className="text-xs text-cyan-400">Intermediate</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[75%]"></div>
                        </div>
                      </div>
                      
                      {/* Skill Item */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">Node.js</span>
                          <span className="text-xs text-cyan-400">Advanced</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[88%]"></div>
                        </div>
                      </div>
                      
                      {/* Skill Item */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">TailwindCSS</span>
                          <span className="text-xs text-cyan-400">Advanced</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[90%]"></div>
                        </div>
                      </div>
                      
                      {/* Skill Item */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">MongoDB</span>
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
                    <h3 className="text-lg font-medium text-gray-200 mb-6">Activity Feed</h3>
                    
                    <div className="relative pl-6 pb-1 before:content-[''] before:absolute before:top-0 before:left-2 before:h-full before:w-0.5 before:bg-gray-800 space-y-6">
                      {/* Activity Item */}
                      <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-cyan-500 before:bg-gray-900 before:rounded-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">Updated React skill rating</span>
                          <span className="text-xs text-gray-400 mt-1">Today, 11:42 AM</span>
                          <p className="text-xs text-gray-500 mt-2">You updated your React skill from Intermediate to Advanced level.</p>
                        </div>
                      </div>
                      
                      {/* Activity Item */}
                      <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-purple-500 before:bg-gray-900 before:rounded-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">Created new project</span>
                          <span className="text-xs text-gray-400 mt-1">Yesterday, 3:24 PM</span>
                          <p className="text-xs text-gray-500 mt-2">You started a new project "AI Chat Platform" with 2 collaborators.</p>
                        </div>
                      </div>
                      
                      {/* Activity Item */}
                      <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-pink-500 before:bg-gray-900 before:rounded-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">Updated portfolio</span>
                          <span className="text-xs text-gray-400 mt-1">3 days ago</span>
                          <p className="text-xs text-gray-500 mt-2">You updated your public portfolio profile and added 2 new projects.</p>
                        </div>
                      </div>
                      
                      {/* Activity Item */}
                      <div className="relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1 before:w-3 before:h-3 before:border-2 before:border-blue-500 before:bg-gray-900 before:rounded-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">Added new skill</span>
                          <span className="text-xs text-gray-400 mt-1">1 week ago</span>
                          <p className="text-xs text-gray-500 mt-2">You added "GraphQL" to your skills with beginner level.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder content for other tabs */}
            {activeTab !== "overview" && (
              <div className="p-10 backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 text-center">
                <h2 className="text-xl font-bold mb-2 capitalize">{activeTab} Panel</h2>
                <p className="text-gray-400">
                  This is a placeholder for the {activeTab} section.
                  The layout would include specific content for this section.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
