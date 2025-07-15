import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx"

function LandingPage(){
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar/>
                <Hero/>

            </div>
        </>
    );
}

export default LandingPage;