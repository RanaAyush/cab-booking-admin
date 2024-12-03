import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const DriverDocsList = () => {
    // Sample data
    const driverdocs = [
        { id: 11, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 12, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Unverified', Status:'Active' },
        { id: 13, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 14, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 15, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Pending' },
        { id: 16, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 17, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 18, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 19, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
        { id: 20, driver: 'Vinod Babu', document: 'Driver\'s Licence', expireDate: '2026-11-18', createdDate: '2024-11-18', verification:'Verified', Status:'Active' },
      ];

    const [users, setUsers] = useState(driverdocs);
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
        <div className="p-6 bg-[#f7f9ff]">
            <div className="flex justify-between px-4 border-b-2 border-blue-100 bg-white">
                <h2 className="text-3xl py-4 font-semibold px-2">Drivers Document List</h2>
                <Link to='/driver/docs/create' className="border border-black bg-white text-xl text-black hover:bg-black hover:text-white rounded-md my-3 flex items-center p-2"> + Add Dcoument</Link>
            </div>
            <div className='bg-white py-4 px-2'>
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
                        <tr className="p-2">
                            <th className="py-6 px-2 border-b-2 border-blue-200">No</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Driver</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Document</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Expire Date</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Created Date</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Verification</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Status</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((driver, index) => (
                            <tr key={driver.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">{driver.driver}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">{driver.document}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">{driver.expireDate}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">{driver.createdDate}</td>
                                <td className={`px-2 py-4 border-b-2 border-blue-200 text-center ${driver.verification==='Unverified'?'text-red-500':'text-green-500'}`}>{driver.verification}</td>
                                <td className={`px-2 py-4 border-b-2 border-blue-200 text-center ${driver.Status==='Pending'?'text-red-500':'text-green-500'}`}>{driver.Status}</td>
                                
                                <td className="px-2 py-4 border-b-2 border-blue-200 text-center ">
                                    <button className="text-blue-600 mx-1 text-xl"><FaRegEdit /></button>
                                    <button className="text-blue-600 mx-1">👁️</button>
                                    <button className="text-red-600 mx-1 text-xl"><MdDelete /></button>
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

export default DriverDocsList;
