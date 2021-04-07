import { Button } from "@material-ui/core";
import React, { useState } from "react";

const PaginatePostCounter = ({ jobsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateNumber = number => {
    paginate(number);
    console.log(number);
  };

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
          <Button
            key={number}
            style={{ margin: 5 }}
            variant="contained"
            color={"primary"}
            onClick={() => paginateNumber(number)}
          >
            {number}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PaginatePostCounter;
