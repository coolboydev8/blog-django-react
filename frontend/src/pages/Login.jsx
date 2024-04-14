import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <div>
      <h1 className="text-white text-3xl">Login Page</h1>
      <Form route="/api/token/" method="login" />
    </div>
  );
};

export default Login;
