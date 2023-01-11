import React from 'react'
import '../../styles/Navbar.css'

function Navbar() {

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
                    navigations.map((navigation) => {
                        return <div className="nav-item"><li key={navigation.name} id={navigation.name} className="typography">{navigation.name}</li><hr className='divide'/></div>

                    })
                }
            </ul>
        </div>
    )
}

export default Navbar