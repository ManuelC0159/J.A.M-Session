import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import NearbyJobCard from "../pages/NearbyjobCard"

const JobSearch= ()=>{
    const {id} = useParams();
    const [searchResults, setSearchResults] = useState(['React'])
    const [page, setPage] = useState(1)
    const navigate = useNavigate();
    const handleSearch = async()=>{
        setSearchResults([])
        try{
            const options ={
                method: "GET",
                url: 'https://jsearch.p.rapidapi.com/search',
                headers: {
                    'content-type': 'application/octet-stream',
                    'X-RapidAPI-Key': 'ebb3fe1ecdmsh8ffecb3cfaa3064p1f6cc2jsn314f610d483d',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                },
                params:{
                    query: id,
                    page: page.toString(),
                }
            };
            const response  = await axios.request(options);
            setSearchResults(response.data.data);
        } catch (error){
            console.log(error)
        }
    };
    useEffect(()=>{
        handleSearch()
    }, [id])
 
    return(
        <div>
            <ul>
                {searchResults.map((info)=>(
                    <li>
                        <NearbyJobCard
                        item={info}
                        key={`nearby-job-${info.job_id}`}
                        //need to add on click to send to job details
                        handleCardClick={()=>{ navigate(`/job-details/${info.job_id}`)

                        }}
                        />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default JobSearch