import axios from "axios";
import React, { useState, useEffect } from "react";

import PaginatePosts from "../Components/PaginatePosts";
import PaginatePostCounter from "../Components/PaginatePostCounter";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(15);
  const [location, setLocation] = useState();

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
      jobLocation();
    };
    fetchJobs();
  }, []);

  const jobLocation = () => {
    const locationArray = jobs.map(job => {
      const locationObject = {
        location: job.jobLocation,
      };
      return locationObject;
    });
    setLocation(locationArray);
    console.log(locationArray);
  };

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJob = jobs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = number => {
    setCurrentPage(number);
    console.log(number);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <PaginatePosts jobs={currentJob} loading={loading} />
      <PaginatePostCounter
        jobsPerPage={jobsPerPage}
        totalPosts={jobs.length}
        paginate={paginate}
      />
      {/* {jobs && jobs.map(job => <JobCard content={job} />)} */}
    </div>
  );
}

export default Jobs;
