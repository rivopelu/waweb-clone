import React from 'react'
import { SideBarComp } from './pages'


const App = () => {
    return (


        <div className='flex min-h-screen w-full max-w-[1280px]  bg-white fixed'>
            <div className="kiri  w-[40%]">
                <SideBarComp />
            </div>
            <div className="kama">kanan</div>
        </div>

    )
}

export default App