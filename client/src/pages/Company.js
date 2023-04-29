import React from 'react'
const Company = ({companyLogo, jobTittle, companyName, location})=>{
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
                <p>{location}</p>
            </div>

        </div>
    )
}

export default Company