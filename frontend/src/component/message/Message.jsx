const Message = ({ isClient, message }) => {
  return (
    <div className={isClient ?"w-full flex justify-end": "w-full flex"}>
        <div className={"bg-neutral-900 w-fit px-4 py-3 mt-2"}>
            {message}
        </div>
    </div>
  )
}

export default Message