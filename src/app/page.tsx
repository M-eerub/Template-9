import React from "react";
import Hero from "../components/Hero";
import Food from "../components/Food";
import Choose from "../components/Choose";
import Meet from "../components/Meet";
import Testimonials from "../components/Testimonials";
import RestaurantActiveProcess from "../components/Restaurant Active Process";
import Blog from "../components/Blog";
import Whychoose from "../components/Whychoose";
import About from "../components/About";
import Another from "../components/Another";
import SanityChefData from "@/components/Sanitychef";
import SanityHomeData from "@/components/Sanityfood";
import SearchHome from "./(auth)/searchdish/searchbarproduct";



export default function Home() {
  return (
    <div>
      <Hero/>
      <SearchHome/>
<SanityChefData/>
<SanityHomeData/>
<About/>
<Food/>
<Whychoose/>
<Another/>
<Choose/>
<Meet/>
<Testimonials/>
<RestaurantActiveProcess/>
<Blog/>


    </div>
  );
}