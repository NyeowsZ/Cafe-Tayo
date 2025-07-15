
function Hero(){
    return (
        <>
            <div className="flex-1 bg-cover bg-center relative">

                <div className="size-full flex items-center pl-10 z-20 relative">
                    <div className="flex flex-col gap-5">
                        
                        <div className="flex flex-col">
                            <h2 className="leading-none text-primary-300 drop-shadow-[3px_3px_0px_white] text-[6.854rem] font-bold">Coffee? Life?</h2>
                            <p className="leading-none text-white text-[2.618rem] font-extralight">Coffee and Life coexists and we only serve the best</p>
                        </div>
                        

                        <div className="flex items-center gap-2">
                            <button className="text-[1.618rem] h-15 min-w-50 rounded font-semibold transition-all duration-300 hover:bg-primary-300 active:bg-primary-600 border-5 border-primary-300 hover:text-white cursor-pointer w-fit px-5 py-2 bg-primary-400 text-white">Order Now</button>
                            
                            <button className="text-[1.500rem] font-light h-15 min-w-50 rounded transition-all duration-300 hover:bg-primary-neutral-600 cursor-pointer w-fit px-5 py-2 border-primary-neutral-300 border-5 text-white">Learn More</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;