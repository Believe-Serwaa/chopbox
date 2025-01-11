import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiSignup } from "../services/auth"; // Import signup function from auth.js
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    selectedQuestion: "", // Initially no question selected
    answer: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const navigate = useNavigate(); // Initialize navigate

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data to the console
    console.log("Form Data:", formData); // <-- Added console.log here to inspect form data

    // Check for password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Ensure a security question is selected
    if (formData.selectedQuestion === "") {
      toast.error("Please select a security question.");
      return;
    }

    // Ensure an answer is provided
    if (formData.answer.trim() === "") {
      toast.error("Please provide an answer to your security question.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Make the API request using the `apiSignup` function
      const response = await apiSignup({
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: [formData.address],
        securityQuestion: formData.selectedQuestion,
        answer: formData.answer,
      });

      if (response.status === 201) {
        toast.success("Sign Up successful!", {
          onClose: () => {
            navigate("/login"); // Redirect after toast is closed
          },
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center mb-6 md:mb-0">
          <img
            src="/signup-illus.svg"
            alt="Signup Illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-cyan-600 mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="userName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="userName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12" // Added padding-right
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-6 h-6 mt-8" />
                  ) : (
                    <Eye className="w-6 h-6 mt-8" />
                  )}
                </button>
              </div>
              <div className="relative">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12" // Added padding-right
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-6 h-6 mt-8 text-gray-500" />
                  ) : (
                    <Eye className="w-6 h-6 mt-8 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Number and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Security Question Dropdown */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="selectedQuestion"
              >
                Security Question
              </label>
              <select
                id="selectedQuestion"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.selectedQuestion}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a security question
                </option>
                <option value="What is your pet’s name?">
                  What is your pet’s name?
                </option>
                <option value="What is your mother’s maiden name?">
                  What is your mother’s maiden name?
                </option>
                <option value="What is your favorite childhood movie?">
                  What is your favorite childhood movie?
                </option>
              </select>
            </div>

            {/* Security Answer */}
            {formData.selectedQuestion && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="answer"
                >
                  Your Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  placeholder="Enter your answer"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.answer}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-48 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-cyan-800 transform hover:scale-105 transition duration-300 ${
                  isSubmitting ? "opacity-50" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Signing Up...
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-cyan-600 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
          {/* Back to Home Link */}
          <div className="flex justify-center mt-4">
            <a href="/" className="text-cyan-600 font-medium hover:underline">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
