import Contact from "./Contact"
import NewConversation from "./NewConversation"
import { useState } from "react"
import { useEffect } from "react"
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

  // useEffect(() => {
  //   // setProfiles(arr)
  //   if(profiles.length>0){
  //     setProfiles(searchForProfile(search));
  //   }
  //   else{
  //     setProfiles(fetchProfiles(search));
      
  //   }
 
    
  // }, [search])


  async function fetchProfiles() {
    try {
      const response = await lensClient.query(getRecommendProfiles).toPromise()
      console.log(response);
      
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


      if(response.data.search.items ){

        console.log("response.data.search");
        //setProfiles(response.data.search.items); çalışmıyor
      }

      console.log(response.data.search.items);



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