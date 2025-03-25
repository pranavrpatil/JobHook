import {IconAnchor, IconBell, IconSettings} from "@tabler/icons-react";
import { Indicator } from '@mantine/core';
import NavLinks from "../Header/Navlinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () =>{
    const location = useLocation();

    return (location.pathname !="/signup" && location.pathname !="/login") ? <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-content-space justify-between
items-center px-6">
        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-8 w-8" stroke={2.5}/>
            <div className="text-3xl font-semibold">
                JobHook
            </div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center"> 
            <ProfileMenu/>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full"> 
            <Indicator color="bright-sun.4"  offset={6} size={8} processing>
                <IconBell stroke={1.5}/>
            </Indicator>
            </div>
        </div>
    </div>:<></>
}
export default Header;