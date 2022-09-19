import React from 'react'
import {useRouter} from 'next/router';
import {AppDispatch} from "../../store/store"
import { useSelector, useDispatch } from 'react-redux';
import {setLogout} from "../../store/reducers/loginSlice";
import Cookies from 'js-cookie'
function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  // 
   const loginData = useSelector((state:any) => state.login);
  const logout = async () => {
    await dispatch(setLogout())
    Cookies.remove('token', { path: '' }) 
    router.push('/');
  }
  return (
    <div><h2>Header</h2>
    {
      loginData.isLogin ?  <a href="#"  onClick={logout}>Logout</a> : null
    }
      
    
    </div>
  )
}

export default Header