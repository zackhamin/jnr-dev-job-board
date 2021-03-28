import React, {useState} from 'react'
import { Button, Card, CardContent, Grid, makeStyles, Box, CardActions, CardMedia } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




function JobCard(props) {
    const  { jobTitle, jobSalary, jobLocation, jobDate, jobLink, jobDescription } = props.content;
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles((theme) => ({
        card: {
            borderRadius: 10,
            minHeight:200,
            width:300,
            margin: 15,
            boxShadow: '1px 1px 1px 1px #46a7d5',
            lineHeight:1.3,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
          }, 
          modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #46a7d5',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width:500,
          },     
    }));

    const classes = useStyles();

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Card className={classes.card} style={{display:'flex', justifyContent:'space-between'}}>
            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <h3>{jobTitle}</h3> 
            <span>£{jobSalary}</span> <br></br>
            <span>Location: {jobLocation}</span> <br></br>
            <span>Posted: {jobDate}</span> <br></br>

            <div style={{display:'flex', direction:'row', flexDirection:'row-reverse', justifyContent:'space-evenly'}}>
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

            {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       {jobDescription}
       </Collapse> */}
             <CardActions> <Button href={jobLink} target='_blank' color='primary'>Apply</Button></CardActions>
         </div>
             </CardContent>
        </Card>
    );
}

export default JobCard
