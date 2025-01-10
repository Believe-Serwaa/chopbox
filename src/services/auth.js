import { apiClient } from "./config";

export const apiSignup = (payload) => apiClient.post("/user/register", payload);

export const apiLogin = (payload) => apiClient.post("/user/login", payload);

export const apiProfile = (payload) => apiClient.post("/user/profile", payload);

export const apiResetPassword = (payload) => apiClient.post("/user/reset-password", payload);

export const apiUpdatePassword = (payload) => apiClient.put("/user/update-password", payload);

export const apiLogout = () => apiClient.post("/user/logout");
