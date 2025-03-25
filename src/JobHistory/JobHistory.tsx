import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from '../JobHistory/Card';

const JobHistory = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <div className="">
        <div className='text-2xl text-semibold mb-5'>Job History</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="applied">
                <Tabs.List className=' mb-5 [&_button]:!text-lg font-semibold [&_button[data-active="true"]]:text-bright-sun-400 '>
                    <Tabs.Tab value="applied">Applied</Tabs.Tab>
                    <Tabs.Tab value="saved">Saved</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="inprocess">Interviewing</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="applied">
                    <div className='flex gap-5 flex-wrap justify-center mt-10'>
                        {
                            jobList.map((job, index) => <Card key={index}{...job} applied />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="saved">
                <div className='flex gap-5 flex-wrap justify-center mt-10'>
                        {
                            jobList.map((job, index) => <Card key={index}{...job} saved /> )
                            
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                <div className='flex gap-5 flex-wrap justify-center mt-10'>
                        {
                            jobList.map((job, index) => <Card key={index}{...job} offered />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="inprocess">
                <div className='flex gap-5 flex-wrap justify-center mt-10'>
                        {
                            jobList.map((job, index) => <Card key={index}{...job} inprocess />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>

    </div>
}

export default JobHistory;