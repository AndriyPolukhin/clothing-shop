import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setUserData({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={userData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          handleChange={handleChange}
          value={userData.password}
          required
        />

        <CustomButton type="submit">Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
