import React from "react";
import Form from "../components/Form";

const Register = () => {
  return (
    <div>
      <h1 className="text-white text-3xl">Register Page</h1>
      <Form route="/api/user/register/" method="register" />
    </div>
  );
};

export default Register;
