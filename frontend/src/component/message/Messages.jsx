import Message from "./Message"
import MessageField from "./MessageField"

const messages = [
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'True!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'True!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:true
    },
    {
        message:'ETHBerlin is awesome!',
        isClient:false
    },
]

const Messages = () => {
  return (
    <div className="col-span-6 p-2 relative overflow-auto">
        {messages.map((message) => {
            return <Message isClient={message.isClient} message={message.message}/>
        })}
        <MessageField/>
    </div>
  )
}

export default Messages