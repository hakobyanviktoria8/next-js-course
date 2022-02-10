import React from 'react'

function PostId({post}) {
    return (
        <div>
            {/* {console.log(post)} */}
            <h2>{post.id}. {post.title}</h2>
           <p>{post.body}</p>   
        </div>
    )
}
export async function getServerSideProps(context){
    const {params, req, res,query} = context
    // console.log("req",req.headers.cookie);
    console.log('query', query);
    const {postId}= params
    res.setHeader('Set-Cookie',['name=Vishhh'])
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await response.json()
    return{
        props:{post}
    }
}

export default PostId
