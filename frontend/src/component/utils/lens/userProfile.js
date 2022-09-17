
import { useState, useEffect } from 'react'

import {lensClient,getProfile,getProfiles} from '../lensApi'

export default function Home() {
  const [userProfile, setUserProfile] = useState();


  useEffect(() => {
    fetchProfile("izzetemredemir.lens")
  }, [])


  async function fetchProfile(id) {
    try {
      const returnedProfile = await lensClient.query(getProfiles, { id }).toPromise();

      
      
      console.log(returnedProfile);

      const profileData = returnedProfile.data.profiles.items[0]

      console.log(profileData);
      setUserProfile(profileData)


    } catch (err) {
      console.log('error fetching profile...', err)
    }

}
  

  return (
    <div>
       <div> Name {userProfile && userProfile.name ?userProfile.name:<div>loading</div>}</div>
       <div> Bio {userProfile && userProfile.bio?userProfile.bio:<div>loading</div>}</div>
       <div> Wallet {userProfile && userProfile.ownedBy?userProfile.ownedBy:<div>loading</div>}</div>
       <div> Handle {userProfile && userProfile.handle?userProfile.handle:<div>loading</div>}</div>
       <div> totalFollowers {userProfile && userProfile.stats?userProfile.stats.totalFollowers:<div>loading</div>}</div>
       <div> totalFollowing {userProfile && userProfile.stats?userProfile.stats.totalFollowing:<div>loading</div>}</div>
       <div> totalPosts {userProfile && userProfile.stats?userProfile.stats.totalPosts:<div>loading</div>}</div>
       
       {
                userProfile && userProfile.picture? (
                  <img
                    alt= "pp"
                    src={userProfile.picture.original.url.includes("ipfs://")?"https://ipfs.io/ipfs"+userProfile.picture.original.url.split("ipfs:/")[1]:userProfile.picture.original.url}
                    width="52px"
                    height="52px"
                  />
                ) : <div>No PP</div>
              }

            
    
</div>
  )
}
