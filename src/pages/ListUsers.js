import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../styles/listUsers.css"
import getData from '../helpers/getData';
import { useNavigate } from "react-router-dom"

export default function ListUsers() {

    const [users, setUsers] = React.useState([])    
    const navigate = useNavigate()
    React.useEffect(() =>{

        let getUser = async() => {
            const url = "https://panorbit.in/api/users.json"
            const data = await getData(url)
            setUsers(data.users)
            console.log(data,users);
        }
        getUser()
    }, [])

    function HomeToDetails(username, userDetail, allUsers){
        const state = {
            userDetail,
            allUsers
        }

        console.log(state);
        navigate(`/user/${username}`, {state})
    }

    return (
        <div className='list-users center'>
            <Card sx={{ 
                maxWidth: 500,
                width: "95vw",
                borderRadius: 7,
                height: "65vh",
                boxShadow: "5px 5px 25px rgba(0,0,0, 0.2)"
            }}>
                <CardContent
                    sx={{
                        padding: 0,
                        height: "100%"
                    }}
                >
                    <div className='select-account center'>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 700
                            }}
                        >Select an account</Typography>
                    </div>
                    <div className='outer-scroll'>
                        <div className='inner-scroll'>
                            {
                                users.map((user, index, allUsers) => {
                                    return (
                                        <div key={user.name} onClick={() => HomeToDetails(user.username, user, allUsers)}>
                                            <div className='username-card'>
                                                <img src={user.profilepicture} alt={`Profile of ${user.name}`} className='profile-picture'/>
                                                <p>{user.name}</p>
                                            </div>
                                            {index !== users.length - 1 && <hr className='divider'/>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}