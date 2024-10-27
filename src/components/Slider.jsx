import React from 'react';
import { Carousel } from 'antd';

const styles = {
  carousel: {
    border: 'none',
    boxShadow: 'none',
  },
};

const Slider = () => (
  <>
    <Carousel autoplay style={styles.carousel} className="p-0">
      <div>
        <img 
          className="h-[250px] sm:h-[350px] md:h-[550px] w-full md:object-cover object-contain" 
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=1920&q=100" 
          alt="Banner 1" 
        />
      </div>
      <div>
        <img 
          className="h-[250px] sm:h-[350px] md:h-[550px] w-full md:object-cover object-contain" 
          src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&w=1920&q=100" 
          alt="Banner 2" 
        />
      </div>
    </Carousel>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 mt-8 md:mt-16 w-[90%] mx-auto">
      <img 
        className="w-full h-[150px] sm:h-[200px] md:w-1/2 md:h-[250px] object-fill" 
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fgrid%2Fbanner-5.png&w=1920&q=100" 
        alt="Grid Banner 5" 
      />
      <img 
        className="w-full h-[150px] sm:h-[200px] md:w-1/2 md:h-[250px] object-fill" 
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fgrid%2Fbanner-4.png&w=1920&q=100" 
        alt="Grid Banner 4" 
      />
    </div>
    <br /><br /><br />
  </>
);

export default Slider;
