import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { Divider,RangeSlider, Input } from "@mantine/core";
import { useState } from 'react';
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar =()=>{
    const [value, setValue] = useState<[number, number]>([1, 80]);
    return (<div className="flex flex-col sm:flex-row px-5 py-8">
        <div className="flex items-center w-full sm:w-1/5 mb-4 sm:mb-0">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
            <Input variant="unstyled" placeholder="Talent Name" className="[&_input]:!placeholder-mine-shaft-200"/>
        </div>
        {       
            searchFields.map((item,index)=>{ 
                return <><div key={index} className="w-full sm:w-1/5 mb-4 sm:mb-0">
                <MultiInput title={item.title} icon ={item.icon} options ={item.options}/> 
            </div>
            <Divider mr='xs' size="xs" orientation="vertical" />
            </>
            })
        }
        <div className="w-full sm:w-1/5 [&_.mantine-Slider-label]:!translate-y-11">
            <div className="flex justify-between text-sm">
                <div>Salary</div>
                <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider size='xs'className="mt-2" color="bright-sun.4" value={value} onChange={setValue} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }} />
        </div>
         
    </div>)
}

export default SearchBar;