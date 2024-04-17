import React from 'react'
import {useDispatch} from 'react-redux'
import { authService } from '../../appwrite/index'
import {logout} from '../../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { removePosts } from '../../store/postsSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            dispatch(removePosts())
        })
    }
  return (
    <button
    onClick={logoutHandler}>
      <Link to='/' className='inline-bock px-6 py-2 duration-200 hover:text-white hover:bg-[#b68773] rounded-xl'>
        Logout
      </Link>
    </button>
  )
}

export default LogoutBtn