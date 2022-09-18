import Contact from "./Contact"
import NewConversation from "./NewConversation"
import { useState, useEffect } from "react"
import {lensClient,getRecommendProfiles,searchProfiles} from '../../lensApi'

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
    // console.log(await fetchProfiles())
    // if(profiles.length>4){
    //   //setProfiles(lensProfiles); 
    // }
    // else{
    //   console.log("buf");
    //   let tempProfiles = fetchProfiles().map(x =>( {
    //       bio: x.bio,
    //       handle: x.handle,
    //       wallet: x.ownedBy,
  
    //       img: x.picture?(x.picture.original.url.includes("ipfs://")?"https://ipfs.io/ipfs"+x.picture.original.url.split("ipfs:/")[1]:x.picture.original.url):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    //     })
    //   );
    //   console.log("buf232");
    //   console.log("tempProfiles",tempProfiles);
    //    setProfiles(tempProfiles); 
    // }
  }, [search])


  async function fetchProfiles() {
    try {
      const response = await lensClient.query(getRecommendProfiles).toPromise()
      setProfiles(response.data.recommendedProfiles);
    } catch (err) {
      console.log('error fetching recommended profiles: ', err)
    }
  }


  async function searchForProfile(searchString) {
    try {
      const response = await lensClient.query(searchProfiles, {
        query: searchString, type: 'PROFILE'
      }).toPromise()
      console.log(response.data.search.items);
      return null;
    } catch (err) {
      console.log('error searching profiles...', err)
    }
  }
  

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