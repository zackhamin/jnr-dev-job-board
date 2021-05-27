import axios from "axios";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextFields from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Select } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const FileUpload = () => {
  const [user, setUser] = useState(" ");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(" ");
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showFailureBanner, setShowFailureBanner] = useState(false);
  const [open, setOpen] = useState(true);

  const backEndAddress = "http://localhost:9000";
  const route = "/cv";

  const selectFileForUpload = fileList => {
    const inputFile = fileList[0];
    setFileName(inputFile.name);
    setFile(inputFile);
  };

  const onFileUpload = e => {
    e.preventDefault();
    const checkRes = res => {
      if (res.status === 200) {
        setShowSuccessBanner(true);
      } else {
        setShowFailureBanner(true);
      }
    };

    // // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("uploaded", file);

    formData.append("uploader", user);
    try {
      if (file && user) {
        console.log("Fired");
        axios
          .post("http://localhost:9000/cv", formData)
          .then(res => {
            checkRes(res);
          })
          .catch(res => {
            setShowFailureBanner(true);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const Alert = props => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid
      style={{ marginTop: 100 }}
      container
      direction='column'
      alignItems='center'
      justify='center'
    >
      <Grid item>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxHeight: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            padding: 15,
          }}
        >
          <Grid item>
            <Typography variant='h3' style={{ padding: 10 }}>
              Upload CV
            </Typography>
            <Grid item>
              <label htmlFor='btn-upload'>
                <input
                  size='small'
                  id='btn-upload'
                  name='btn-upload'
                  style={{ display: "none" }}
                  type='file'
                  onChange={e => selectFileForUpload(e.target.files)}
                />
                <Button
                  id='choose-file-btn'
                  className='btn-choose'
                  variant='outlined'
                  component='span'
                >
                  Choose File
                </Button>
                <span style={{ padding: 5 }}>{fileName && fileName}</span>
              </label>
            </Grid>
          </Grid>
          <form onSubmit={onFileUpload}>
            <Grid container spacing={2} direction='column'>
              <Grid item>
                <TextFields
                  label='Name'
                  variant='outlined'
                  size='small'
                  type='text'
                  onChange={e => setUser(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  id='upload-file-btn'
                  type='submit'
                  variant='contained'
                  color='primary'
                  disabled={user === " " || file === null}
                >
                  Upload
                </Button>
              </Grid>
              {showSuccessBanner && (
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity='success'>
                    File upload successful
                  </Alert>
                </Snackbar>
              )}
              <Grid>
                {showFailureBanner && (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity='error'>
                      File upload unsuccessful
                    </Alert>
                  </Snackbar>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FileUpload;
