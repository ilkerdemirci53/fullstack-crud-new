"use client";
import Lottie from "lottie-react";
import animatonData from "../public/animate-next.json";

const AnimatedImage = () => {
  return (
    // Ana Componenti(page.js) client side yapmamak icin bu yontem kullanilmistir.
    //Ana Component(page.js) bir cok bilgi icerebilir. Bu yuzden client side yapmak SEO icin verimli degildir. Componentlere bolmek daha mantiklidir.
    <Lottie
      animationData={animatonData}
      loop={true}
      className="w-[300px] lg:w-[500px]"
    />
  );
};

export default AnimatedImage;
