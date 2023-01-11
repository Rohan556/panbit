import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/UserDetails/Navbar'
import Header from '../components/UserDetails/Header'
import "../styles/userDetails.css"
import Details from '../components/UserDetails/Details'

function UserDetails() {
    const location = useLocation()

    const {userDetail, allUsers} = location.state

    const [navPage, setnavPage] = React.useState("Profile")

    console.log(location);
    return (
        <div className='userdetails-container'>
            <div>
                <Navbar />
            </div>  
            <div className='main-part'>
                <Header navPage={navPage} userDetail={userDetail} allUsers={allUsers}/>
                <hr />
                <div className='profile'>
                    <Details userDetail={userDetail}/>
                    <hr className='profile-divider'/>
                    {/* <Address /> */}
                </div>
            </div>
            
        </div>
    )
}

export default UserDetails