import { Badge, Tabs } from '@mantine/core';
import JobDesc from '../JobDesc/JobDesc';
import { talents } from '../Data/TalentData';
import TalentCard from '../FindTalent/TalentCard';

const PostedJobDesc = () => {
    return <div className='mt-5 w-3/4 px-5'>
        <div className="text-2xl font-semibold flex items-center">Software Engineer<Badge variant="light" color="bright-sun.4" ml="sm" size='sm'>Badge</Badge></div>

        <div className='font-medium text-mine-shaft-300 mb-5'>
            Delhi
        </div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="overview">
                <Tabs.List className=' mb-5 [&_button]:!text-lg font-semibold [&_button[data-active="true"]]:text-bright-sun-400 '>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" className='[&>div]:w-full'>
                    <JobDesc edit />
                </Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className='flex flex-wrap justify-center gap-8 mt-10'>
                        {
                            talents.map((talent, index) => <TalentCard key={index}{...talent} posted />)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className='flex flex-wrap justify-center gap-8 mt-10'>
                        {
                            talents.map((talent, index) => <TalentCard key={index}{...talent} invited />)
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}
export default PostedJobDesc;