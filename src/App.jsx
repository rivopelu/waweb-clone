import React from 'react'
import { MainChat, SideBarComp } from './pages'


const App = () => {
    return (


        <div className='flex min-h-screen w-full   bg-white fixed'>
            <div className="kiri  w-[30%]  relative">
                <SideBarComp />
            </div>
            <div className="flex-1 w-full ">

                <MainChat />
            </div>
        </div>

    )
}

export default App