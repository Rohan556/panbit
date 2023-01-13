import React from 'react'
import "../styles/showDetail.css"

function ShowDetails(props) {
    return (
        <div className='detail-content'>
            {
                props.infos.map((info) => {
                    return (
                        <div className='single-detail' key={info.value}>
                            <span className='detail-heading'>{info.heading} : </span>
                            <span className='detail-info'>&nbsp;{info.value}</span>
                        </div>
                    )
                })
            }
            </div>
    )
}

export default ShowDetails