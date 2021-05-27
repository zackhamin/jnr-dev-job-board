import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const PaginatePostCounter = ({ jobsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateNumber = number => {
    paginate(number);
  };

  const useStyles = makeStyles({
    pageButtonsContainer: {
      display: "flex",
      fontSize: 20,
      justifyContent: "center",
      flexWrap: "wrap",
      minWidth: 200,
      minHeight: 100,
    },
  });
  const classes = useStyles();

  const renderPaginationButton = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [buttonColor, setButtonColor] = useState("primary");
    const onButtonClick = number => {
      paginateNumber(number);
      setButtonColor("secondary");
    };
    return (
      <div className={classes.pageButtonsContainer}>
        {pageNumbers.map(number => (
          <div>
            <Button
              key={number}
              style={{ margin: 5 }}
              variant='contained'
              color={buttonColor}
              onClick={() => {
                onButtonClick(number);
              }}
            >
              {number}
            </Button>
          </div>
        ))}
      </div>
    );
  };

  return <span>{renderPaginationButton()}</span>;
};

export default PaginatePostCounter;
