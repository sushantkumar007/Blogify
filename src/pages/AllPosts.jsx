import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import { useSelector, useDispatch } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const allPosts = useSelector((state) => state.posts.allPosts)
    const authStatus = useSelector((state) => state.auth.status)
    const dispatch = useDispatch()

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
    
  return (
    <div className='w-full min-h-80 py-8'>
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