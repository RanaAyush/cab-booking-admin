import React, { useState, useEffect } from 'react';
import { BsFillEyeFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

const RideRequestList = ({ status }) => {
    // Sample data
    const rideRequest = [
        { id: 11, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 10, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'completed' },
        { id: 12, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 11, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'new' },
        { id: 13, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 12, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'cancelled' },
        { id: 14, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 13, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'cancelled' },
        { id: 15, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 14, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'new' },
        { id: 16, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 16, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'new' },
        { id: 17, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 10, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'new' },
        { id: 18, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 21, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'completed' },
        { id: 19, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 10, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'completed' },
        { id: 20, user: 'aalu tikki', requestedDriver: 'Hari chatni', driver: 'lal chatni', dateTime: 'October 10, 2024 6:16 AM', paymentMethod: 'cash', payment: 'paid', invoice: null, Status: 'pending' },

    ];

    // const [regions, setRegions] = useState([]);
    // useEffect(() => {
    //     const fetchRegions = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8000/api/region/getallregions`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 withCredentials: true,
    //             });
    //             if (response.data.success) {

    //                 setRegions(response.data.data);

    //             } else {
    //                 alert('Failed to fetch regions');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching regions:', error);
    //             alert('An error occurred while fetching regions');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchRegions();
    // }, []);

    const [isRideOpen, setIsRideOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRideDetails, setSelectedRideDetails] = useState({});
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openRide = () => setIsRideOpen(true);
    const closeRide = () => setIsRideOpen(false);

    // useEffect(() => {
    //     setUsers(regions);
    // }, [regions]);

    const applyFilter = () =>{
        let filteredUsers = rideRequest;

        // Apply start date filter
        if (startDate) {
            filteredUsers = filteredUsers.filter(
                (request) => new Date(request.dateTime) >= new Date(startDate)
            );
        }

        // Apply end date filter
        if (endDate) {
            filteredUsers = filteredUsers.filter(
                (request) => new Date(request.dateTime) <= new Date(endDate)
            );
        }

        setUsers(filteredUsers); // Update users with the filtered data
        setCurrentPage(1); // Reset to the first page
        closeModal();
    }


    useEffect(() => {
        if (status === "all") {
            setUsers(rideRequest);
        } else {
            const filtered = rideRequest.filter((request) => request.Status === status);
            setUsers(filtered);
        }
    }, [status]);


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
            {isRideOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
                    onClick={closeRide} // Close on clicking the background
                >
                    {/* Modal content */}
                    <div
                        className="bg-white rounded shadow-lg absolute top-5 w-2/5 p-4"
                        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent modal from closing
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center border-b px-4 py-2">
                            <h2 className="text-xl font-bold">Ride Details</h2>
                            <button
                                className="text-gray-600 hover:text-red-500 text-2xl"
                                onClick={closeRide}
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4 space-y-4 flex gap-4">

                            {/*  Details */}
                            <div>
                                <div className=' mb-6'>
                                    <h3 className="text-lg font-semibold border-b pb-2">Details</h3>
                                    <ul className="space-y-1 mt-2 grid grid-cols-2 gap-x-10">
                                        <li><strong>ID:</strong> {selectedRideDetails.id}</li>
                                        <li><strong>Customer:</strong> {selectedRideDetails.user}</li>
                                        <li><strong>Requested Driver:</strong> {selectedRideDetails.requestedDriver}</li>
                                        <li><strong>Driver:</strong> {selectedRideDetails.driver}</li>
                                        <li><strong>Payment Method:</strong> {selectedRideDetails.paymentMethod}</li>
                                        <li><strong>Payment :</strong> {selectedRideDetails.payment}</li>
                                        <li><strong>Invoice :</strong> {selectedRideDetails.Invoice}</li>
                                        <li><strong>Status :</strong> {selectedRideDetails.Status}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end p-4 border-t gap-2">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={closeRide}
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
            <div className="flex justify-between px-4 border-b-2 border-blue-100 bg-white">
                <h2 className="text-3xl py-4 font-semibold px-2"> <span className='texttransform: capitalize'>{status}</span> Request list</h2>
            </div>
            <div className='bg-white py-4 px-2'>
                <div className='flex justify-between mb-4'>
                    <div className="flex items-center">
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
                    <button onClick={openModal} className='flex gap-2 text-center items-center py-2 px-2 mr-4 text-white bg-orange-500 rounded outline-none hover:bg-orange-600 text-xl'>
                        <FaFilter />
                        <span>Filter</span>
                    </button>

                    {/* Modal */}
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
                            onClick={closeModal} // Close on clicking the background
                        >
                            {/* Modal content */}
                            <div
                                className={`bg-white rounded shadow-lg w-96 absolute top-5
                                    }`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal header */}
                                <div className="flex justify-between items-center border-b px-4 py-2">
                                    <h2 className="text-lg font-bold">Add Filter</h2>
                                    <button
                                        className="text-gray-600 hover:text-red-500 text-2xl"
                                        onClick={closeModal}
                                    >
                                        &times;
                                    </button>
                                </div>

                                {/* Modal body */}
                                <div className="p-4">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="mt-1 p-2 block w-full border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="mt-1 p-2 block w-full border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Modal footer */}
                                <div className="flex justify-end p-4 border-t">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        onClick={applyFilter}
                                    >
                                        Apply Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <table className="w-full border-collapse border border-blue-200">
                    <thead>
                        <tr className="p-2">
                            <th className="py-6 px-2 border-b-2 border-blue-200">No</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">User</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Requested Driver</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Driver</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Date Time</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Payemnt Method</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Payemnt</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Invoice</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Status</th>
                            <th className="py-6 px-2 border-b-2 border-blue-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedUsers.map((request, index) => (
                            <tr key={request.id} className="hover:bg-gray-50 text-center">
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.user}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.requestedDriver}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.driver}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.dateTime}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.paymentMethod}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.payment}</td>
                                <td className="px-1 py-4 border-b-2 border-blue-200 ">{request.invoice}</td>

                                <td className={`px-1 py-4 border-b-2 border-blue-200 ${request.Status === 'cancelled' ? 'text-red-500' : request.Status === 'new' ? 'text-blue-500' : request.Status === 'pending' ? 'text-orange-400' : 'text-green-500'}`}>{request.Status}</td>

                                <td className="px-1 py-4 border-b-2 border-blue-200 ">
                                    <button className="text-blue-600 mx-1 font-semibold text-xl" onClick={()=>{
                                        setSelectedRideDetails(request);
                                        openRide();
                                    }}><BsFillEyeFill/></button>
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

export default RideRequestList;
