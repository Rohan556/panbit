import React from 'react'
import '../../styles/details.css'

function Details(props) {

    const personalInfo = [
        {
            "heading" : "Username",
            value: props.userDetail.username
        },
        {
            "heading" : "e-mail",
            value: props.userDetail.email
        },
        {
            "heading" : "Phone",
            value: props.userDetail.phone
        },
        {
            "heading" : "Website",
            value: props.userDetail.website
        }
    ]
    

    return (
        <div className='details-container align'>
            <img src={props.userDetail.profilepicture} className="details-image" alt="" />
            <span>{props.userDetail.name}</span>
            {

            }
        </div>
    )
}

export default Details