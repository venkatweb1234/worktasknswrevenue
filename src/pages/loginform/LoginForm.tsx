import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  EmptyDiv,
  FormInput,
  FormStyles,
  FromButton,
  LoginStyles,
  NormalFormStyles,
  SpanStyles,
} from "./LoginFormStyles";
import "../../App.css";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        // Simulate an API request (replace with  actual endpoint)
        const response = await fetch("http://localhost:9000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        // Handle successful login
        if (response.status === 200) {
          navigate("/images");
        }
      } catch (error: any) {
        // Handle login error
        console.error("Login error", error.message);
        setError(error.message);
      }
    },
  });

  return (
    <LoginStyles>
      <FormStyles>
        <NormalFormStyles onSubmit={formik.handleSubmit}>
          <SpanStyles>Login</SpanStyles>
          <EmptyDiv>
            <FormInput
              type="text"
              id="username"
              name="username"
              role="textbox"
              placeholder="Enter username"
              className="form-control inp_text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              aria-label="username"
            />
            {formik.touched.username && formik.errors.username && (
              <EmptyDiv>{formik.errors.username}</EmptyDiv>
            )}
          </EmptyDiv>

          <EmptyDiv>
            <FormInput
              type="password"
              id="password"
              name="password"
              role="textbox"
              placeholder="Enter password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              aria-label="password"
            />
            {formik.touched.password && formik.errors.password && (
              <EmptyDiv>{formik.errors.password}</EmptyDiv>
            )}
          </EmptyDiv>

          <FromButton type="submit" role="button" aria-label="Submit Form">
            Login
          </FromButton>
          {error && (
            <p style={{ color: "red" }}>
              Entered credentials are not correct, please enter again!
            </p>
          )}
        </NormalFormStyles>
      </FormStyles>
    </LoginStyles>
  );
};

export default LoginForm;
