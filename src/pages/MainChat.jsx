import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { profile21 } from '../assets'
import NotifBadge from '../components/atoms/NotifBadge';
import { faVideo, faPhone, faSearch, faBars, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { ChatMainComp } from '../components';

const MainChat = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between relative'>
            <div className="header h-16 bg-gray-100  border-b w-full flex items-center justify-between px-6 ">
                <div className="kiri flex items-center cursor-pointer">
                    <div className="relative">

                        <img src={profile21} alt="example name" className='h-[40px] w-[40px] rounded-full' />
                        <NotifBadge className={'bg-green-600 right-0 bottom-1'} />
                    </div>
                    <div className='pl-3'>

                        <div className="name font-bold capitalize">Example Name</div>
                        <div className="status text-xs font-semibold text-gray-500">Status Profile Example</div>
                    </div>
                </div>
                <div className="kanan flex gap-2">

                    <FontAwesomeIcon icon={faVideo} className='bg-gray-200 text-gray-500 p-2 rounded-full border hover:border-gray-300 duration-100  cursor-pointer' />
                    <FontAwesomeIcon icon={faPhone} className='bg-gray-200 text-gray-500 p-2 rounded-full border hover:border-gray-300 duration-100  cursor-pointer' />

                    <div style={{ height: '30px', width: 2, }} className='mx-3 bg-gray-300 rounded-full'></div>
                    <FontAwesomeIcon icon={faSearch} className=' text-gray-500 p-2 rounded-full  hover:border-gray-300 duration-100  cursor-pointer' />
                    <FontAwesomeIcon icon={faBars} className=' text-gray-500 p-2 rounded-full  hover:border-gray-300 duration-100  cursor-pointer' />

                </div>
            </div>

            <ChatMainComp />




            <div className=" flex items-center  bg-gray-200 px-6 gap-3 h-16 bottom-0 w-full ">
                <FontAwesomeIcon className='font-bold cursor-pointer text-xl text-gray-600' icon={faSmile} />
                <FontAwesomeIcon className='font-bold cursor-pointer text-xl text-gray-600' icon={faFileAlt} />
                <input type="text" placeholder='Type' className="border px-2  w-full rounded-md focus:outline-none focus:border-gray-400 text-sm py-1 flex items-center bg-white" />

                <FontAwesomeIcon className='font-bold cursor-pointer text-xl text-gray-600' icon={faMicrophone} />

            </div>
        </div >
    )
}

export default MainChat