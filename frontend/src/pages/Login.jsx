import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <div>
      <Form route="/api/token/" pagetype="login" />
    </div>
  );
};

export default Login;
