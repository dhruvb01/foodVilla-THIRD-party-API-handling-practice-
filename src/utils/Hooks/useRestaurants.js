import { swiggy_menu_api_URL } from "../../Components/config";
import { useEffect, useState } from "react";
const useRestaurants=(id)=>{

    const [rest, setInfo] = useState(null);
    useEffect(() => {
      
      setInfo(null)
      getInfo(swiggy_menu_api_URL,id,setInfo);
      },[id]);
      async function getInfo(swiggy_menu_api_URL,id,setInfo) {
        
        const res = await fetch(swiggy_menu_api_URL + id);
       
        const json = await res.json();
      
      if(!json.data.cards){
       
        setInfo(false);
       
      }
      else{
      
        setInfo(json);
        
      }
      }
     
      return rest;

}
export default useRestaurants