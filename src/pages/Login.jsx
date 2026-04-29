import { useFormik } from "formik";
import { LoginValidation } from "../formvalidation/LoginValidation.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

// funtion login user to the website if login exists
export default function Login() {
  // access shared state variables and functions
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  // store vlaues of user in form
  const formik = useFormik({
    initialValues: { username: "", password: "" },

    validationSchema: LoginValidation,

    // when form is submitted, run the below function
    onSubmit: (values) => {
      // store users from local storage in users variable
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // find current user if user exists in users variable
      const foundUser = users.find(
        (user) =>
          user.username === values.username &&
          user.password === values.password,
      );

      // if user is found in users (ie. foundUser exists), set login to true to login and set current user to currentUser variable
      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setCurrentUser(foundUser);
        // else alert user with message and stay on login page by exiting from function
      } else {
        alert("Invalid username or password.");
        return;
      }
    },
  });

  return (
    <>
      <div className="login-container">
        {/* heading for login page */}
        <div className="login-heading">
          <h1>Hi there, it's Stickify!</h1>
          <h3>Trying to log in?</h3>
        </div>
        <div className="login-form-container">
          <form onSubmit={formik.handleSubmit}>
            {/* login username container */}
            <div className="login-username-container">
              <label>Enter username</label>
              <input
                className="login-input"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Username"
              ></input>

              {formik.touched.username && formik.errors.username && (
                <p className="formik-errors">*{formik.errors.username}</p>
              )}
            </div>
            {/* login password container */}
            <div className="login-password-container">
              <label>Enter password</label>
              <input
                className="login-input"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
              ></input>

              {formik.touched.password && formik.errors.password && (
                <p className="formik-errors">*{formik.errors.password}</p>
              )}
            </div>

            {/* button to send login form and login user */}
            <div className="login-button-container">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>

            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
