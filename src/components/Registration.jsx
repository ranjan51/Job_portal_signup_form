import React from "react";

import { useFormik } from "formik";
import { SignUpSchema } from "./schemas";
import { AiFillContacts } from "react-icons/ai";
import Navbar from "./Navbar";
import Left from "./Left";

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    Confirm_password: "",
    Mobile_number: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        alert("Signed up Successfully")
      },
    });
  console.log(errors);

  return (
    <>
      <div className="left-div">
        <Left />
        <form onSubmit={handleSubmit} className="myform">
          <h2>Find a job & grow your career</h2>
          <div>
            <div className="inputdiv">
              <label htmlFor="name">Full name ⋆</label>
              <br></br>
              <input
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ padding: "17px" }}
              />

              {errors.name && touched.name ? (
                <p className="" style={{ color: "red" }}>
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div id="inputname">
              <label htmlFor="email">Email ID ⋆</label>
              <br></br>
              <input
                className="form-control"
                name="email"
                id="name"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ padding: "17px" }}
              />

              {errors.email && touched.email ? (
                <p className="" style={{ color: "red" }}>
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password">Password ⋆</label>
              <br></br>
              <input
                className="form-control"
                name="password"
                id="name"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ padding: "17px" }}
              />
              {errors.password && touched.password ? (
                <p className="" style={{ color: "red" }}>
                  {errors.password}{" "}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="Confirm_password">Confirm Password ⋆</label>
              <br></br>
              <input
                className="form-control"
                name="Confirm_password"
                id="name"
                type="password"
                placeholder="Confirm Password"
                value={values.Confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ padding: "17px" }}
              />
              {errors.Confirm_password && touched.Confirm_password ? (
                <p className="" style={{ color: "red" }}>
                  {errors.Confirm_password}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="Confirm_password">Mobile number ⋆</label>
              <br></br>
              <input
                className="form-control"
                name="Mobile_number"
                id="name"
                type="tel"
                placeholder="Mobile number"
                value={values.Mobile_number}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ padding: "17px" }}
              />
              {errors.Mobile_number && touched.Mobile_number ? (
                <p className="" style={{ color: "red" }}>
                  {errors.Mobile_number}
                </p>
              ) : null}
            </div>
            <div>
              <label for="formFileLg" class="form-label">
                Upload your resume
              </label>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>

            <center>
              <button name="btn" type="submit" id="btn">
                Register
              </button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
