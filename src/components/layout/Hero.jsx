
import { motion } from "framer-motion";

function Hero(){
return(
<section style={{
background:"linear-gradient(to right,#4f46e5,#7c3aed)",
padding:"120px 20px"
}}>
<div className="container" style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"40px",
alignItems:"center"
}}>
<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>
<h1 style={{
fontSize:"60px",
lineHeight:"1.2"
}}>
Build Your Future With Modern Skills
</h1>

<p style={{
marginTop:"20px",
fontSize:"18px"
}}>
Learn React, ASP.NET Core and Full Stack Development with real projects.
</p>

<button className="btn" style={{marginTop:"30px"}}>
Start Learning
</button>
</motion.div>

<motion.img
initial={{opacity:0,x:100}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
alt="hero"
style={{
width:"100%",
borderRadius:"24px"
}}
/>
</div>
</section>
)
}

export default Hero;
