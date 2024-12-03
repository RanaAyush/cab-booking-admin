import React, { useState } from "react";

const AddDriverDocsForm = () => {
  const [formData, setFormData] = useState({
    driver: "",
    document: "",
    expireDate: "",
    verification: "",
    file:null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your API call or form submission logic here
  };

  return (
    <div className="py-8 px-4 bg-[#f7f9ff]">
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm space-y-4">
        <div className="px-4 border-b-2 border-blue-100 bg-white">
            <h2 className="text-3xl py-4 font-semibold px-2">Add Driver Documents</h2>
        </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Code */}

        <div className="flex flex-col">
          <label className="font-medium">
            Select Driver <span className="text-red-500">*</span>
          </label>
          <select
            required
            name="driver"
            value={formData.driver}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Select</option>
            <option value="All">hariOm</option>
            <option value="Fast">Ganna Singh </option>
            <option value="Region">Region Surdeep</option>
            <option value="Service">Akshay Kumar</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium">
            Select Document<span className="text-red-500">*</span>
          </label>
          <select
          required
            name="document"
            value={formData.document}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Select</option>
            <option value="licence">Driver's Licence</option>
            <option value="roadTax">Road Tax </option>
            <option value="adharCard">Adhar Card</option>
            <option value="registrationCertificate">Vehicle Registration Certificate</option>
            <option value="insuraceCertificate">Insurance Certificate</option>
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="font-medium">Expire Date</label>
          <input
          required
            type="date"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">
            Verification<span className="text-red-500">*</span>
          </label>
          <select
          required
            name="verification"
            value={formData.verification}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="Fast">Approved </option>
            <option value="All">Pending</option>
            <option value="Region">Rejected</option>
          </select>
        </div>

        <div className="flex flex-col">
            <label className="font-medium">Upload Document <span className="text-red-500">*</span></label>
            <input
            required
              type="file"
              name="file"
              value={formData.file}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>
        
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 relative left-5 bottom-5 rounded hover:bg-green-600 transition-colors"
      >
        Save
      </button>
    </form>
    </div>
  );
};

export default AddDriverDocsForm;
