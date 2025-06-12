"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        {/* Additional blobs for visual effect */}
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-blob animation-delay-3000"></div>
        <div className="absolute top-2/3 right-1/6 w-72 h-72 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-blob animation-delay-5000"></div>
      </div>

      {/* Main layout structure */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900 bg-opacity-60 backdrop-blur-lg border-r border-gray-800 transform sidebar-transition z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:block`}
        >
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                &lt;DevTrack/&gt;
              </span>
            </div>
          </div>
          <nav className="mt-6 px-4">
            <div className="space-y-3">
              <Link
                href="/dashboard"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === "/dashboard"
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
                Dashboard
              </Link>

              <Link
                href="/skills"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === "/skills"
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
              </Link>

              <Link
                href="/projects"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === "/projects"
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
              </Link>

              <Link
                href="/portfolio"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === "/portfolio"
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
              </Link>

              <Link
                href="/settings"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === "/settings"
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
              </Link>
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
          <button
            id="sidebar-toggle"
            onClick={toggleSidebar}
            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/20 text-white sidebar-toggle-button"
            aria-label="Toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden overlay-fade-in"
            onClick={toggleSidebar}
            aria-hidden="true"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          {/* Header / Top Bar */}
          <header className="bg-gray-900 bg-opacity-60 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Mobile logo and menu button */}
              <div className="flex items-center md:hidden">
                <button
                  className="mr-3"
                  onClick={toggleSidebar}
                  aria-label="Toggle sidebar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {sidebarOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
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

          {/* Content Area */}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
