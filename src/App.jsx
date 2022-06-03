import React from 'react'
import { MainChat, SideBarComp } from './pages'


const App = () => {
    return (


        <div className='flex min-h-screen w-full max-w-[1280px]  bg-white fixed'>
            <div className="kiri  w-[40%]  relative">
                <SideBarComp />
            </div>
            <div className="kama">

                <MainChat />
            </div>
        </div>

    )
}

export default App