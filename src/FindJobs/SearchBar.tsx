import MultiInput from "./MultiInput";
import {dropdownData} from "../Data/JobsData"
import { Divider,RangeSlider } from "@mantine/core";
import { useState } from 'react';

const SearchBar =()=>{
    const [value, setValue] = useState<[number, number]>([1, 80]);
    return (<div className="flex flex-col sm:flex-row sm:space-x-4 px-5 py-8">
        {   
            dropdownData.map((item,index)=><><div key={index} className="w-full sm:w-1/5 mb-4 sm:mb-0">
                <MultiInput {...item}/> 
            </div>
            <Divider mr='xs' size="xs" orientation="vertical" />
            </>)
        }
        <div className="w-full sm:w-1/5 mb-4 sm:mb-0 [&_.mantine-Slider-label]:!translate-y-11">
            <div className="flex justify-between text-sm">
                <div>Salary</div>
                <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider size='xs' className="mt-2" color="bright-sun.4" value={value} onChange={setValue} labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }} />
        </div>
        
        
    </div>)
}

export default SearchBar;