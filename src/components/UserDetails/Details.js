import React from 'react'
import '../../styles/details.css'
import ShowDetails from '../ShowDetails'

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
    

    const companyInfo = [
        {
            "heading" : "Name",
            value: props.userDetail.company.name
        },
        {
            "heading" : "catchphrase",
            value: props.userDetail.company.catchPhrase
        },
        {
            "heading" : "bs",
            value: props.userDetail.company.bs
        },
    ]
    return (
        <div className='details-container align'>
            <img src={props.userDetail.profilepicture} className="details-image" alt="" />
            <span className='user-name information'>{props.userDetail.name}</span>
            <ShowDetails infos={personalInfo} />
            <hr className='details-divider'/>
            <span className='company-text'>Company</span>
            <ShowDetails infos={companyInfo} />
        </div>
    )
}

export default Details