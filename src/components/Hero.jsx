import hero from "../assets/landing/hero.jpg"

function Hero(){
    return (
        <>
            <div className="flex-1 bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${hero})`
            }}>
                <div className="size-full absolute bg-[rgb(0,0,0,0.5)] z-10"></div>

                <div className="size-full flex items-center pl-5 z-20 relative">
                    <div className="flex flex-col gap-5">
                        
                        <div>
                            <h2 className="text-primary-400 text-[11.089rem] font-bold">Coffee? Life?</h2>
                            <p className="text-white text-[2.618rem]">Coffee and Life coexists and we only serve the best</p>
                        </div>
                        

                        <div className="space-y-2">
                            <button className="transition-all duration-300 hover:bg-primary-400 hover:text-white cursor-pointer w-fit text-xl px-5 py-2 rounded-full bg-light-100 text-dark-950">Order Now</button>
                            <br />
                            <button className="transition-all duration-300 hover:bg-primary-neutral-600 cursor-pointer w-fit text-md px-5 py-2 rounded-full bg-primary-neutral-500 text-white">Learn More</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;