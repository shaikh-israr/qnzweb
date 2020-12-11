import React from "react";
import {
  Button,
  Paper,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
} from "@material-ui/core";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Hero from "../Landing/assets/qgn/heroImage.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props) => {
  function login() {
    console.log("No errors, submit callback called!");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      style={{
        width: "",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Paper
            style={{
              backgroundColor: "#1F285A",
              margin: "0",
              width: "270px",
              height: "310px",
            }}
          >
            <img src={Hero} alt="hi" style={{ width: "270", height: "100%" }} />
          </Paper>
        </div>
        <div>
          <Paper>
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <center>
                  <DialogTitle id="form-dialog-title">Login</DialogTitle>
                </center>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    variant="outlined"
                    color="primary"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    autoComplete="off"
                    name="email"
                    className=""
                    onChange=""
                    value=""
                    required
                  />
                </DialogContent>
                <DialogContent>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    color="primary"
                    id="Password"
                    label="Password"
                    type="password"
                    fullWidth
                    name="password"
                    className=""
                    onChange=""
                    value=""
                    required
                  />
                </DialogContent>
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{
                      width: 250,
                      marginBottom: 20,
                    }}
                  >
                    Login
                  </Button>
                </center>
                <center>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      color="primary"
                      onClick={props.onClick}
                      style={{
                        width: 250,
                        marginBottom: 20,
                      }}
                    >
                      I have alredy account
                    </Button>
                  </Link>
                </center>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </Dialog>
  );
};

export default Login;
