import React from "react";
import JobCard from "../JobCard";
import GridLoader from "react-spinners/RotateLoader";
import { makeStyles } from "@material-ui/core/styles";

export default function PaginatePosts({ jobs, loading }) {
  const useStyles = makeStyles({
    jobCardLayout: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "78%",
      minHeight: "100%",
      flex: "33.333333%",
      justifyContent: "center",
      alignContent: "center",
    },
  });

  const classes = useStyles();

  if (loading) {
    return <GridLoader color={"#46a7d5"} loading={loading} size={25} />;
  }

  return (
    <div className={classes.jobCardLayout}>
      {" "}
      {jobs && jobs.map(job => <JobCard content={job} />)}
    </div>
  );
}
