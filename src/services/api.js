
import axios from "axios";
import { clearAccessToken } from "./authToken";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const userAPI = {
    register: (data) => api.post("/user/register", data),
    verifyOTP: (data) => api.post("/user/verify-otp", data),
    login: (data) => api.post("/user/login", data),
    refreshToken: () => api.get("/user/refresh-token"),
    logout: async () => {
        try {
            return await api.get("/user/logout");
        } finally {
            clearAccessToken();
        }
    },

    logoutAll: async () => {
        try {
            return await api.get("/user/logout-all");
        } finally {
            clearAccessToken();
        }
    },
    profile: () => api.get("/user/profile")
};

export const captainAPI = {
    register: (data) => api.post("/captain/register", data),
    verifyOTP: (data) => api.post("/captain/verify-otp", data),
    login: (data) => api.post("/captain/login", data),
    refreshToken: () => api.get("/captain/refresh-token"),
    logout: async () => {
        try {
            return await api.get("/captain/logout");
        } finally {
            clearAccessToken();
        }
    },

    logoutAll: async () => {
        try {
            return await api.get("/captain/logout-all");
        } finally {
            clearAccessToken();
        }
    },
    profile: () => api.get("/captain/captain-profile")
};

export default api;
