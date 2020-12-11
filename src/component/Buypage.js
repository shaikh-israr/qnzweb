import React from "react";
import Img from "../Image/img.jpg";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import FullWidthTabs from "../component/Tab";
import { Button } from "@material-ui/core";
import NavBar from "./NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { post } from "jquery";
function Buypage() {
  const [value, setValue] = React.useState(2);
  const [count, setCount] = React.useState(1);
  const [posts, setPost] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:8080/api/book/").then((res) => {
      console.log(res.data.response);
      setPost(res.data.response);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          margin: "50px 20px 50px",
          marginLeft: 90,
        }}
      >
        <div>
          <img
            src={post.image}
            alt=""
            style={{
              display: "block",
              justifyContent: "center",
              height: 390,
              margin: "0px 45px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 15px 0px 48px",
          }}
        >
          <div>
            <h3>101 Panchatantra stroies</h3>

            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                style={{ fontSize: "20px", color: "#ed8a63" }}
              />
            </Box>

            <hr />
          </div>
          <div style={{ color: "grey" }}>
            MRP:{" "}
            <span
              style={{
                textDecoration: "line-through",
              }}
            >
              ₹999
            </span>
            <br />
            Price:{" "}
            <span
              style={{
                fontSize: "24px",
                padding: "0px 0px 8px",
                color: "black",
              }}
            >
              ₹ 101
            </span>
            <br />
            Saving: ₹ 399(40%)
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <Button variant="contained" color="primary">
              Buy on Amzon
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "15px" }}
            >
              Buy on flipkart
            </Button>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <div style={{ font: "14px", padding: "5px" }}>
              <center>
                Easy
                <br />
                Return
              </center>
              <hr />
            </div>
            <div style={{ font: "14px", padding: "5px" }}>
              <center>
                Premium
                <br />
                Packaging
              </center>
              <hr />
            </div>
            <div style={{ font: "14px", padding: "5px" }}>
              <center>
                Superior
                <br />
                Quality
              </center>
              <hr />
            </div>
          </div>
          <div style={{ color: "green" }}>In Stock</div>
          <h7 style={{ marginTop: "10px", color: "gray" }}>Quantity</h7>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input
                type="button"
                value="-"
                style={{ marginLeft: "120px" }}
                disabled={!count || count === 1}
                onClick={() => setCount(count - 1)}
              />
            </div>
            <div>
              <input
                type="text"
                value={count}
                style={{ textAlign: "center", width: "80px" }}
              />
            </div>
            <div>
              <input
                type="button"
                value="+"
                style={{ marginRight: "120px" }}
                onClick={() => setCount(count + 1)}
              />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <FullWidthTabs />
          </div>
          <div style={{ display: "flex", marginTop: 25 }}>
            <div>
              <Button
                style={{
                  padding: "16px",
                  background: "#ed8a63",
                  color: "white",
                  border: "1px solid  #ed8a63 ",
                  marginRight: 50,
                  borderRadius: "20px",
                  outline: "none",
                }}
              >
                Add to cart
              </Button>
            </div>
            <div>
              <Link to="/payment">
                <Button
                  style={{
                    padding: "16px",
                    background: "black",
                    color: "white",
                    marginLeft: 90,
                    borderRadius: "20px",
                    outline: "none",
                  }}
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buypage;
