import React from "react";
import { Formik } from "formik";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
} from "reactstrap";

const PersonalForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          age: "",
          email: "",
          gender: "",
          phone: "",
          date: "",
          country: "",
          city: "",
          state: "",
          zip: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            {" "}
            <FormGroup className="mt-4">
              <h1>Sample Form</h1>
              <h5 className="text-left m-4">
                NOTE:All Candidate Must Fillup All Information
              </h5>

              <div className="row d-flex justify-content-around mt-4">
                <div className="col-md-4">
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="enter your name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-4">
                  <Label>Middle Name</Label>
                  <Input
                    type="text"
                    name="middleName"
                    placeholder="enter your name"
                    value={values.middleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-4">
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="enter your name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className=" row d-flex justify-content-between mt-4">
                <div className="col-md-4">
                  <Label>Age</Label>
                  <Input
                    type="number"
                    name="age"
                    placeholder="enter your Age"
                    value={values.age}
                    min={0}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <Label>Phone number</Label>
                  <Input
                    name="phone"
                    type="number"
                    placeholder="enter your "
                    value={values.phone}
                    min={99999999}
                    max={9999999999}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-4">
                  <Label for="exampleDate">Date of Birth</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <Label for="exampleCity">Country</Label>
                  <Input
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-3">
                  <Label for="exampleCity">City</Label>
                  <Input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-3">
                  <Label for="exampleSelect">state</Label>
                  <Input
                    type="select"
                    name="state"
                    id="exampleSelect"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </Input>
                </div>

                <div className="col-md-3">
                  <Label for="exampleZip">Zip</Label>
                  <Input
                    type="number"
                    name="zip"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className=" mt-4 w-50">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="row mt-4">
                <div className="col-md-1">
                  <Label className="">male</Label>
                  <br />
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-1">
                  <Label className="align-right">female</Label>
                  <br />
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <br />

              <div className="row mt-4">
                <div className=" col-md-3">
                  <Label className="float-left">Citizenship</Label>
                  <Input
                    type="file"
                    name="pic"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("pic", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.pic && values.pic && (
                    <img
                      src={URL.createObjectURL(values.pic)}
                      alt="no pic"
                      height="200"
                    />
                  )}
                </div>

                <div className=" col-md-3">
                  <Label className="float-left">+2 Transcip</Label>
                  <Input
                    type="file"
                    name="pic"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("pic", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.pic && values.pic && (
                    <img
                      src={URL.createObjectURL(values.pic)}
                      alt="no pic"
                      height="200"
                    />
                  )}
                </div>

                <div className="col-md-3">
                  <Label className="float-left">+2 Character</Label>
                  <Input
                    type="file"
                    name="pic"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("pic", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.pic && values.pic && (
                    <img
                      src={URL.createObjectURL(values.pic)}
                      alt="no pic"
                      height="200"
                    />
                  )}
                </div>

                <div className=" col-md-3">
                  <Label className="float-left">Bacholer Transcip</Label>
                  <Input
                    type="file"
                    name="pic"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("pic", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.pic && values.pic && (
                    <img
                      src={URL.createObjectURL(values.pic)}
                      alt="no pic"
                      height="200"
                    />
                  )}
                </div>
              </div>

              <div className="mt-4 mb-4">
                <Label>PP Photo</Label>
                <Input
                  type="file"
                  name="pic"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("pic", event.currentTarget.files[0]);
                  }}
                />

                {touched.pic && values.pic && (
                  <img
                    src={URL.createObjectURL(values.pic)}
                    alt="no pic"
                    height="200"
                  />
                )}
              </div>

              <div className="float-left">
                <CustomInput
                  type="switch"
                  id="exampleCustomSwitch2"
                  name="customSwitch"
                  label="Information is correct"
                />
              </div>
              <br />

              <button className=" float-left  mt-4" onClick={handleSubmit}>
                submit
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PersonalForm;
