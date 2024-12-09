import React, { useEffect, useState } from 'react';
import bike from '../assets/DashboardIcons/bike.png'
import car from '../assets/DashboardIcons/car.png'
import complaint from '../assets/DashboardIcons/complaint.png'
import voucher from '../assets/DashboardIcons/voucher.png'
import user from '../assets/DashboardIcons/user.png'
import wallet from '../assets/DashboardIcons/wallet.png'
import salary from '../assets/DashboardIcons/salary.png'
import profit from '../assets/DashboardIcons/profit.png'
import RecentRequests from './RecentRequests.jsx'
import IncomeChart from './IncomeChart.jsx'
import Footer from './Footer.jsx';
import axios from 'axios';
import BACKEND_API_ENDPOINT from '../utils/constants.js';

const HeroSection = () => {
  const [cardsData, setCardsData] = useState([
    { count: 1750, label: "Total Driver", icon: user },
    { count: 324, label: "Total Customer", icon: bike },
    { count: 2432, label: "Total Rides", icon: car },
    { count: 1133, label: "Total Coupons", icon: voucher },
    { count: 321, label: "Today Earning", icon: salary },
    { count: 512, label: "Monthly Earning", icon: wallet },
    { count: 98, label: "Total Earning", icon: profit },
    { count: 0, label: "Complaints", icon: complaint },
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          customerResponse,
          driverResponse,
          couponResponse,
          complaintResponse,
          rideResponse,
        ] = await Promise.all([
          axios.get(`${BACKEND_API_ENDPOINT}/api/customer/count`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }),
          axios.get(`${BACKEND_API_ENDPOINT}/api/driver/count`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }),
          axios.get(`${BACKEND_API_ENDPOINT}/api/coupon/count`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }),
          axios.get(`${BACKEND_API_ENDPOINT}/api/complaint/count`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }),
          axios.get(`${BACKEND_API_ENDPOINT}/api/rides/count`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }),
        ]);

        // Extract the counts from responses
        const customerCount = customerResponse.data.count || 0;
        const driverCount = driverResponse.data.count || 0;
        const couponCount = couponResponse.data.count || 0;
        const complaintCount = complaintResponse.data.count || 0;
        const rideCount = rideResponse.data.count || 0;

        // Update the cardsData state
        setCardsData((prevCardsData) =>
          prevCardsData.map((card) => {
            switch (card.label) {
              case "Total Customer":
                return { ...card, count: customerCount };
              case "Total Driver":
                return { ...card, count: driverCount };
              case "Total Coupons":
                return { ...card, count: couponCount };
              case "Complaints":
                return { ...card, count: complaintCount };
              case "Total Rides":
                return { ...card, count: rideCount };
              default:
                return card; // Keep other cards unchanged
            }
          })
        );
      } catch (error) {
        console.error('Error fetching Customers:', error);
        alert('An error occurred while fetching Customers');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-2 bg-[#f7f9ff]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div className="text-primary">
              <img src={card.icon} alt={card.label} className="w-12 h-12" />
            </div>
            <div>
              <h5 className="font-semibold text-xl">{card.count}</h5>
              <p className="text-gray-500">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        <RecentRequests />
        <IncomeChart />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
