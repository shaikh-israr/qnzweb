import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  fade,
  Badge,
  Button,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import logo from "../component/Landing/assets/qgn/logo.webp";
import Login from "../component/loginsignup/Login";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  search: {
    display: "flex",
    position: "absolute",
    left: "30%",
    right: "40%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },

  logo: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

function NavBar(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [searchdata, setSearchdata] = React.useState(null);

  const handlChange = (event) => {
    setSearchdata({ searchdata, [event.target.name]: event.target.value });
  };

  const search = (e) => {
    axios.get("http://localhost:8080/api/search/" + searchdata).then((res) => {
      console.warn(res.data);
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <img src={logo} alt=" " style={{ height: 35, marginRight: 20 }} />
          <Typography variant="h5" className={classes.logo}>
            QNZ LEARNING
          </Typography>

          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              name="search"
              onChange={handlChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />

            <Button
              type="submit"
              onClick={(event) => search(event.target.value)}
              style={{
                marginLeft: "23px",
                color: "white",
              }}
            >
              <SearchIcon />
            </Button>
          </div>

          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <IconButton aria-label="app" color="inherit" mt={1}>
              <Badge badgeContent={1} color="secondary"></Badge>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label="app"
            color="inherit"
            onClick={handleClickOpen}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Login open={open} onClose={handleClose} onClick={handleClose} />
    </>
  );
}

export default NavBar;
