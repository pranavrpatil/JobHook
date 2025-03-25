
const ExpCard = (props:any)=>{
    return <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <div className='flex p-2 gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'>
                    <img className='h-7' src={`./Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className='font-semibold'>{props.title}</div>
                    <div className='text-sm text-mine-shaft-300'>{props.company} &#x2022; {props.location}</div>
                </div>   
            </div>
            <div className='text-sm text-mine-shaft-300'>
                {props.startDate} - {props.endDate}
            </div>
        </div>
        
        
        <div className='text-sm mine-shaft-300 text-justify'>
            {props.description}
        </div>
    </div>
}

export default ExpCard;