import { Paper } from "@material-ui/core";
import React from "react";

function jobAdminPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%vh",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        <Paper
          style={{
            margin: 10,
            display: "flex",
            width: 500,
            height: 500,
            justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "white",
          }}
        >
          Post a job
        </Paper>
      </div>
    </div>
  );
}

export default jobAdminPage;
