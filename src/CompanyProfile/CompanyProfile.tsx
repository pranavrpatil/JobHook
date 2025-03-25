import { Button, Divider, Avatar, Tabs } from '@mantine/core';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';
import AboutComp from './AboutComp';
import CompanyJobs from './CompanyJobs';
import CompanyEmployees from './CompanyEmployees';

const CompanyProfile = () => {
    return <div className='w-3/4'>
        <div className="relative">
            <img className="rounded-t-2xl" src="./Profile/banner.jpg" alt="" />
            <img className="rounded-full bg-mine-shaft-950 h- w-36 border-mine-shaft-950 border-8 absolute -bottom-1/4 left-5 p-2" src="./Google.png" alt="" />
        </div>
        <div className="px-3 mt-12">
            <div className=' flex justify-between'>
                <div className='text-3xl font-semibold flex justify-between'>
                    Google
                </div>

                <Avatar.Group >
                    <Avatar src="avatar.png" />
                    <Avatar src="image.png" />
                    <Avatar src="image1.png" />
                    <Avatar>+10K</Avatar>
                </Avatar.Group>
            </div>

            <div className='flex gap-1 text-lg text-mine-shaft-300 items-center'>
                <IconMapPin stroke={1.5} className='h-5 w-5' /> Delhi
            </div>
        </div>
        <Divider my="xl" />
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
                <Tabs.List className=' mb-5 [&_button]:!text-lg font-semibold [&_button[data-active="true"]]:text-bright-sun-400 '>
                    <Tabs.Tab value="about">About Us</Tabs.Tab>
                    <Tabs.Tab value="jobs">Available Jobs</Tabs.Tab>
                    <Tabs.Tab value="employees">Employees</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
                <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default CompanyProfile;