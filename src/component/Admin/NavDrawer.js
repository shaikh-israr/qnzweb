import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
  },
}));

function NavDrawer() {
  const classes = useStyle();
  return (
    <>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{
            display: "flex",
            justifyContent: "center",
            width: "220px",
            color: "white",
          }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <div
            style={{
              marginTop: 60,
            }}
          >
            <center>
              <Avatar
                alt=""
                src="data:image/jpeg;base64,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"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <br />
              <Typography>Israr</Typography>
            </center>
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to="/admin/dashbord">
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem>
              </List>
            </Link>
            <Link to="/admin/sell">
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText>Sell</ListItemText>
                </ListItem>
              </List>
            </Link>
            <Link to="/admin/upload">
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <CloudUploadIcon />
                  </ListItemIcon>
                  <ListItemText>Upload</ListItemText>
                </ListItem>
              </List>
            </Link>
            <Link>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingBasketIcon />
                  </ListItemIcon>
                  <ListItemText>Order</ListItemText>
                </ListItem>
              </List>
            </Link>
          </div>
          <div
            style={{
              marginTop: "30%",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default NavDrawer;
