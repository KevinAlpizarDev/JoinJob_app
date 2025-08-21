import React, { useState } from "react";
import confetti from "canvas-confetti";
import axios from "axios";
import Alert from "./main/Alert";

const Modal = ({ courseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id_number: "",
    phone_number: "",
    age: "",
    gender: "male", // Default to male
  });
  const [error, setError] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/enrollments/`,
        { ...formData, course: courseId },
        config
      );
      closeModal();
      confetti({
        particleCount: 217,
        spread: 1000,
        origin: { y: 0.4 * 0.1 },
      });
    } catch (error) {
      setError("You are already enrolled");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-6 mt-6">
      <button
        onClick={openModal}
        className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-extra-rounded shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
      >
        Enroll
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-primary-light rounded-extra-rounded shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
            <h2 className="text-lg font-semibold mb-4">Enrollment Form</h2>

            {error && (
              <Alert
                type="warning"
                title="Warning"
                message={error}
                onClose={() => setError(null)}
              />
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  ID Number
                </label>
                <input
                  type="text"
                  name="id_number"
                  value={formData.id_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your ID number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your age"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
                >
                  Submit Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
