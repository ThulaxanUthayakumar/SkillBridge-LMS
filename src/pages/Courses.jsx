
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CourseCard from "../components/courses/CourseCard";
import courses from "../assets/courses";

function Courses(){
return(
<>
<Navbar />

<section className="container" style={{padding:"80px 0"}}>
<h1 style={{fontSize:"42px",marginBottom:"30px"}}>
Popular Courses
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"25px"
}}>
{courses.map((course)=>(
<CourseCard
key={course.id}
title={course.title}
level={course.level}
image={course.image}
/>
))}
</div>
</section>

<Footer />
</>
)
}

export default Courses;
