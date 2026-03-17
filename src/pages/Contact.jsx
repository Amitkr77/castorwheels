"use client";
import React, { useState } from "react";
import {
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline,
  IoStorefrontOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineVerified, MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // ← replace with your actual Google Apps Script URL

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") setStatus("idle");
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required";
    if (!formData.email.trim()) return "Work email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address";
    if (!formData.interest) return "Please select what you're interested in";
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

    if (formData.website.trim()) {
      setStatus("error");
      setErrorMsg("Submission failed. Please try again.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        interest: "",
        message: "",
        website: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative isolate">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/90" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Let's Start a Conversation
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Tell us about your project. We're ready to help with industrial castors, custom solutions, or anything mobility-related.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200/70">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Request a Quote or Information
              </h2>
              <p className="mt-3 text-slate-600">
                Fill in the details below — we'll reply within 1–2 business days.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-7">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Honeypot */}
                <div className="sr-only">
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    I'm Interested In *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select an option</option>
                    <option value="Industrial Castors">Industrial Castors</option>
                    <option value="Medical Castors">Medical / Hospital Castors</option>
                    <option value="Furniture Castors">Furniture & Office Castors</option>
                    <option value="Custom Solutions">Custom / Special Solutions</option>
                    <option value="Other Inquiry">General / Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Your Requirements / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Load capacity • Environment • Quantity • Special requirements..."
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 rounded-lg p-4 text-sm font-medium ${
                      status === "success"
                        ? "bg-green-50 text-green-800"
                        : status === "error"
                        ? "bg-red-50 text-red-800"
                        : "bg-blue-50 text-blue-800"
                    }`}
                  >
                    {status === "loading" && (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    )}
                    {status === "success" && <IoCheckmarkCircleOutline className="text-xl" />}
                    {status === "error" && <IoAlertCircleOutline className="text-xl" />}
                    <span>
                      {status === "loading" && "Sending your message..."}
                      {status === "success" &&
                        "Thank you! We'll get back to you within 1–2 business days."}
                      {status === "error" && (errorMsg || "Failed to send — please try again.")}
                    </span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`
                    flex w-full items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all
                    ${status === "loading" ? "cursor-not-allowed bg-slate-500" : "bg-slate-900 hover:bg-slate-800 active:scale-[0.98]"}
                  `}
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                <MdOutlineVerified className="text-green-600" />
                Your data is secure — we never share it.
              </div>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Get in Touch
                </h3>

                <div className="mt-8 space-y-7">
                  <ContactItem
                    icon={<IoStorefrontOutline className="text-2xl" />}
                    title="Office"
                    content={
                      <>
                        Plot No. 298, 3rd Floor, Sector 10A
                        <br />
                        Gurugram, Haryana - 122001, India
                      </>
                    }
                  />

                  <ContactItem
                    icon={<FaPhoneAlt className="text-xl" />}
                    title="Phone"
                    content={
                      <a href="tel:+918826883046" className="hover:text-blue-600">
                        +91 88268 83046
                      </a>
                    }
                  />

                  <ContactItem
                    icon={<IoMailOutline className="text-2xl" />}
                    title="Email"
                    content={
                      <>
                        <a href="mailto:sales@castorglobal.com" className="hover:text-blue-600">
                          sales@castorglobal.com
                        </a>
                        <br />
                        <a href="mailto:info@castorglobal.com" className="hover:text-blue-600">
                          info@castorglobal.com
                        </a>
                      </>
                    }
                  />

                  <ContactItem
                    icon={<IoTimeOutline className="text-2xl" />}
                    title="Hours"
                    content={
                      <>
                        Mon–Sat: 9:00 AM – 6:00 PM
                        <br />
                        Sunday: Closed
                      </>
                    }
                  />
                </div>
              </div>

              <div className="relative h-64 w-full bg-slate-200 group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/image.png')" }} // ← replace with real map image or use iframe
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href="https://maps.app.goo.gl/FPmrcx5HvcMzmBH1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 font-semibold text-slate-900 shadow-lg backdrop-blur-sm hover:bg-white"
                  >
                    View on Google Maps <MdOpenInNew />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-blue-50 p-6 text-center text-sm">
              <p className="font-medium text-blue-800">
                Need urgent help? Call us directly — we're here Mon–Sat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <div className="mt-1 text-sm text-slate-600">{content}</div>
      </div>
    </div>
  );
}