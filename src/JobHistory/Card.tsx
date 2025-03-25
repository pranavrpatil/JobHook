import {IconBookmark,IconClockHour3,IconBookmarkFilled, IconCalendarMonth} from '@tabler/icons-react';
import { Text,Divider,Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const JobCard =(props:any)=>{
    return (<Link to="/jobs" className='flex flex-col gap-3 rounded-xl bg-mine-shaft-900 p-4 w-80 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
        <div className='flex justify-between items-center'>
            <div className='flex p-2 gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'>
                    <img className='h-7' src={`./Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.jobTitle}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            {
                props.saved? <div><IconBookmarkFilled className='text-bright-sun-400 cursor-pointer'/></div>:<div><IconBookmark className='text-mine-shaft-200 cursor-pointer'/></div>
            }
            
        </div>

        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>

        <Text className='!text-xs !text-mine-shaft-300 text-justify' lineClamp={2}>
            {props.description}
        </Text>
        <Divider size="xs" color='mine-shaft.7'/>
        
        <div className='flex justify-between items-center'>
            <div className='font-semibold text-mine-shaft-200'>
                &#8377; {props.package} LPA
            </div>
            <div className='flex gap-1 text-xs text-mine-shaft-400 items-center'>
               <IconClockHour3 stroke={1.5} className='h-5 w-5'/> {(props.applied || props.inprocess) ? "Applied":props.offered?"Interviewed":"Posted"} {props.posted} days ago
            </div>
        </div>
        {
           ( props.offered || props.inprocess) && <Divider size="xs" color='mine-shaft.7'/> 
        }

        {
            props.offered && <div className='flex gap-2'>
                <Button color="bright-sun.4" variant="light" fullWidth>Accept</Button>
                <Button color="bright-sun.4" variant="outline" fullWidth>Reject</Button>
            </div>
        }
        {
            props.inprocess && <div className='flex gap-1 text-xs items-center'>
                <IconCalendarMonth className='text-bright-sun-400 h-5 w-5' stroke={1.5} />Sun, 25 August &bull; <span className='text-mine-shaft-400'>10:00 AM</span> 
            </div> 
        }
    </Link>)
}
export default JobCard;