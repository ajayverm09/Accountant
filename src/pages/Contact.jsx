// src/pages/Contact.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import ContactDiv from "../components/ContactDiv";
import Map from "../components/Map";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="mt-2 text-white/70">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>{" "}
            / <span className="text-white">Contact</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <form className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-4 rounded">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>132 New York Street NY</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-4 rounded">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>01546 875 656 , 01546 985 989</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-4 rounded">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>info@example.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-4 rounded">
                <FaClock />
              </div>
              <div>
                <p className="font-semibold">Working Hours:</p>
                <p>Mon to Sat – 9:00am to 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />

      <ContactDiv />
    </div>
  );
};

export default Contact;
