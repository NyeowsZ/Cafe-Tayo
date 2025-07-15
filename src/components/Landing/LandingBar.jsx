import React from 'react'

const LandingBar = () => {
  return (
    <>
            <div className=" p-5 rounded-full m-5 flex items-center gap-5">
                    <img src="./my-icon.png" className="size-15 bg-white border-2 border-primary-500 rounded-full" />

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold underline text-white">CafeTayo</h1>
                        <p className="font-semibold text-light-200">Liven up your day</p>
                    </div>
            </div>
        
    </>
  )
}

export default LandingBar