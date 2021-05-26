import axios from "axios";
import React, { useState, useEffect } from "react";
import PaginatePosts from "../Components/jobs/PaginatePosts";
import PaginatePostCounter from "../Components/jobs/PaginatePostCounter";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(15);
  const [locations, setLocations] = useState();
  const [locationInput] = useState();

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJob = jobs.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const results = await axios.get("http://localhost:9000/jobs");
      const jobData = results.data.results;

      const jobArray = jobData.map(element => {
        const jobObjectNew = {
          jobTitle: element.jobTitle,
          jobLocation: element.locationName,
          jobSalary: element.minimumSalary
            ? element.minimumSalary
            : "Apply for more info",
          jobDate: element.date,
          jobLink: element.jobUrl,
          jobDescription: element.jobDescription
            ? element.jobDescription
            : "Click apply for more info ",
        };
        return jobObjectNew;
      });
      setJobs(jobArray);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    jobLocation(jobs);
  }, [jobs]);

  const jobLocation = jobs => {
    const locationArray = jobs.map(job => {
      const locationObject = {
        location: job.jobLocation,
      };
      return locationObject;
    });
    const uniqueLocations = Array.from(
      new Set(locationArray.map(a => a.location))
    ).map(location => {
      return locationArray.find(a => a.location === location);
    });
    setLocations(uniqueLocations);
  };

  const paginate = number => {
    setCurrentPage(number);
  };

  const handleChange = e => {
    const newLocation = e.target.value;
    const setNewLocation = jobs.filter(job => job.jobLocation === newLocation);
    setJobs(setNewLocation);
  };

  const useStyles = makeStyles({
    mainContainer: {
      display: "flex",
      height: "100%vh",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    locationSearch: {
      display: "flex",
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "whitesmoke",
    },
    underLocationText: {
      display: "flex",
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "whitesmoke",
    },
    pageBody: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "whitesmoke",
      flexGrow: 1,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.locationSearch}>
        <FormControl style={{ width: 200 }}>
          <InputLabel id='demo-simple-select-label'>Location</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={locationInput}
            onChange={handleChange}
          >
            {locations &&
              locations.map(location => {
                return (
                  <MenuItem value={location.location}>
                    {location.location}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <span style={{ marginLeft: 40 }}>Page: {currentPage}</span>
      </div>
      <div className={classes.underLocationText}>
        Jobs scraped from available APIs
      </div>
      <div className={classes.pageBody}>
        <PaginatePosts jobs={currentJob} loading={loading} />
        <PaginatePostCounter
          jobsPerPage={jobsPerPage}
          totalPosts={jobs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Jobs;
