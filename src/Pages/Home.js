import React from "react";
import womanCoding from "../images/woman-coding.png";
import jobSearch from "../images/job-search.png";
import interview from "../images/interview.png";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

function Home() {
  const useStyles = makeStyles({
    mainContainer: {
      display: "flex",
      height: "100%vh",
      width: "100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    mainBanner: {
      display: "flex",
      minHeight: 200,
      width: "90%",
      backgroundColor: "#46a7d5",
      flexDirection: "column",
      borderRadius: 15,
      marginBottom: 40,
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 15,
      minHeight: 400,
      width: "90%",
      backgroundColor: "whitesmoke",
    },
    iconCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 250,
      minHeight: 250,
      margin: 20,
      padding: 10,
    },
    iconOneStyle: {
      display: "flex",
      width: 200,
      minHeight: 120,
      fontSize: 20,
      alignItems: "center",
      justifyContent: "left",
    },
    iconOneImage: {
      display: "flex",
      width: 100,
      minHeight: 120,
      alignItems: "center",
      justifyContent: "center",
    },
    iconTwoStyle: {
      display: "flex",
      width: 200,
      minHeight: 120,
      fontSize: 20,
      alignItems: "center",
      justifyContent: "left",
    },
    iconTwoImage: {
      display: "flex",
      width: 200,
      minHeight: 120,
      alignItems: "center",
      justifyContent: "center",
    },
    iconThreeStyle: {
      display: "flex",
      width: 200,
      minHeight: 120,
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    iconThreeImage: {
      display: "flex",
      width: 200,
      minHeight: 120,
      alignItems: "center",
      justifyContent: "left",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Paper elevation={3} className={classes.mainBanner}>
        <h1 style={{ padding: 15 }}>You learn to code, we post the jobs.</h1>
        <strong style={{ color: "whitesmoke", padding: 15 }}></strong>
      </Paper>

      <div className={classes.iconsContainer}>
        <Paper className={classes.iconCard}>
          <div className={classes.iconOneImage}>
            <img height='120' width='100' src={womanCoding} />{" "}
          </div>
          <div className={classes.iconOneStyle}>You learn how to code</div>
        </Paper>

        <Paper className={classes.iconCard}>
          <div className={classes.iconTwoImage}>
            <img height='100' width='100' src={jobSearch} />
          </div>
          <div className={classes.iconTwoStyle}>
            We collect jobs from API feeds of all the top job boards
          </div>
        </Paper>

        <Paper className={classes.iconCard}>
          <div className={classes.iconTwoThreeStyle}>
            <img height='100' width='100' src={interview} />
          </div>
          <div className={classes.iconThreeStyle}>
            Apply and land your dream role
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Home;
