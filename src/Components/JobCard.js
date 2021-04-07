import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Box,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function JobCard(props) {
  const {
    jobTitle,
    jobSalary,
    jobLocation,
    jobDate,
    jobLink,
    jobDescription,
  } = props.content;
  const [open, setOpen] = useState(false);
  const [raiseShadow, setRaiseShadow] = useState(false);

  const useStyles = makeStyles(theme => ({
    card: {
      borderRadius: 10,
      minHeight: 200,
      width: 300,
      margin: 15,
      boxShadow: "1px 1px #46a7d5",
      lineHeight: 1.3,
    },
    cardRaised: {
      borderRadius: 10,
      minHeight: 200,
      width: 300,
      margin: 15,
      boxShadow: "4px 4px 4px 4px #46a7d5",
      lineHeight: 1.3,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #46a7d5",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 500,
    },
  }));

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mouseOver = () => {
    return setRaiseShadow(true);
  };

  const mouseLeave = () => {
    return setRaiseShadow(false);
  };

  return (
    <Card
      onMouseEnter={() => mouseOver()}
      onMouseLeave={() => mouseLeave()}
      className={raiseShadow ? classes.cardRaised : classes.card}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <h3>{jobTitle}</h3>
        <span>£{jobSalary}</span> <br></br>
        <span>Location: {jobLocation}</span> <br></br>
        <span>Posted: {jobDate}</span> <br></br>
        <div
          style={{
            display: "flex",
            direction: "row",
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
          }}
        >
          <Button type="button" onClick={handleOpen}>
            More Info
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Click apply to read more</h2>
                <p id="transition-modal-description">{jobDescription}</p>
              </div>
            </Fade>
          </Modal>
          <div>
            <CardActions>
              <Button href={jobLink} target="_blank" color="primary">
                Apply
              </Button>
            </CardActions>
          </div>

          <TwitterShareButton
            url={"https://juniordeveloper.careers"}
            quote={"Another great junior developer job!"}
            hashtag="#juniordeveloper.careers"
            className={classes.socialMediaButton}
          >
            <TwitterIcon size={36} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://juniordeveloper.careers"}
            quote={"Another great junior developer job!"}
            hashtag="#juniordeveloper.careers"
            className={classes.socialMediaButton}
          >
            <WhatsappIcon size={36} />
          </WhatsappShareButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard;
