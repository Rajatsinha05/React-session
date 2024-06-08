import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/slice/productReducer";
const Login = () => {
  let dispatch = useDispatch();
  const ValidationSchema = Yup.object({
    email: Yup.string().email("invalid email address").required("required"),

    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("required "),
  });

  const handleData = (data) => {
    dispatch(LoginUser(data));
    console.log("data", data);
  };

  let formik = useFormik({
    initialValues: {
      password: "",
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

export default Login;
