import type { NextPage } from 'next'
import Link from 'next/link'
import {useState,useEffect} from "react"
import api from "../src/restApi/index";
const apiobj = new api();
const Profile: NextPage = () => {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    // getUserList();
  },[])
  const getUserList= async()=>{
    setIsLoading(true);
    const response: any = await apiobj.request("users/", {}, "get");
		setUsers(response.data)
    setIsLoading(false);
  }

// console.log("users",users)
  return (
    <div><h1>Profile</h1>
            <Link href="/" >
              <a >Home</a>
            </Link><br/>
            <Link href="/login" >
              <a >Login</a>
            </Link><br/>
            <Link href="/profile" >
              <a >profile</a>
            </Link>
            <br/>
           
             <br/>
          <br/>
          {
            isLoading ? <h2>Loading</h2>
            : users.length > 0 ?
            users.map((e:any)=>{
              return(
                <h2 key={e.firstName}>{e.firstName}</h2>
              )
            })
            :null

          }
            </div>
  )
}

export default Profile
