import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 60,
        marginBottom: 25,
      }}
    >
      <Link to='/' style={{ textDecoration: "none" }}>
        <Button>
          <strong style={{ color: "black" }}>Home</strong>
        </Button>
      </Link>

      <Link to='/Jobs' style={{ textDecoration: "none" }}>
        <Button>
          <strong style={{ color: "black" }}>Jobs</strong>
        </Button>
      </Link>

      <Link to='/DirectJobs' style={{ textDecoration: "none" }}>
        <Button>
          <strong style={{ color: "black" }}>Direct Jobs</strong>
        </Button>
      </Link>

      <Link to='/Resources' style={{ textDecoration: "none" }}>
        <Button>
          <strong style={{ color: "black" }}>Resources</strong>
        </Button>
      </Link>

      <Link to='/Admin' style={{ textDecoration: "none" }}>
        <Button style={{ marginLeft: 100 }}>
          <strong style={{ color: "black" }}>Admin</strong>
        </Button>
      </Link>

      <Link to='/Upload' style={{ textDecoration: "none" }}>
        <Button style={{ marginLeft: 100 }}>
          <strong style={{ color: "black" }}>Upload CV</strong>
        </Button>
      </Link>
    </div>
  );
}

export default menu;
