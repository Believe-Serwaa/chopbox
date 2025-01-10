import axios from "axios";

// Get the base URL from environment variables
const baseUrl = import.meta.env.VITE_BASE_URL;

// Retrieve token from localStorage
const token = localStorage.getItem("token");

// Set the Authorization header if a token exists
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Create an Axios instance with the base URL
export const apiClient = axios.create({
  baseURL: baseUrl,
});

// Log the base URL for debugging
console.log("Base URL:", baseUrl);
