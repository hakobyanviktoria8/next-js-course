import React from 'react'

function User({user}) {
    return (
        <div>
            {console.log(user)}
            <h2>Welcome {user.name}</h2>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    console.log(users);
    const paths = users.map((user) => ({
        params: { userId: user.id.toString() },
      }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await res.json()
    console.log(user);
    return{props:{user}}
}

export default User
