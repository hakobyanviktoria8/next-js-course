import React from 'react'
import Link from 'next/link'

export default function Posts({posts}) {
    return (
        <div>
            <h1>Posts lists</h1>
            <ol>
                {posts.map(post=>(
                    <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                ))}
            </ol>
        </div>
    )
}

export async function getServerSideProps(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    return{
        props:{
            posts: data,
        }
    }
}