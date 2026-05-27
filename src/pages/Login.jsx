
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

function Login(){
return(
<>
<Navbar />

<div style={{
minHeight:"80vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"40px"
}}>
<motion.form
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="card"
style={{width:"420px"}}
>
<h1 style={{marginBottom:"20px"}}>Login</h1>

<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<button className="btn" style={{width:"100%",marginTop:"20px"}}>
Login
</button>
</motion.form>
</div>

<Footer />
</>
)
}

export default Login;
