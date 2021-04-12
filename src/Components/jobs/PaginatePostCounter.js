import { Button } from "@material-ui/core";
import React, { useState } from "react";

const PaginatePostCounter = ({ jobsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [clickButtonColor, setClickButtonColor] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateNumber = number => {
    paginate(number);
    console.log(number);
  };

  const buttonColor = number => {
    return setClickButtonColor(true);
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
            color={clickButtonColor ? "primary" : "secondary"}
            onClick={() => {
              paginateNumber(number);
              buttonColor(number);
            }}
          >
            {number}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PaginatePostCounter;
