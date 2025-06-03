"use client";

import LayoutWithSidebar from "../../layout-with-sidebar";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;

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
          <li className="flex items-center">
            <Link
              href="/projects"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Projects
            </Link>
          </li>
          <li className="flex items-center mx-2">/</li>
          <li>Project Details</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Project Details: {projectId}
          </h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-700 transition-all duration-300">
              Edit Project
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Add New Task
            </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="h-48 backdrop-blur-lg bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-gray-800 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 m-4">
                <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-400 border border-green-900/30">
                  Active
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900">
                <h2 className="text-2xl font-bold text-white mb-1">DevTrack</h2>
                <p className="text-gray-300">Full Stack Development</p>
                <div className="flex items-center mt-2 space-x-3">
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
              </div>
            </div>

            {/* Project Description */}
            <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Description
              </h3>
              <p className="text-gray-300">
                A developer productivity tracking application with skill
                management, portfolio creation and project tracking features.
                This application helps developers track their growth, manage
                projects, and showcase their skills and work.
              </p>

              <div className="mt-6">
                <h4 className="text-md font-medium text-white mb-3">
                  Key Features
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Skill tracking and progress visualization</li>
                  <li>Project management with task organization</li>
                  <li>Portfolio generator with customization options</li>
                  <li>Analytics dashboard for productivity insights</li>
                  <li>Integrations with popular development platforms</li>
                </ul>
              </div>
            </div>

            {/* Tasks */}
            <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Tasks</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 mr-2">Filter:</span>
                  <select className="bg-gray-800 border border-gray-700 text-white rounded-lg text-sm px-3 py-1.5">
                    <option>All Tasks</option>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {/* Task 1 */}
                <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500 bg-gray-700"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          Design dashboard UI
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Create wireframes and high-fidelity designs for the
                          main dashboard
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-gray-500">
                            Due: June 10, 2025
                          </span>
                          <span className="mx-2 text-gray-600">•</span>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-900/20">
                            In Progress
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300">
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Project Stats
              </h3>
              <div className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Progress</span>
                    <span className="text-sm text-cyan-400">33%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
