import { Divider, TextInput, NumberInput, FileInput, Textarea, Button, Notification, rem, LoadingOverlay } from "@mantine/core";
import { IconFileCv, IconCheck } from '@tabler/icons-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const hadleSubmit = () => {
        setSubmit(!submit);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x == 0) navigate('/find-jobs');
        },1000)
    }
    return <> <div className="w-2/3 mx-auto">
        <LoadingOverlay
            className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
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
        </div>

        <Divider my='xl' />

        <div className="text-xl font-semibold mb-5">Submit Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview}? text-mine-shaft-300:""`}
                        label="Full Name"
                        placeholder="John Smith"
                        withAsterisk
                    />

                    <TextInput
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview}? text-mine-shaft-300:""`}
                        label="E-mail"
                        placeholder="example@gmail.com"
                        withAsterisk
                    />
                </div>

                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview}? text-mine-shaft-300:""`}
                        label="Mobile Number"
                        placeholder="999 999 9999"
                        min={0}
                        max={9999999999}
                        clampBehavior="strict"
                        withAsterisk
                        hideControls
                    />

                    <TextInput
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview}? text-mine-shaft-300:""`}
                        label="Links"
                        placeholder="Enter Url"
                    />
                </div>
            </div>

            <FileInput
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
                className={`${preview}? text-mine-shaft-300:""`}
                leftSection={<IconFileCv size={18} stroke={1.5} />}
                label="Attach your CV"
                placeholder="Your CV"
                leftSectionPointerEvents="none"
                withAsterisk
            />

            <Textarea
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
                className={`${preview}? text-mine-shaft-300:""`}
                placeholder="Something about yourself...!"
                label="Cover Letter"
                autosize
                minRows={2}
            />
            {
                !preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light">Preview</Button>
            }
            {
                preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Edit</Button>
                    <Button fullWidth onClick={hadleSubmit} color="bright-sun.4" variant="light">Submit</Button>
                </div>
            }
        </div>
    </div>
        <Notification
            icon={<IconCheck size={10} style={{ width: rem(20), height: rem(20) }} />}
            color="teal"
            title="Application Submitted Successfully...!" mt="md"
            withBorder withCloseButton={false}
            className={`text-sm !border-bright-sun-400 !fixed top-0 left-[36%] transition duration-300 ease-in-out z-[1000] ${submit? "translate-y-0":"-translate-y-20"}`} >
            Redirecting to Find Jobs in {sec} seconds....
        </Notification>
    </>
}

export default ApplyJobComp;