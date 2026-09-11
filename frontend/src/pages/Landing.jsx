import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Stats from "../components/landing/Stats";
import Footer from "../components/landing/Footer";
import LiveNews from "../components/landing/LiveNews";
function Landing() {

    return(

<div className="min-h-screen bg-slate-950 text-white">

<Navbar/>

<Hero/>

<Features/>
<LiveNews/>

<Stats/>

<Footer/>

</div>

    );

}

export default Landing;