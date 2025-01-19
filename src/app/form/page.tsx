"use client"
import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve existing applications from localStorage
    const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');

    // Add new application to the list
    const updatedApplications = [...existingApplications, formData];

    // Save updated list back to localStorage
    localStorage.setItem('applications', JSON.stringify(updatedApplications));

    alert('Application submitted successfully!');
    setFormData({ name: '', email: '', course: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">Course Application</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select a course</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </form>
  );
};

export default ApplicationForm;
