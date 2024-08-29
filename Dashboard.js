import React, { useState } from 'react';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = {
    5: ["Event A", "Event B"],
    12: ["Event C"],
    20: ["Event D", "Event E", "Event F"]
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <ul>
          <li className="mb-4"><button className="w-full text-left">Profile</button></li>
          <li className="mb-4"><button className="w-full text-left">Events</button></li>
          <li className="mb-4"><button className="w-full text-left">Approve</button></li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <div>Welcome, <span className="font-semibold">Admin</span></div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Calendar</h3>
          <div className="grid grid-cols-7 gap-4">
            {[...Array(30).keys()].map(day => (
              <div
                key={day}
                className="p-4 border rounded-lg text-center cursor-pointer hover:bg-blue-100"
                onMouseEnter={() => setSelectedDate(day + 1)}
                onMouseLeave={() => setSelectedDate(null)}
              >
                {day + 1}
              </div>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h4 className="font-semibold">Events on Day {selectedDate}:</h4>
            <ul>
              {events[selectedDate] ? events[selectedDate].map((event, index) => (
                <li key={index}>{event}</li>
              )) : <li>No events</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
