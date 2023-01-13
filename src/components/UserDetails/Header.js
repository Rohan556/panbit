import React from 'react'
import '../../styles/header.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom"

function Header(props) {

  const [displayCard, setDisplayCard] = React.useState(false)
  const navigate = useNavigate()

  function DetailsToDetails(username, userDetail, allUsers){
    const state = {
        userDetail,
        allUsers
    }

    console.log(state);
    navigate(`/user/${username}`, {state})
}

  return (
    <div className='header-container'>
        <p className='navpage'>{props.navPage}</p>
        <div className='header-content' onClick={() => setDisplayCard((status) => !status)}>
            <img src={props.userDetail.profilepicture} className="header-image"/>
            <span className='header-name'>{props.userDetail.name}</span>
        </div>
        {displayCard && <div className='logout-card'>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className='logout-content'>
                <img src={props.userDetail.profilepicture} className="logout-image"/>
                <span className='logout-name'>{props.userDetail.name}</span>
                <span className='logout-email'>{props.userDetail.email}</span>
                <hr className='logout-divider'/>
                <div className='logout-outer'>
                  <div className='logout-inner'>
                    {
                      props.allUsers.map((user, index, allUsers2) => {
                        if(user.name === props.userDetail.name)
                          return 
                        return (
                          <div className='user-card' onClick={() => DetailsToDetails(user.username, user, allUsers2)}>
                            <img src={user.profilepicture} style={{borderRadius: "50%"}} height="30px" width="30px"/> <span className='logout-userInfo'>{user.name}</span>
                            {index !== props.allUsers.length -1 && <hr className='logout-innerDivider'/>}
                          </div>)
                      })
                    }
                  </div>
                </div>
                <button className='signout-button' onClick={() => navigate("/")}>Sign out</button>
              </div>
            </CardContent>
          </Card>
        </div>}
    </div>
  )
}

export default Header