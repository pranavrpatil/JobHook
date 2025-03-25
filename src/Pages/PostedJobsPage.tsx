import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PostedJob from "../PostedJobs/PostedJob";
import PostedJobDesc from "../PostedJobs/PostedJobDesc";

const PostedJobsPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">

        <div className="flex gap-5">
            <PostedJob/>
            <PostedJobDesc/>
        </div>
    </div>
}

export default PostedJobsPage;