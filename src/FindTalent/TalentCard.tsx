import { Link } from 'react-router-dom';
import { IconMapPin, IconHeart, IconCalendarMonth, } from '@tabler/icons-react';
import { Text, Divider, Avatar, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useState, useRef } from 'react';

const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className='flex flex-col gap-3 rounded-xl bg-mine-shaft-900 p-4 w-96 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>

            <div className='flex justify-between items-center'>
                <div className='flex p-2 gap-2 items-center'>
                    <div className='p-2 bg-mine-shaft-800 rounded-full'>
                        <Avatar size='lg' src={`${props.image}.png`} alt={props.name} />
                    </div>
                    <div>
                        <div className='font-semibold text-lg'>{props.name}</div>
                        <div className='text-sm text-mine-shaft-300'>{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <div>
                    <IconHeart className='text-mine-shaft-200 cursor-pointer' />
                </div>
            </div>


            <div className='flex flex-wrap gap-2'>
                {props.topSkills?.map((item: any, index: any) => (
                    <div key={index} className='py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs'>
                        {item}
                    </div>
                ))}
            </div>


            <Text className='!text-xs !text-mine-shaft-300 text-justify' lineClamp={2}>
                {props.about}
            </Text>
            <Divider size="xs" color='mine-shaft.7' />

            {
                props.invited ? <div className='flex gap-1 text-mine-shaft-200 text-sm items-center'><IconCalendarMonth stroke={1.5} />Interview : August 24, 2017 10:00 AM</div> : <div className='flex justify-between items-center'>
                    <div className='font-semibold text-mine-shaft-200'>
                        {props.expectedCtc}
                    </div>
                    <div className='flex gap-1 text-xs text-mine-shaft-400 items-center'>
                        <IconMapPin stroke={1.5} className='h-5 w-5' /> {props.location}
                    </div>
                </div>
            }
    
            <Divider size="xs" color='mine-shaft.7' />

            <div className="flex gap-2">
                {
                    !props.invited && <>
                        <Link to='/talent-profile' className="w-1/2">
                            <Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>
                        </Link>
                        <div className="w-1/2">
                            {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} color="bright-sun.4" variant="light" fullWidth>Schedule</Button> : <Button color="bright-sun.4" variant="light" fullWidth>Message</Button>}
                        </div>
                    </>
                }

                {
                    props.invited && <>
                        <div className="w-full"><Button  color="bright-sun.4" variant="outline" fullWidth>Accept</Button></div>
                        <div className="w-full"><Button  color="bright-sun.4" variant="light" fullWidth>Reject</Button></div>
                    </>
                }

            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className='flex flex-col gap-4'>
                    <DateInput
                        minDate={new Date()}
                        value={value}
                        onChange={setValue}
                        label="Date"
                        placeholder="Enter Date"
                    />

                    <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />

                    <Button color="bright-sun.4" variant="light" fullWidth>Schedule</Button>
                </div>

            </Modal>
        </div>
    );
};

export default TalentCard;
