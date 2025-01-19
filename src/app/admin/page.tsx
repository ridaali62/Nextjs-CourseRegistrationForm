"use client"
import React, { useEffect, useState } from 'react';

interface Application {
  name: string;
  email: string;
  course: string;
}

const AdminPortal = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Retrieve applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    setApplications(storedApplications);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{app.name}</td>
                <td className="border px-4 py-2">{app.email}</td>
                <td className="border px-4 py-2">{app.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPortal;
