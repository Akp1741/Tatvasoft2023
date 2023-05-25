import { Button } from "@mui/material";
import React, { useState } from "react";

function LoginHook() {
  const [values, setValues] = useState({
    email: "Ayush23@gmail.com",
    password: 4534,
  });

  function updateValues() {
    setValues({ ...values, email: "Ayush23@gmail.com" });
  }

  return (
    <div>
      <h4>LoginHook Example using usestate </h4> <p>E-mail: {values.email}</p>
      <p>Password: {values.password}</p>
      <Button
        variant="contained"
        color="info"
        size="large"
        onClick={updateValues}
      >
        Update
      </Button>
    </div>
  );
}

export default LoginHook;
