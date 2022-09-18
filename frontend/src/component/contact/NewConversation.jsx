const NewConversation = ({ handleSearch }) => {
  const handleChange = async (e) => {
    handleSearch(e.target.value);
  }

  return (
    <>
      <div className="flex flex-nowrap justify-center items-center p-5 hover:bg-gray-700">
        <input class="bg-black border border-gray-200 text-white block p-2.5 w-full" placeholder="Search..." onChange={(e) => handleChange(e)}/>
      </div>
    </>
  )
}

export default NewConversation