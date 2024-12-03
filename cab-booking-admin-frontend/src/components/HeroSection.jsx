import React from 'react';
import bike from '../assets/DashboardIcons/bike.png'
import car from '../assets/DashboardIcons/car.png'
import complaint from '../assets/DashboardIcons/complaint.png'
import timer from '../assets/DashboardIcons/timer.png'
import user from '../assets/DashboardIcons/user.png'
import wallet from '../assets/DashboardIcons/wallet.png'
import RecentRequests from './RecentRequests.jsx'
import IncomeChart from './IncomeChart.jsx'
import Footer from './Footer.jsx';

const HeroSection = () => {
  const cardsData = [
    { count: 1750, label: "Total Driver", icon: user },
    { count: 1133, label: "Waiting For Approval", icon: timer },
    { count: 324, label: "Total Rider", icon: bike },
    { count: 2432, label: "Total Rides", icon: car },
    { count: 321, label: "Today Earning", icon: wallet },
    { count: 512, label: "Monthly Earning", icon: wallet },
    { count: 98, label: "Total Earning", icon: wallet },
    { count: 0, label: "Complaints", icon: complaint },
  ];

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
        <RecentRequests/>
        <IncomeChart/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HeroSection;
