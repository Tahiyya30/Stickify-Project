import * as yup from "yup";

export const UpdateEventValidation = yup.object().shape({
  event: yup
    .string()
    .min(3, "Event title too short")
    .max(40, "Event title cannot exceed 40 characters")
    .required("This field is required"),
  eventType: yup
    .string()
    .oneOf(["personal", "business"], "Please enter Business or Personal")
    .required("This field is required"),
  description: yup
    .string()
    .max(60, "Event description cannot exceed 60 characters"),
  location: yup.string().max(30, "Location cannot exceed 30 characters"),
  priority: yup
    .string()
    .oneOf(["high", "medium", "low"], "Please enter High, Medium or Low")
    .required("This field is required"),
  date: yup.date().required("This field is required"),
  time: yup.string().required("This field is required"),
});
