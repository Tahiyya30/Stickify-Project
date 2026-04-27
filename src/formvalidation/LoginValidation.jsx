import * as yup from "yup";

const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

export const LoginValidation = yup.object().shape({
  username: yup
    .string()
    .min(5, "Too short")
    .max(20, "Cannot exceed 20 characters")
    .required("This field is required"),
  password: yup
    .string()
    .matches(
      passwordValidation,
      "Must contain upper case, lowercase, special character, number",
    )
    .required("This field is required"),
});
