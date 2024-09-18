import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cuisines,avgRating,name,cloudinaryImageId, sla} = resData?.info;
    return (
    <div className="res-card" >
        <img className="res-img" 
        src={CDN_URL + cloudinaryImageId } />
        <h3>{name}</h3>
        <h4> {cuisines.join(', ')}</h4>
        <h4>{avgRating + " Stars"}</h4>
        <h4>{sla.deliveryTime + " minutes"}</h4>
    </div>
    )
}

export default RestaurantCard;