import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const isAuthenticated = await authenticate();
        setIsAuthorized(isAuthenticated);
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthorized(false);
      }
    };

    checkAuthorization();
  }, []);

  const authenticate = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      return false;
    }

    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      return await refreshToken();
    } else {
      return true;
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Refresh token error:", error);
      return false;
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
