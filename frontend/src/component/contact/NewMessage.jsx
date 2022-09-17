const NewMessage = () => {
  return (
    <div className="flex flex-nowrap justify-center items-center p-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32px" height="32px">    <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z"/></svg>
        <p className="text-xl ml-2">New Message</p>
    </div>
  )
}

export default NewMessage