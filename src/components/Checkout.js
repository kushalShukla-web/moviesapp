import React,{useContext} from 'react';
import {MyContext} from "../context/Context"
import "../css/style.css";
function Checkout(props) {
    const {topMovies, setTopMovies,searchOne,showing} =useContext(MyContext)
    console.log(searchOne)

    return (
        <div>
            {topMovies.map((index)=>
                index.title=== showing ? <div className="card"  >
            <h3 className="card--title">{index.title}</h3>
            <img className="card--image"
                src={index.image} />
            <div className="card--content">
            <p><small>RELEASE DATE: {index.year}</small></p>
            <p><small>RATING: {index.imDbRating}</small></p>
            <p className="card--desc">{index.crew}</p>
            </div>

        </div>: false
            )}
        </div>
    );
}

export default Checkout;