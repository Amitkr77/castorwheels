"use client";
import React, { useState } from "react";
import { IoCall, IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const SCRIPT_URL = "https://caster-backend.onrender.com/api/enquiry";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Invalid email format";
    if (!formData.interest) return "Please select your interest";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // ✅ send JSON
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try again or contact us directly.",
      );
    }
  };

  return (
    <section
      className="py-16 md:py-20 bg-linear-to-b from-slate-50 to-white"
      id="enquiry"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          {/* Left – Hero / Benefits */}
          <div
            className="relative min-h-[500px] lg:min-h-auto flex items-center p-10 lg:p-16 text-white overflow-hidden"
            style={{
              backgroundImage: "url('./side_image2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/40" />

            <div className="relative z-10 max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                Why Choose Castor Global?
              </h2>

              <p className="text-blue-100/90 text-lg leading-relaxed mb-10">
                With over two decades of expertise, we deliver premium-quality
                castors engineered for durability, precision, and performance —
                trusted by industries across India and beyond.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-base">
                {[
                  {
                    icon: <AiOutlineGlobal className="text-2xl" />,
                    text: "Global Presence & Expertise",
                  },
                  {
                    icon: <FaRecycle className="text-2xl" />,
                    text: "Sustainable Manufacturing ",
                  },
                  {
                    icon: <MdOutlineEngineering className="text-2xl" />,
                    text: "Custom Solutions Available",
                  },
                  {
                    icon: <RiCustomerService2Fill className="text-2xl" />,
                    text: "24/7 Customer Support",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="p-8 lg:p-12 xl:p-16 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Get in Touch • Request Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">Select category</option>
                  <option value="Industrial Castors">Industrial Castors</option>
                  <option value="Medical Castors">
                    Medical / Hospital Castors
                  </option>
                  <option value="Furniture Castors">
                    Furniture & Office Castors
                  </option>
                  <option value="Custom Solutions">
                    Custom / Special Solutions
                  </option>
                  <option value="Other Inquiry">General / Other Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Your Requirements / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, load requirements, environment, quantity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-y"
                />
              </div>

              {/* Status Messages */}
              {status === "loading" && (
                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                  <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
                  Sending...
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <IoCheckmarkCircle className="text-xl" />
                  Thank you! Your inquiry has been sent. We'll get back to you
                  soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <IoAlertCircle className="text-xl" />
                  {errorMsg || "Failed to send. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className={`
                  w-full py-4 px-6 rounded-lg font-bold text-white text-lg
                  transition-all duration-300 shadow-lg
                  ${
                    status === "loading"
                      ? "bg-slate-500 cursor-not-allowed"
                      : "bg-slate-900 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
                  }
                `}
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
