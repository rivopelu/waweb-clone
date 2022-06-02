import React from 'react'

const NotifBadge = ({ className, title }) => {
    return (
        <div className={`absolute text-[8px] h-3 w-3  bg-red-600 flex items-center justify-center text-white rounded-full ${className}`}>{title}</div>
    )
}

export default NotifBadge