import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const headers = {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : undefined,
    };

    const response = await fetch(`${apiUrl}/${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    return response.json();
  },
};

export default api;