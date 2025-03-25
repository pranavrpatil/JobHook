import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
import {profile} from '../Data/TalentData';

const ProfilePage = ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider mx="md" mb="xl" />
        <div className="flex ">
            <div className="flex gap-5 mx-4">
                <Profile {...profile[0]}/>
            </div>
            
        </div>
    </div>
}

export default ProfilePage;