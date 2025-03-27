import { IconBriefcase, IconMapPin, IconPencil, IconDeviceFloppy, IconPlus } from '@tabler/icons-react';
import { ActionIcon, Divider, Textarea, TagsInput } from '@mantine/core';
import ExpCard from '../Profile/ExpCard';
import CertiCard from '../Profile/CertiCard';
import { useState } from 'react';
import SelectInput from '../PostJobs/SelectInput';
import fields from '../Data/Profile';
import ExpInput from './ExpInput';
import CertiInput from './CertiInput';

const Profile = (props: any) => {
    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(props.about);
    const [skills, setSkills] = useState(props.skills);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);

    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }

    const handleAdd = () => {
        setAddExp(!addExp);
    }

    const handleCerti = () => {
        setAddCerti(!addCerti);
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

            {
                edit[0] ? <>
                    <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                    <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                        <SelectInput {...select[2]} />
                    </div></> : <>
                    <div className='text-xl flex items-center gap-1'><IconBriefcase className="h-5 w-5" /> {props.role} &bull;{props.company}</div>
                    <div className='flex gap-1 text-lg text-mine-shaft-300 items-center'>
                        <IconMapPin stroke={1.5} className='h-5 w-5' /> {props.location}
                    </div>
                </>

            }


        </div>
        <Divider my="xl" />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3 flex justify-between'>About <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={() => handleEdit(1)}>
                {edit[1] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
            </ActionIcon></div>

            {
                edit[1] ? <Textarea
                    className='[&_value]:p-10'
                    placeholder="Describe yourself"
                    autosize
                    value={about}
                    onChange={(event) => setAbout(event.currentTarget.value)}
                    minRows={4}
                /> : <div className='text-sm text-mine-shaft-300 text-justify mb-5'>{about}</div>
            }


            {/* <div>
                
            </div> */}
        </div>

        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />

        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={() => handleEdit(2)}>
                {edit[2] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
            </ActionIcon></div>
            <div className='flex flex-wrap gap-2'>
                {
                    skills.map((skill: any, index: any) =>
                        <div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1'>{skill}</div>)
                }
            </div>
            {
                edit[2] && <TagsInput
                    className='mt-5'
                    placeholder="Add skills"
                    splitChars={[',', ' ', '|']}
                    value={skills} onChange={setSkills}
                />
            }

        </div>

        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />

        <div className='px-3'>
            <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience
                <div className='flex gap-2 '>
                    <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={handleAdd}>
                        <IconPlus className='h-4/5 w-4/5 ' />
                    </ActionIcon>

                    <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={() => handleEdit(3)}>
                        {edit[3] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                </div>
            </div>
            {addExp && <ExpInput setEdit={setAddExp} add />}
            <div className='flex flex-col gap-10'>
                {
                    props.experience.map((experience: any, index: any) => < ExpCard key={index} {...experience} edit={edit[3]} />)
                }
            </div>

        </div>
        <Divider size="xs" color="mine-shaft.7" my="xl" mx={"xs"} />
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications
                <div className='flex gap-2 '>
                    <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={handleCerti}>
                        <IconPlus className='h-4/5 w-4/5 ' />
                    </ActionIcon>

                    <ActionIcon color='bright-sun.4' size="lg" variant="subtle" aria-label="Settings" onClick={() => handleEdit(4)}>
                        {edit[4] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                </div>
            </div>
            {addCerti && <CertiInput setEdit={setAddCerti}/>}
            <div className='flex flex-col gap-1'>
                {
                    props.certifications.map((certificate: any, index: any) => <CertiCard key={index} {...certificate} edit={edit[4]}/>)
                }
            </div>
        </div>
    </div>
}

export default Profile;