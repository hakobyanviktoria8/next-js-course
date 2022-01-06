import React from 'react'
import Link from 'next/link'

function Users({users}) {
    return (
        <div>
            <h1>Users list</h1>  
            {users.map(user =>
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Users

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props:{
            users:data,
            fallback: false
        }
    }
}