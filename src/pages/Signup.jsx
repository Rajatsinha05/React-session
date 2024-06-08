import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { SignupUser } from "../redux/slice/productReducer";
const Signup = () => {
  let dispatch = useDispatch();

  const ValidationSchema = Yup.object({
    username: Yup.string()
      .min(2, "must be at least 2 characters")
      .max(50, "must be less than 50 characters")
      .required("required "),
    email: Yup.string().email("invalid email address").required("required"),
    number: Yup.string()
      .min(5, "number must be 10 digit")
      .max(10, "number must be 10 digit"),

    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("required "),

    role: Yup.string().required("required "),
  });

  const handleData = (data) => {
    dispatch(SignupUser(data));
    console.log("data", data);
  };

  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      number: "",
      role: "",
      email: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (value) => {
      console.log("value", value);
      handleData(value);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <p>{formik.errors.username} </p>
          ) : null}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email} </p>
          ) : null}
        </div>

        <div>
          <input
            type="number"
            name="number"
            placeholder="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.touched.number && formik.errors.number ? (
            <p>{formik.errors.number} </p>
          ) : null}
        </div>

        <div>
          <input
            type="text"
            name="role"
            placeholder="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          />
          {formik.touched.role && formik.errors.role ? (
            <p>{formik.errors.role} </p>
          ) : null}
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password} </p>
          ) : null}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
