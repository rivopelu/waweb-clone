import React from 'react'

const ChatKirim = ({ children }) => {
    return (
        <div className='relative flex w-full items-end justify-end pb-2'>

            <div className="bg-blue-200 w-fit max-w-lg p-3 rounded-lg ml-2 ">
                {children}
            </div>


        </div>
    )
}

export default ChatKirim