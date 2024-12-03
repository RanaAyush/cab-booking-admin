import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import userIcon from '../assets/man.png';
import axios from 'axios';

const DriverList = ({ pending }) => {
    // Sample data
    const drivers = [
        { id: 11, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Verified', Status: 'Active' },
        { id: 12, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Unverified', Status: 'Active' },
        { id: 13, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Verified', Status: 'Pending' },
        { id: 14, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Verified', Status: 'Active' },
        { id: 15, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Verified', Status: 'Active' },
        { id: 16, name: 'Vinod Babu', contact: '9874563210', address: 'Rishikesh Dehradun', service: 'premium', lastActive: 'November 17, 2024 4:00 PM', createdAt: 'October 10, 2024 6:16 AM', verification: 'Unverified', Status: 'Pending' },
    ];
    // const [drivers, setDrivers] = useState([]);
    // useEffect(() => {
    //     const fetchDrivers = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8000/api/driver/getalldrivers`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 withCredentials: true,
    //             });
    //             if (response.data.success) {

    //                 setDrivers(response.data.data);

    //             } else {
    //                 alert('Failed to fetch drivers');
    //             }
    //         } catch (error) {
    //             alert('An error occurred while fetching drivers');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchDrivers();
    // }, []);

    var filteredDrivers = drivers;
    if (pending) {
        filteredDrivers = drivers.filter(driver =>
            driver.verification === 'Unverified' || driver.Status === 'Pending'
        );
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [confirmText, setConfirmText] = useState("");
    const [selectedDriverDetails, setSelectedDriverDetails] = useState({});
    const [users, setUsers] = useState(filteredDrivers);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openConfirm = () => setIsConfirmOpen(true);
    const closeConfirm = () => {
        setConfirmText("");
        setIsConfirmOpen(false)
    };

    // useEffect(() => {
    // setDrivers(drivers);
    // }, [drivers]);


    const updateDriver = () => {
        //driver update code will be here.
        closeModal();
    }


    const handleConfirm = async (e) => {
        // try {
        //     const response = await axios.delete(`http://localhost:8000/api/drivers/deletedrivers`, {
        //         data: { _id: selectedDriverDetails._id },
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         withCredentials: true,
        //     });
        //     if (response.data.success) {
        //         setDrivers(prevDrivers => 
        //             prevDrivers.filter(driver => driver._id !== selectedDriverDetails._id)
        //         );
        //     } else {
        //         alert('Failed to fetch driver');
        //     }
        // }catch (error) {
        //     alert('An error occurred while fetching driver');
        // } finally {
        //     closeConfirm();
        // }
        closeConfirm();
    }

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
            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
                    onClick={closeModal} // Close on clicking the background
                >
                    {/* Modal content */}
                    <div
                        className="bg-white rounded shadow-lg absolute top-5 w-1/2"
                        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent modal from closing
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center border-b px-4 py-2">
                            <h2 className="text-xl font-bold">Driver Details</h2>
                            <button
                                className="text-gray-600 hover:text-red-500 text-2xl"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4 space-y-4 flex gap-4">
                            {/* Driver Photo Section */}
                            <div className="flex flex-col items-center w-1/3">
                                <img
                                    src={userIcon} // Replace with the actual photo URL
                                    alt="Driver"
                                    className="w-32 h-32 rounded-full border"
                                />
                                <p className="text-gray-500 text-sm mt-2">Photo of Driver</p>
                            </div>

                            {/* Driver Details */}
                            <div>
                                <div className=' mb-6'>
                                    <h3 className="text-lg font-semibold border-b pb-2">Details</h3>
                                    <ul className="space-y-1 mt-2 grid grid-cols-2">
                                        <li><strong>ID:</strong> {selectedDriverDetails.id}</li>
                                        <li><strong>Name:</strong> {selectedDriverDetails.name}</li>
                                        <li><strong>Contact:</strong> {selectedDriverDetails.contact}</li>
                                        <li><strong>Address:</strong> {selectedDriverDetails.address}</li>
                                        <li><strong>Last Active:</strong> {selectedDriverDetails.lastActive}</li>
                                        <li><strong>Created At:</strong>{selectedDriverDetails.createdAt}</li>
                                        <li><strong>Verification:</strong> {selectedDriverDetails.verification}</li>
                                        <li><strong>Service:</strong> {selectedDriverDetails.service}</li>
                                        <li><strong>Status:</strong> {selectedDriverDetails.Status}</li>
                                    </ul>
                                </div>

                                {/* Uploaded Documents */}
                                <div>
                                    <h3 className="text-lg font-semibold border-b pb-2">Uploaded Documents</h3>
                                    <ul className="space-y-1 mt-2">
                                        <li><strong>Aadhar:</strong> <a href="#" className="text-blue-500 hover:underline">View</a></li>
                                        <li><strong>Driving License:</strong> <a href="#" className="text-blue-500 hover:underline">View</a></li>
                                        <li><strong>RC:</strong> <a href="#" className="text-blue-500 hover:underline">View</a></li>
                                    </ul>
                                </div>
                                <div className="flex p-4 border-t gap-2 justify-center">
                                    <button

                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:bg-green-200"
                                    >
                                        Verify Driver
                                    </button>
                                    <select
                                        className="border rounded px-2 py-1"
                                        defaultValue="Pending"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end p-4 border-t gap-2">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={updateDriver}
                            >
                                Update Driver
                            </button>
                        </div>



                    </div>
                </div>
            )}

            {isConfirmOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
                    onClick={closeConfirm} // Close on clicking the background
                >
                    {/* Modal content */}
                    <div
                        className="bg-white rounded shadow-lg absolute top-auto p-2"
                        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent modal from closing
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center border-b px-4 py-2">
                            <h2 className="text-xl font-bold">Confirm <span className='text-gray-400 font-semibold'>Delete {selectedDriverDetails.name} ? </span></h2>
                            <button
                                className="text-gray-600 hover:text-red-500 text-2xl ml-4"
                                onClick={closeConfirm}
                            >
                                &times;
                            </button>
                        </div>

                        <div className='flex mx-4 flex-col gap-3 p-2'>
                            <label className='block font-semibold text-gray-400'> Write <span className='text-red-500 font-semibold'>Delete</span> to proceed </label>
                            <input
                                placeholder='Delete'
                                type="text"
                                name="confirmText"
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value)}
                                className="border border-gray-300 rounded p-2"
                            />
                        </div>

                        <div className="flex justify-end p-4 border-t gap-2">
                            <button
                                className={` text-white px-4 py-2 rounded ${(confirmText !== 'Delete') ? 'bg-red-200' : 'bg-red-500 hover:bg-red-600'}`}
                                onClick={handleConfirm}
                                disabled={confirmText !== 'Delete'}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                onClick={closeConfirm}
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}

            <div className="flex justify-between px-4 border-b-2 border-blue-100 bg-white">
                <h2 className="text-3xl py-4 font-semibold px-2">Drivers List</h2>
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
                            <th className="py-6 px-2 border-b-2 border-blue-200">Name</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Contact No</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Address</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Service</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Last Active At</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Date Created</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Verification</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Status</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((driver, index) => (
                            <tr key={driver.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.name}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.contact}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.address}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.service}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.lastActive}</td>
                                <td className="px-2 py-4 border-b-2 border-blue-200 ">{driver.createdAt}</td>
                                <td className={`px-2 py-4 border-b-2 border-blue-200 ${driver.verification === 'Unverified' ? 'text-red-500' : 'text-green-500'}`}>{driver.verification}</td>
                                <td className={`px-2 py-4 border-b-2 border-blue-200 ${driver.Status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{driver.Status}</td>

                                <td className="px-2 py-4 border-b-2 border-blue-200 ">
                                    <button onClick={() => {
                                        setSelectedDriverDetails(driver);
                                        openModal();
                                    }} className="text-blue-600 mx-1 text-xl"><FaRegEdit /></button>
                                    <button className="text-red-600 mx-1 text-xl" onClick={()=>{
                                        setSelectedDriverDetails(driver);
                                        openConfirm();
                                    }}><MdDelete /></button>
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

export default DriverList;
