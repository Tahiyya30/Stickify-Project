import * as yup from "yup";

const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

export const RegisterValidation = yup.object().shape({
  name: yup
    .string()
    .max(15, "Name must not exceed 15 characters")
    .required("*This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("*This field is required"),
  username: yup
    .string()
    .min(5, "Must contain a minimum of 5 characters")
    .max(20, "Cannot exceed 20 characters")
    .required("*This field is required"),
  password: yup
    .string()
    .min(8, "Must be a minimum of  8 characters")
    .matches(
      passwordValidation,
      "Must contain uppercase, lowercase, special character, number",
    )
    .required("*This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("*This field is required"),
});
