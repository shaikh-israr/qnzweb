import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import axios from "axios";
import { data } from "jquery";

function LandingCard(props) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/book/").then((res) => {
      console.log(res.data.response);
      setPost(res.data.response);
      console.log(posts);
    });
  }, []);
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      {posts.map((post) => {
        return (
          <Grid item xs={3}>
            <BookCard Price={post.price} title={post.title} src={post.image} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default LandingCard;
