import React from "react";
import Header from "./components/header";
import Aboutus from "./components/aboutus";
import Foodcategory from "./components/foodcategory";
import Whychooseus from "./components/whychooseus";
import Anotherdish from "./components/anotherdish";
import Chooseandpick from "./components/chooseandpick";
import Meetourchief from "./components/meetourchief";
import Testimonials from "./components/Testimonials";
import RestaurantActiveProcess from "./components/Restaurant Active Process";
import Blogpost from "./components/blogpost";
import SanityChefData from "./components/sanitychief";
import SanityHomeData from "./components/sanityfood";
import SearchHome from "./(auth)/searchdish/searchbarproduct";


export default function Home() {
  return (
    <div>
      
<Header/>
<SearchHome/>
<SanityChefData/>
<SanityHomeData/>
<Aboutus/>
<Foodcategory/>
<Whychooseus/>
<Anotherdish/>
<Chooseandpick/>
<Meetourchief/>
<Testimonials/>
<RestaurantActiveProcess/>
<Blogpost/>


    </div>
  );
}