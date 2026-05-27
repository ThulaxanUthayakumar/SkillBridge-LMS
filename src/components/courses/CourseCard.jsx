
import { motion } from "framer-motion";

function CourseCard({title,level,image}){
return(
<motion.div whileHover={{y:-10}} className="card">
<img
src={image}
alt={title}
style={{
width:"100%",
height:"220px",
objectFit:"cover",
borderRadius:"16px"
}}
/>

<h2 style={{marginTop:"20px"}}>{title}</h2>

<p style={{marginTop:"10px"}}>{level}</p>

<button className="btn" style={{marginTop:"20px"}}>
Enroll Now
</button>
</motion.div>
)
}

export default CourseCard;
