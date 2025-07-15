function Navbar(){
    return(
        <>
            <nav className="px-5 py-2 flex justify-between">
                {/* Brand */}
                <div className="flex-1 flex items-center gap-5">
                    <img src="./my-icon.png" className="size-15" />

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold underline">CafeTayo</h1>
                        <p className="font-semibold text-dark-900">Liven up your day</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className="flex-1 flex gap-5 items-center justify-center">
                    <li><a href="#" className="font-bold">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Collaborate</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>

                {/* User Links*/}
                <div className="flex-1 flex items-center justify-end gap-2.5">

                    <button className="flex items-center justify-center size-10 rounded-full bg-primary-400 text-white font-bold cursor-pointer">
                        JA
                    </button>

                    <button className="bg-primary-neutral-500 px-5 py-2 rounded-full text-white">
                        Logout
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;