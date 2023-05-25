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
