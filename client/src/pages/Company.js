import React from 'react'
const Company = ({companyLogo, jobTittle, companyName, location, applyLink, jobAbout, location_city, employmentType, googleLink, location_state})=>{
    return (
        <div>
            <div>
                <img src={companyLogo}  alt= "IMG ERROR"></img>
            </div>

            <div>
                <p >{jobTittle}</p>
            </div>

            <div>
                <p>{companyName}</p>
            </div>

            <div>
                <a href = {applyLink}>Apply Here</a>
            </div>

            <div>
                <p>{jobAbout}</p>
            </div>

            <div>
                <p>{location_city}, {location_state}, {location}</p>
            </div>


            <div>
                <a href ={googleLink}>Google Link</a>
            </div>
            
            <div>
                <p>{employmentType}</p>
            </div>

        </div>
    )
}

export default Company