import React from "react";
import Hero from "./components/Hero";
import Food from "./components/Food";
import Choose from "./components/Choose";
import Meet from "./components/Meet";
import Testimonials from "./components/Testimonials";
import RestaurantActiveProcess from "./components/Restaurant Active Process";
import Blog from "./components/Blog";
import SanityChef from "./components/Sanitychef";
import SearchHome from "./(auth)/searchdish/searchbarproduct";
import Whychoose from "./components/Whychoose";
import About from "./components/About";
import Another from "./components/Another";
import Sanityfetchfood from "./components/Sanityfood";


export default function Home() {
  return (
    <div>
      
<Hero/>
<SearchHome/>
<SanityChef/>
<Sanityfetchfood/>
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