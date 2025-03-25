import { Link, useNavigate } from "react-router-dom";
import { Divider,Button } from "@mantine/core";
import {IconArrowLeft} from '@tabler/icons-react';
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import { useEffect } from "react";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";


const CompanyProfilePage= ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Button my="md" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        
        <div className="flex gap-5 mx-4 justify-between">
           <CompanyProfile/> 
           <SimilarCompanies/>
        </div>
    </div>
}

export default CompanyProfilePage;