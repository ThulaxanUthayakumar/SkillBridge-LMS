
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";

function Home(){
return(
<>
<Navbar />
<Hero />

<section className="container" style={{padding:"80px 0"}}>
<h1 style={{marginBottom:"30px",fontSize:"42px"}}>
Why Choose SkillBridge?
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px"
}}>
<div className="card">
<h3>Modern Courses</h3>
<p style={{marginTop:"15px"}}>
Learn practical technologies used in real companies.
</p>
</div>

<div className="card">
<h3>Professional UI</h3>
<p style={{marginTop:"15px"}}>
Responsive design with animations and modern layouts.
</p>
</div>

<div className="card">
<h3>Career Growth</h3>
<p style={{marginTop:"15px"}}>
Build portfolio projects and improve job opportunities.
</p>
</div>
</div>
</section>

<Footer />
</>
)
}

export default Home;
