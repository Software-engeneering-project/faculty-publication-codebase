
import Profilecard from './profilecard' 
import Recently_access_papers from './recently_access_papers';
import Savedpaper from './Savedpaper';

import '../css/profile.css'
import '../css/profilecard.css'
import '../css/recently_accessed.css'


function Profile() {
        return (

            <div className='profile-container'>

                <div className='profile-left'>  
                    <Profilecard />
                    <Recently_access_papers />
                </div>
                <div className='profile-right'>
                    <Savedpaper />
                </div>
               
            </div>

        )
} 

export default Profile;