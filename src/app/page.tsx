import React from "react";
import Hero from "./Components/Hero";
import Food from "./Components/Food";
import Choose from "./Components/Choose";
import Meet from "./Components/Meet";
import Testimonials from "./Components/Testimonials";
import RestaurantActiveProcess from "./Components/Restaurant Active Process";
import Blog from "./Components/Blog";
import SanityChef from "./Components/Sanitychef";
import SearchHome from "./(auth)/searchdish/searchbarproduct";
import Whychoose from "./Components/Whychoose";
import About from "./Components/About";
import Another from "./Components/Another";
import Sanityfetchfood from "./Components/Sanityfood";



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