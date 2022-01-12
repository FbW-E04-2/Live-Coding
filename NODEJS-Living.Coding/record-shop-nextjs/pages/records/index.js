import { useEffect, useState } from "react"

//SSG ///pre-rendering
export async function getStaticProps(context){
    const res = await fetch("http://localhost:4000/records")
    const result = await res.json()
    return {
        props:{ records:result.data}
    }
}
//this is usefull incase of stale/static data 

//SSR (server side rendering)
/* export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/records")
    const result = await res.json()
    return {
        props:{ records:result.data}
    }
}  */
//this is usefull if we are working with dynamic data

//swr (stale while revalidation)
import useSWR from "swr"

export default function Records(props) {
console.log(props)
    /*  const [records,setRecords] =useState([])  */
//CSR client side rendering
    /* useEffect(()=>{
        fetch("http://localhost:4000/records")
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                setRecords(result.data)
            }else{
                console.log(result.message)
            }
        })
    },[])  */

    const {data,error} = useSWR("http://localhost:4000/records", async (url)=>{
        const res = await fetch(url)
        const result = await res.json()
        return result.data
    })   
    console.log(data,"data")
    console.log(error, "error") 
if(!data){
    return (<h2>Loading .........</h2>)
}
if(error){
    return (<h2>something is going wrong</h2>)
}

    return (
        <div>
            <h1>records page</h1>
            {data && data.map(record=>{
                return(
                    <div key={record._id}> 
                        <h2>{record.title}</h2>
                        <h3>{record.artist}</h3>
                        <h3>$ {record.price}</h3>
                        <button>add to cart</button>
                    </div>
                )
            })}

    
        </div>
    )
}
 