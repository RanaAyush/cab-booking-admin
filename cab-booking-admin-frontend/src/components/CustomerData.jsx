import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CustomerData = () => {
    // Sample data
    const data = [
        { id: 1, name: 'Jack Sparrow', email: 'jack@gmail.com', contact: '1254567890', lastActive: 'November 13, 2024 7:26 AM', appVersion: '-', createdDate: 'November 13, 2024 7:25 AM', status: 'Active' },
        { id: 2, name: 'Herak Shaabe', email: 'herakshaabe@gmail.com', contact: '+914554667755', lastActive: '-', appVersion: '-', createdDate: 'November 13, 2024 3:28 AM', status: 'Active' },
        { id: 3, name: 'Hans Odiboh', email: 'hansodiboh@gmail.com', contact: '+91883894995', lastActive: '-', appVersion: '-', createdDate: 'November 12, 2024 3:07 PM', status: 'Active' },
        { id: 4, name: 'Gannon Travis', email: 'travis@rider.com', contact: '+919879879877', lastActive: 'November 13, 2024 7:24 AM', appVersion: '-', createdDate: 'November 12, 2024 5:23 AM', status: 'Active' },
        { id: 6, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 7, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 8, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 9, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 10, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 11, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 12, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 13, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 14, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },
        { id: 15, name: 'Rider 2', email: 'r@r.com', contact: '34846401640', lastActive: 'November 11, 2024 7:18 PM', appVersion: '-', createdDate: 'November 11, 2024 7:18 PM', status: 'Active' },

    ];

    const [users, setUsers] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    useEffect(() => {
        const startIdx = (currentPage - 1) * entriesPerPage;
        const endIdx = startIdx + entriesPerPage;
        setDisplayedUsers(users.slice(startIdx, endIdx));
    }, [users, currentPage, entriesPerPage]);

    const totalPages = Math.ceil(users.length / entriesPerPage);

    const handleEntriesChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="p-4 bg-[#f7f9ff]">
            <h1 className='text-3xl py-4 font-semibold border-b-2 border-blue-100 bg-white px-2'>Customer List</h1>
            <div className='bg-white py-4 px-2'>
                <div className="flex items-center gap-4 mb-4">
                    <label className="font-semibold">Status(info)</label>
                    <select className="border p-2 rounded">
                        <option value="All">All users</option>
                        <option value="Active">Active users</option>
                        <option value="Inactive">Inactive users</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </div>

                <div className="flex items-center mb-4">
                    <label className="mr-2">Show</label>
                    <select
                        value={entriesPerPage}
                        onChange={handleEntriesChange}
                        className="border p-2 rounded"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>50</option>
                        <option value={20}>100</option>
                    </select>
                    <label className="ml-2">entries</label>
                </div>

                <table className="w-full border-collapse border border-blue-200">
                    <thead>
                        <tr className="">
                            <th className="py-4 px-2 border-b-2 border-blue-200">No</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Name</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Email</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Contact Number</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Created Date</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Status</th>
                            <th className="py-4 px-2 border-b-2 border-blue-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-50 text-center">
                                <td className="p-2 border-b-2 border-blue-200">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                <td className="p-2 border-b-2 border-blue-200">{user.name}</td>
                                <td className="p-2 border-b-2 border-blue-200">{user.email}</td>
                                <td className="p-2 border-b-2 border-blue-200">{user.contact}</td>
                                <td className="p-2 border-b-2 border-blue-200">{user.createdDate}</td>
                                <td className="p-2 border-b-2 border-blue-200">
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded">{user.status}</span>
                                </td>
                                <td className="p-2 border-b-2 border-blue-200">
                                    <button className="text-blue-600 mx-1 text-xl"><FaRegEdit/></button>
                                    <button className="text-blue-600 mx-1">👁️</button>
                                    <button className="text-red-600 mx-1 text-xl"><MdDelete/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex items-center justify-between p-4'>
                    <div>
                        <p>Showing 10 of 15 entries</p>
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerData;
