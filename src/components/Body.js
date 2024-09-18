import React from 'react';
import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import resList from '../utils/mockData';

const Body = () => {

    // State Variable - Super powerful variable 
    
    const [listOfRestaurants, setListOfRestaurants ] =useState(resList);
    
    // State Variable - Up code is array destructuring
    // const arr=useState();
    // const listOfRestaurants=arr[0];
    // const setListOfRestaurants=arr[1];
    

    filterRes = (listOfRestaurants) => {
        const filteredListOfRestaurants = listOfRestaurants.filter(res => res.info.avgRating>4.5)
        setListOfRestaurants(filteredListOfRestaurants);
        console.log(filteredListOfRestaurants);
    }



    return (
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" 
                 onClick={ () => {filterRes(listOfRestaurants)}}>Top Rated Restaurant</button>

            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((res) => {
                        return <RestaurantCard key={res.info.id} resData={res} />
                    })
                }
            </div>
            
        </div>
    )
}

export default Body;