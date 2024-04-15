import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col">
      <Form route="/api/token/" pagetype="login" />
      <p className="flex my-2 justify-center items-center text-xs text-white">
        Haven't got account? Register{" "}
        <Link
          className="flex mx-1 underline cursor-pointer hover:no-underline"
          to="/register"
        >
          here
        </Link>
      </p>
    </div>
  );
};

export default Login;
