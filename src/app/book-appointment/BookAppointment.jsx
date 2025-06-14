"use client";

import React, { useState } from "react";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [purpose, setPurpose] = useState("Tummy Tuck (Abdominoplasty)");
  const [visitType, setVisitType] = useState("clinic");

  const purposeOptions = [
    "Tummy Tuck (Abdominoplasty)",
    "Liposuction",
    "Facelift",
    "Rhinoplasty",
  ];

  const groupedTimeSlots = {
    Morning: ["09:00 am", "10:00 am", "11:00 am"],
    Afternoon: ["12:00 pm", "01:00 pm", "02:00 pm"],
    Evening: ["03:00 pm", "04:00 pm", "05:00 pm"],
  };

  const handleSubmit = () => {
    alert(`Appointment set for ${selectedDate} at ${selectedTime}
Name: ${name}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}
Visit Type: ${visitType === "clinic" ? "Clinic Visit" : "Online Consultation"}
Notes: ${notes}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
        {/* <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Book Your Appointment
        </h1> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Date Input */}
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Purpose
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {purposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Visit Type */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Visit Type
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="clinic"
                checked={visitType === "clinic"}
                onChange={() => setVisitType("clinic")}
              />
              Clinic Visit
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="online"
                checked={visitType === "online"}
                onChange={() => setVisitType("online")}
              />
              Online Consultation
            </label>
          </div>
        </div>

        {/* Time Slots */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Select Time
          </label>
          {Object.entries(groupedTimeSlots).map(([period, slots]) => (
            <div key={period} className="mb-4">
              <h4 className="text-gray-600 font-medium mb-2">{period}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-lg border text-sm transition font-medium ${
                      selectedTime === time
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <textarea
          placeholder="Additional notes or concerns (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          rows={3}
        />

        {/* Submit */}
        <button
          className="mt-8 w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          onClick={handleSubmit}
          disabled={!email || !name || !phone || !selectedDate}
        >
          Get Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
