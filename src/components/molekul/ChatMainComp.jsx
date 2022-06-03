import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ChatKirim from '../atoms/ChatKirim'
import ChatMasuk from '../atoms/ChatMasuk'

const ChatMainComp = () => {
    return (
        <div className="mainChatPage  h-[80vh] 2xl:h-[87vh]  overflow-y-scroll py-3 px-6 flex flex-col  w-full">

            <ChatMasuk>
                Hello World
            </ChatMasuk>

            <ChatKirim >
                Hello !!!
            </ChatKirim>
            <ChatKirim >
                Lorem, ipsum dolor.
            </ChatKirim>

            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae harum et. Perspiciatis.
            </ChatMasuk>

            <ChatKirim >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aperiam, nam accusantium ab et nihil totam neque officiis libero dicta laborum repudiandae, rem possimus non quo fuga aliquam nisi voluptatum recusandae ea sapiente vel.
            </ChatKirim>

            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil saepe, optio laudantium debitis architecto ratione vero accusamus maxime tenetur ipsum modi non a earum perspiciatis consequuntur alias perferendis placeat.
            </ChatMasuk>
            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tempora quidem! Cumque, libero ab.
            </ChatMasuk>
            <ChatKirim >
                Lorem, ipsum dolor sit amet consectetur adipisicing.
            </ChatKirim>
            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae harum et. Perspiciatis.
            </ChatMasuk>

            <ChatKirim >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aperiam, nam accusantium ab et nihil totam neque officiis libero dicta laborum repudiandae, rem possimus non quo fuga aliquam nisi voluptatum recusandae ea sapiente vel.
            </ChatKirim>

            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil saepe, optio laudantium debitis architecto ratione vero accusamus maxime tenetur ipsum modi non a earum perspiciatis consequuntur alias perferendis placeat.
            </ChatMasuk>
            <ChatMasuk>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tempora quidem! Cumque, libero ab.
            </ChatMasuk>
            <ChatKirim >
                Lorem, ipsum dolor sit amet consectetur adipisicing.
            </ChatKirim>
        </div>
    )
}

export default ChatMainComp