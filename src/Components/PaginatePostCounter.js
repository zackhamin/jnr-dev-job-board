import { Button } from "@material-ui/core";
import React from "react";

const PaginatePostCounter = ({ jobsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        fontSize: 20,
        justifyContent: "center",
        flexWrap: "wrap",
        minWidth: 200,
        minHeight: 100,
      }}
    >
      {pageNumbers.map(number => (
        <div>
          {" "}
          <Button
            style={{ margin: 5 }}
            variant="contained"
            color="primary"
            onClick={() => paginate(number)}
          >
            {" "}
            {/* <a
            onClick={() => paginate(number)}
            href="!#"
            className="page-link"
            style={{ textDecoration: "none", color: "white" }}
          > */}
            {number}
            {/* </a> */}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PaginatePostCounter;
