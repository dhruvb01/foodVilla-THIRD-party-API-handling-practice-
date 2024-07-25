import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Header=()=>{
  
const cart=useSelector((store)=>store.cart.items)
  const navigate = useNavigate();
  useEffect(() => {
    console.log(":initial header")
   }, [])
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FoodVILLA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button onClick={() => navigate(-1)}>Back</button>
    <Link className="nav-link" style={{margin:20}} to='/cart' >cart({cart.length})</Link>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/Contact">Contact</Link>
        <Link className="nav-link" to="/login">Login</Link>
      </div>
    </div>
  </div>
</nav>

</>
    )
}
export default Header