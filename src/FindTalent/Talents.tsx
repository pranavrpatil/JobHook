import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = ()=>{
    return (<div className='p-5'>
        <div className='flex justify-between'>
            <div className='text-2xl text-semibold'>Talents</div>
            <Sort/>
        </div> 
        <div className='flex flex-wrap justify-center gap-8 mt-10'>
            {
                talents.map((talent,index)=> <TalentCard key={index}{...talent}/>)
            }
        </div>
        
        
    </div>)
}

export default Talents;