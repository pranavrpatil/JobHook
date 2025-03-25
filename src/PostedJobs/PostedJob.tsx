import { Tabs } from '@mantine/core';
import { activeJobs } from '../Data/PostedJob';
import PostedJobsCard from './PostedJobCard';

const PostJob = () => {
    return <div className="w-1/6 mt-5">
        <div className="text-2xl font-semibold mb-5">Jobs</div>
        <div>
            <Tabs autoContrast variant="pills" defaultValue="active">
                <Tabs.List className='[&_button[aria-selected="false"]]:bg-mine-shaft-900 font-medium'>
                    <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                    <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active">
                    <div className='flex gap-3 mt-5  flex-col'>
                        {
                            activeJobs.map((job,index)=><PostedJobsCard key={index}{...job}/>)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="draft">Second panel</Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default PostJob;