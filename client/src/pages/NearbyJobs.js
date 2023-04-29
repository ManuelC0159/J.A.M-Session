import React, {useState } from 'react'
import {Router, useNavigate} from 'react-router-dom'
import useFetch from '../hook/useFetch';
import NearbyJobCard from './NearbyjobCard';
//test

function NearbyJobs() {
    const navigate = useNavigate()
    const [selectedJob, setSelectedJob] = useState();
    const handleCardClick = (item)=>{
        setSelectedJob(item.job_id)
        navigate(`/job-details/${item.job_id}`)
    }   
    const {data} = useFetch('search', {
        query: 'React',
        pages:1
    })
    //console.log(data[0].employer_name)

    return(
        <div>
            <div>
                <p>Nearby Jobs</p>
            </div>

            <div height ="100px" >
                <ul  size="small">
                <p>{data.map((info) => (
                    <li>
                        <NearbyJobCard
                        item={info}
                        key={`nearby-job-${info.job_id}`}
                        handleCardClick={handleCardClick}//needs to route to job details page
                        />
                    </li>
                ))}</p>
                </ul>
            </div>
        </div>
    )
}

export default NearbyJobs