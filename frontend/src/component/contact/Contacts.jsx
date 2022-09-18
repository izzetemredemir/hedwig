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
]

const Contacts = ({ handleUserChange }) => {
  const [profiles, setProfiles] = useState(lensProfiles);
  const [search, setSearch] = useState('');

  const handleSearchChange = async (newSearch) => {
    setSearch(newSearch);
  }

  const onUserChange = (wallet) => {
    console.log(wallet)
    handleUserChange(wallet);
  }

  useEffect( () => {
    console.log("buadsf");

   const getUsers = async () => {

    console.log("getUsers");
  
      let temdata = await  fetchProfiles()

      let tempProfiles  = temdata.map(x =>( {
        bio: x.bio?x.bio:"bio",
        handle: x.handle?x.handle:"handle",
        wallet: x.ownedBy,
 
        img: x.picture?(x.picture.original.url.includes("ipfs://")?"https://ipfs.io/ipfs"+x.picture.original.url.split("ipfs:/")[1]:x.picture.original.url):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
      }));


      if (tempProfiles.length > 0){     setProfiles(tempProfiles);}
 
    };

    const searchtUsers = async (handle) => {

  
      let temdata = await  searchForProfile(handle);

      let tempProfiles  = temdata.map(x =>( {
        bio: x.bio?x.bio:"bio",
        handle: x.handle?x.handle:"handle",
        wallet: x.ownedBy,
 
        img: x.picture?(x.picture.original.url.includes("ipfs://")?"https://ipfs.io/ipfs"+x.picture.original.url.split("ipfs:/")[1]:x.picture.original.url):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
      }));


      if (tempProfiles.length > 0){     setProfiles(tempProfiles);}
 
    };
  
    if(search){
      searchtUsers(search);
    }else{
      getUsers();

    } 
    return () => {

    };

    
   }, [search])


  async function fetchProfiles() {
    try {
      const response = await lensClient.query(getRecommendProfiles).toPromise()

      
      return(response.data.recommendedProfiles);
    } catch (err) {
      console.log('error fetching recommended profiles: ', err)
    }
  }


  async function searchForProfile(searchString) {
    try {
      const response = await lensClient.query(searchProfiles, {
        query: searchString, type: 'PROFILE'
      }).toPromise()

      return (response.data.search.items)

    } catch (err) {
      console.log('error searching profiles...', err)
    }
  }
  

  return (
    <div className="col-span-2 border-r-4 border-white border-dashed overflow-auto">
      <NewConversation handleSearch={handleSearchChange}/>
      {profiles.map( profile => {
        return <Contact img={profile.img} handle={profile.handle} bio={profile.bio} key={profile.handle} onClick={(e) => {
          onUserChange(e.target.wallet)
        }}/>
      })}
    </div>
  )
}

export default Contacts