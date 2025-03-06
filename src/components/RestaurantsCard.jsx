/* eslint-disable react/prop-types */
import resList from "./mockData";
import BgChanger from "./bgChanger";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,avgRating,costForTwo,deliveryTime,cloudinaryImageId,cuisines}=resData?.info;
    // console.log(props)
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="reslogo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>Rarting {avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{deliveryTime}</h3>
        </div>
    );
};

export default RestaurantCard;
