import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = ()=>{
    return <div>
        <div className="mt-20 pb-5 ">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 [&>span]:text-bright-sun-400 mb-3">What <span>Users </span>says about us?</div>
            <div className="text-lg mb-10 text-mine-shaft-300 text-center w-1/2 mx-auto">Effortlessly navigate through the process and land your dream job.</div>
        </div>

        <div className="flex justify-evenly">
            {
                testimonials.map((testimonial, index) => <div key={index} className="flex flex-col w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10 gap-3">
                <div className="flex items-center gap-2">
                    <Avatar className="!h-14 !w-14"src="avatar.png" alt="it's me" />
                
                <div>
                    <div className="text-lg text-mine-shaft-100 font-semibold">{testimonial.name}</div>
                    <div><Rating value={testimonial.rating} fractions={2} readOnly /></div>
                </div>
                </div>
                <div className="text-sm text-mine-shaft-300">{testimonial.testimonial}</div>
            </div>)
            }
            
              
        </div>
    </div>
}

export default Testimonials;