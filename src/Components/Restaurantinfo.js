import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import useRestaurants from "../utils/Hooks/useRestaurants";
import Shimmer from "./Shimmer";
import Caras from "./Caras";
function Restaurantinfo() {
  const [indexi, changes] = useState(null);

  const { id } = useParams();
  const restraurant = useRestaurants(id);

  if (restraurant == false) {
    return <div>no data found...!!!</div>;
  }
  const carausel =
    restraurant &&
    restraurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (r) =>
        r.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return restraurant ? (
    <>
      <div className="card" style={{ marginRight: "18rem" }}>
        <img
          width="200px"
          src={
            IMG_CDN_URL +
            restraurant.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          alt="no"
        />
        <div className="card-body">
          <h5 className="card-title">
            {restraurant.data?.cards[2]?.card?.card?.info?.name}
          </h5>
          <p className="card-text">
            {" "}
            Adress:
            {restraurant.data?.cards[2]?.card?.card?.info?.areaName +
              "," +
              restraurant.data?.cards[2]?.card?.card?.info?.city}{" "}
          </p>
          <p className="card-text">
            {" "}
            Price:
            {(
              parseInt(
                restraurant.data?.cards[2]?.card?.card?.info?.costForTwo
              ) / 100
            ).toString() + "Rs"}{" "}
          </p>
        </div>
      </div>
      {carausel &&
        carausel.map((r, index) => (
          <Caras
            changes={() => (indexi == index ? changes(null) : changes(index))}
            show={indexi == index && true}
            key={index}
            {...r}
          ></Caras>
        ))}
    </>
  ) : (
    <Shimmer />
  );
}

export default Restaurantinfo;
