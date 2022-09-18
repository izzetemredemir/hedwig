import Message from "./Message"
import MessageField from "./MessageField"
import { useState } from "react"
const _messages = [
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'True!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'True!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:true
    // },
    // {
    //     message:'ETHBerlin is awesome!',
    //     isClient:false
    // },
]

const Messages = ({currentContact}) => {
    const[messages, setMessages] = useState(_messages)

    // Start session

    // Initiate connection

    // Connect

    //update when new message comes
    useState(() => {
        // take messages
    },[currentContact])

    return (
        <div className="col-span-6 p-2 relative overflow-auto">
            {
                messages.map((message) => {
                    return <Message isClient={message.isClient} message={message.message}/>
                })
            }
            {_messages.length > 0?
                <MessageField/>
                :(
                    <div>connect</div>
                )
            }
        </div>
    )
}

export default Messages