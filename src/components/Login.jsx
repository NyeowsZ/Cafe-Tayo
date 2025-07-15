function Login(){
    return(
        <>
            <div className="w-120 p-5 flex flex-col">

                {/* Brand */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-primary-900">CafeTayo</h1>
                    <p className="text-2xl text-primary-800">Liven up your day</p>

                    <img src="my-icon.png" className="my-5 size-30"/>
                </div>

                {/* Form */}
                <div className="flex flex-col items-center justify-center gap-3">

                    <input type="text" className="px-8 py-4 bg-dark-950 text-light-100 outline-none w-full rounded-full" placeholder="Username"/>
                    <input type="password" className="px-8 py-4 bg-dark-950 text-light-100 outline-none w-full rounded-full" placeholder="Password"/>
                    <button className="px-10 py-2 bg-primary-500 font-semibold text-light-100 rounded-full w-fit">Login</button>
                    <a href="#" className="underline text-dark-950">Don't have an account?</a>


                </div>
            </div>
        </>
    );
}

export default Login