import { Link } from "react-router-dom";
import { Divider,Button } from "@mantine/core";
import {IconArrowLeft} from '@tabler/icons-react';
import Profile from "../TalentProfile/Profile";
import {profile} from '../Data/TalentData';
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage= ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="xs"/>
        <Link to='/find-talent' className="mx-4 inline-block p-4">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        </Link>
        <div className="flex ">
            <div className="flex gap-5 mx-4">
                <Profile {...profile[0]}/> 
                <RecommendTalent/>
            </div>
            
        </div>
        
    </div>
}

export default TalentProfilePage;