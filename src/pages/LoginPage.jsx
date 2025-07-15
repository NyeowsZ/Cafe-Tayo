import coffee from '../assets/login/coffee.jpg'
import Login from '../components/Login.jsx'

function LoginPage(){
    return(
        <>
            <div className="flex h-[100vh] w-full">
            {/* Image */}
            <div className={`bg-cover bg-center w-[40%] size-full`}
            style={{ backgroundImage: `url(${coffee})`}}>

            </div>

            {/* User Form */}
            <div className="flex-1 flex bg-bg items-center justify-center size-full">
            <Login/>
            </div>
        </div>
        </>
    );
}

export default LoginPage