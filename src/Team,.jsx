import './team.css'
import { useEffect, useState } from "react"
import Friend from './friend'

export default function Users(){
    const [users, setusers]= useState([])
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setusers(data))
    },[])
    return(
        <div className='box'>
         <p>user : </p>
         {
          users.map(user=><Friend friend={user}></Friend>)  
        }
        </div>
       
    )
}