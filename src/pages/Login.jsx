import { useFormik } from "formik";
import { LoginValidation } from "../formvalidation/LoginValidation.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { login, setLogin, currentUser, setCurrentUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },

    validationSchema: LoginValidation,

    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const foundUser = users.find(
        (user) =>
          user.username === values.username &&
          user.password === values.password,
      );

      if (foundUser) {
        setCurrentUser(foundUser);
        setLogin(true);
      } else {
        alert("Invalid username or password.");
        return;
      }
    },
  });

  return (
    <>
      <div className="login-container">
        <div className="login-heading">
          <h1>Hi there, it's Stickify!</h1>
          <h3>Trying to log in?</h3>
        </div>
        <div className="login-form-container">
          <form onSubmit={formik.handleSubmit}>
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
