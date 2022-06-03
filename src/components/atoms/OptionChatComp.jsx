import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const OptionChatComp = ({ icon, title, className, onClick, rotate }) => {
    return (
        <div className="chatOptions mx-6 px-3 flex items-center justify-between ">
            <div className="kanan  flex items-center ">
                <FontAwesomeIcon icon={icon} className={`text-sm flex ${className} text-white h-3 w-3 p-[5px] rounded-full`} />
                <p className='text-sm pl-2 font-semibold text-gray-400'>{title}</p>
                <FontAwesomeIcon icon={faAngleDown} className={`pl-2 text-sm m-auto text-gray-400 cursor-pointer ${rotate} duration-200`} onClick={onClick} />
            </div>

            <div className="kiri">
                <span className='text-gray-400 cursor-pointer '>•••</span>
            </div>
        </div>
    )
}

export default OptionChatComp