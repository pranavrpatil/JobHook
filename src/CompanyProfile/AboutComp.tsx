import { companyData } from "../Data/Company";

const AboutComp = ()=>{
    const company : {[key:string]:any} = companyData;
    return <div className="flex flex-col gap-3">
        {
            Object.keys(company).map((key,index)=> key != "Name" &&<div key={index}>
                <div className="font-semibold text-xl mb-2">{key}</div>
                {key != "Website" && <div className="text-sm text-justify text-mine-shaft-300">{key!="Specialties"?company[key]:
                    company[key].map((item:any,index:any)=><span key={index} className="m-1">
                        &bull; {item}
                    </span>)}
                </div>}
                {key == "Website" && <a href={company[key]} target="_blank" className="text-sm text-bright-sun-400 cursor-pointer">{company[key]}</a>}
            </div>)
        }
    </div>
}

export default AboutComp;