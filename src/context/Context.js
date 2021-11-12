import React,{useState,useEffect} from 'react'
import {getTopMovies} from '../api'
const MyContext = React.createContext();
export default function Context({children}) {
    const [topMovies, setTopMovies] = useState([])
    const [showing,searchOne] = useState('')
    useEffect(()=>{
        asyncFetch()
    },[])

    const asyncFetch = async () =>{
        const res = await getTopMovies()
        setTopMovies(res)
    }
    console.log(topMovies)
    return (
        <div>
            <MyContext.Provider value={{topMovies,showing,searchOne}}>
             {children}
            </MyContext.Provider>
        </div>
    )
}
export {MyContext} 