import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return location.pathname !="/signup" ? (
        <div className="pt-6 pb-6 px-4 sm:px-10 sm:pt-20 sm:pb-10 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-around bg-mine-shaft-950 font-['poppins']">

            <div className="w-full sm:w-1/4 flex flex-col gap-4 p-4">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-6 w-6" stroke={2.5} />
                    <div className="text-xl font-semibold">
                        JobHook
                    </div>
                </div>

                <div className="text-sm text-mine-shaft-300">
                    Job portal with user profiles, skills updates, certifications, work experience and admin job posting
                </div>
                <div className="flex gap-2 sm:gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
                    <div><IconBrandFacebook /></div>
                    <div><IconBrandInstagram /></div>
                    <div><IconBrandX /></div>
                </div>
            </div>

            {footerLinks.map((item, index) => (
                <div key={index} className="w-full sm:w-1/4 px-4 py-2 sm:p-4">
                    <div className="text-lg font-semibold mb-1 sm:mb-4 text-bright-sun-400">{item.title}</div>
                    {item.link.map((link, index) => (
                        <div
                            key={index}
                            className="text-mine-shaft-300 mb-0 sm:mb-1 text-sm hover:text-bright-sun-400 cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out"
                        >
                            {link}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    ):<></>
}

export default Footer;
