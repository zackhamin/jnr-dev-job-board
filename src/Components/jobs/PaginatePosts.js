import React from "react";
import JobCard from "../JobCard";
import GridLoader from "react-spinners/RotateLoader";

export default function PaginatePosts({ jobs, loading }) {
  if (loading) {
    return <GridLoader color={"#46a7d5"} loading={loading} size={25} />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "78%",
        minHeight: "100%",
        flex: "33.333333%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {" "}
      {jobs && jobs.map(job => <JobCard content={job} />)}
    </div>
  );
}
