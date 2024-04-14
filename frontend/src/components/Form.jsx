import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Loading from "./Loading";

const Form = ({ route, pagetype }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const name = pagetype === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true immediately
    setLoading(true);

    // Delay execution for 2 seconds
    setTimeout(async () => {
      try {
        const res = await api.post(route, { username, password });
        if (pagetype === "login") {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        // Set loading to false after the delay
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-2xl my-4">{name} Page</h1>
      <input
        className="w-56 border-0 my-2 h-8 p-2 outline-none"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="w-56 border-0 mb-2 h-8 p-2 outline-none"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {loading && <Loading />}
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        className="w-56 text-white hover:text-purple-700 hover:bg-white border border-1 border-purple-200 h-10"
        type="submit"
      >
        {name}
      </button>
    </form>
  );
};

export default Form;
