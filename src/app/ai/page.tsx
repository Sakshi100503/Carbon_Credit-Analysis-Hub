'use client';

import { useChat } from '@ai-sdk/react';
import Link from 'next/link';

export default function UnifiedPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* ----------------- Header Section ----------------- */}
      <header className="bg-black text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-xl md:text-2xl font-bold">CarbonPulse Unified Hub</h1>
          <Link href="/dashboard" className="text-white hover:text-gray-400 transition-colors duration-200">
            Go to Dashboard
          </Link>
        </div>
      </header>

      {/* ----------------- Main Content Area (3 Columns) ----------------- */}
      <div className="flex flex-1 my-6 w-full max-w-[120rem] mx-auto px-4 md:px-8 gap-6">
        
        {/* Left Sidebar (Navigation) - Updated to be unified and black */}
        <nav className="w-64 bg-black rounded-xl shadow-lg p-6 flex flex-col space-y-4 flex-shrink-0">
          <Link href="/" className="nav-item text-white hover:text-gray-400">Home</Link>
          <Link href="#" className="nav-item text-white hover:text-gray-400">Unified View</Link>
          <Link href="#" className="nav-item text-white hover:text-gray-400">Dashboard</Link>
          <Link href="#" className="nav-item text-white hover:text-gray-400">Contact</Link>
          <Link href="#" className="nav-item text-white hover:text-gray-400">Services</Link>
        </nav>

        {/* Middle Section (AI Chatbot) - Updated text color */}
        <main className="flex-1 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 bg-white shadow-inner">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask the AI agent..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </main>

        {/* Right Section (Blogs and News) - Updated text color */}
        <aside className="w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4 flex-shrink-0">
          <h2 className="text-xl font-semibold text-black mb-4">Carbon Credit News</h2>
          <div className="bg-gray-100 rounded-lg p-3 text-sm border border-gray-200">
            <h3 className="font-semibold text-black">New Policy to Boost Indian Market</h3>
            <p className="text-gray-600 mt-1 text-xs">A recent policy change is expected to increase demand for carbon credits...</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 text-sm border border-gray-200">
            <h3 className="font-semibold text-black">Agroforestry Projects Gain Momentum</h3>
            <p className="text-gray-600 mt-1 text-xs">New report highlights the growing popularity of agroforestry initiatives in India.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 text-sm border border-gray-200">
            <h3 className="font-semibold text-black">Weekly Price Summary</h3>
            <p className="text-gray-600 mt-1 text-xs">A quick summary of this week's price trends across various project types.</p>
          </div>
        </aside>
      </div>

      {/* ----------------- Footer Section ----------------- */}
      <footer className="bg-black text-white p-4 text-center text-sm shadow-inner mt-6">
        <div className="container mx-auto">
          &copy; 2023 CarbonPulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}