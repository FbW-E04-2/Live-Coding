import { useContext, useEffect, useState } from "react"
import {MyContext} from "../../components/context/Context"
//SSG ///pre-rendering //at build time
/* export async function getStaticProps(context){
    const res = await fetch("http://localhost:4000/records")
    const result = await res.json()
    return {
        props:{ records:result.data}
    }
} */
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

    const {cart,setCart} =useContext(MyContext)
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


const addToCart=(item)=>{
    let existingRecord= cart.find(record=>record._id===item._id)
    if(!existingRecord){
        setCart([...cart, item]) 
    }
   
}

    return (
        <div className="container">
             <h1 className="title has-text-centered">Records Page</h1>
            <section className="columns has-text-centered is-centered is-multiline">
            {data && data.map(record=>{
                return(
                    <div key={record._id} className="column card my-1 mx-1 section is-one-quarter-desktop is-5-tablet is-12-mobile "> 
                        <h2>{record.title}</h2>
                        <h3>{record.artist}</h3>
                        <h3>$ {record.price}</h3>
                        <button onClick={()=>addToCart(record)}>add to cart</button>
                    </div>
                )
            })}
            </section>
           
           

    
        </div>
    )
}
 