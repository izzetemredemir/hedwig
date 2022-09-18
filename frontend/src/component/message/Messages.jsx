import Message from "./Message"
import MessageField from "./MessageField"
import { useState } from "react"
import { startSession, getKey, initiateConnection, connect } from "../utils/web3/Hedwig"
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
    const seed = Math.floor(Math.random() * 100000)
    let sessionID=0;

    // Check session
    const checkSession = async () => {
        
    }

    // Start session
    const _startSession = async () => {
        await startSession();
    }
    // Initiate connection
    const _initiateConnection = async () => {
        getKey(sessionID, seed)
        initiateConnection(sessionID, seed)
    }
    // Connect
    const _connect = async () => {
        await connect(sessionID, seed);
        let key;
        localStorage.setItem(currentContact, key);
    }

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