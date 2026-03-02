"use client";
import React, { useState } from "react";

import { IoSend } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import {
  MdInventory,
  MdCorporateFare,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    castorCategory: "",
    productCode: "",
    quantity: "",
    loadCapacity: "",
    application: "",
    remarks: "",
    deliveryDate: "",
    file: null,
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    console.log("sending...");
    

    try {
      const res = await fetch("https://caster-backend.onrender.com/api/requestForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-[#0f181a] text-5xl font-black leading-tight tracking-tight mb-4">
          Get a Precise Quote
        </h1>
        <p className="text-[#538893] text-lg max-w-2xl">
          Partner with India's leading industrial castor manufacturer. Provide
          your project details below and our engineering team will provide a
          tailored quote within 24 hours.
        </p>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Personal & Business Profile */}
        <div className="bg-white rounded-xl border border-[#e8f0f2] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2] bg-[#f8fbfb] flex items-center gap-3">
            <MdCorporateFare className="text-primary text-2xl" />
            <h2 className="text-[#0f181a] text-xl font-bold">
              1. Personal &amp; Business Profile
            </h2>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Full Name *
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2 focus:ring-primary focus:border-primary"
                placeholder="John Doe"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Company Name *
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="Enter business name"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Email Address *
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="email@company.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Phone Number *
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="+91 00000-00000"
                type="tel"
                required
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                City / Location *
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="e.g. Mumbai, Maharashtra"
                type="text"
                required
              />
            </div>
          </div>
        </div>

        {/* Product Requirements */}
        <div className="bg-white rounded-xl border border-[#e8f0f2] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2] bg-[#f8fbfb] flex items-center gap-3">
            <MdInventory className="text-primary text-2xl" />
            <h2 className="text-[#0f181a] text-xl font-bold">
              2. Product Requirements
            </h2>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Castor Category
              </label>
              <select
                name="castorCategory"
                value={formData.castorCategory}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
              >
                <option value="">Select category</option>
                <option value="Heavy Duty Industrial">
                  Heavy Duty Industrial
                </option>
                <option value="Medical & Healthcare">
                  Medical & Healthcare
                </option>
                <option value="Furniture & Decor">Furniture & Decor</option>
                <option value="Institutional">Institutional</option>
                <option value="Custom Engineering">Custom Engineering</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Product Code or Name
              </label>
              <input
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="e.g. PU-75-HD"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Required Quantity
              </label>
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="50"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Load Capacity (kg per castor)
              </label>
              <input
                name="loadCapacity"
                value={formData.loadCapacity}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="e.g. 250kg"
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Application & Deployment */}
        <div className="bg-white rounded-xl border border-[#e8f0f2] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#e8f0f2] bg-[#f8fbfb] flex items-center gap-3">
            <MdOutlinePrecisionManufacturing className="text-primary text-2xl" />
            <h2 className="text-[#0f181a] text-xl font-bold">
              3. Application &amp; Deployment
            </h2>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Primary Application / Usage Environment
              </label>
              <textarea
                name="application"
                value={formData.application}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-4"
                placeholder="Describe where the castors will be used..."
                rows="3"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f181a]">
                  Preferred Delivery Date
                </label>
                <input
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f181a]">
                  Technical Drawings / Specs
                </label>
                <label className="flex flex-col items-center justify-center w-full h-14 border-2 border-dashed border-[#d1e2e5] rounded-lg cursor-pointer hover:bg-primary/5 transition-colors">
                  <div className="flex items-center gap-2">
                    <FaFileUpload className="text-primary" />
                    <span className="text-sm text-[#538893]">
                      Upload PDF or DWG
                    </span>
                  </div>
                  <input
                    name="file"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#0f181a]">
                Additional Remarks
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="form-input w-full rounded-lg border-[#d1e2e5] bg-transparent p-2"
                placeholder="Any specific requirements for mounting, braking, or wheel material?"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button
            className="w-full bg-primary hover:bg-[#156e80] text-white py-5 px-8 rounded-xl font-black text-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3"
            type="submit"
          >
            <span>Submit Request for Quotation</span>
            <IoSend />
          </button>
          <p className="text-center mt-4 text-sm text-[#538893]">
            By submitting, you agree to our privacy policy and terms of service.
          </p>
          {status === "loading" && (
            <p className="text-center mt-2 text-blue-500">Submitting...</p>
          )}
          {status === "success" && (
            <p className="text-center mt-2 text-green-500">
              Request submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-center mt-2 text-red-500">
              Failed to submit request.
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
