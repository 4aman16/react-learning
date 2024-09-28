import React from 'react';
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from 'react';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {

    // State Variable - Super powerful variable 
    
    // const [listOfRestaurants, setListOfRestaurants ] =useState([resList]);
    const [listOfRestaurants, setListOfRestaurants ] =useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterRest, setFilterRest] = useState([]); 

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json();
        console.log(json);
        // Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    // if( listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }   if( listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }


    // State Variable - Up code is array destructuring
    // const arr=useState();
    // const listOfRestaurants=arr[0];
    // const setListOfRestaurants=arr[1];
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks Like you're Offline</h1>
    }

    filterRes = (listOfRestaurants) => {
        const filteredListOfRestaurants = listOfRestaurants.filter(res => res.info.avgRating>4.6)
        setFilterRest(filteredListOfRestaurants);
        console.log(filteredListOfRestaurants);
    }

    updateUI = (value,listOfRestaurants) => {
        console.log(value);
        const filteredListOfRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(value.toLowerCase()))
        setFilterRest(filteredListOfRestaurants);
        console.log(filteredListOfRestaurants);
    }


    console.log("Body Rendered first")
    return (
        <div className="body">
            <div className="Filter">
                <div className="Search">
                    <input type="text" placeholder="Search Restaurants" value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => updateUI(searchText,listOfRestaurants)}>Search</button>
                </div>
                <button className="filter-btn" 
                 onClick={ () => {filterRes(listOfRestaurants)}}>Top Rated Restaurant</button>

            </div>
            <div className="res-container">
                {
                    filterRest.map((res) => {
                        return <Link key={res.info.id} to={"/restaurants/"+ res.info.id} ><RestaurantCard resData={res} /></Link>
                    })
                }
            </div>
            
        </div>
    )
}

export default Body;