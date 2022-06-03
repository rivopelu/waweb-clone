import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { HeadSidebar, NotifBadge, OptionChatComp, SearchComp } from '../components'
import { faSearch, faBars, faArrowLeftLong, faPaperclip, faAngleDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import { profileData } from '../assets/index';
import { NavLink } from 'react-router-dom';




const SideBarComp = () => {

    const [pinChat, setPinChat] = useState(false);
    const [allChat, setAllChat] = useState(false);


    const onClickPinChat = () => {
        setPinChat(!pinChat)
    }


    return (
        <div className='w-full  border-r border-gray-200 absolute h-screen  '>
            <HeadSidebar />

            <div className="bawah  h-[90%] 2xl:h-[94%] flex flex-col">
                <SearchComp />

                <div className=' h-full flex flex-col overflow-y-scroll'>
                    <OptionChatComp rotate={pinChat && 'rotate-180 flex pr-2  '} title={'pinned chat'} className='bg-orange-500' icon={faPaperclip} onClick={onClickPinChat} />

                    <div className={`chatList flex flex-col gap-1 mt-2 ${pinChat ? 'hidden' : ''} duration-200`}>


                        {

                            profileData.map((item, i) => (
                                <NavLink to={`/${item.id}`} className={`mx-6 px-3 py-2 rounded-lg flex items-center justify-between `} activeClassName='active' key={i}>
                                    <div className="flex items-center">
                                        <div className='relative'>
                                            <div className='h-10 w-10' >
                                                <img src={item.avatar} className='rounded-full' alt={item.name} />
                                            </div>
                                            {
                                                item.active &&

                                                <NotifBadge className={'bg-green-500 right-0 bottom-[2px]'} />
                                            }

                                        </div>
                                        <div className="pl-2">
                                            <div className='h-5 font-bold'>{item.name}</div>
                                            <div className='chat-terbaru w-full h-5  overflow-hidden'>{item.chatTerbaru}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center relative">
                                        <p className='text-xs text-right'>19:00</p>
                                        <div>
                                            {
                                                item.notif && (

                                                    <NotifBadge title={item.notif} className='flex mt-1' />
                                                )
                                            }
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        }

                    </div>
                    <div className='pt-5'></div>
                    <OptionChatComp title={'pinned chat'} className={`bg-violet-500 `} rotate={allChat && 'rotate-180 flex pr-2  '} icon={faMessage} onClick={() => setAllChat(!allChat)} />

                    <div className={`chatList flex flex-col gap-1 mt-2 ${allChat ? 'hidden' : ''} duration-200`}>


                        {

                            profileData.map((item, i) => (
                                <NavLink to={`/${item.id}`} className={`mx-6 px-3 py-2 rounded-lg flex items-center justify-between `} activeClassName='active' key={i}>
                                    <div className="flex items-center">
                                        <div className='relative'>
                                            <div className='h-10 w-10' >
                                                <img src={item.avatar} className='rounded-full' alt={item.name} />
                                            </div>
                                            {
                                                item.active &&

                                                <NotifBadge className={'bg-green-500 right-0 bottom-[2px]'} />
                                            }

                                        </div>
                                        <div className="pl-2">
                                            <div className='h-5 font-bold'>{item.name}</div>
                                            <div className='chat-terbaru w-full h-5  overflow-hidden'>{item.chatTerbaru}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center relative">
                                        <p className='text-xs text-right'>19:00</p>
                                        <div>
                                            {
                                                item.notif && (

                                                    <NotifBadge title={item.notif} className='flex mt-1' />
                                                )
                                            }
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarComp