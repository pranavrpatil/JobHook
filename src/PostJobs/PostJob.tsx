import { fields } from '../Data/PostJob';
import TextEditor from './TextEditor';
import SelectInput from './SelectInput';
import { TagsInput } from '@mantine/core';
import { Button } from '@mantine/core';

const PostJob = ()=>{
    const select = fields; 
    return <div className="w-4/5 mx-auto ">
        <div className="text-2xl font-semibold mb-5">Post a job</div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]}/>
            </div>
            <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                <SelectInput {...select[2]}/>
                <SelectInput {...select[3]}/>
            </div>
            <div className='flex gap-10 mb-5 [&>*]:w-1/2'>
                <SelectInput {...select[4]}/>
                <SelectInput {...select[5]}/>
            </div>

            <TagsInput withAsterisk label="Skills" placeholder="Enter skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']}/>
            <div className='[&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:!bg-bright-sun-400/20'>
                <div className='text-sm font-medium'>Job Description</div>
                <TextEditor/>
            </div>
            
            <div className='flex gap-4'>
                <Button color="bright-sun.4" variant="light">Post</Button>
                <Button color="bright-sun.4" variant="outline">Draft</Button>
            </div>
            
        </div> 
    </div>
}

export default PostJob;