import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts




// import React, { useEffect, useState } from 'react'
// import { Container, PostForm } from '../components'
// import service from '../appwrite/config'
// import { useNavigate, useParams } from 'react-router-dom'

// function EditPost() {
//     const [post, setPosts] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (slug) {
//             service.getPosts(slug).then((post) => {
//                 if (post) {
//                     setPosts(post)
//                 } else {
//                     navigate('/')
//                 }
//             })
//         }
//     }, [slug, navigate])

//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost