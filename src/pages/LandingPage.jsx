import LandingBar from "../components/Landing/LandingBar.jsx";
import Hero from "../components/Landing/Hero.jsx"
import LandingReview from "../components/Landing/LandingReview.jsx";
import hero from "../assets/landing/hero.jpg"


function LandingPage(){
    return (
        <>
            <div className="flex flex-col h-screen max-h-screen relative bg-center bg-cover"
            style={{
                backgroundImage: `url(${hero})`
            }}
            >
                <div className="size-full absolute bg-[rgb(0,0,0,0.8)] z-10"></div>

                <div className="flex flex-col relative z-20 flex-1">
                    <LandingBar />
                    <Hero/>
                    <LandingReview/>
                </div>
                

            </div>
        </>
    );
}

export default LandingPage;