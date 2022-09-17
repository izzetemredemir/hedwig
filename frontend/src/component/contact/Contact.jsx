const Contact = ({ img, handle, bio, active }) => {
  return (
    <div className={active ? "border-t-4 border-white border-dashed p-7 flex items-center bg-zinc-900 hover:bg-zinc-700 cursor-pointer" : "border-t border-zinc-900 p-7 flex items-center hover:bg-zinc-700 cursor-pointer"}>
      <img src={img} alt={handle} style={{width:"45px", border:'0px', borderRadius:'50px'}}/>
      <div className="ml-3">
        <p className="font-semibold">{handle}</p>
        <p className="text-zinc-500">{bio.length < 30 ? bio : bio.slice(0,23) + "..." }</p>
      </div>
    </div>
  )
}

export default Contact