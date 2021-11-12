import React,{ useContext, useState } from "react";
import {Row,Col,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MyContext} from "../context/Context"
import "../css/style.css"

function LandingPage(props) {
const {topMovies, setTopMovies,searchOne,showing} =useContext(MyContext)
    
 
    
    console.log(topMovies)
    const handlechange=(e)=>{
     searchOne(e.target.value)
    }

    
    return (
        <div className="container" style={{marginLeft:'50px'}}>
            <input onChange={handlechange} value={showing} />
            <Link to="/checkout">
            <button>Search</button>
            </Link>
            {
                topMovies.filter(post =>{
                    if(showing ===''){
                        return post; 
                    }
                    else if (post.title.toLowerCase().includes(showing.toLowerCase())){
                     return post ;
                    }
                }).map((post, index) => (
    <div className="box" key={index}>
      <p onClick={()=>{searchOne(post.title)}}>{post.title}</p>
    </div>
  ))
                }
        </div>
    );
}

export default LandingPage;