import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const CompanyCard = (props: any) => {
    return <div className='bg-mine-shaft-900 rounded-xl p-2 '>
        <div className='flex justify-between items-center'>
            <div className='flex p-2 gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'>
                    <img className='h-7' src={`./Icons/${props.name}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.name}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.employees} Employees</div>
                </div>
            </div>
            <div><ActionIcon color='bright-sun.4' variant="subtle">
                <IconExternalLink/>
            </ActionIcon></div>
        </div>
    </div>

}
export default CompanyCard;