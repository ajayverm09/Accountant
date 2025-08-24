import React from "react";
import AboutChoose from "../components/AboutChoose";
import { Link } from "react-router-dom";
import AboutForm from "../components/AboutForm";
const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <section className="relative pt-50 bg-gradient-to-b from-transparent via-[#1a1a1a] via-black to-transparent text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-7xl font-bold mb-2">About Us</h1>
          <p className=" mt-5 text-gray-300">
            <Link to="/" className="hover:text-blue-600 hover:underline">
            Home 
            </Link>
            / About Us</p>
        </div>
      </section>

      {/* Leading Legal Company */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <img
          src="https://img.freepik.com/free-photo/businessman-using-digital-icons_53876-108369.jpg"
          alt="Legal"
          className="rounded-lg shadow-lg"
        />

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Leading Legal Company</h2>
          <p className="text-gray-700 mb-4">
            We bring each client a combination of deep industry knowledge and
            expert perspectives from other industries on the challenge at stake,
            to our clients’ fresh perspectives and breakthrough business
            insights. At The Frontline Law Firm PA we will help you by providing
            you with the information you need to make a sound decision about the
            legal professional to support and represent you.
          </p>
          <p className="text-gray-700 mb-6">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="font-semibold text-lg">Just call us. We can answer all your questions</p>
          <p className="text-blue-900 font-bold text-xl mt-2">01548 875 656</p>
        </div>
      </section>
      
      <AboutChoose/>

      {/* About Law & Attorney */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Law & Attorney</h2>
          <p className="text-gray-700 mb-4">
            Lawzon began in 1990, when Tom Lincoln and Randy Gustafson left
            their former firm to start their own partnership. LGC was then known
            as Lincoln & Gustafson, working primarily in insurance defense cases
            for several insurers. As the firm’s reputation for superior work
            grew, so did the firm’s caseload, which led to the firm hiring
            several associates. One of those associates was Tad Caceros, who was
            hired in April of 1997.
          </p>
          <p className="text-gray-700 mb-4">
            Tad proved to be an outstanding associate, and an even better
            partner. Ultimately, the firm became Lincoln, Gustafson & Caceros in
            April of 1998.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Warning of updated legal risks for customers</li>
            <li>Work professionally and quickly</li>
            <li>If you don’t win, we don’t take money.</li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://img.freepik.com/free-photo/lawyer-court_1098-18394.jpg"
            alt="Lawyer"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://img.freepik.com/free-photo/group-lawyers_1098-18389.jpg"
            alt="Lawyers"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://img.freepik.com/free-photo/judge-courtroom_1098-18390.jpg"
            alt="Judge"
            className="rounded-lg shadow-md col-span-2"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <AboutForm/>
    </div>
  );
};

export default AboutUs;
