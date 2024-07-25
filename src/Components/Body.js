import { useEffect, useState } from "react";
import Cards from "./Cards";
import Search from "./Search";
const Body = () => {
  const [restaurants, setRes] = useState([]);
  const [filterRest, setFilter] = useState([]);
  async function load() {
    const res = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await res.json();
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants? setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants):setRes([]);
    setFilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
  useEffect(() => {
     load();
  }, []);

  return (
    <>
      <Search restaurants={restaurants} setFilter={setFilter}/>
      <Cards  restaurants={restaurants} filterRest={filterRest} />
    </>
  );

};
export default Body;
