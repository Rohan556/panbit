import React from 'react'
import ShowDetails from '../ShowDetails'
import "../../styles/address.css"
import Maps from "../../static/maps.png"

function Address(props) {
    console.log(props)

    const addressInfo = [
        {
            heading: "Street",
            value: props.userDetail.street
        },
        {
            heading: "Suite",
            value: props.userDetail.suite
        },
        {
            heading: "City",
            value: props.userDetail.city
        },
        {
            heading: "Zipcode",
            value: props.userDetail.zipcode
        }
    ]
    return (
        <div className='address-container'>
            <p className='address-txt'>Address:</p>
            <div className="sd">
                <ShowDetails infos={addressInfo} />
            </div>
            <img className='address-image' src={Maps}/>
            <p className='lat-long'><span className='lat'>Lat: </span>{props.userDetail.geo.lat}<span className='lat'>&nbsp;&nbsp;&nbsp;Lng: </span>{props.userDetail.geo.lng}</p>
        </div>
    )
}

export default Address