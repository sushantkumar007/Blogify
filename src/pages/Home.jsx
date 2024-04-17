import React, {useEffect, useState} from 'react'
import { databaseService } from "../appwrite/index";
import { Container, PostCard } from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { addPosts } from '../store/postsSlice';

function Home() {
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.auth.status)
    const allPosts = useSelector((state) => state.posts.allPosts)
        
    useEffect(() => {
        if (authStatus) {
            if (allPosts.length > 0) {
                setPosts(allPosts)
            } else {
                setPosts([])
            }
        } else {
            setPosts([])
        }
    }, [authStatus, allPosts])

    useEffect(() => {
        databaseService.getPosts()
        .then((posts) => {
          const allPosts = posts.documents;
          dispatch(addPosts({allPosts}));
        })
    }, [])
  
    if (posts.length === 0) { 
        return (
            <div className="w-full py-8 mt-4 min-h-80 bg-[#FBF3D5] text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                        {authStatus ? (<p className="text-2xl font-bold hover:text-gray-500">Loading...</p>) : (
                             <h1 className="text-2xl font-bold hover:text-gray-500">
                              Login to read posts
                             </h1>
                        )}
                           
                        </div>
                    </div>
                </Container>
            </div>
        )
    } 
    return (
        <div className='w-full min-h-80 bg-[#FBF3D5] py-8'>
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

export default Home