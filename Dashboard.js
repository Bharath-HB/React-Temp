import React, { useState } from 'react';
import { User, PlusCircle, LogOut } from 'lucide-react';

const events = [
  { id: 1, title: 'Team Meeting', date: '2024-08-30', time: '10:00 AM' },
  { id: 2, title: 'Project Deadline', date: '2024-09-15', time: '11:59 PM' },
  { id: 3, title: 'Conference Call', date: '2024-09-05', time: '2:00 PM' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('events');
  const today = new Date();
  
  // Function to filter events
  const getFilteredEvents = () => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-6">
        <button
          onClick={() => setActiveTab('events')}
          className={`flex items-center w-full mb-4 p-2 rounded ${
            activeTab === 'events' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
          }`}
          
        ><User className="mr-2" size={20} />
          Dashboard</button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center w-full mb-4 p-2 rounded ${
            activeTab === 'profile' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
          }`}
        >
          <User className="mr-2" size={20} />
          Profile
        </button>
        <button
          onClick={() => setActiveTab('create-event')}
          className={`flex items-center w-full mb-4 p-2 rounded ${
            activeTab === 'create-event' ? 'bg-indigo-600' : 'hover:bg-indigo-600'
          }`}
        >
          <PlusCircle className="mr-2" size={20} />
          Create Event
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, John Doe</h1>
          <button className="flex items-center text-red-600 hover:text-red-700">
            <LogOut className="mr-1" size={20} />
            Sign Out
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Events</h2>
              <div className="space-y-4">
                {getFilteredEvents().map((event) => (
                  <div key={event.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
                    <p className="text-gray-600">{event.date} at {event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Profile</h2>
              <p className="text-gray-600">Profile content goes here.</p>
            </div>
          )}
          {activeTab === 'create-event' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create Event</h2>
              <p className="text-gray-600">Event creation form goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
