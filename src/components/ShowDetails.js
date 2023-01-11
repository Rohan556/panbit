import React from 'react'
import "../styles/showDetail.css"

function ShowDetails() {
    return (
        <div className='detail-content'>
            {
                <div className='single-detail'>
                    <span className='detail-heading'>Username : </span>
                    <span>&nbsp;{props.userDetail.username}</span>
                </div>
            }
            </div>
    )
}

export default ShowDetails