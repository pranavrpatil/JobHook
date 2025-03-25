import { IconBookmark, IconAdjustments } from '@tabler/icons-react';
import { Button, Divider, ActionIcon } from '@mantine/core';
import { Link } from "react-router-dom";
import { card, desc, skills } from '../Data/JobDescData';
import DOMPurify from 'dompurify';
import { useEffect } from 'react';

const JobDesc = (props: any) => {
    const data = DOMPurify.sanitize(desc);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <div className="w-2/3 p-2">
        <div className='flex justify-between'>
            <div className='flex p-2 gap-2 items-center'>
                <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                    <img className='h-14' src={`./Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl'>Software Engineer</div>
                    <div className='text-lg text-mine-shaft-300'>Google &#x2022; 3 Days ago &#x2022; 48 Applicants</div>
                </div>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <Link to="/apply-job">
                    <Button color="bright-sun.4" size='sm' variant="light">{props.edit?"Edit":"Apply"}</Button>
                </Link>
                {props.edit?<Button color="red.5" size='sm' variant="outline">Delete</Button>:<IconBookmark className='text-bright-sun-400 cursor-pointer' />}
            </div>
        </div>

        <Divider my='xl' />
        <div className='flex justify-between'>
            {
                card.map((item: any, index: any) => <div key={index} className='flex flex-col items-center gap-1'>
                    <ActionIcon className='!h-12 !w-12' color='bright-sun.4' variant="light" radius="xl" aria-label="Settings">
                        <item.icon className='h-4/5 w-4/5' style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                    <div className='text-sm text-mine-shaft-300'>{item.name}</div>
                    <div className='font-semibold'>{item.value}</div>
                </div>)
            }
        </div>

        <Divider my='xl' />
        <div>
            <div className='text-xl font-semibold mb-5'>Required Skills</div>
            <div className='flex gap-2 flex-wrap'>
                {
                    skills.map((skill, index) => <div key={index}>
                        <ActionIcon className='!h-fit !w-fit !text-sm font-medium' color='bright-sun.4' variant="light" radius="xl" p="xs" aria-label="Settings">
                            {skill}
                        </ActionIcon>
                    </div>)
                }
            </div>
        </div>

        <Divider my='xl' />
        <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300  [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify
        [&_li]:marker:text-bright-sun-400 [&_li]:mb-1' dangerouslySetInnerHTML={{ __html: data }}>

        </div>
        <Divider my='xl' />
        <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold mb-5'>About Company</div>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                        <img className='h-8' src={`./Icons/Google.png`} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-medium text-lg'>Google</div>
                        <div className='text-lg text-mine-shaft-300'>10 K+ Employees</div>
                    </div>
                </div>

                <Link to="/company">
                    <Button color="bright-sun.4" variant="light">Company Page</Button>
                </Link>
            </div>
            <div className='text-xs text-mine-shaft-400 text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita voluptatum dolore ad quasi, voluptate, neque dolor ullam placeat iste sit odio perspiciatis iusto nobis, suscipit inventore dolores sed animi obcaecati facere aut. Maxime saepe quos vero ipsa pariatur minus. Beatae saepe ut corrupti voluptate!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ducimus velit ullam aspernatur, minus at totam impedit pariatur, voluptates rem porro doloribus ipsa sed atque, aliquid delectus mollitia facilis iure itaque sit vel. Placeat exercitationem magni impedit esse, voluptatum quasi.
            </div>
        </div>
    </div>
}

export default JobDesc;