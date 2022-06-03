
import { faPlus, faBell, faCircleChevronDown, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { profileData } from '../../assets'
import { NotifBadge } from '../atoms'
const HeadSidebar = () => {

    const headerData = profileData[0]
    return (
        <div className='relative flex justify-between items-center border-b px-6 h-16 bg-gray-100'>
            <div className="kanan py-3  flex items-center gap-2 cursor-pointer">
                <div className="relative">
                    <img className={'w-[40px] h-[40px] rounded-full'} src={headerData.avatar} alt="asdf" />
                    <div className='w-2 h-2 rounded-full absolute right-0 bottom-1 bg-green-600'></div>
                </div>
                <div className="flex flex-col">
                    <div className="status text-xs text-gray-500 font-semibold">{headerData.status}</div>
                    <div className="nama font-bold capitalize">{headerData.name}</div>
                </div>
            </div>

            <div className="kiri flex gap-2">

                <div className='relative cursor-pointer hover:bg-gray-500 text-gray-600 duration-100 hover:text-white h-7 p-2 rounded-full w-7  bg-gray-200 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faPlus} className=' ' />
                </div>
                <div className='relative cursor-pointer hover:bg-gray-500 text-gray-600 duration-100 hover:text-white h-7 p-2 rounded-full w-7  bg-gray-200 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBell} className=' ' />
                    <NotifBadge title={'1'} className={'absolute right-0 bottom-1'} />
                </div>
                <div className='relative cursor-pointer hover:bg-gray-500 text-gray-600 duration-100 hover:text-white h-7 p-2 rounded-full w-7  bg-gray-200 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faSpinner} className=' ' />

                    <NotifBadge title={'6'} className={'absolute right-0 bottom-1'} />
                </div>
            </div>
        </div>
    )
}

export default HeadSidebar