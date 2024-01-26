import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// import {AddPost, AllPosts, EditPost, Home, Login, Post, Signup} from './pages/index'
// import {Protected} from './components/index'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//         {
//             path: "/",
//             element: <Home />,
//         },
//         {
//             path: "/login",
//             element: (
//                 <Protected authentication={false}>
//                     <Login />
//                 </Protected>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//                 <Protected authentication={false}>
//                     <Signup />
//                 </Protected>
//             ),
//         },
//         {
//             path: "/all-posts",
//             element: (
//                 <Protected authentication>
//                     {" "}
//                     <AllPosts />
//                 </Protected>
//             ),
//         },
//         {
//             path: "/add-post",
//             element: (
//                 <Protected authentication>
//                     {" "}
//                     <AddPost />
//                 </Protected>
//             ),
//         },
//         {
//             path: "/edit-post/:slug",
//             element: (
//                 <Protected authentication>
//                     {" "}
//                     <EditPost />
//                 </Protected>
//             ),
//         },
//         {
//             path: "/post/:slug",
//             element: <Post />,
//         },
//     ],
// },
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//      <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )
