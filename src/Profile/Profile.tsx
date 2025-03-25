import { IconBriefcase, IconMapPin, IconPencil, IconDeviceFloppy } from '@tabler/icons-react';
import { ActionIcon, Divider } from '@mantine/core';
import ExpCard from '../TalentProfile/ExpCard';
import CertiCard from '../TalentProfile/CertiCard';
import { useState } from 'react';
import SelectInput from '../PostJobs/SelectInput';
import fields from '../Data/Profile';

const Profile = (props: any) => {
    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);

    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="./Profile/banner.jpg" alt="" />
            <img className="rounded-full h-48 w-48 border-mine-shaft-950 border-8 absolute -bottom-1/3 left-3" src="./avatar.png" alt="" />
        </div>
        <div className="px-3 mt-20">
            <div className='text-3xl font-semibold flex justify-between'>
                {props.name}
                <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={() => handleEdit(0)}>
                    {edit[0] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                </ActionIcon>
            </div>

            <div className='text-xl flex items-center gap-1'><IconBriefcase className="h-5 w-5" /> {props.role} &bull;{props.company}</div>
            <div className='flex gap-1 text-xs text-mine-shaft-300 items-center'>
                <IconMapPin stroke={1.5} className='h-5 w-5' /> {props.location}
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                    <SelectInput {...select[2]} />
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3'>About</div>
            <div className='text-sm text-mine-shaft-300 text-justify'>{props.about}</div>
        </div>
        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3'>Skills</div>
            <div className='flex flex-wrap gap-2'>
                {
                    props.skills.map((skill: any, index: any) =>
                        <div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1'>{skill}</div>)
                }
            </div>
        </div>
        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-5'>Experience</div>
            <div className='flex flex-col gap-1'>
                {
                    props.experience.map((experience: any, index: any) => < ExpCard key={index} {...experience} />)
                }
            </div>
        </div>
        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-5'>Certifications</div>
            <div className='flex flex-col gap-1'>
                {
                    props.certifications.map((certificate: any, index: any) => <CertiCard key={index} {...certificate} />)
                }
            </div>
        </div>
    </div>
}

export default Profile;