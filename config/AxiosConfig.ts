import axios, { InternalAxiosRequestConfig } from "axios";
import { storage } from "./MMKVConfig";

/**
 * Axios instance with default configuration
 */
const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 300000,
});

// Custom interface to extend Axios config with additional properties
interface CustomRequestConfig extends InternalAxiosRequestConfig {
  token?: string;
  isFormData?: boolean;
}

// Request interceptor
apiClient.interceptors.request.use(
  async (config: CustomRequestConfig) => {
    // Initialize params if not present
    config.params = config.params || {};

    // Set default content type
    config.headers["Content-Type"] = "application/json";

    // Add authorization token if provided
    if (config.token) {
      config.headers.Authorization = `Bearer ${config.token}`;
    }

    // Override content type for form data
    if (config.isFormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if error is 404 and remove token from MMKV storage
    if (error.response && error.response.status === 404) {
      storage.delete("token");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
