import { TextInput, Button } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import SelectInput from '../PostJobs/SelectInput';
import fields from '../Data/Profile';
import { useState } from 'react';

const CertiInput = (props: any) => {
    const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());

    return <div className='flex flex-col'>
        <div className='text-lg font-semibold mb-5 flex justify-between'>Add Certitificate</div>
        <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
            <TextInput
                label="Title"
                placeholder="Java Foundation"
            />
            <SelectInput {...select[1]} />
        </div>

        <div className='flex gap-10 mb-5 mt-5 [&>*]:w-1/2'>
            <MonthPickerInput
                label="Issue date"
                withAsterisk
                maxDate={new Date()}
                value={issueDate}
                onChange={setIssueDate}
            />
            <TextInput
                label="Certificate ID"
                placeholder="Issue ID"
            />
        </div>

        <div className='flex gap-5 mt-3'>
            <Button color="bright-sun.4" onClick={()=>{props.setEdit(false)}} variant="outline">Save</Button>
            <Button color="red.8" onClick={()=>{props.setEdit(false)}} variant="light">Cancle</Button>
        </div>
       
    </div>
}

export default CertiInput;