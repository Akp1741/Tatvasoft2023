import React from "react";
import { useFormik } from "formik";
import { FormHelperText, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ListItem from "@mui/material";
import * as yup from "yup";
import { toast, useToast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const validationSchema = yup.object({
  Username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Password must be 5 character at minimum")
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password does not match"
    )
    .required("confirm password is required"),
});
function LoginForm() {
  const formik = useFormik({
    initialValues: {
      Username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      toast.success("Logged in successfully");
    },
    validationSchema: validationSchema,
  });

  //   const notify = () => {
  //     toast.success("Logged in Successfully");
  //   };

  return (
    <div>
      <Typography variant="h4" component="h2">
        <b> Login Form</b>
      </Typography>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="Username"
              label="Username"
              name="Username"
              variant="outlined"
              margin="normal"
              value={formik.values.Username}
              onChange={formik.handleChange}
              error={formik.touched.Username && Boolean(formik.errors.Username)}
            />
            <br></br>
            {formik.touched.Username && formik.errors.Username}
            <br></br>
            <TextField
              id="email"
              label="email"
              name="email"
              variant="outlined"
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <br></br>
            {formik.touched.email && formik.errors.email}
            <br></br>
            <TextField
              id="password"
              label="password"
              type={"password"}
              name="password"
              variant="outlined"
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <br></br>
            {formik.touched.password && formik.errors.password}
            <br></br>
            <TextField
              id="confirmpassword"
              label="confirm password"
              name="confirmpassword"
              type={"password"}
              variant="outlined"
              margin="normal"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmpassword &&
                Boolean(formik.errors.confirmpassword)
              }
            />
            <br></br>
            {formik.touched.confirmpassword && formik.errors.confirmpassword}
            <br></br>
            <Button
              variant="contained"
              type="submit"
              color="warning"
              size="large"
            >
              {" "}
              Submit{" "}
            </Button>
            <ToastContainer />
          </form>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default LoginForm;
