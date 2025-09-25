'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Array of headlines to cycle through
const HEADLINES = [
  "CarbonPulse: Real-time India Market Insights...",
  "CarbonPulse: Tracking Project Quality & Price...",
  "CarbonPulse: Analyzing the Future of Carbon...",
];

export default function DashboardPage() {
  const [currentHeadline, setCurrentHeadline] = useState(HEADLINES[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % HEADLINES.length;
      setCurrentHeadline(HEADLINES[index]);
    }, 3000); // Changes headline every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800">
      {/* Header with increased padding and dynamic text */}
      <header className="bg-indigo-700 text-white py-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {currentHeadline}
          </h1>
          {/* This is the updated Link */}
          <Link href="/ai" className="text-indigo-200 hover:text-white transition-colors duration-200">
            AI-Assistant
          </Link>
        </div>
      </header>
      
      {/* The rest of your dashboard code goes here */}
      
      <div className="flex flex-1 mx-auto my-6 w-full max-w-[120rem] px-6 lg:px-12">
        {/* Left Sidebar */}
        <nav className="w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4 flex-shrink-0">
          <Link href="/" className="nav-item">Home</Link>
          <Link href="/about" className="nav-item">About</Link>
          <Link href="/dashboard" className="nav-item font-semibold text-indigo-700">Dashboard</Link>
          <Link href="/contact" className="nav-item">Contact</Link>
          <Link href="/services" className="nav-item">Services</Link>
        </nav>
        {/* Main Content Area */}
        <main className="flex-1 bg-white rounded-xl shadow-lg p-8 mx-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Carbon Project Insights</h2>
          <p className="text-gray-600 mb-8">
            This section will display detailed information about carbon credit projects,
            including price predictions, quality assessments, and trend analysis.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700">Predicted Price (₹)</h3>
              <p className="text-4xl font-extrabold text-green-800 mt-2">₹1,275</p>
              <p className="text-sm text-green-600 mt-1">per tonne of CO2e</p>
              <p className="mt-4 text-sm text-green-500">↑ 5% from last week</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">Project Quality Score</h3>
              <p className="text-4xl font-extrabold text-blue-800 mt-2">8.5/10</p>
              <p className="text-sm text-blue-600 mt-1">High integrity and verified impact</p>
              <p className="text-xs text-gray-500 mt-3">Assessed using ML-driven anomaly detection.</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Market Trends & State-wise Analysis</h3>
            <div className="h-64 bg-gray-200 flex items-center justify-center rounded-md text-gray-500">
              [Placeholder for Charts, e.g., price trends, projects by state]
            </div>
          </div>
        </main>
        {/* Right Section */}
        <aside className="w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4 ml-6 flex-shrink-0">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Featured Insights</h2>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-700 text-sm hover:shadow-md transition-shadow">
            <p className="font-medium">New Policy Impact Report</p>
            <p className="text-xs text-purple-600 mt-1">Analysis of recent CCTS changes.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-700 text-sm hover:shadow-md transition-shadow">
            <p className="font-medium">Top 5 Projects in Maharashtra</p>
            <p className="text-xs text-purple-600 mt-1">High-quality projects for Q3.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-700 text-sm hover:shadow-md transition-shadow">
            <p className="font-medium">Reforestation Project Spotlight</p>
            <p className="text-xs text-purple-600 mt-1">Deep dive into a successful initiative.</p>
          </div>
        </aside>
      </div>
      
      {/* Footer */}
      <footer className="bg-indigo-700 text-white p-4 text-center text-sm shadow-inner mt-6">
        <div className="container mx-auto flex justify-center space-x-4">
          <Link href="/privacy" className="hover:text-indigo-200">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-indigo-200">Terms of Service</Link>
          <Link href="/help" className="hover:text-indigo-200">Help</Link>
        </div>
        <div className="mt-2 text-indigo-200">© 2023 CarbonPulse Analytics. All rights reserved.</div>
      </footer>
    </div>
  );
}

