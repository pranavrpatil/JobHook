import { IconAnchor } from '@tabler/icons-react';
import SignUp from '../SignUpLogin/SignUp';
import Login from '../SignUpLogin/Login';
import { useLocation } from 'react-router-dom';

const SignUpPage = () => {
    const location = useLocation();
  return (
    <div className="h-screen bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div className={`w-full h-full flex [&>*]:shrink-0 transition-all duration-1000 ease-in-out ${location.pathname =="/signup"?"-translate-x-1/2 ":"translate-x-0"}` }>
        <Login/>
        <div className={`w-1/2 h-full flex flex-col items-center gap-5 justify-center ${location.pathname == "/signup"? "rounded-r-[200px]":"rounded-l-[200px]"} transition-all duration-1500 ease-in-out bg-mine-shaft-900`}>
          <div className="flex gap-1 items-center justify-center text-bright-sun-500">
            <IconAnchor className="sm:h-16 sm:w-16 h-8 w-8" stroke={3} />
            <div className="sm:text-7xl text-3xl font-semibold">
              JobHook
            </div>
          </div>
          <div className='text-sm sm:text-2xl text-mine-shaft-200 font-semibold'>Find the made for you</div>
        </div>
        <SignUp/>
      </div>
    </div>
  );
};

export default SignUpPage;
