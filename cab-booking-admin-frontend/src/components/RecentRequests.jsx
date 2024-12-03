import React from 'react';

const RecentRequests = () => {
  const requests = [
    { id: 1093, rider: "Harry Singh", date: "November 12, 2024 6:47 PM", driver: "-", status: "Cancelled" },
    { id: 1092, rider: "Gannon Travis", date: "November 12, 2024 9:43 PM", driver: "Heather Sanford", status: "Completed" },
    { id: 1091, rider: "Gannon Travis", date: "November 12, 2024 9:30 PM", driver: "-", status: "Cancelled" },
    { id: 1094, rider: "Gannon Travis", date: "November 12, 2024 9:30 PM", driver: "-", status: "Cancelled" },
    { id: 1095, rider: "Rajni Travis", date: "November 12, 2024 9:30 PM", driver: "-", status: "Cancelled" },
    { id: 1096, rider: "Bhushan", date: "November 14, 2024 9:30 PM", driver: "Ranaji", status: "Completed" },
    
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Request</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">ID</th>
            <th className="p-2">Client</th>
            <th className="p-2">Requested Date</th>
            <th className="p-2">Driver</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-b">
              <td className="p-2">{request.id}</td>
              <td className="p-2">{request.rider}</td>
              <td className="p-2">{request.date}</td>
              <td className="p-2">{request.driver}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold ${
                    request.status === "Completed" ? "bg-[#4fd69c] text-white" : " bg-[#f75676] text-white"
                  }`}
                >
                  {request.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentRequests;
