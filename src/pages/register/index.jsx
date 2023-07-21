/*import React, { useEffect, useState } from "react";
import { createAccountStyle } from "./style";
import {
  Breadcrumbs,
  Link,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import ValidationErrorMessage from "../../components/ValidationErrorMessage/index";
import authService from "../../service/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import userService from "../../service/user.service";

const Register = () => {
  const classes = createAccountStyle();
  const materialClasses = materialCommonStyles();
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    if (roleList.length) return;
    getRoles();
  }, [roleList]);

  const getRoles = () => {
    userService.getAllRoles().then((res) => {
      setRoleList(res);
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters at minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must be match."
      )
      .required("Confirm Password is required."),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role is required"),
  });

  const onSubmit = (data) => {
    delete data.confirmPassword;
    authService.create(data).then((res) => {
      navigate("/login");
      toast.success("Successfully registered");
    });
  };
  return (
    <div className={classes.createAccountWrapper}>
      <div className="create-account-page-wrapper">
        <div className="container">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Create an Account</Typography>
          </Breadcrumbs>

          <Typography variant="h1">Login or Create an Account</Typography>
          <div className="create-account-row">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-block">
                    <div className="personal-information">
                      <Typography variant="h2">Personal Information</Typography>
                      <p>
                        Please enter the following information to create your
                        account.
                      </p>
                      <div className="form-row-wrapper">
                        <div className="form-col">
                          <TextField
                            id="first-name"
                            name="firstName"
                            label="First Name *"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <ValidationErrorMessage
                            message={errors.firstName}
                            touched={touched.firstName}
                          />
                        </div>
                        <div className="form-col">
                          <TextField
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id="last-name"
                            name="lastName"
                            label="Last Name *"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                          />
                          <ValidationErrorMessage
                            message={errors.lastName}
                            touched={touched.lastName}
                          />
                        </div>
                        <div className="form-col">
                          <TextField
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id="email"
                            name="email"
                            label="Email Address *"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                          />
                          <ValidationErrorMessage
                            message={errors.email}
                            touched={touched.email}
                          />
                        </div>
                        <div className="form-col">
                          <FormControl
                            className="dropdown-wrapper"
                            variant="outlined"
                          >
                            <InputLabel htmlFor="select">Roles</InputLabel>
                            <Select
                              name="roleId"
                              id={"roleId"}
                              inputProps={{ className: "small" }}
                              onChange={handleChange}
                              className={materialClasses.customSelect}
                              MenuProps={{
                                classes: {
                                  paper: materialClasses.customSelect,
                                },
                              }}
                              value={values.roleId}
                            >
                              {roleList.length > 0 &&
                                roleList.map((role) => (
                                  <MenuItem
                                    value={role.id}
                                    key={"name" + role.id}
                                  >
                                    {role.name}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="login-information">
                      <Typography variant="h2">Login Information</Typography>

                      <div className="form-row-wrapper">
                        <div className="form-col">
                          <TextField
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id="password"
                            type="password"
                            name="password"
                            label="Password *"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                          />
                          <ValidationErrorMessage
                            message={errors.password}
                            touched={touched.password}
                          />
                        </div>
                        <div className="form-col">
                          <TextField
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id="confirm-password"
                            name="confirmPassword"
                            label="Confirm Password *"
                            variant="outlined"
                            inputProps={{ className: "small" }}
                          />
                          <ValidationErrorMessage
                            message={errors.confirmPassword}
                            touched={touched.confirmPassword}
                          />
                        </div>
                      </div>
                      <div className="btn-wrapper">
                        <Button
                          className="pink-btn btn"
                          variant="contained"
                          type="submit"
                          color="primary"
                          disableElevation
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
*/


import React from "react";
import { Button, FormGroup } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
// import FormLabel from "@mui/material";

function Registration() {
  const [role, setRole] = useState("");

  const handlChanges = (event) => {
    setRole(event.target.value);
  };

  const notify = () => {
    toast.success("Registered Successfully", { position: "top-left" });
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: 500,
            height: 300,
            justifyContent: "center",
            "&:hover": {},
          }}
        >
          <Typography
            align="center"
            gutterBottom="true"
            variant="h5"
            component="h2"
          >
            Registration Page
          </Typography>
          <Typography
            align="center"
            gutterBottom="true"
            variant="inherit"
            component="h2"
          >
            Login or create an Account
          </Typography>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormGroup>
                <FormControl>
                  {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                /> */}
                  <InputLabel htmlFor="my-input">First Name*</InputLabel>
                  <Input
                    id="my-input"
                    value={formik.values.firstname}
                    name="firstname"
                    onChange={formik.handleChange}
                  />
                </FormControl>

                {formik.touched.firstname && formik.errors.firstname ? (
                  <div>{formik.errors.firstname}</div>
                ) : null}
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email Address*</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>
                <FormControl>
                  <Button
                    color="warning"
                    variant="contained"
                    size="small"
                    onClick={notify}
                  >
                    Register
                  </Button>
                  <ToastContainer></ToastContainer>
                </FormControl>
              </FormGroup>
            </Grid>

            <Grid item xs={6}>
              <FormGroup>
                <FormControl>
                  {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                /> */}
                  <InputLabel htmlFor="my-input">Last Name*</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Roles"
                    onChange={handlChanges}
                  >
                    <MenuItem value={"Buyer"}>Buyer</MenuItem>
                    <MenuItem value={"Seller"}>Seller</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="my-input">Confirm Password*</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br></br>
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default Registration;
