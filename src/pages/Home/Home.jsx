import { Fade } from "react-awesome-reveal";
import Banner from "./HomeElements/Banner/Banner";
import MealsByCategory from "./HomeElements/MealsByCategory/MealsByCategory";
import Membership from "./HomeElements/Membership/Membership";
import Review from "./HomeElements/Reviews/Review";
import Partnership from "./HomeElements/Partnership/Partnership";
import Subscribe from "./HomeElements/Subscribe/Subscribe";
import { Helmet } from "react-helmet-async";



export default function Home() {
  return (
    <>
       <Helmet>
        <title>DineEase | Home</title>
      </Helmet>
        <div>
            <Banner/> 
        </div>

        <div className=" my-10 md:my-14" >
           <Fade direction="up" triggerOnce="true">
           <h1 className="text-center text-2xl md:text-3xl font-bold text-[#4b5664] mb-6 " >Explore Our Delicious <span className="text-[#3F72AF]" >Meals</span></h1>
           </Fade>
            <MealsByCategory/>
        </div>

        <div>
            <Membership/>
        </div>

      

          {/* review section  ============================== */}
          <div className="my-32 overflow-hidden" >
            <Review/>
        </div>
        {/* review section  ============================== */}

        <div className="mb-16 mt-44" >
            <Partnership/>
        </div>
        <div className="mt-10  ">
            <Subscribe/>
        </div>
    </>
  )
}
