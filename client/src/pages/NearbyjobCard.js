import React from 'react'
const PopularJobCard =({item, selectedJob,handleCardClick}) =>{
    return(
        <button
        onClick={()=> handleCardClick(item)}>
            <button >
                <img height="200px" width="200px"src = {item.employer_logo}
                resizeMode = "contain"></img>
            </button>
            <p height="250px" width="250px"numberOfLines ={1}>
                {item.employer_name}
                
            </p>

            <div height="250px" width="250px">
                <p numberOfLines={1}>
                    {item.job_title}
                </p>
            </div>
            <div height="250px" width="250px">
                <p>
                    {item.job_country}
                </p>
            </div>
        </button>
    )
}

export default PopularJobCard