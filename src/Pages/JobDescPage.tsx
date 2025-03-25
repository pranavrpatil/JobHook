import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import {IconArrowLeft} from '@tabler/icons-react';
import JobDesc from "../JobDesc/JobDesc";
import RecommendJobs from "../JobDesc/RecommendedJobs";

const JobDescPage= ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Link to='/find-jobs' className="mx-4 inline-block p-4">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        </Link>
        <div className="flex justify-around">
            <JobDesc/>
            <RecommendJobs/>    
        </div>
        
    </div>
}

export default JobDescPage;