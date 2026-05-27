
import { Link } from "react-router-dom";

function Navbar(){
return(
<nav style={{
background:"#020617",
padding:"20px 0"
}}>
<div className="container" style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>
<h2>SkillBridge LMS</h2>

<div style={{display:"flex",gap:"25px"}}>
<Link to="/">Home</Link>
<Link to="/courses">Courses</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</div>
</div>
</nav>
)
}

export default Navbar;
