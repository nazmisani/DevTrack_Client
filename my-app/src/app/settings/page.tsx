"use client";

import LayoutWithSidebar from "../layout-with-sidebar";
import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

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
          <li>Settings</li>
        </ol>
      </nav>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
              <div className="p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab("account")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === "account"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Account
                  </button>

                  <button
                    onClick={() => setActiveTab("appearance")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === "appearance"
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
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Appearance
                  </button>

                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === "notifications"
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Notifications
                  </button>

                  <button
                    onClick={() => setActiveTab("privacy")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === "privacy"
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Privacy & Security
                  </button>

                  <button
                    onClick={() => setActiveTab("integrations")}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === "integrations"
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Integrations
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800">
              {activeTab === "account" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Account Settings
                  </h2>

                  <div className="space-y-6">
                    {/* Profile Section */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        Profile Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Avatar */}
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                            JD
                          </div>
                          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                            Change Avatar
                          </button>
                        </div>

                        {/* Profile Info */}
                        <div className="md:col-span-2 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-gray-400 mb-1">
                                First Name
                              </label>
                              <input
                                type="text"
                                defaultValue="John"
                                className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-400 mb-1">
                                Last Name
                              </label>
                              <input
                                type="text"
                                defaultValue="Doe"
                                className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm text-gray-400 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              defaultValue="john.doe@example.com"
                              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-400 mb-1">
                              Bio
                            </label>
                            <textarea
                              defaultValue="Full-stack developer with 5 years of experience in React, Node.js, and MongoDB. Passionate about building scalable web applications and exploring new technologies."
                              rows={4}
                              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-700" />

                    {/* Password Section */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">
                              New Password
                            </label>
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              placeholder="••••••••"
                              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg mr-2 hover:bg-gray-700 transition-colors">
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Appearance Settings
                  </h2>

                  <div className="space-y-6">
                    {/* Theme Options */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">Theme</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Dark Theme */}
                        <div className="relative backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-cyan-600 p-4 cursor-pointer">
                          <div className="h-24 rounded-lg bg-gray-900 mb-3"></div>
                          <p className="text-center text-sm text-white">
                            Dark (Default)
                          </p>
                          <div className="absolute top-2 right-2">
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Light Theme */}
                        <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-4 cursor-pointer hover:border-gray-700 transition-all">
                          <div className="h-24 rounded-lg bg-gray-100 mb-3"></div>
                          <p className="text-center text-sm text-white">
                            Light
                          </p>
                        </div>

                        {/* System Theme */}
                        <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-4 cursor-pointer hover:border-gray-700 transition-all">
                          <div className="h-24 rounded-lg bg-gradient-to-r from-gray-900 to-gray-100 mb-3"></div>
                          <p className="text-center text-sm text-white">
                            System
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-700" />

                    {/* Color Schemes */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        Color Scheme
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {/* Cyan/Blue (Current) */}
                        <div className="relative backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-cyan-600 p-4 cursor-pointer">
                          <div className="h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          <p className="text-center text-sm text-white mt-2">
                            Cyan
                          </p>
                          <div className="absolute top-2 right-2">
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Purple */}
                        <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-4 cursor-pointer hover:border-gray-700 transition-all">
                          <div className="h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600"></div>
                          <p className="text-center text-sm text-white mt-2">
                            Purple
                          </p>
                        </div>

                        {/* Green */}
                        <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-4 cursor-pointer hover:border-gray-700 transition-all">
                          <div className="h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600"></div>
                          <p className="text-center text-sm text-white mt-2">
                            Green
                          </p>
                        </div>

                        {/* Amber */}
                        <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl border border-gray-800 p-4 cursor-pointer hover:border-gray-700 transition-all">
                          <div className="h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600"></div>
                          <p className="text-center text-sm text-white mt-2">
                            Amber
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg mr-2 hover:bg-gray-700 transition-colors">
                        Reset to Defaults
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Notification Settings
                  </h2>

                  <div className="space-y-6">
                    {/* Email Notifications */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        Email Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Project Updates</p>
                            <p className="text-sm text-gray-400">
                              Get notified when changes are made to projects
                              you're involved in
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Skill Achievement</p>
                            <p className="text-sm text-gray-400">
                              Get notified when you reach new skill levels or
                              earn badges
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Portfolio Views</p>
                            <p className="text-sm text-gray-400">
                              Get notified when someone views your portfolio
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-700" />

                    {/* In-App Notifications */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        In-App Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Project Reminders</p>
                            <p className="text-sm text-gray-400">
                              Get reminders about upcoming deadlines
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">New Features</p>
                            <p className="text-sm text-gray-400">
                              Get notified about new app features and updates
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "privacy" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Privacy & Security
                  </h2>

                  <div className="space-y-6">
                    {/* Privacy Settings */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        Privacy Settings
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Public Profile</p>
                            <p className="text-sm text-gray-400">
                              Make your profile visible to others
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Show Skills on Profile</p>
                            <p className="text-sm text-gray-400">
                              Display your skills on your public profile
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">
                              Show Projects on Profile
                            </p>
                            <p className="text-sm text-gray-400">
                              Display your projects on your public profile
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-700" />

                    {/* Security */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">Security</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-white mb-2">
                            Two-Factor Authentication
                          </p>
                          <p className="text-sm text-gray-400 mb-3">
                            Add an extra layer of security to your account
                          </p>
                          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                            Enable 2FA
                          </button>
                        </div>

                        <div>
                          <p className="text-white mb-2">Sessions</p>
                          <p className="text-sm text-gray-400 mb-3">
                            Manage your active sessions
                          </p>
                          <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700 p-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-white">
                                  Current Session
                                </p>
                                <p className="text-xs text-gray-400">
                                  Windows · Chrome · New York, USA
                                </p>
                              </div>
                              <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-400 border border-green-900/30">
                                Active
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-white mb-2">Account Data</p>
                          <div className="flex space-x-3">
                            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                              Download Data
                            </button>
                            <button className="px-4 py-2 bg-red-900/50 text-red-400 border border-red-900/30 rounded-lg hover:bg-red-900/70 transition-colors text-sm">
                              Delete Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "integrations" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Integrations
                  </h2>

                  <div className="space-y-6">
                    {/* Connected Accounts */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">
                        Connected Accounts
                      </h3>
                      <div className="space-y-3">
                        {/* GitHub */}
                        <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mr-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-white"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white">GitHub</p>
                                <p className="text-xs text-gray-400">
                                  Connected as johndoe
                                </p>
                              </div>
                            </div>
                            <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-xs hover:bg-gray-600 transition-colors">
                              Disconnect
                            </button>
                          </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-white"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white">LinkedIn</p>
                                <p className="text-xs text-gray-400">
                                  Not connected
                                </p>
                              </div>
                            </div>
                            <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-xs">
                              Connect
                            </button>
                          </div>
                        </div>

                        {/* Stack Overflow */}
                        <div className="backdrop-blur-lg bg-gray-800 bg-opacity-40 rounded-xl border border-gray-700 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mr-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-white"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white">Stack Overflow</p>
                                <p className="text-xs text-gray-400">
                                  Not connected
                                </p>
                              </div>
                            </div>
                            <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-xs">
                              Connect
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-700" />

                    {/* API Access */}
                    <div>
                      <h3 className="text-lg text-gray-200 mb-4">API Access</h3>
                      <div>
                        <p className="text-sm text-gray-400 mb-4">
                          Generate an API key to access your DevTrack data
                          programmatically
                        </p>
                        <div className="flex items-center space-x-3">
                          <div className="flex-grow">
                            <input
                              type="text"
                              value="••••••••••••••••••••••••••••••"
                              readOnly
                              className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                          </div>
                          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm hover:from-cyan-600 hover:to-blue-700 transition-colors whitespace-nowrap">
                            Generate New Key
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
