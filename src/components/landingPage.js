import React,{ useEffect, useState } from "react";
import {getTopMovies} from '../api'
import {Row,Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function LandingPage(props) {

    const [topMovies, setTopMovies] = useState([])
    const [showing,searchOne] = useState('')
    
    const asyncFetch = async () =>{
        const res = await getTopMovies()
        setTopMovies(res)
    }

    useEffect(()=>{
        asyncFetch()
    },[])

    const movieData = topMovies.map((item,i)=>{
        return(
           <div key={i}>{item.title}</div>
        )
    })
    const handlechange=(e)=>{
    //  searchOne(e.target.value)
    }
    console.log(showing)
 console.log(movieData[0])
    return (
        <div style={{marginLeft:'50px'}}>
            <input />
            <Link to="/checkout">
            <button onClick={()=>{handlechange}}>Search</button>
            </Link>
            <div style={{width:'520px'}}>{movieData}</div>
        </div>
    );
}

export default LandingPage;