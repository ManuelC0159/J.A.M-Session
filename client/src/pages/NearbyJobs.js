import React, {useState } from 'react'
import {Router, useHistory} from 'react-router-dom'
import useFetch from '../hook/useFetch';
import NearbyJobCard from './NearbyjobCard';

function NearbyJobs() {

    const [selectedJob, setSelectedJob] = useState();
    const handleCardClick = (item)=>{
    setSelectedJob(item.job_id)

    }   
    const {data} = useFetch('search', {
        query: 'React',
        pages:1
    })
    return(
        <div>
            <div>
                <p>Nearby Jobs</p>
            </div>


            <div height ="100px" >
                <ul  size="small">
                <p>{data.map((info) => (
                    <li>test
                        <NearbyJobCard
                        item={info}
                        key={'nearby-job-${info.job_id}'}
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