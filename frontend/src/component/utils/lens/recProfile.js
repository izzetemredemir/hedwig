
import { useState, useEffect } from 'react'

import {lensClient,getRecommendProfiles } from '../../../lensApi";

export default function Home() {
  const [profiles, setProfiles] = useState([])


  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await lensClient.query(getRecommendProfiles).toPromise()
      console.log(response);
      
      setProfiles(response.data.recommendedProfiles);
    } catch (err) {
      console.log('error fetching recommended profiles: ', err)
    }
  }




  return (
    <div>
    
   
    <div>
      {
        profiles?
        profiles.map((profile, index) => (
          <a href={`/profile/${profile.id}`} key={index}>
            <a>
              {
                profile.picture ? (
                  <img
                    alt= "pp"
                    src={profile.picture.original.url.includes("ipfs://")?"https://ipfs.io/ipfs"+profile.picture.original.url.split("ipfs:/")[1]:profile.picture.original.url}
                    width="52px"
                    height="52px"
                  />
                ) : <div>No PP</div>
              }
                 <p>id: {profile.id}</p>
              <p>Handle: {profile.handle}</p>
              <p>Name: {profile.name}</p>
              <p>totalFollowers: {profile.stats.totalFollowers}</p>
              totalFollowers
              <p >{profile.publication?.metadata.content}</p>
            </a>
          </a>
        )):<div>loading</div>
      }
    </div>
</div>
  )
}
