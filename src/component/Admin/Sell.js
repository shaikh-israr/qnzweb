import React from "react";
import NavDrawer from "./NavDrawer";
import { Paper, Typography } from "@material-ui/core";
import devlivery from "../../Image/delivery.svg";
function Sell() {
  return (
    <div>
      <NavDrawer />
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "235px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <h3
          style={{
            marginLeft: "10px",
            marginTop: "10px",
          }}
        >
          Sell
          <hr style={{ marginRight: "10px" }} />
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            style={{
              display: "flex",
              background: "#EDEFF2",
              margin: "5px",
              height: "140px",
            }}
          >
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71ip1mxZ8cL.jpg"
                alt=" "
                style={{
                  width: "100px",
                  height: "130px",
                  margin: "5px",
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h5" variant="h5">
                Javascript for beginners
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Price: ₹760
              </Typography>
              <Typography component="h6" variant="h6" color="textSecondary">
                Deliver: 20/12/2020
              </Typography>
            </div>
            <div>
              <img
                src={devlivery}
                alt=" "
                style={{
                  width: "150px",
                  height: "100px",
                  marginLeft: "650px",
                  marginTop: "20px",
                }}
              />
            </div>
          </Paper>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            style={{
              display: "flex",
              background: "#EDEFF2",
              margin: "5px",
              height: "140px",
            }}
          >
            <div>
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--FaVyk1l0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://images-na.ssl-images-amazon.com/images/I/51hFtDvqgfL._SX379_BO1%2C204%2C203%2C200_.jpg"
                alt=" "
                style={{
                  width: "100px",
                  height: "130px",
                  margin: "5px",
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginTop: "5px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h5" variant="h5">
                Python for beginners
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Price: ₹760
              </Typography>
              <Typography component="h6" variant="h6" color="textSecondary">
                Deliver: 25/12/2020
              </Typography>
            </div>
            <div>
              <img
                src={devlivery}
                alt=" "
                style={{
                  width: "150px",
                  height: "100px",
                  marginLeft: "650px",
                  marginTop: "20px",
                }}
              />
            </div>
          </Paper>
        </div>
      </Paper>
    </div>
  );
}

export default Sell;
