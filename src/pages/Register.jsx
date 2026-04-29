import Login from "./Login.jsx";
import "./Register.css";
import { useFormik } from "formik";
import { RegisterValidation } from "../formvalidation/RegisterValidation.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// function to register first time user
export default function Register() {
  // access shared state variables
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  // check if state has changed from true to false when login changes
  useEffect(() => {
    console.log("login updated:", currentUser);
  }, [currentUser]);

  // store initial values of register form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: RegisterValidation,

    // on submission of form run the below function
    onSubmit: (values) => {
      // get users from local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // check if user exists using email and username and save their user information if they do
      const existingUser = users.find(
        (user) =>
          user.email === values.email || user.username === values.username,
      );

      // if user does exist, tell user to login instead of registering
      if (existingUser) {
        alert("Account already exists. Please login.");
        return;
      }

      //take the values object and push it to the users array
      users.push(values);

      // update local storage with new users array
      localStorage.setItem("users", JSON.stringify(users));

      // set login to true so users can login to dashboard
      setCurrentUser(values);
      localStorage.setItem("currentUser", JSON.stringify(values));

      console.log(users);
    },
  });

  return (
    <>
      <div className="register-container">
        <div className="register-heading">
          <h1>Stickify, the place to be!</h1>
          <h3>Register now!</h3>
        </div>
        <div className="register-form-container">
          <form onSubmit={formik.handleSubmit}>
            {/* register name container */}
            <div className="name-register-container">
              <label>Enter name</label>
              <input
                className="register-input"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Name"
              ></input>

              {formik.touched.name && formik.errors.name && (
                <p className="formik-errors">{formik.errors.name}</p>
              )}
            </div>

            {/* =========================================================================================== */}
            {/* register email container */}
            <div className="email-register-container">
              <label>Enter email</label>
              <input
                className="register-input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
              ></input>

              {formik.touched.email && formik.errors.email && (
                <p className="formik-errors">{formik.errors.email}</p>
              )}
            </div>
            {/* =========================================================================================== */}
            {/* register username container */}
            <div className="username-register-container">
              <label>Enter username</label>
              <input
                className="register-input"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Username"
              ></input>

              {formik.touched.username && formik.errors.username && (
                <p className="formik-errors">{formik.errors.username}</p>
              )}
            </div>
            {/* =========================================================================================== */}
            {/* register password container */}
            <div className="password-register-container">
              <label>Enter password</label>
              <input
                className="register-input"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
              ></input>

              {formik.touched.password && formik.errors.password && (
                <p className="formik-errors">{formik.errors.password}</p>
              )}
            </div>
            {/* =========================================================================================== */}
            {/* register confirmPassword container */}
            <div className="confirm-password-register-container">
              <label>Confirm password</label>
              <input
                className="register-input"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm password"
              ></input>

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="formik-errors">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            {/* =========================================================================================== */}

            <div className="register-button-container">
              <button className="register-button" type="submit">
                Register
              </button>
            </div>
            <p>
              Have an account already? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
