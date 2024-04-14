import React from "react";
import Form from "../components/Form";

const Register = () => {
  return (
    <div>
      <Form route="/api/user/register/" pagetype="register" />
    </div>
  );
};

export default Register;
