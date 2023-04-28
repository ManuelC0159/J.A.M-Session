import React from 'react'

const Company = (companyLogo, jobTittle, companyName, location)=>{
    return (
        <div>
            <p>{companyLogo}</p>
            <p >{jobTittle}</p>
            <p>{companyName}</p>
            <p>{location}</p>
        </div>
    )
}

export default Company