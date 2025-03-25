import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = ()=>{
    return <div>
        <div className='flex gap-5 flex-wrap justify-center mt-10'>
        {
            jobList.map((job,index) => index<6 && <JobCard key={index}{...job}/>)
        }
        </div>
    </div>
}

export default CompanyJobs;