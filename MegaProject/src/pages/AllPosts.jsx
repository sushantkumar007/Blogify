import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((post) => {
        if (post) {
            setPosts(post.documents)
            // console.log(post)
        }
    })
    console.log(posts)
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts





// import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts

// // import React, { useState, useEffect } from 'react'
// // import { Container, PostCard } from '../components'
// // import service from '../appwrite/config'

// // function AllPosts() {
// //     const [posts, setPosts] = useState([])
// //     useEffect(() => {
// //         service.getPosts([]).then((posts) => {
// //             if (posts) {
// //                 setPosts(posts.documents)
// //             }
// //         })
// //     }, [])
    
// //     // useEffect(() => {}, [])
// //     // service.getPosts([]).then((posts) => {
// //     //     if (posts) {
// //     //         console.log("Post:", posts)
// //     //         console.log("Post-Doc:", posts.documents)
// //     //         setPosts(posts.documents)
// //     //     }
// //     // })

// //   return (
// //     <div className='w-full py-8'>
// //         <Container>
// //             <div className='flex flex-wrap'>
// //                 {posts.map((post) => (
// //                     <div key={post.$id} className='p-2 w-1/4'>
// //                         <PostCard post={post} />
// //                     </div>
// //                 ))}
// //             </div>
// //         </Container>
// //     </div>
// //   )
// // }

// // export default AllPosts