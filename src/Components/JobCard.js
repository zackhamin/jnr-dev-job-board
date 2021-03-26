import React from 'react'
import { Button, Card, CardContent, Grid, makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';




function JobCard(props) {
    const  { jobTitle, jobSalary, jobLocation, jobDate, jobLink } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 10,
            minHeight:200,
            width:300,
            margin: 15,
            boxShadow: '5px 5px 5px 5px black',
            lineHeight:1.5,
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card} style={{display:'flex', justifyContent:'space-between'}}>
            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <h3>{jobTitle}</h3> 
            <span>£{jobSalary}</span> <br></br>
            <span>Location: {jobLocation}</span> <br></br>
            <span>Posted: {jobDate}</span> <br></br>
             <Button href={jobLink} target='_blank' variant='contained' color='secondary'>Apply</Button>
             </CardContent>
        </Card>
    );
}

export default JobCard
