import React from 'react'

const ChatMasuk = ({ children }) => {
    return (
        <div className='relative pb-2 '>

            <div className="bg-gray-200 w-fit max-w-lg p-3 rounded-lg ml-2">
                {children}
            </div>


        </div>
    )
}

export default ChatMasuk