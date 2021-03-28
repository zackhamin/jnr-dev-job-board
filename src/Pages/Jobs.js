import axios from 'axios';
import React,  {useState, useEffect} from 'react'
import JobCard from '../Components/JobCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';


function Jobs() {

    const [jobs, setJobs] = useState()
    const [location, setLocation] = useState();


useEffect(() => {
    const fetchJobs = async () => {
        const results = await axios.get('http://localhost:9000/jobs')
        const jobData = results.data.results 
        const jobArray = jobData.map(element => {
            const jobObjectNew = {
                jobTitle: element.jobTitle,
                jobLocation: element.locationName,
                jobSalary: element.minimumSalary ? element.minimumSalary : "Apply for more info",
                jobDate: element.date,
                jobLink: element.jobUrl,
                jobDescription: element.jobDescription ? element.jobDescription : 'Click apply for more info '
            }
            return jobObjectNew
        })
        setJobs(jobArray);
    }
        fetchJobs()
    }, [])

    return (
        <div style={{display:'flex', flexDirection:'column',width:'100%',minHeight:'100%', justifyContent:'center', alignItems:'center',backgroundColor:'whitesmoke'}}>
            <div style={{display:'flex', width:'78%',height:50, justifyContent:'center'}}>
            </div>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',width:'78%',minHeight:'100%', flex:'33.333333%',justifyContent:'center', alignContent:'center'}}>
                {jobs && jobs.map((job) => <JobCard content={job} />)}
            </div>
            <div >
            </div>
        </div>
    )
}

export default Jobs
