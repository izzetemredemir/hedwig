
import { useState, useEffect } from 'react'

import {lensClient,getProfile,getProfiles,searchProfiles} from '../lensApi'

export default function Home() {
    const [profiles, setProfiles] = useState([])

  useEffect(() => {
    searchForProfile("izzetemredemir")
  }, []);


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
    <div>
     
            search profile
    
</div>
  )
}
