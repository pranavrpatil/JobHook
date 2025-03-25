import { similar } from "../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = ()=>{
    return <div className="text-xl font-semobold mb-5 w-1/4">
    <div className='text-2xl font-semibold mb-5'>Similar Companies</div>
    
    <div className="flex flex-col gap-5 flex-wrap">
       {similar.map((talent, index) =><CompanyCard key={index} {...talent}/>)}
    </div>

</div>
}
export default SimilarCompanies;