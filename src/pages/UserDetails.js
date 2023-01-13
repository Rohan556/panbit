import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/UserDetails/Navbar'
import Header from '../components/UserDetails/Header'
import "../styles/userDetails.css"
import Details from '../components/UserDetails/Details'
import Address from '../components/UserDetails/Address'

function UserDetails() {
    const location = useLocation()

    const {userDetail, allUsers} = location.state

    const [navPage, setNavPage] = React.useState("Profile")

    const handleLinkChange = (navigation) => {
        let prev = document.getElementById(navPage)
        prev.classList.remove("active-link")
        prev.classList.add("inactive-link")
        console.log(prev);

        setNavPage(() => navigation)

        let current = document.getElementById(navigation)
        current.classList.remove("inactive-link")
        current.classList.add("active-link")
        console.log({current});
    }

    console.log(location);
    return (
        <div className='userdetails-container'>
            <div>
                <Navbar handleLinkChange={handleLinkChange}/>
            </div>  
            <div className='main-part'>
                <Header navPage={navPage} userDetail={userDetail} allUsers={allUsers}/>
                <hr className='header-divider'/>
               { navPage === "Profile" ? <div className='profile'>
                    <Details userDetail={userDetail}/>
                    <hr className='profile-divider'/>
                    <Address userDetail={userDetail.address} />
                </div> : <div className='coming-soon'><span className='comingsoon-text'>Coming Soon</span></div>}
            </div>
            
        </div>
    )
}

export default UserDetails