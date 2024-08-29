import React, { useState } from 'react';

function Approval() {
  const [events, setEvents] = useState([
    { id: 1, name: "Event A", status: "pending" },
    { id: 2, name: "Event B", status: "pending" },
    { id: 3, name: "Event C", status: "pending" }
  ]);

  const handleApproval = (id, approved) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, status: approved ? "approved" : "rejected" } : event
    ));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <ul>
          <li className="mb-4"><button className="w-full text-left">Profile</button></li>
          <li className="mb-4"><button className="w-full text-left">Events</button></li>
          <li className="mb-4"><button className="w-full text-left">Approve</button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">
          <div>Welcome, <span className="font-semibold">Admin</span></div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
        </div>

        {/* Approval Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Event Approval</h3>
          <div>
            {events.filter(event => event.status === "pending").length > 0 ? (
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Event Name</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.filter(event => event.status === "pending").map(event => (
                    <tr key={event.id} className="text-center">
                      <td className="py-2">{event.name}</td>
                      <td className="py-2">{event.status}</td>
                      <td className="py-2">
                        <button
                          onClick={() => handleApproval(event.id, true)}
                          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                        >
                          ✓
                        </button>
                        <button
                          onClick={() => handleApproval(event.id, false)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          ✗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No pending events to approve.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approval;
