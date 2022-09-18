import Contact from "./Contact"
import NewConversation from "./NewConversation"
import { useState } from "react"
import { useEffect } from "react"

const lensProfiles = [
  {
    img: 'https://karasakalmt.dev/static/media/self.e517a33e8937d4fea0ae.png',
    handle: 'karasakalmt.lens',
    bio: 'a developer who hackshackshackshacks'
  },
  {
    img: 'https://karasakalmt.dev/static/media/self.e517a33e8937d4fea0ae.png',
    handle: 'karasakalmt.lens',
    bio: 'a developer who hacks'
  },
  {
    img: 'https://karasakalmt.dev/static/media/self.e517a33e8937d4fea0ae.png',
    handle: 'karasakalmt.lens',
    bio: 'a developer who hacks'
  },
  {
    img: 'https://karasakalmt.dev/static/media/self.e517a33e8937d4fea0ae.png',
    handle: 'karasakalmt.lens',
    bio: 'a developer who hacks'
  },
]

const Contacts = () => {
  const [profiles, setProfiles] = useState(lensProfiles);
  const [search, setSearch] = useState('');

  const handleSearchChange = async (newSearch) => {
    setSearch(newSearch);
  }

  useEffect(() => {
    // setProfiles(arr)
  }, [search])

  return (
    <div className="col-span-2 border-r-4 border-white border-dashed overflow-auto">
      <NewConversation handleSearch={handleSearchChange}/>
      {profiles.map( profile => {
        return <Contact img={profile.img} handle={profile.handle} bio={profile.bio} key={profile.handle}/>
      })}
    </div>
  )
}

export default Contacts