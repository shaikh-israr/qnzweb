import { Button, Paper, TextField, TextareaAutosize } from "@material-ui/core";
import React from "react";
import NavDrawer from "./NavDrawer";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function Upload() {
  const [files, setFiles] = React.useState([]);
  const [upld, setUpld] = React.useState({
    title: null,
    price: null,
    description: null,
    author: null,
    isbn13: null,
    isbn10: null,
    publisher: null,
    edition: null,
    height: null,
    width: null,
    binding: null,
    spinewidth: null,
    pages: null,
    availability: null,
    image: null,
  });

  const handlChange = (event) => {
    setUpld({ ...upld, [event.target.name]: event.target.value });
    console.log(event);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/book/add", upld)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: "200px", height: "150px" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <>
      <NavDrawer />
      <div
        style={{
          display: "flex",
          marginLeft: "235px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Paper
          style={{
            // display: "flex",
            width: "100%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div
              {...getRootProps()}
              {...getInputProps()}
              style={{
                margin: "20px",
                borderStyle: "dashed",
                borderWidth: "3px",
                borderRadius: "5px",
                height: "150px",
                background: "#add8e6",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 auto",
                  padding: "20px",
                  width: "350px",
                }}
              >
                <input
                  type="file"
                  name="image"
                  style={{
                    width: "100%",
                    height: "20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  value={upld.path}
                  onChange={handlChange}
                />
                Drag and drop Image files to upload
              </div>
            </div>
            <div style={{ width: "200px", margin: 30 }}>{images}</div>
            <div
              style={{
                margin: "20px",
              }}
            >
              <TextField
                label="Tittle"
                color="secondary"
                name="title"
                value={upld.title}
                onChange={handlChange}
              />
              <TextField
                label="Price"
                color="secondary"
                name="price"
                value={upld.price}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Author"
                name="author"
                color="secondary"
                value={upld.author}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="isbn10"
                color="secondary"
                name="isbn10"
                value={upld.isbn10}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="isbn13"
                color="secondary"
                name="isbn13"
                value={upld.isbn13}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Publisher"
                color="secondary"
                name="publisher"
                value={upld.publisher}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Edition"
                color="secondary"
                name="edition"
                value={upld.edition}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Height"
                color="secondary"
                name="height"
                value={upld.height}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="width"
                color="secondary"
                name="width"
                value={upld.width}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="binding"
                color="secondary"
                name="binding"
                value={upld.binding}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Spine width"
                color="secondary"
                name="spinewidth"
                value={upld.spinewidth}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="Page"
                color="secondary"
                name="pages"
                value={upld.pages}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextField
                label="availability"
                color="secondary"
                name="availability"
                value={upld.availability}
                onChange={handlChange}
                style={{
                  marginLeft: "8px",
                }}
              />
              <TextareaAutosize
                label="description"
                color="secondary"
                name="description"
                value={upld.description}
                onChange={handlChange}
                placeholder="Product Description "
                style={{
                  marginLeft: "8px",
                  marginTop: "10px",
                  width: "800px",
                  height: "139px",
                }}
              />
            </div>
            <div
              style={{
                marginRightL: "40%",
                marginLeft: "40%",
                marginBottom: "20px",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default Upload;
