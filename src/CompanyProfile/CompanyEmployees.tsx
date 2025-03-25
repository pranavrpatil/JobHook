import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/TalentData";

const CompanyEmployees = ()=>{
    return <div>
        <div className='flex flex-wrap justify-center gap-8 mt-10'>
            {
                talents.map((talent,index)=> <TalentCard key={index}{...talent}/>)
            }
        </div>
    </div>
}

export default CompanyEmployees;