import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">

        <div className="p-5">
            <JobHistory/>
        </div>
    </div>
}

export default JobHistoryPage;