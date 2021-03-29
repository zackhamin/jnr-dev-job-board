import React from "react";
import JobCard from "./JobCard";

export default function PaginatePosts({ jobs, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
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
