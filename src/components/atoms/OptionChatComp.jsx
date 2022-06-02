import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const OptionChatComp = () => {
    return (
        <div className="chatOptions mx-8 flex items-center justify-between ">
            <div className="kanan  flex items-center ">
                <FontAwesomeIcon icon={faPaperclip} className={`text-sm bg-orange-600 text-white h-3 w-3 p-[5px] rounded-full`} />
                <p className='text-sm pl-2 font-semibold text-gray-400'>Pinned Chat</p>
                <FontAwesomeIcon icon={faAngleDown} className='pl-2 text-sm text-gray-400 cursor-pointer' />
            </div>

            <div className="kiri">
                <span className='text-gray-400 cursor-pointer '>•••</span>
            </div>
        </div>
    )
}

export default OptionChatComp