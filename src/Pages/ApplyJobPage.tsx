import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import {IconArrowLeft} from '@tabler/icons-react'
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage= ()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
         <Link to='/jobs' className="mx-4 inline-block p-4">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        </Link>

        <ApplyJobComp/>
    </div>
}

export default ApplyJobPage;