import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainChat } from '../pages'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/:id' element={<MainChat />} />
        </Routes>
    )
}

export default MainRoutes