import React , {useCallback}from 'react'
import {Router, useParams} from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import useFetch from '../hook/useFetch'
import Company from '../pages/Company'

//the path to get to this file is /job-details/${job.job_id or info.job_id or data.job_id depending on the file}
const JobDetails=() =>  {
  
    const params = useParams();
   
    const{data, refetch} = useFetch('job-details',{
        job_id: params.id,
        extended_publisher_details: 'false'
    });
    console.log(data)
    if(!data){
        return <div>Loading...</div>
    }
    return(
            <div>
                <div>

                 <Link to="/">
                      <button>Home</button>
                 </Link>

                </div>
                <div>
                <Company
                companyLogo = {data?.[0]?.employer_logo}
                jobTitle = {data?.[0]?.job_title}
                companyName = {data?.[0]?.employer_name}
                location = {data?.[0]?.job_country}
                location_city ={data?.[0]?.job_city}
                applyLink={data?.[0]?.job_apply_link}
                jobAbout = {data?.[0]?.job_description}
                employmentType ={data?.[0]?.job_employment_typ}
                googleLink={data?.[0]?.job_google_link}
                location_state={data?.[0]?.job_state}
                
                />
                </div>
            </div>
    )
}

export default JobDetails

/*
                <Company
                companyLogo = {data[0].employer_logo}
                jobTitle = {data[0].job_title}
                companyName = {data[0].employer_name}
                location = {data[0].job_country}
                />
                */