import React from "react";
import Hero from "./components/header";
import FirstHero from "./components/aboutus";
import Sechero from "./components/foodcategory";
import ThirdSec from "./components/whychooseus";
import ForthHero from "./components/anotherdish";
import FifthHero from "./components/chooseandpick";
import SixHero from "./components/meetourchief";
import SevenHero from "./components/Testimonials";
import EightHero from "./components/Restaurant Active Process";
import NineHero from "./components/blogpost";
import SanityChefData from "./components/sanitychief";
import SanityHomeData from "./components/sanityfood";
import SearchHome from "./(auth)/searchdish/searchbarproduct";


export default function Home() {
  return (
    <div>
      <SearchHome/>
<Hero/>
<SanityChefData/>
<SanityHomeData/>
<FirstHero/>
<Sechero/>
<ThirdSec/>
<ForthHero/>
<FifthHero/>
<SixHero/>
<SevenHero/>
<EightHero/>
<NineHero/>







    </div>
  );
}