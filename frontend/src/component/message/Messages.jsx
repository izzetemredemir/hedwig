import Message from "./Message"
import MessageField from "./MessageField"
import { useState } from "react"
import { startSession, getKey, initiateConnection, sessions, addressToSessionIDs, connect } from "../utils/web3/Hedwig"
// import { ethers } from "hardhat"
import CryptoJS from "crypto-js";

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

const Messages = ({ }) => {
    const [messages, setMessages] = useState(_messages);
    const [connected, setConnected] = useState(false);
    const seed = Math.floor(Math.random() * 100000)

    const currentContact = '0x40af0341fBaE8b6f876eC0e5e0DfFe2Bb0A7763E'
    // Check session
    const checkSession = async () => {
        const sessionsA = await addressToSessionIDs(window.ethereum.selectedAddress);
        const sessionsB = await addressToSessionIDs(currentContact);
        for(let i=0; i<sessionsA; i++){
            for(let k=0; k<sessionsB; k++){
                if(sessionsA[i]===sessionsB[i]){
                    return sessionsA[i];
                }
            }
        }
        return null;
    }

    // Initiate connection
    const _initiateConnection = async (sessionID) => {
        const key = await getKey(sessionID, seed)
        await initiateConnection(sessionID, key)
    }

    const checkConnection = async (sessionID) => {
        const session = await sessions(sessionID);
        if(session.key1 > 0 && session.key2 > 0){
            return true;
        }
        return false;
    }

    // Connect
    const _connect = async (sessionID) => {
        const key = await connect(sessionID, seed);
        localStorage.setItem(currentContact, key);
        setConnected(true);
    }

    const firstUser = async () => {
        const sessionID = await startSession(currentContact);
        await _initiateConnection(sessionID);
        return sessionID
    }

    const secondUser = async (sessionID) => {
        await _initiateConnection(sessionID);
        return sessionID
    }

    // const initiate = async () => {
    //     let sessionID;
    //     const session = await checkSession();
    //     if(session == null) {
    //         sessionID = await firstUser();
    //     } else {
    //         sessionID = await secondUser();
    //     }
    //     const con = await checkConnection(sessionID);
    //     if(con){
    //         await _connect(sessionID);
    //     }
    // }

    const initiate = async () => {
        const con = await checkConnection(0);
}

    // after fetch activate the mapping 
    // messages.map((message) => {
    //     const key = localStorage.getItem(currentContact);
    //     var decrypted = CryptoJS.AES.decrypt(message.message, key);
    //     return {
    //         message: decrypted,
    //         isClient: message.isClient,
    //     }
    // })

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
            { connected ?
                <MessageField currentContact={currentContact}/>
                :(
                    <div onClick={async () => await initiate()}>
                        start session
                    </div>
                )
            }
        </div>
    )
}

export default Messages