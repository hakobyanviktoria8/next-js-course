import React,{useEffect,useState} from 'react';

function Albums() {
    const [isLoading, setIsLoading]=useState(true)
    const [dataAlbums, setDataAlbums]=useState(null)

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await res.json()
            setDataAlbums(data)
            setIsLoading(false)
        }
        fetchData()
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }
  return (
      <div>
        <h1>Albums</h1>
        {dataAlbums.map(item=>
            <div>
                <h2>{item.id}. {item.title}</h2>  
            </div>
        )}
    </div>
  )
}

export default Albums;
