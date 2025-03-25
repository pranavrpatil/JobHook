import Sort from './Sort';
import JobCard from './JobCard';
import {jobList} from '../Data/JobsData'

const Jobs = ()=>{
    return (<div className='p-5'>
        <div className='flex justify-between'>
            <div className='text-2xl text-semibold'>Recommended Jobs</div>
            <Sort/>
        </div> 
        <div className='flex gap-5 flex-wrap justify-center mt-10'>
        {
            jobList.map((job,index) => <JobCard key={index}{...job}/>)
        }
        </div>
        
        
    </div>)
}

export default Jobs;