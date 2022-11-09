import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ErrorMessageWrapper from "./ErrorMessageWrapper";
import "./FormPage.css";

const initialValues = {
  firstname: "",
  secondname: "",
  dob: "",
  gender: "",
  aadhar: "",
  pancard: "",
  position: "",
  street1: "",
  street2: "",
  city: "",
  state: "",
  country: "",
  zip: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};



const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required!"),

  secondname: Yup.string()
    .min(2, "Too Short!")
    .max(8, "Too Long!")
    .required("Required!"),

  dob: Yup.string().required("Required!"),

  aadhar: Yup.string()
    .required("Required!")
    .matches(
      "^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$",
      "Invalid"
    ),

  position: Yup.string().required("Required!"),

  street1: Yup.string().required("Required!"),
  city: Yup.string().required("Required!"),
  state: Yup.string().required("Required!"),
  country: Yup.string().required("Required!"),

  zip: Yup.string().required("Required!").matches("^[2-9]{6}", "Invalid Zip"),
});


const FormPage = () => {
  return (
    <div className="form-box">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        
      >
        <Form>
          <div className="form-control">
            <label htmlFor="firstname">Firstname</label>
            <Field type="text" id="firstname" name="firstname" />
            <ErrorMessage  name="firstname" >{ErrorMessageWrapper}</ErrorMessage>
          </div>
          
          

          <div className="form-control">
            <label htmlFor="secondname">Secondname</label>
            <Field type="text" id="secondname" name="secondname" />
            <ErrorMessage  name="secondname" >{ErrorMessageWrapper}</ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="dob">Date of Birth</label>
            <Field type="date" id="dob" name="dob" />
            <ErrorMessage  name="dob" >{ErrorMessageWrapper}</ErrorMessage>
          </div>

          <div className="form-control">
            <label>Gender</label>
            <Field type="text" id="gender" name="gender" />
            
          </div>

          <div className="form-control">
            <label>Aadhar number</label>
            <Field type="text" id="aadhar" name="aadhar" />
            <ErrorMessage  name="aadhar" >{ErrorMessageWrapper}</ErrorMessage>
          </div>

          <div className="form-control">
            <label>Pan Card number</label>
            <Field type="number" id="pancard" name="pancard" />
          </div>

          <div className="form-control">
            <label htmlFor="position">Position</label>
            <Field type="text" id="position" name="position" />
            <ErrorMessage  name="position" >{ErrorMessageWrapper}</ErrorMessage>
          </div>

          <div className="address-box">
            <label>Address</label>
            <div className="form-control">
              <Field
                type="text"
                id="street1"
                placeholder="Street#1"
                name="street1"
              />
              <ErrorMessage  name="street1" >{ErrorMessageWrapper}</ErrorMessage>
            </div>

            <div className="form-control">
              <Field
                type="text"
                id="street2"
                placeholder="Street#2"
                name="street2"
              />
            </div>

            <div className="form-control">
              <Field type="text" id="city" placeholder="City" name="city" />
              <ErrorMessage  name="city" >{ErrorMessageWrapper}</ErrorMessage>
            </div>
            <div className="form-control">
              <Field type="text" id="state" placeholder="State" name="state" />
              <ErrorMessage  name="state" >{ErrorMessageWrapper}</ErrorMessage>
            </div>

            <div className="form-control">
              <Field
                type="text"
                id="country"
                placeholder="Country"
                name="country"
              />
              <ErrorMessage  name="country" >{ErrorMessageWrapper}</ErrorMessage>
            </div>
            <div className="form-control">
              <Field type="number" id="zip" placeholder="Zip" name="zip" />
              <ErrorMessage  name="zip" >{ErrorMessageWrapper}</ErrorMessage>
            </div>
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormPage;
