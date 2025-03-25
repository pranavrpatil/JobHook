import {jobList} from '../Data/JobsData'
import JobCard from "../FindJobs/JobCard";

const RecommendJobs= ()=>{
    return <div className="text-xl font-semobold mb-5">
        <div className='text-2xl font-semibold mb-5'>Recommended Jobs</div>
        
        <div className="flex flex-col gap-5 flex-wrap">
           {jobList.map((jobs, index) => index<6 && <JobCard key={index} {...jobs}/>)}
        </div>
    </div>
}

export default RecommendJobs;