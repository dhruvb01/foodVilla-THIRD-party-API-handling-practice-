import {useState} from "react"
import { filterData } from "../utils/helper";
import './Search.css'
const Search = ({restaurants,setFilter}) => {
  const[ok,setok]=useState(false)
    const[search,setSearch]=useState("")
    function handleChange(event){
        setSearch(event.target.value)
        }
        
        function handleHover(){
          setok(!ok)
          console.log(ok)
        }
        function handleLeave(){
          setok(!ok)
          console.log(ok)
        }
  return (
   
      <div  onMouseEnter={handleHover} onMouseLeave={handleLeave} className="search-container">
        {ok&&<input
          type="text"
          value={search}
          onChange={handleChange}
          className="search-input"
          placeholder="Search..."
        />}
        <button
       
          onClick={(event) => {
            event.preventDefault();
            filterData(search, restaurants, setFilter);
          }}
          className="search-button"
        >
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search">🔎</i>
          </span>
        </button>
      </div>
      
    
  );
};
export default Search