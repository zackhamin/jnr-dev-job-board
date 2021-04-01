import axios from "axios";
import React, { useState, useEffect } from "react";
import PaginatePosts from "../Components/PaginatePosts";
import PaginatePostCounter from "../Components/PaginatePostCounter";
import {
  FormControl,
  Paper,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(15);
  const [locations, setLocations] = useState();
  const [locationInput, setLocationInput] = useState();

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
    console.log("Executed", jobs);
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

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJob = jobs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = number => {
    setCurrentPage(number);
  };
  const handleChange = e => {
    console.log("fired");
    const newLocation = e.target.value;
    const setNewLocation = jobs.filter(job => job.jobLocation === newLocation);
    setJobs(setNewLocation);
  };

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
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        <FormControl style={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={locationInput}
            onChange={handleChange}
          >
            {locations &&
              locations.map(location => {
                return (
                  <MenuItem value={location.location}>
                    {" "}
                    {location.location}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
      {/* <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          height: 800,
        }}
      >
        <strong>Location:</strong>
        {location &&
          location.map(locations => {
            return (
              <p style={{ padding: 5, lineHeight: 0.1 }}>
                {locations.location}
              </p>
            );
          })}
      </Paper> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          flexGrow: 1,
        }}
      >
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
