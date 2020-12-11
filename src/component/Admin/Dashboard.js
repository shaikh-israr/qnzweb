import React from "react";
import NavDrawer from "./NavDrawer";
import { Paper } from "@material-ui/core";
function Dashboard() {
  return (
    <>
      <NavDrawer />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "20px",
          marginLeft: "230px",
        }}
      >
        <Paper
          style={{
            display: "flex",
            height: "90px",
            width: "280px",
            background: "#5052B8",
            color: "white",
          }}
        >
          <h3
            style={{
              margin: "35px",
            }}
          >
            Product
          </h3>
          <div
            style={{
              background: "#6265C0",
              marginRight: "10px",
            }}
          >
            <h3
              style={{
                margin: "35px",
              }}
            >
              120
            </h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            height: "90px",
            width: "280px",
            background: "#585858",
            color: "white",
          }}
        >
          <h3
            style={{
              margin: "35px",
            }}
          >
            Sell
          </h3>
          <div
            style={{
              background: "#6A6A6A",
              marginLeft: "45px",
            }}
          >
            <h3
              style={{
                margin: "35px",
              }}
            >
              450
            </h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            height: "90px",
            width: "280px",
            background: "#EB4E03",
            color: "white",
          }}
        >
          <h3
            style={{
              margin: "35px",
            }}
          >
            Order
          </h3>
          <div
            style={{
              background: "#EA6828",
              marginLeft: "20px",
            }}
          >
            <h3
              style={{
                margin: "35px",
              }}
            >
              450
            </h3>
          </div>
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          marginLeft: "230px",
        }}
      >
        <Paper
          style={{
            width: "32%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Bar Chart</h3>
            <div>pi</div>
          </div>
        </Paper>
        <Paper
          style={{
            width: "32%",
          }}
        >
          chat
        </Paper>
        <Paper
          style={{
            width: "32%",
          }}
        >
          chat
        </Paper>
      </div>
    </>
  );
}

export default Dashboard;
