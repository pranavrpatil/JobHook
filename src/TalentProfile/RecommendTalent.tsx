import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent= ()=>{
    return <div className="text-xl font-semobold mb-5">
        <div className='text-2xl font-semibold mb-5'>Recommended Talents</div>
        
        <div className="flex flex-col gap-5 flex-wrap">
           {talents.map((talent, index) =>index<4 && <TalentCard key={index} {...talent}/>)}
        </div>

    </div>
}

export default RecommendTalent;