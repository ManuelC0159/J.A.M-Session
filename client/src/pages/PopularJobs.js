import React, {useState } from 'react'
import {Router} from 'react-router-dom'
import useFetch from '../hook/useFetch';
import PopularjobCard from "./PopularJobCard"
import PopularJobCard from './PopularJobCard';



function PopularJobs(){
    /*
                        <PopularjobCard
                    item = {item}
                    selectedJob={selectedJob}
                    handleCardClick={handleCardClick}/>
  */
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
                <p>Popular Jobs</p>
                <button>Show All</button>
            </div>


            <div height ="100px" >
                <ul  size="small">
                <p>{data.map((info) => (
                    <li>
                        <PopularJobCard
                        item={info}
                        handleCardClick={handleCardClick}
                        />
                    </li>
                ))}</p>
                </ul>
            </div>
        </div>
    )
}

export default PopularJobs