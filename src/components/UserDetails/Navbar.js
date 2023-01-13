import React from 'react'
import '../../styles/Navbar.css'

function Navbar(props) {

    React.useEffect(() => {
        let profile = document.getElementById("Profile")
        profile.classList.remove("inactive-link")
        profile.classList.add("active-link")
    }, [])
    const navigations = [
        {
            "name": "Profile"
        },
        {
            "name": "Posts"
        },
        {
            "name": "Gallery"
        },
        {
            "name": "ToDo"
        }
    ]
    return (
        <div className='navbar-container'>
            <ul className='nav-list'>
                {
                    navigations.map((navigation, index) => {
                        return (
                            <div className="nav-item">
                                <li key={navigation.name} id={navigation.name} className="typography inactive-link" onClick={() => props.handleLinkChange(navigation.name)}>
                                    {navigation.name}
                                </li>
                                {index !== navigations.length - 1 && <hr className='divide'/>}
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar