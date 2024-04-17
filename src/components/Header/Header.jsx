import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const navItemsAuth = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ]


  return (
    <div>
    <header className='py-4 shadow bg-[#EFBC9B]'>
      <Container>
        <nav className='flex items-center'>
          <div className=''>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <div className='w-full ml-96 flex justify-between'>
          <ul className='flex'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <NavLink 
                  to={`${item.slug}`}
                  className={({isActive}) => `inline-bock mx-2 px-6 py-2 duration-200 hover:text-white hover:bg-[#b68773] ${isActive ? "text-purple-900 bg-[#ffd4c1]" : ""} rounded-xl`}>
                  {item.name}
                </NavLink>
              </li>
            ) : null
            )}
          </ul>
          <ul className='flex'>
            {navItemsAuth.map((item) => 
            item.active ? (
              <li key={item.name}>
                <NavLink 
                  to={`${item.slug}`}
                  className='inline-bock mx-2 px-6 py-2 duration-200 hover:text-white hover:bg-[#b68773] rounded-xl'>
                  {item.name}
                </NavLink>
              </li>
            ) : null
            )}
            
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>
          </div>
        </nav>
        </Container>
    </header>  
   </div>
  )
}

export default Header