import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "10px",
    backgroundColor: "#f0ff2f5",
  },
  media: {
    height: 140,
  },
});

function BookCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="h8" color="textSecondary" component="p">
            Price: ₹ {props.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/buy">
          <Button size="small" color="primary">
            Buy
          </Button>
        </Link>
        <Button size="small" color="primary">
          add to card
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
