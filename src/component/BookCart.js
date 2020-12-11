import {
  Paper,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

const useStyle = makeStyles({
  cart: {
    display: "flex",
    margin: 20,
  },
  cartitems: {
    height: "50%",
    width: "60%",
    marginLeft: "30px",
  },
  checkoutitems: {
    height: "30%",
    width: "30%",
    marginLeft: "30px",
  },
  media: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  cardroot: {
    display: "flex",
    maxWidth: "100%",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  controls: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    flex: "1 0 auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "#FB641B",
    height: "40px",
    width: 150,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "white",
    transition: "all 0.5s",
    boxShadow: "black",
    fontSize: 16,
    "&:hover": {
      backgroundColor: "#FB641B",
      opacity: 1,
      right: 0,
    },
  },
  inbtn: {
    display: "flex",
  },
});
function BookCart() {
  const [count, setCount] = React.useState(1);
  const classes = useStyle();
  return (
    <>
      <NavBar />
      <div className={classes.cart}>
        <Paper className={classes.cartitems}>
          <h4
            style={{
              margin: "1px",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            My Carts({count})
          </h4>
          <hr />
          <Card className={classes.cardroot}>
            <CardMedia
              className={classes.media}
              image="https://api.time.com/wp-content/uploads/2020/03/books-to-read-quarantine-coronavirus-feature-image.jpg"
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  The Book
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  Price: ₹1200
                </Typography>
                <Typography
                  component="h9"
                  variant="subtitle9"
                  style={{
                    display: "flex",
                    marginLeft: "450px",
                  }}
                >
                  Delivery in 7-9 days
                </Typography>
              </CardContent>
              <div className={classes.inbtn}>
                <input
                  type="button"
                  value="-"
                  disabled={!count || count === 1}
                  onClick={() => setCount(count - 1)}
                  style={{
                    display: "block",
                    backgroundColor: "#F1F3F6",
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "20px",
                    padding: "1px 0px 0px",
                    border: "1px #dbdad5",
                    marginLeft: "15px",
                    marginBottom: "10px",
                    width: "25px",
                    borderRadius: "50%",
                  }}
                />
                <input
                  type="text"
                  value={count}
                  style={{
                    width: "25px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                  }}
                />
                <input
                  type="button"
                  value="+"
                  onClick={() => setCount(count + 1)}
                  style={{
                    display: "block",
                    backgroundColor: "#F1F3F6",
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "20px",
                    padding: "1px 0px 0px",
                    border: "1px #dbdad5",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    width: "25px",
                    borderRadius: "50%",
                  }}
                />
                <Typography style={{ marginLeft: "50px" }}>REMOVE</Typography>
              </div>
            </div>
          </Card>

          <Card className={classes.cardroot}>
            <CardMedia
              className={classes.media}
              image="https://static.packt-cdn.com/products/9781788293631/cover/smaller"
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Learn NodeJs By Building 6 Project
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Price: ₹760
                </Typography>
              </CardContent>
            </div>
          </Card>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <Button className={classes.btn}>Place Oder</Button>
          </div>
        </Paper>
        <Paper className={classes.checkoutitems}>
          <h4
            style={{
              margin: "1px",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            PRICE DETIALS
          </h4>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h3"
              style={{ marginLeft: 20, marginBottom: 10, marginTop: 10 }}
            >
              Price ({count} item)
            </Typography>
            <Typography
              component="h3"
              style={{ marginRight: 20, marginBottom: 10, marginTop: 10 }}
            >
              ₹1230
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h3"
              style={{ marginLeft: 20, marginBottom: 10, marginTop: 10 }}
            >
              Delivery Charges
            </Typography>
            <Typography
              component="h3"
              style={{
                marginRight: 20,
                marginBottom: 10,
                marginTop: 10,
                color: "green",
              }}
            >
              Free
            </Typography>
          </div>
          <hr
            style={{ borderTop: "1px dotted", marginLeft: 20, marginRight: 20 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginLeft: 20, marginBottom: 20, font: "18px" }}>
              Total Price
            </h3>
            <h3 style={{ marginRight: 20, marginBottom: 20, font: "18px" }}>
              ₹1254
            </h3>
          </div>
          <hr
            style={{ borderTop: "1px dotted", marginLeft: 20, marginRight: 20 }}
          />
        </Paper>
      </div>
    </>
  );
}

export default BookCart;
